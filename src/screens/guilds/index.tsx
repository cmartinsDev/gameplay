import React from 'react';
import { FlatList, View } from 'react-native';
import { Guild, GuildProps } from '../../components/guild';
import { ListDivider } from '../../components/listDivider';
import { styles } from './styles';

type Props = {
    selectedGuild: (guild: GuildProps) => void
}

export function Guilds({ selectedGuild }: Props ) {
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Free Fire - Galera do Game',
            icon: 'image.png',
            owner: true
        },
    ]
    return (
        <View style={styles.container}>
            <FlatList 
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => ( <Guild data={item} onPress={() => selectedGuild(item)}  />)}
                ItemSeparatorComponent={() => <ListDivider />}
                showsVerticalScrollIndicator={false}
                style={styles.guilds}
            />
        </View>
    )
}