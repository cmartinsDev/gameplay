import { Fontisto } from '@expo/vector-icons';
import React from 'react';
import { FlatList, ImageBackground, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import BannerImg from '../../assets/banner.png';
import { Background } from '../../components/background';
import { ButtonIcon } from '../../components/buttonIcon';
import { Header } from '../../components/header';
import { ListDivider } from '../../components/listDivider';
import { ListHeader } from '../../components/listHeader';
import { Member } from '../../components/Member';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export default function AppointmentDetail() {
    const members = [
        {
            id: '1',
            username: 'Rodrigo Gonçalves',
            avatar_url: 'https://github.com/rodrigorgtic.png',
            status: 'online' 
        },
        {
            id: '2',
            username: 'Carlos Martins',
            avatar_url: 'https://github.com/cmartinsDev.png',
            status: 'online' 
        }
    ]
    return (
        <Background>
            <Header 
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto name="share" size={24} color={theme.colors.primary} />
                    </BorderlessButton>
                }
            />

            <ImageBackground style={styles.banner} source={BannerImg}>
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>Lendarios</Text>
                    <Text style={styles.subtitle}>É hoje que vamos chegar ao challenger sem perder uma partida da md10</Text>
                </View>
            </ImageBackground>

            <ListHeader title="Jogadores" subtitle="Total 3" />
            <FlatList
                data={members} 
                keyExtractor={item => item.id}
                renderItem={({item}) => ( <Member data={item} />)}
                ItemSeparatorComponent={() => <ListDivider/> }
                style={styles.members}
            />

            <View style={styles.footer} >
                <ButtonIcon title="Entrar na Partida" />
            </View>
        </Background>
    )
}