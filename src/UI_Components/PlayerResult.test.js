import React from 'react';
import { shallow } from 'enzyme';
import { PlayerResult } from './';

describe('PlayerResult component', () => {
    const props = {textPlayer: "Player (X)", score: 1, isWon: false}
    
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<PlayerResult {...props}/>);
    })

    it('component renders correctly', () => {
        expect(wrapper).not.toBeNull();
    })

    it('check to set correctly text of player', () => {
        expect(wrapper.find('.player').text()).toEqual("Player (X)")
    })

    it('check to set correctly score of player', () => {
        expect(wrapper.find('.score').text()).toEqual("1")
    })

    it('check if class applied once set won value ', () => {
        wrapper.setProps({textPlayer: "Player (X)", score: 1, isWon: true});
        expect(wrapper.find('.player-won')).toHaveLength(1);
    })
    
})