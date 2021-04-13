import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Tests on <SearchScreen />', () => {
    const historyMock = {
        push: jest.fn()
    };

    const wrapper = mount(
        <MemoryRouter initialEntries={ ['/search'] }>
            <Route path="/search" component={ SearchScreen }/>
        </MemoryRouter>
    );

    test('should be shown itself with the default values', () => {    
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert-info').text().trim() ).toBe( 'No results here!' );
    });
    
    test('should show Batman and the input with the queryString', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search?q=batman'] }>
                <Route path="/search" component={ SearchScreen }/>
            </MemoryRouter>
        );

        expect( wrapper.find('h4').at(1).text().trim() ).toBe(`1 results for "batman"`);
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('should call the push on the history object', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search'] }>
                <Route 
                    path="/search" 
                    component={ () => <SearchScreen history={ historyMock }/> }/>
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', {
            target: {
                name: 'search',
                value: 'batman'
            }
        });
        
        wrapper.find('form').prop('onSubmit')({ preventDefault(){} });

        expect( historyMock.push ).toHaveBeenCalledWith('?q=batman');
    })
    
})
