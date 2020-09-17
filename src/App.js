import React from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';

import {
  WrapTextInput, 
  Button,
  ToDoList
} from './component'

class App extends React.Component {
  render () {
      return (
          <>
            <StatusBar/>
            <SafeAreaView>
              <ToDoList 
                
              />
            </SafeAreaView>
          </>
      )
  }
}

export default App;
