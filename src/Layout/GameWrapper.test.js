import React from 'react';
import { shallow, mount } from 'enzyme';
import { GameWrapper } from './';
import { Box } from '../UI_Components';
import { WINNING_PLAYER as initScore } from '../utils';

describe('GameWrapper component', () => {
    const props = { score: initScore, setScore: jest.fn(), resetGrid: false, setResetGrid: jest.fn(), setRoundEnds: jest.fn() }
    const winGrid = [
        {id: 0, selected: true, selection: "X", isWinning: true},
        {id: 1, selected: true, selection: "X", isWinning: true},
        {id: 2, selected: true, selection: "X", isWinning: true},
        {id: 3, selected: true, selection: "O", isWinning: false},
        {id: 4, selected: true, selection: "O", isWinning: false},
        {id: 5, selected: false, selection: "", isWinning: false},
        {id: 6, selected: false, selection: "", isWinning: false},
        {id: 7, selected: false, selection: "", isWinning: false},
        {id: 8, selected: false, selection: "", isWinning: false},
    ];
    
    let wrapper;
    let boxesList

    beforeEach(() => {
        wrapper = mount(<GameWrapper {...props}/>);
        boxesList = wrapper.find(Box);
    })

    it('component renders correctly', () => {
        expect(wrapper).not.toBeNull();
    })

    it('set by default 9 empty boxes', () => {
        expect(boxesList).toHaveLength(9);
        expect(boxesList.map(el => el.text())).toEqual(["","","","","","","","",""]);
    })

    it('set X and O on every next click', () => {
        boxesList.at(0).simulate('click');
        boxesList.at(1).simulate('click');
        boxesList.at(2).simulate('click');
        boxesList.at(3).simulate('click');
        expect(boxesList.map(b => b.text())).toEqual(["X","O","X","O","","","","",""]);
    })

    it('double click on the same box', () => {
        boxesList.first().simulate('click');
        boxesList.first().simulate('click');
        expect(boxesList.first().text()).toEqual('X');
    })

    it('check winning numbers', () => {
        boxesList.at(0).simulate('click'); // X
        boxesList.at(3).simulate('click'); // O
        boxesList.at(1).simulate('click'); // X
        boxesList.at(4).simulate('click'); // O
        boxesList.at(2).simulate('click'); // X

        expect(wrapper.find(Box).map(b => b.props().boxElement)).toEqual(winGrid);
    })
})