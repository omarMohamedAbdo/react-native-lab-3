import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,Image, View,FlatList,TouchableOpacity } from 'react-native';

export default function () {
   return ( 
    <View style={styles.container}>
        <Text >Omar Profile</Text>
    </View> )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });