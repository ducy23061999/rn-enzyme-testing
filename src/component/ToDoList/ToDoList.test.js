import React, {useEffect} from 'react'
import axios from 'axios';
import {dumpList} from './__mocks__/axios'
import ToDoList, {ListItem} from './ToDoList'
import { mount, render, shallow } from 'enzyme';
import 'jsdom-global/register';
import { FlatList } from 'react-native';

jest.mock('axios');

describe("ToDoList", () => {

    describe("Rendering", () => {
        it("should be render with mock list", () => {
            jest.spyOn(React, 'useEffect').mockImplementation(f => f())
            const spy = jest.spyOn(axios, 'get');
            const toDoList = mount(
                <ToDoList />
            );
            
            const numberOfChild = toDoList.find(ListItem);
            
            expect(spy).toBeCalled();
            expect(spy).toBeCalledTimes(1);
            expect(toDoList).toMatchSnapshot();
            // expect(numberOfChild.length).toEqual(0) //Bug

        })
    })
})