import React from 'react';
import { shallow } from 'enzyme';

import CardHeader from './CardHeader';
import { Card } from './Card';
import CardBody from './CardBody';

describe('<Card />', () => {
    let props;
    let wrapper;

    beforeEach(() => {
        props = {
            viewCheck: false,
            eachItem: {},
            key: 1,
            onSelectCardHandler: jest.fn(),
            onUpdateCardHandler: jest.fn(),
            onClicked: jest.fn(),
            className: '',
            checkboxFlag: true,
        };
        wrapper = shallow(<Card {...props} />);
    });

    it('should render without errors', () => {
        expect(wrapper.find(CardHeader)).toHaveLength(1);
        expect(wrapper.find(CardBody)).toHaveLength(1);
    });

    it('should set prop "isView"', () => {
        expect(wrapper.find(CardHeader).props().isView).toBe(false);
    });

    it('should set state for title and info', () => {
        wrapper
            .find(CardHeader)
            .props()
            .onChangeTitleHandle({ target: { value: 'test title' } });
        wrapper
            .find(CardBody)
            .props()
            .onChangeInfoHandle({ target: { value: 'test info' } });
        expect(wrapper.state('info')).toBe('test info');
        expect(wrapper.state('title')).toBe('test title');
    });

    it('function cancel() should work correct', () => {
        wrapper.find(CardHeader).props().onCancel();
        expect(wrapper.state('editCheck')).toBe(true);
    });

    it('function switchColor() should work correct', () => {
        wrapper.find(CardHeader).props().onSwitchColor();
        expect(wrapper.state('flagCheck')).toBe(true);
    });

    it('function edit() should work correct', () => {
        wrapper.find(CardHeader).props().onEdit();
        expect(wrapper.state('editCheck')).toBe(true);
        expect(wrapper.state('flagCheck')).toBe(false);
    });

    it('function save() should work correct', () => {
        wrapper.find(CardHeader).props().onSave();
        expect(wrapper.state('editCheck')).toBe(false);
    });

    it('function componentDidUpdate() should work correct', () => {
        const cancel = jest.spyOn(wrapper.instance(), 'cancel');
        wrapper.setProps({ viewCheck: true });
        wrapper.setState({ editCheck: true });
        expect(cancel).toHaveBeenCalled();
    });
});
