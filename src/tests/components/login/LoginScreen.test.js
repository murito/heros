import { mount } from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe('Tests on <LoginScreen />', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged: false
        }
    }

    const historyMock = {
        replace: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <LoginScreen history={ historyMock }/>
        </AuthContext.Provider>
    );

    test('should be shown itself in the right way', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should make a call to dispath and make the navigation', () => {
        wrapper.find('button').simulate('click');

        expect( contextValue.dispatch ).toHaveBeenCalledWith({ 
            type: types.login,
            payload: {
                name: 'Francisco Alcala'
            }
        });
        expect( historyMock.replace ).toHaveBeenCalled();
    })
    
})
