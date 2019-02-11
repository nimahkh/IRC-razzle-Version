import React from 'react';
import { shallow } from '../../enzyme';

import AboutUs from './index';

describe('About us is defined', () => {

    it('renders AboutUs', () => {
        const wrapper = shallow(<AboutUs/>);
        // Expect the wrapper object to be defined
        expect(wrapper.find('.about-section')).toBeDefined();
    });
});