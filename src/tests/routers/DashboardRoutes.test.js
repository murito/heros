import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes'

describe('Tests on <DashboardRoutes />', () => {
    const contextValue = {
        user: {
            logged: true,
            name: 'Juanito'
        },
        dispatch: jest.fn()
    };

    test('should be shown itself in the right way', () => {

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );
    
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe( 'Juanito' );
    })
})
