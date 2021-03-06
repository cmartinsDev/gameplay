
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import illustrationImg from '../../assets/illustration.png';
import { Background } from "../../components/background";
import { ButtonIcon } from "../../components/buttonIcon";
import { styles } from './styles';

export default function SignIn() {
	const navigation = useNavigation()

	function handleSignIn() {
		navigation.navigate('Home')
	}

	return (
		<Background>
			<View style={styles.container}>
				<Image source={illustrationImg} resizeMode="stretch" style={styles.image} />
				<View style={styles.content} >
					<Text style={styles.title}>Conecte-se {'\n'}
											e Organize suas{'\n'}
											jogatinas{'\n'}
											facilmente
					</Text>

					<Text style={styles.subtitle}>
						Crie grupos para jogar seus games {`\n`}
						favoritos com seus amigos
					</Text>

					<ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
				</View>
			</View>
		</Background>
	)
}

