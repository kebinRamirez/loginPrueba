import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text, Card, ListItem } from 'react-native-elements';
import {
    View,
    StyleSheet,
    Dimensions,
    FlatList, 
    Image
} from 'react-native';




function Sesion({ navigation }) {

    const [info, setInfo] = useState(JSON.stringify({}));

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                setInfo(response.data);
                console.log('NUEVA PRUEBAAA');
                console.log(info);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);




    return (
        <View style={{ alignItems: 'center', height: Dimensions.get('window').height, width: Dimensions.get('window').width, backgroundColor: '#2b3dae', }}>

            <FlatList
                data={info}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Card key={item.id} containerStyle={{ borderRadius: 14, width: Dimensions.get('window').width * 0.9, marginBottom: 10 }}>
                        <Image
                            source={{ uri: 'https://res.cloudinary.com/dcgvkvdwe/image/upload/v1627305981/Prueba/programmer_wofqvh.png' }}
                            style={{ width: 50, height: 50,position: 'absolute', marginTop: 10, marginLeft: Dimensions.get('window').width* 0.7 }}
                        />
                        <Text style={styles.TextStyle}>Name:  {item.name} </Text>
                        <Text style={styles.TextStyle}>Username: {item.username} </Text>
                        <Text style={styles.TextStyle}>Email: {item.email} </Text>
                        <Text style={styles.TextStyle}>Phone: {item.phone} </Text>
                        <Text style={styles.TextStyle}>WebSite: {item.website}</Text>
                    </Card>
                )} />
            <View style={{ height: Dimensions.get('window').width * 0.143 }}>

            </View>
        </View>

    );

}
const styles = StyleSheet.create({
    TextStyle: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 20
    },
});

export default Sesion;