import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeDetailScreen from './screen/RecipeDetailScreen';
import { RootStackParamList } from './types/navigation';
import RecipeListScreen from './screen/RecipeListScreen';
// On initialise le Stack avec nos types
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="RecipeList">
<Stack.Screen
name="RecipeList"
component={/* A compléter : Passez le composant liste */
  RecipeListScreen
}
options={{ title: 'Mes recettes' }}
/>
{/* A compléter : Ajoutez le Stack.Screen pour 'RecipeDetail' */
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