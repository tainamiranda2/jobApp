import { StyleSheet, Text, View } from 'react-native';

export default StyleSheet.create({
    container:{
        //colors:['#ffa700', '#ff9300', #7ed957],
      
        backgroundColor:'#0097b2',
       // aligtItems:'center',
       //justifyContent:'center'
    },
    Login:{

    },

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
        color:'#D3D3D3',
        fontSize:14,
        textAlign:'center',
        
    },
    textoLogin:{
        color:'#00FF00',
        fontSize:20,
        textAlign:'center',
        margin:20
    },
    formText:{
fontSize:20,
textAlign:'center',


    },
    form:{
        marginTop:100,
        backgroundColor:'#fff',
        width:'100%',
        height:'100%',
        borderTopLeftRadius:50
    },
    formInputs:{
        margin:40,
    },
    Button:{

    },
    formSelect:{
        marginTop:10,
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
        fontSize:20,
    },
    button:{
        ImageBackground:  'url("./fundo.png")',
    }
})

