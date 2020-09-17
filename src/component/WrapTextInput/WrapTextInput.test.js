import WrapTextInput, {ValidText} from './WrapTextInput'
import {shallow, mount} from 'enzyme'
import React from 'react'
import {Text, TextInput} from 'react-native'
import 'jsdom-global/register';


describe("WrapTextInput", () => {
    describe("Rendering", () => {
        it("should be render default with invalid email", () => {
            const component = shallow(<WrapTextInput placeholder = "Enter email"/>);
            const InputComponent = component.find(TextInput).first();
            const placeHolder = InputComponent.props().placeholder;
            

            const TextComponent = component.find(ValidText).first();
            const status = TextComponent.props().isValid;
            const numberOfComponent = component.children().length;

            expect(numberOfComponent).toBe(2);
            expect(status).toBeFalsy();
            expect(placeHolder).toEqual("Enter email");
        })
        it("Mount rendering", () => {
            const component = mount(<WrapTextInput placeholder = "Enter email"/>);

            expect(component).toMatchSnapshot();
        })
    })
    describe("Interaction", () => {
        it("should in show valid email", () => {
            const component = shallow(<WrapTextInput placeholder = "Enter email"/>);
            const InputComponent = component.find(TextInput).first();
            InputComponent.simulate('changeText', "ducy20@gmail.com");

            const Text = component.find(ValidText).first();

            const status = Text.props().isValid;

            expect(status).toBeTruthy();

        })
        it("should in show invalid email", () => {
            const component = shallow(<WrapTextInput placeholder = "Enter email"/>);
            const InputComponent = component.find(TextInput).first();
            InputComponent.simulate('changeText', "ducy20");

            const Text = component.find(ValidText).first();
            const status = Text.props().isValid;

            expect(status).toBeFalsy();

        })
    })
})