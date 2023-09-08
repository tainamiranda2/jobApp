import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientBackground = ({ children }) => {
  return (
    <LinearGradient
      colors={['#FF5733', '#FFC300']} // Cores do gradiente
      start={{ x: 0, y: 0 }} // Ponto de início do gradiente
      end={{ x: 1, y: 0 }} // Ponto de término do gradiente
      style={styles.gradientBackground}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
});

export default GradientBackground;
