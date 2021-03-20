import React from 'react';
import { mount } from 'enzyme';
import { GameControlsWrapper } from './';
import { WINNING_PLAYER as initScore } from '../utils';

describe('GameControlsWrapper component', () => {
    const props = { score: initScore, setScore: jest.fn(), setNewRound: jest.fn(), roundEnds: false }
    const mockNewScore = {
        X: { score: 0, isWon: false },
        T: { score: 2, isWon: false },
        O: { score: 1, isWon: false }
    }
    
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<GameControlsWrapper {...props}/>);
    })

    it('component renders correctly', () => {
        expect(wrapper).not.toBeNull();
    })

    it('check reset button clicked and call functions', () => {
        wrapper.find('.btn').at(0).simulate('click')
        expect(props.setScore).toBeCalled();
        expect(props.setNewRound).toBeCalled();
    })

    it('check newRound button clicked and call functions', () => {
        wrapper.find('.btn').at(1).simulate('click')
        expect(props.setNewRound).toBeCalled();
    })

    it('check correctly set PlayerResults values from props', () => {
        wrapper.setProps({...props, score: mockNewScore})
        expect(wrapper.find('.score').at(0).text()).toBe("0");
        expect(wrapper.find('.score').at(1).text()).toBe("2");
        expect(wrapper.find('.score').at(2).text()).toBe("1");
    })

})