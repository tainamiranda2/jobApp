
import { View, Text, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
export default function Motivo (){
  const data = {
    labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99],
      },
    ],
  };
  
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // Espessura das barras
  };
  
    return(
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
     
            <Text>Motivo</Text>
         
            <BarChart
             data={data}
             width={300}
             height={200}
             chartConfig={chartConfig}
             verticalLabelRotation={0} // Rotação dos rótulos no eixo vertical (0 graus)
             fromZero={true} // Começa a partir do zero no eixo vertical
             yAxisSuffix="%" // Sufixo para os valores no eixo vertical
             horizontalLabelRotation={90} // Rotação dos rótulos no eixo horizontal (90 graus)
             style={{ marginLeft: -30 }} // Ajus
        />
          </View>
   
        
    )
}