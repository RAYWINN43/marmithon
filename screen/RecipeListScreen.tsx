import React, { useMemo, useState } from "react";
import {
	SafeAreaView,
	View,
	StyleSheet,
	FlatList,
	Text,
	TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import recipesData from "../data/recipes";
import { Recipe } from ".../types/recipe";
import { RootStackParamList } from "../types/navigation";
import RecipeCard from "../components/RecipeCard";

const RecipeListScreen: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList, "RecipeList">>();

	const filteredRecipes = useMemo(() => {
		return recipesData.filter((recipe: Recipe) => {
			const query = searchQuery.toLowerCase();

			return (
				recipe.titre.toLowerCase().includes(query) ||
				recipe.difficulte.toString().includes(query)
			);
		});
	}, [searchQuery]);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerSubtitle}>
					{filteredRecipes.length} recettes disponibles
				</Text>

				<TextInput
					style={styles.searchInput}
					placeholder="Rechercher une recette..."
					placeholderTextColor="#9090AA"
					value={searchQuery}
					onChangeText={setSearchQuery}
				/>
			</View>

			<FlatList
				data={filteredRecipes}
				keyExtractor={(item) => item.id}
				contentContainerStyle={styles.listContent}
				renderItem={({ item }) => (
					<RecipeCard
						recipe={item}
						onPress={() => navigation.navigate("RecipeDetail", { recipe: item })}
					/>
				)}
			/>
		</SafeAreaView>
	);
};

export default RecipeListScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f5f5f5",
		paddingHorizontal: 16,
		paddingTop: 16,
	},
	header: {
		marginBottom: 16,
	},
	headerTitle: {
		fontSize: 26,
		fontWeight: "bold",
		color: "#222",
		marginBottom: 6,
	},
	headerSubtitle: {
		fontSize: 14,
		color: "#666",
		marginBottom: 12,
	},
	searchInput: {
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#ddd",
		borderRadius: 10,
		paddingHorizontal: 14,
		paddingVertical: 10,
		fontSize: 16,
		color: "#222",
	},
	listContent: {
		paddingBottom: 20,
	},
});