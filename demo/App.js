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
    // this.onAgeChanged = this.onAgeChanged.bind(this);
  }

  onButtonClicked = () => {
    this.setState((prevState, props) => {
      let prevAge = prevState.age; 
      return {
        age: prevAge+1
      };
    });
  };

  onAgeChanged(){
    this.setState({age: 10});
  }

  render() {

    const {name,age,welcome} = this.state;

    return (
      <View style={styles.container}>
        <Text>{welcome}</Text>
        <Text>your age is {age}</Text>
        <Button onPress={this.onButtonClicked} title="Add my age"/>
        <Student name={name} age={age} subject={"computer"} onAgeChanged={this.onAgeChanged}/>
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
