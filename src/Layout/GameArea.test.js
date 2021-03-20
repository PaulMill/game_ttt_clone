import React from 'react';
import { shallow } from 'enzyme';
import { GameArea, GameWrapper, GameControlsWrapper } from './';

describe('GameArea component', () => {
    let gameAreaWrapper;

    beforeAll(() => {
        gameAreaWrapper = shallow(<GameArea />);
    });

    it('Should render GameWrapper component', () => {
        const gameWrapperList = gameAreaWrapper.find(GameWrapper);
        expect(gameWrapperList).toBeTruthy();
    });

    it('Should render GameControlsWrapper component', () => {
        const gameControlList = gameAreaWrapper.find(GameControlsWrapper);
        expect(gameControlList).toBeTruthy();
    });
});