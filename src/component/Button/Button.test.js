import React from 'react'
import {shallow, mount, render} from 'enzyme'
import Button from './Button'
// import {Linking} from 'react-native'

const mockOpenURL = jest.fn();
    
jest.mock('react-native/Libraries/Linking/Linking', () => ({
    openURL: mockOpenURL
}))

describe('Button', () => {
    describe('Rendering', () => {
        it('should be match in snapshot', () => {
            const component = shallow(
                <Button 
                    text ='Click me' 
                    onPress = {() => {}}
                />
            )
            expect(component).toMatchSnapshot()
        })
    })
    
    describe('Expect handle call once', () => {
        it('call without url', () => {
            const mockOnPress = jest.fn();

            const component = shallow(
                <Button 
                    text ='Click me' 
                    onPress = {mockOnPress}
                />
            )
            const instance = component.instance();

            // instance.drive().simulate("press")
            component.simulate("press")
            expect(mockOpenURL).not.toHaveBeenCalled();
            expect(mockOpenURL).toHaveBeenCalledTimes(0);
            expect(mockOnPress).toHaveBeenCalled();
            expect(mockOnPress).toHaveBeenCalledTimes(1);
        })

        it('call with url', () => {
            const mockOnPress = jest.fn();

            const component = shallow(
                <Button 
                    text ='Click me' 
                    onPress = {mockOnPress}
                    url = "https://www.google.com/"
                />
            )

            component.simulate("press")

            expect(mockOpenURL).toHaveBeenCalled();
            expect(mockOpenURL).toHaveBeenCalledTimes(1);
            expect(mockOnPress).not.toHaveBeenCalled();
            expect(mockOnPress).toHaveBeenCalledTimes(0);
        })
    })
})