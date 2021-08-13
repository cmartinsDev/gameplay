import React from 'react';
import { Image } from "react-native";
import { styles } from './styles';
export function GuildIcon() {
    const uri = 'https://cdn.iconscout.com/icon/free/png-512/discord-2474808-2056094.png'
    return(
        <Image source={ { uri } } style={styles.image}  resizeMode="cover" />
    )
}