import 
{ StyleSheet,
  ScrollView, 
  Text, 
  View,
  TextInput,
  Button,
  FlatList,Image,ImageBackground, VirtualizedList} 
from 'react-native';
import React,{useState, version}from 'react';

const App = () => {


  const img={
     uri:'https://images.unsplash.com/photo-1643306965254-517e3ddb164d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
     width: 400,
     height: 100,

  }

  const imagee = { uri: "https://reactjs.org/logo-og.png" };

   const [input, setinput] = useState('');

   const [submit, setsubmit] = useState([]);


   const events =(e) => {

            
            setinput(e)
   }

   const events2 =() => {
     
    setsubmit((bug)=>{
          return [...bug,input]

    })

    setinput([])


    // setsubmit(input)
    
   }


   const events3=() => {
     
    setsubmit([])

    
   }
  return (

    <ImageBackground source={imagee} resizeMode="cover" style={styles.imagee}>
    <ScrollView style={styles.maincont}>
    
    <View style={styles.cointener}>
      <Text style={styles.text}>to do app</Text>
     
       

      
      <TextInput  style={styles.input} placeholder='add todo...' placeholderTextColor={"white"} defaultValue={input} onChangeText={events}  />
 
 


   <View style={styles.btns}>
      <Button style={{padding:50,height:40,}}
        title="add todo"
        color="#841584"
        onPress={events2}
       
       
      />

      
      <Button
        title="refres"

        onPress={events3}
       
      />
      </View>
    
    
      {/* <Text>{submit.map((mup,index)=>{

        <Text key={index}>{mup}</Text>
      })}</Text> */}

      <Text style={styles.nap}>{submit}</Text>
      {/* <FlatList renderItem={((submit,index)=>{

          return <FlatList key={index}> {submit}</FlatList>
      })}/> */}

      <FlatList style={{color:'red'}} renderItem={submit.map((mup,index)=>{

        return <Text style={{color:'red',backgroundColor:'blue'}}> {mup}</Text>
      })}/>

      
 
         
    </View>


     <View style={styles.imahe}>


   
    <Text style={{ fontSize: 56, textAlign:'center'}}>Framework around?</Text>
    <Image source={img} />
    <Image source={img} />
    <Image source={img} />
    <Image source={img} />
    <Image source={img} />
    <Text style={{ fontSize: 56, textAlign:'center'}}>React Native</Text>
    </View>
    </ScrollView>
    </ImageBackground>
  );
};

export default App;

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////    css
///////////////////////////////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
 

  cointener:{
        flex:1,
       
        alignItems:'center',
        color:'red',
        


  },
  text:{

    color:'#fff',
    fontSize:40,
    
    width:360,
    margin:10,
    borderRadius:30,
    textAlign:'center',

    textTransform:'capitalize',

  },
  btns:{


    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    margin:20,
  
   

  },
 

  input:{

      borderWidth:2,
      borderColor:'gray',
      color:'#fff',
      width:300,
      fontSize:25,
      height:80,
      padding:10,


  },

  nap:{
    fontSize:35,
    margin:10,

  },

  imahe:{

       flex:2,
       justifyContent:'center',
       alignItems:'center',

  },
 

  imagee:{

    height:300,
    backgroundColor:'red'
  }




});
