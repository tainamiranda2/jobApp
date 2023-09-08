import { StyleSheet, Text, View } from 'react-native';

export default StyleSheet.create({
    container:{
        //colors:['#ffa700', '#ff9300', #7ed957],
      
        backgroundColor:'#0097b2',
        aligtItems:'center',
       justifyContent:'center'
    },
    Card:{
backgroundColor:'#fff',
padding:30,
borderRadius:10,
width:200,
justifyContent: 'space-between',
margin:20
    },
    CardR:{
        backgroundColor:'#fff',
        padding:30,
        borderRadius:10,
        width:300,
        margin:20,
      justifyContent: 'flex-end'
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
        textAlign:'center'
        

    }
})

