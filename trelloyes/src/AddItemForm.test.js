import React from 'react';
import { shallow } from './AddItemForm';
import toJson from 'enzyme-to-json';
import AddItemForm from './AddItemForm';

describe(`AddItemForm component`, () =>{
    it('renders the complete form', () =>{
        const wrapper = shallow(<AddItemForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})