import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: 'react-native-demo',
      welcome: 'Open up App.js to start working on your app!!'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.welcome}</Text>
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
