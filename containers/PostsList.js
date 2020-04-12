import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,Image, View,FlatList,TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function ({navigation}) {
    const [posts, setPosts] = useState([]);
    const [showList, setShowList] = useState(false);
    
    const pressHandler = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        setPosts(res.data);
        });
        setShowList(true);
      };

   return ( 
    <View style={styles.container}>
       {
            !showList && <TouchableOpacity 
            onPress={pressHandler}
            style={styles.btn}
            >
            <Text style={{fontSize:20,color:"white",fontFamily:"Trocchi,serif", fontWeight:400}}>GET POSTS</Text>
            </TouchableOpacity>

        }
        {
            showList &&  <FlatList
            data={posts}
            renderItem={post => {
            return (
            <View>
                <Image
                    style={styles.imgStyle}
                    source={{uri: 'https://source.unsplash.com/random'}}
                />
                <Text 
                    style={styles.txtStyle}
                    onPress={()=>navigation.navigate('PostDetails',{postId: post.item.id})}
                ><strong>Post Title: </strong>{post.item.title}</Text>
            </View>
            )
            }
            }
            />
        }
    </View> )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn: {
        margin:10,
        padding:10,
        backgroundColor:"#6b558e",
        color:"white",
        borderRadius:18,
        width:150,
        textAlign:"center",
        size:50
      },
      imgStyle: {
        margin:9,
        width: 150,
        height: 100,
        border: 1 ,
        borderStyle:"solid",
        borderRadius: 8,
        padding: 5,
        alignSelf:"center"
      },
      txtStyle: {
        marginHorizontal:5,
        color:"#7c795d",
        fontSize:17,
        fontFamily:"Source Sans Pro,sans-serif",
        fontWeight:400
      },
  });