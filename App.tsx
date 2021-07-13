import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { Rajdhani_500Medium, Rajdhani_700Bold } from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';
import React from 'react';
import { StatusBar } from "react-native";
import { Background } from "./src/components/background";
import { Routes } from "./src/routes";

export default function App() {
	// load fonts
	const [ fontsLoaded ]  = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Rajdhani_500Medium,
		Rajdhani_700Bold
	});

	// Only open app when fonts is loaded
	if (!fontsLoaded) {
		return <AppLoading />
	}
	
	return(
		<Background>
		<StatusBar  backgroundColor="transparent" translucent />
		<Routes />
		</Background>
		
		
	)
}