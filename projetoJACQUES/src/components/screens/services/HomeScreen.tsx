import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import { fetchCatFact } from '../services/api';

export default function HomeScreen() {
  const [catFact, setCatFact] = useState<string | null>(null);

  async function getFact() {
    try {
         const data = await fetchCatFact();
      setCatFact(data.fact);
    } catch (error) {
      console.error('error:', error);
      setCatFact('Error.');
    }
  }

  useEffect(() => {
    getFact();
  }, []);

  return   (
    <ImageBackground
      source={{ uri: 'https://www.pngmart.com/files/1/Adorable-Cat-PNG.png' }} // imagem de gato no fundo
      style={styles.background}
      resizeMode="cover"
    >
     <View style={styles.container}>
      <Text style={styles.title}>cat facts:</Text>
      <Text style={styles.fact}>{catFact ?? 'Loading...'}</Text>
       <Button title="CAT FACTS? CLICK HERE !" onPress={getFact} color="#6200ee" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, 
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  fact: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 20,
  },
});
