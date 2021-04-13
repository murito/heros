import { mount } from 'enzyme';
import  '@testing-library/jest-dom';
import { MemoryRouter, Router } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { Navbar } from '../../components/ui/Navbar';
import { types } from '../../types/types';

describe('Tests on <Nabvar />', () => {
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        listen: jest.fn(),
        createHref: jest.fn(),
        location: {},
    };

    const contextValue = {
        user: {
            logged: true,
            name: 'Peter'
        },
        dispatch: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                <Router history={ historyMock }>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach( () => {
        jest.clearAllMocks();
    });

    test('should be shown itself in the right way', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe( 'Peter' );
    })

    test('should call the logout and use the history', () => {
        wrapper.find('button').simulate('click');

        expect( contextValue.dispatch ).toHaveBeenCalledWith({ type: types.logout });
        expect( historyMock.replace ).toHaveBeenCalledWith('/login');
    })
    
    
})
