import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Head';
import  AlbumList from './src/components/AlbumList';

export default class App extends React.Component {
  render() {
    return (
      <View style= {styles.container}>
        <Header headerText={'Albums!'}></Header>
        <AlbumList/>
        <Text style={styles.demo}> Design : Le Trong Binh </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  demo: {   
   justifyContent: 'center',
   borderColor: 'red',
   borderWidth: 2,
   paddingTop: 5,
   margin: 5,
   textAlign: 'center',
   fontWeight: 'bold', 
   fontStyle: 'italic',
  },
});
