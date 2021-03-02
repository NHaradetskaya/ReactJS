import React from 'react';
import { shallow } from 'enzyme';

import CardBody from './Cardbody';

describe('<CardBody />', () => {
    it('should contain p', () => {
        const wrapper = shallow(<CardBody />);
        expect(wrapper.find('p')).toHaveLength(1);
    });

    it('should contain textarea if props are true', () => {
        const wrapper = shallow(<CardBody />);
        wrapper.setProps({ isEdit: true, isView: false });
        expect(wrapper.find('textarea')).toHaveLength(1);
    });
});
