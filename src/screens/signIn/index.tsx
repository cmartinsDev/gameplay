
import React from "react";
import { Image, Text, View } from "react-native";
import illustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from "../../components/buttonIcon";
import { styles } from './styles';

export default function SignIn() {
	return (
    	<View style={styles.container}>
			<Image source={illustrationImg} resizeMode="stretch" style={styles.image} />
			<View style={styles.content} >
				<Text style={styles.title}>Conecte-se {'\n'}
										   e Organize {'\n'}
										   suas jogatinas{'\n'}
										   facilmente
				</Text>

				<Text style={styles.subtitle}>
					Crie grupos para jogar seus games {`\n`}
					favoritos com seus amigos
				</Text>

				<ButtonIcon title="Entrar com Discord"  activeOpacity={0.7} />
			</View>
		</View>
	)
}

