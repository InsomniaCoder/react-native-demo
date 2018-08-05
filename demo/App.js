import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Student from './src/Student';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: 'react-native-demo',
      welcome: 'Open up App.js to start working on your app!!',
      age: 24
    };
  }

  // onButtonClicked() {
  //   this.setState((prevState, props) => {
  //     return {
  //       age: prevState.age
  //     };
  //   });
  // };
  // <Button onPress={this.onButtonClicked} title="Add my age"/>
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.welcome}</Text>
        <Text>your age is {this.state.age}</Text>
        <Student name="por" age={24} subject={"computer"}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
