import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeDetailScreen from './screen/RecipeDetailScreen';
import { RootStackParamList } from './types/navigation';
import RecipeListScreen from './screen/RecipeListScreen';
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="RecipeList">
<Stack.Screen
name="RecipeList"
component={
  RecipeListScreen
}
options={{ title: 'Mes recettes' }}
/>
{
  <Stack.Screen
    name="RecipeDetail"
    component={RecipeDetailScreen}
    options={{ title: 'Détail de la recette' }}
  />
}
</Stack.Navigator>
</NavigationContainer>
);
}