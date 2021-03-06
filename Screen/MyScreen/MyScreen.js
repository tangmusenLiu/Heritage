import React, {Component} from 'react';
import { View ,StyleSheet,Text,Button,TouchableOpacity,TextInput,Image,ScrollView,FlatList, ImageBackground} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default class App extends Component {
    constructor(props) {
      super(props);
    }
    render() {
  return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flex:4}}>
                <ImageBackground
                    style={{ width: '100%', height: '100%', resizeMode: 'stretch', }}
                    source={require('../../Image/MyScreen/background.png')}>
                  </ImageBackground>
                </View>  
                <View style={{flex:2}}>
                  <View style={{width:90,height:90,borderRadius:50,position:'absolute',left:35,bottom:10,borderColor:'#fff',borderWidth:4,}}>
                <Image
                    style={{ width: '100%', height: '100%', resizeMode: 'stretch'}}
                    source={require('../../Image/MyScreen/pic17.png')}>
                  </Image>
                  </View>
                    <Text style={{fontSize:20,marginLeft:150,marginTop:5}}>高血堂</Text>
                    <Text style={{fontSize:15,marginLeft:150,color:'#c9a974'}}>非遗手艺人</Text>
                </View>
            </View>
            <View style={styles.contant}>
                <TouchableOpacity style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:15}}>收藏</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:15}}>关注</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:15}}>粉丝</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <View style={{flex:2,marginBottom:20,backgroundColor:'#fff',alignItems:'center'}}>
                    <TouchableOpacity style={{width:'90%',height:'49%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                        <View style={{width:20,justifyContent:"center",alignItems:"center"}}>
                        <FontAwesome name={'file-text-o'} size={23} color={'#000'} />
                        </View>
                        <Text style={{fontSize:15,marginLeft:10}}>我的订单</Text>
                        </View>
                        <FontAwesome name={'angle-right'} size={23} color={'#000'} />
                    </TouchableOpacity>
                    <View style={{width:'90%',height:0.5,backgroundColor:'grey'}}></View>
                    <TouchableOpacity style={{width:'90%',height:'49%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                        <View style={{width:20,justifyContent:"center",alignItems:"center"}}>
                        <FontAwesome name={'map-marker'} size={23} color={'#000'} />
                        </View>
                        <Text style={{fontSize:15,marginLeft:10}}>地址管理</Text>
                        </View>
                        <FontAwesome name={'angle-right'} size={23} color={'#000'} />
                    </TouchableOpacity>
                </View>
                <View style={{flex:3,backgroundColor:'#fff',alignItems:'center'}}>
                <TouchableOpacity style={{width:'90%',height:'30%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                        <View style={{width:20,justifyContent:"center",alignItems:"center"}}>
                        <FontAwesome name={'check-square-o'} size={23} color={'#000'} />
                        </View>
                        <Text style={{fontSize:15,marginLeft:10}}>认证</Text>
                        </View>
                        <FontAwesome name={'angle-right'} size={23} color={'#000'} />
                    </TouchableOpacity>
                    <View style={{width:'90%',height:0.5,backgroundColor:'grey'}}></View>
                    <TouchableOpacity style={{width:'90%',height:'30%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                        <View style={{width:20,justifyContent:"center",alignItems:"center"}}>
                        <FontAwesome name={'phone'} size={23} color={'#000'} /></View>
                        <Text style={{fontSize:15,marginLeft:10}}>客服</Text>
                        </View>
                        <FontAwesome name={'angle-right'} size={23} color={'#000'} />
                    </TouchableOpacity>
                    <View style={{width:'90%',height:0.5,backgroundColor:'grey'}}></View>
                    <TouchableOpacity style={{width:'90%',height:'30%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                        <View style={{width:20,justifyContent:"center",alignItems:"center"}}>
                        <FontAwesome name={'gear'} size={23} color={'#000'} /></View>
                        <Text style={{fontSize:15,marginLeft:10}}>设置</Text>
                        </View>
                        <FontAwesome name={'angle-right'} size={23} color={'#000'} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
)}}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f2f2f2'
        
    },
    header:{
        flex:3,
        backgroundColor:'#f2f2f2'
    },
    contant:{
        flex:1.2,
        marginBottom:20,
        flexDirection:'row'
    },
    footer:{
        flex:5,
        backgroundColor:'#f2f2f2',
    }
})