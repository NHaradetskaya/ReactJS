import React from 'react';
import { shallow } from 'enzyme';

import CardHeader from './CardHeader';

describe('<CardBody />', () => {
    it('should contain h3', () => {
        const wrapper = shallow(<CardHeader />);
        expect(wrapper.find('h3')).toHaveLength(1);
    });

    it('should contain textarea and buttons if props are true', () => {
        const wrapper = shallow(<CardHeader />);
        wrapper.setProps({ isEdit: true, isView: false });
        expect(wrapper.find('textarea')).toHaveLength(1);
        expect(wrapper.find('button')).toHaveLength(2);
    });

    it('should contain checkbox if props are true', () => {
        const wrapper = shallow(<CardHeader />);
        wrapper.setProps({ checkboxFlag: true });
        expect(wrapper.find('input')).toHaveLength(1);
    });
});
