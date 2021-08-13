import { Feather } from '@expo/vector-icons'
import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { theme } from '../../global/styles/theme'
import { GuildIcon } from '../guildIcon'
import { styles } from './styles'

export type GuildProps = {
    id: string
    name: string
    icon: string | null
    owner: boolean
}

type Props = TouchableOpacityProps & {
    data: GuildProps
}

export function Guild({ data, ...rest }: Props ) {
    return (
      <TouchableOpacity {...rest} style={styles.container} activeOpacity={0.7} >
          <GuildIcon />
  
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}> {data.name} </Text>
                    <Text style={styles.type}> { data.owner ? 'Administrador' : 'Convidado'} </Text>
                </View>
            </View>
  
          <Feather name="chevron-right" color={theme.colors.heading} size={24} />
      </TouchableOpacity>
    );
}