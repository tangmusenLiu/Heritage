import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default function CraftsmanshipScreen() {
    return (
        <ScrollView>
            <ScrollView style={styles.main_body}>
                <FlatList
                    data={[
                        {
                            demo: '50',
                            demo1: '王钏巧：工匠精神传续百年活字',
                            demo2: '王钏巧·木活字印刷技术省级非遗传承人',
                        },
                        {
                            demo: '95',
                            demo1: '孙亚青：工匠精神传续百年活字',
                            demo2: '孙亚青·王星记扇国家级非遗传承人',
                        },
                        {
                            demo: '95',
                            demo1: '孙亚青：工匠精神传续百年活字',
                            demo2: '孙亚青·王星记扇国家级非遗传承人',
                        },
                        {
                            demo: '95',
                            demo1: '孙亚青：工匠精神传续百年活字',
                            demo2: '孙亚青·王星记扇国家级非遗传承人',
                        },

                    ]}
                    renderItem={({ item }) =>
                        <View style={styles.part}>
                            <ImageBackground style={styles.pic}>
                                {item.pic}
                                <View style={styles.eye}>
                                    <FontAwesome name={'eye'} size={20} color={'#fff'} />
                                    <Text style={{marginLeft:8,color:'#fff'}}>{item.demo}</Text>
                                </View>
                            </ImageBackground>
                            <TouchableOpacity style={styles.introduce}
                            onPress={() => navigation.navigate('')}>
                                <View style={styles.introduce_up}>
                                    <View style={{borderRightWidth: 1,justifyContent:"center" }}><Text style={{ fontSize: 17,marginRight:7}}>匠心逐梦</Text></View>
                                    <View style={{paddingLeft: 7 ,justifyContent:"center"}}><Text style={styles.demol}>{item.demo1}</Text></View>
                                </View>
                                <View style={styles.introduce_down}>
                                    <View style={{ width: '100%', justifyContent: 'center' }}><Text style={styles.demo2}>{item.demo2}</Text></View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                />
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    main_body: {
        backgroundColor: '#f2f2f2'
    },
    part: {
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#fff',
        paddingBottom:10
    },
    eye: {
        position:'absolute',
        flexDirection:'row',
        right:15,
        bottom:10
    },
    pic: {
        width: '90%',
        height: 230,
        marginVertical: 16,
        backgroundColor: '#000'
    },
    introduce: {
        width: '90%',
    },
    introduce_up: {
        flexDirection: 'row',
        marginBottom:5
    },
    introduce_down: {
        width: '100%',
        height: 25,
        justifyContent: 'center',
    },
    demol: {
        fontSize: 16,
    }

});