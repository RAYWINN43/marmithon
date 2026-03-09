import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

type RecipeDetailRouteProp = RouteProp<RootStackParamList, 'RecipeDetail'>;

interface Props {
  route: RecipeDetailRouteProp;
}

const RecipeDetailScreen: React.FC<Props> = ({ route }) => {
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      
      {recipe.image && (
        <Image
          source={{ uri: recipe.image }}
          style={styles.image}
          resizeMode="contain"
        />
      )}

      <Text style={styles.title}>{recipe.titre}</Text>

      <Text style={styles.temps_preparation}>Temps de préparation: {recipe.temps_preparation}</Text>

      <Text style={styles.difficulte}>Difficulté: {recipe.difficulte}/5</Text>

      <Text style={styles.ingredients}>{recipe.ingredients}</Text>
      <Text style={styles.recette}>Recette:</Text>
      <Text style={styles.preparation}>{recipe.preparation}</Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  content: {
    padding: 20,
  },

  image: {
    width: '100%',
    height: 300,
    marginBottom: 20,
    alignSelf: 'center',
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#222",
    textAlign: "center",
    marginBottom: 10,
  },

  temps_preparation: {
    fontSize: 13,
    color: "#555",
    textAlign: "center",
    marginBottom: 10,
  },

  difficulte: {
    fontSize: 13,
    color: "#555",
    textAlign: "center",
    marginBottom: 35,
  },

   ingredients: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 35,
  },

  recette: {
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#222",
    marginBottom: 10,
  },

  preparation: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
});

export default RecipeDetailScreen;