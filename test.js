import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View,FlatList } from 'react-native';

export default function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      setPosts(res.data);
      })

  },[]);

  return (
    <View style={styles.container}>
      <FlatList
          data={posts}
          renderItem={post => {
            return <Text >{post.item.id}</Text>
          }
          }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
