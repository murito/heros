import { shallow, mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';

describe('Tests on <AppRouter />', () => {
    let contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false,
        }
    } 

    
    test('should show the login if the user is not logged', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );
        expect( wrapper ).toMatchSnapshot();
    });

    test('should show the Marvel component if the user is logged', () => {
        contextValue = {
            ...contextValue,
            user: {
                logged: true
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper.find('.navbar').exists() ).toBeTruthy();
    })
    
    
})
