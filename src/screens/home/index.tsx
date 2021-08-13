import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { Appointment } from "../../components/appointment";
import { Background } from "../../components/background";
import { ButtonAdd } from "../../components/buttonAdd";
import { CategorySelect } from "../../components/categorySelect";
import { ListDivider } from "../../components/listDivider";
import { ListHeader } from "../../components/listHeader";
import Profile from "../../components/profile";
import { styles } from "./styles";


export default function Home() {
    const [category, setCategory] = useState('')
    const navigation = useNavigation()
    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '2',
                name: 'Hooligans',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        }
    ]

    const handleCategorySelect = (categoryId: string) => {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    const handleAppointmentDetails = () => {
        navigation.navigate('AppointmentDetail')
    }
    
    const handleAppointmentCreate = () => {
        navigation.navigate('AppointmentCreate')
    }

    return(
        <Background>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Profile />
                    <ButtonAdd onPress={handleAppointmentCreate}  />
                </View>
                
                <CategorySelect categorySelected={category} setCategory={handleCategorySelect} hasCheckBox={false} />
            
                <View style={styles.content}>
                    <ListHeader title="Partidas agendadas" subtitle="Total 6" />
                </View>

                <FlatList
                    data={appointments} style={styles.matches}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id} 
                    renderItem={({ item }) => (
                            <Appointment data={item} onPress={handleAppointmentDetails} />
                    )}
                    ItemSeparatorComponent={() => <ListDivider/> }
                />
            </View>
        </Background>
    )
}