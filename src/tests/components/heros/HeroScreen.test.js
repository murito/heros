import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { HeroScreen } from '../../../components/heros/HeroScreen';

describe('Tests on <HeroScreen />', () => {
    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    };

    test('should show the redirect component if there  are no params on the URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero'] }>
                <HeroScreen history={ historyMock }/>
            </MemoryRouter>
        );

        expect( wrapper.find('Redirect').exists() ).toBeTruthy()
    })

    test('should show a hero if the param exists', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/dc-batman'] }>
                <Route path='/hero/:heroeId' component={ HeroScreen }/>
            </MemoryRouter>
        );

        expect( wrapper.find('.row').exists() ).toBeTruthy();
    })
    
    test('should go back on return button is pressed', () => {
        const historyMock = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/dc-batman'] }>
                <Route 
                    path='/hero/:heroeId' 
                    component={ () => <HeroScreen history={ historyMock }/>}
                />
            </MemoryRouter>
        );

        wrapper.find('.header').simulate('click');
        expect( historyMock.push ).toHaveBeenCalledWith('/');
        expect( historyMock.goBack ).not.toHaveBeenCalled();
    })

    test('should go Back if the history have more than 2 routes on press the goback div', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/dc-batman'] }>
                <Route 
                    path='/hero/:heroeId' 
                    component={ () => <HeroScreen history={ historyMock }/>}
                />
            </MemoryRouter>
        );

        wrapper.find('.header').simulate('click');
        expect( historyMock.push ).not.toHaveBeenCalled();
        expect( historyMock.goBack ).toHaveBeenCalled();
    });

    test('should redirect if the hero id is not a valid heroId', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/dc-batman-bad-id'] }>
                <Route 
                    path='/hero/:heroeId' 
                    component={ () => <HeroScreen history={ historyMock }/>}
                />
            </MemoryRouter>
        );

        expect( wrapper.text() ).toBe('')
    })
    
    
    
    
})
