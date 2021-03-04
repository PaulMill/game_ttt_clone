import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './';

describe('Button component', () => {
    const props = { text: "RESET", clicked: jest.fn(), isActive: false, color: "#ccc" }
    
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Button {...props}/>);
    })

    it('component renders correctly', () => {
        expect(wrapper).not.toBeNull();
    })

    it('check if class applied once set isActive ', () => {
        wrapper.setProps({ text: "RESET", clicked: jest.fn(), isActive: true, color: "#ccc" });
        expect(wrapper.find('.btn-active')).toHaveLength(1);
    })

    it('check call clicked function on click on button', () => {
        wrapper.simulate('click');
        expect(props.clicked).toBeCalled();
    })

    it('check to set correctly text on button', () => {
        expect(wrapper.find('.btn').text()).toEqual("RESET")
    })

})