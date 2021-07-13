import React from 'react'
import { Image, Text, View } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import discordImg from '../../assets/discord.png'
import { styles } from './styles'

type Props = RectButtonProps & {
    title: string
}

export function ButtonIcon({ title, ...rest }: Props) {
    return(
        <RectButton style={styles.container} {...rest} >
            <View style={styles.iconWrapper}>
                <Image source={discordImg} style={styles.icon} />
            </View>
            <Text style={styles.title} >{title}</Text>
        </RectButton>
    )
}
