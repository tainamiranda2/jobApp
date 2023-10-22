import { StyleSheet, Text, View } from 'react-native';

export default StyleSheet.create({
    Card:{
        backgroundColor:'#fff',
        padding:50,
        borderRadius:10,
        width:200,
        justifyContent:"flex-start",
        margin:20
    },
    CardR:{
        backgroundColor:'#fff',
        padding:50,
        borderRadius:10,
        width:200,
        marginLeft:150,
        justifyContent:"flex-end"
    
    },

    texto:{
        margin:'10px',
        color:'#fff',
        fontSize:14,
        textAlign:'center',
        
    },
  
    formText:{
fontSize:20,
textAlign:'center',


    },
    form:{
        marginTop:'100px',
        backgroundColor:'#fff',
        width:'100%',
        height:'100%',
        borderTopLeftRadius:50
    },
    formInputs:{
        margin:40,
    },
    ButtonForm:{
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 10,
        marginTop: 30,
    },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
    formSelect:{
        marginTop:20,
        backgroundColor: '#D3D3D3',
        padding:20,
        borderRadius:20,
        fontSize:20
    },
    formSelectModal:{
        padding:50,
        fontSize:20,
        width:500,
        marginTop:200,
        justifyContent:'center',
      //  backgroundColor:   '#00FF00'
    },
    inputSelect:{

    },
    formInput:{
        margin:10,
        borderWidth: 1,
        borderBottomColor: '#000',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        padding: 10,
    },
    formButton:{
        padding:50,
         ImageBackground:  'url("./fundo.png")',
        fontSize:20,
    },
    Notification:{
        position: 'absolute',
        top: 20,
        right: 20, 
    }
})

