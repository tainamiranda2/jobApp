import { StyleSheet, Text, View } from 'react-native';

export default StyleSheet.create({
    container:{
        //colors:['#ffa700', '#ff9300', #7ed957],
      
        backgroundColor:'#0097b2',
       // aligtItems:'center',
       //justifyContent:'center'
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

    form:{
        margin:20,
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
        backgroundColor:   '#00FF00'
    },
    formInput:{
        padding:30,
        fontSize:20,
        borderColor:'#000'
    },
    formButton:{
        padding:50,
        fontSize:20,
        backgroundColor:'#00FF00'
    }
})

