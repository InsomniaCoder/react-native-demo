import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Student from './src/Student';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: 'react-native-demo',
      welcome: 'Open up App.js to start working on your app!!',
      age: 24,
      subject: 'test'
    };
    // this.onAgeChanged = this.onAgeChanged.bind(this);
  }
  
  componentDidMount() {
    console.log("calling api");

    fetch("http://www.mocky.io/v2/5b66a8f2320000b504ee11be", {
      method: "GET",
      headers: {'Content-Type': 'application/json'},
      body: null
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log("api result");
          console.log(result);
          this.setState({
            name: result.name,
            age: result.age,
            subject: result.subject
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {console.log(error);
        }
      )
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

    const {name,age,welcome,subject} = this.state;

    return (
      <View style={styles.container}>
        <Text>{welcome}</Text>
        <Text>your age is {age}</Text>
        <Button onPress={this.onButtonClicked} title="Add my age"/>
        <Student name={name} age={age} subject={subject} onAgeChanged={this.onAgeChanged}/>
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
