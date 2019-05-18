import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuButton from '../components/MenuButton';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <MenuButton navigation ={this.props.navigation}/>
        <Text style={styles.text}>InfoScreen
        </Text>
        <Text style={styles.text}>Data Kelompok</Text>
        <Text style={styles.text1}>Devan Tera Bayu [058]</Text>
        <Text style={styles.text1}>Raja Umeda A Siregar [054]</Text>
        <Text style={styles.text1}>Guyub Raka Nursatya [056]
        </Text>
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
  text:{
      fontSize:30
  },
  text1:{
    fontSize:20
}
});
