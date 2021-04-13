import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types";

describe('Tests on authReducer', () => {
    test('should return the default state', () => {
        const state = authReducer({ logged: false }, { type: ''});
        expect( state ).toEqual({ logged: false });
    })

    test('should make the login and set the user name', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Francisco'
            }
        }

        const state = authReducer({ logged: false }, action);
        expect( state ).toEqual({ logged: true, name: 'Francisco' });
    })

    test('should drop the user name and set logged to false', () => {
        const state = authReducer({ logged: true, name: 'Francisco' }, { type: types.logout});
        expect( state ).toEqual({ logged: false });
    })
        
})
