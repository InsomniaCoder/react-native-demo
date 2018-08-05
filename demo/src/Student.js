import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Student extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount = () => {
     console.log("student is mounted");
  }

  componentWillReceiveProps = (nextProps) =>{
      console.log("current props : ");
      console.log(this.props);
      console.log("next props: ");
      console.log(nextProps);
  }

  render() {

    let {name, age, subject} = this.props;

    return (
      <View style={styles.container}>
        <Text>student</Text>
        <Text>name : {name}</Text>
        <Text>age : {age}</Text>
        <Text>subject : {subject}</Text>
        </View>
    );
  }
}

export default Student;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });