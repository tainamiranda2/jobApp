import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function Respostas() {
  const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', ],
    datasets: [
      {
        data: [20, 45, 28],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Cor da linha vermelha
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Text>Respostas</Text>
      <LineChart
        data={data}
        width={300}
        height={200}
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          strokeWidth: 2,
        }}
      />
    </View>
  );
}
