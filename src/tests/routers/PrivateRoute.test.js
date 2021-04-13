import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoute } from '../../routers/PrivateRoute';

describe('Tests on <PrivateRoute />', () => {
    const props = {
        location: {
            pathname: '/marvel',
            search: ''
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('should show the component if the user is logged and store the data on localstorage', () => {
        const wrapper = mount(
            <MemoryRouter> {/* <- MemoryRouter es un componente para probar rutas o links */}
                <PrivateRoute 
                    isAuthenticated={ true }
                    {...props}
                    component={ () => <span>Listo!</span> }
                />
            </MemoryRouter>
        );

        expect( wrapper.find('span').exists() ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel');
    });

    test('should not render the component if the user is not logged ', () => {
        const wrapper = mount(
            <MemoryRouter> {/* <- MemoryRouter es un componente para probar rutas o links */}
                <PrivateRoute 
                    isAuthenticated={ false }
                    {...props}
                    component={ () => <span>Listo!</span> }
                />
            </MemoryRouter>
        );

        expect( wrapper.find('span').exists() ).toBeFalsy();
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel');
    });
})
