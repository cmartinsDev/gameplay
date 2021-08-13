import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { GuildProps } from '../../components/appointment';
import { Button } from '../../components/button';
import { CategorySelect } from '../../components/categorySelect';
import { GuildIcon } from '../../components/guildIcon';
import { Header } from '../../components/header';
import { ModalView } from '../../components/modal-view';
import { SmallInput } from '../../components/small-input';
import { Textarea } from '../../components/textarea';
import { theme } from '../../global/styles/theme';
import { Guilds } from '../guilds';
import { styles } from './styles';


export default function AppointmentCreate() {
    const [category, setCategory] = useState('')
    const [ openGuildModal, setOpenGuildModal ] = useState(false)
    const [ guild, setGuild ] = useState<GuildProps>({} as GuildProps)

    const openGuilds = () => {
        setOpenGuildModal(true)
    }

    const handleGuildSelected = (guildSelected: GuildProps) => {
        setGuild(guildSelected)
        setOpenGuildModal(false)
    }
    const closeGuildsModal = () => {
        setOpenGuildModal(false)
    }

    return (
        <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? "padding" : 'height'} style={styles.container}>
            <ScrollView>
                <Header title="Agendar Partida" />
                <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>Categoria</Text>
                <CategorySelect hasCheckBox setCategory={setCategory} categorySelected={category} />

                <View style={styles.form} >
                    <RectButton onPress={openGuilds}>
                        <View style={styles.select}>
                            {
                                guild.icon
                                ? <GuildIcon />
                                : <View style={styles.image} />
                            }
                            <View style={styles.selectBody} >
                                <Text style={styles.label}> { guild.name ? guild.name : 'Selecione um servidor' } </Text>
                            </View>
                            <Feather name="chevron-right" color={theme.colors.heading} size={18} />
                        </View>
                    </RectButton>

                    <View style={styles.field} >
                        <View>
                            <Text style={styles.label}>Dia e mês</Text>
                            <View style={styles.column}>
                                <SmallInput maxLength={2} />
                                <Text style={styles.divider}>/</Text>
                                <SmallInput maxLength={2} />
                            </View>
                        </View>

                        <View>
                            <Text style={styles.label}>Horário</Text>
                            <View style={styles.column}>
                                <SmallInput maxLength={2} />
                                <Text style={styles.divider}>:</Text>
                                <SmallInput maxLength={2} />
                            </View>
                        </View>
                    </View>

                    <View style={[styles.field, { marginBottom: 12 }]}>
                        <Text style={styles.label}>Descrição</Text>
                        <Text style={styles.caracterLimit}>Max 100 caracteres</Text>
                    </View>
                    <Textarea multiline maxLength={100} numberOfLines={5} autoCorrect={false}  />

                    <View style={styles.footer}>
                        <Button title="Agendar" />
                    </View>
                </View>
            </ScrollView>

            <ModalView visible={openGuildModal}>
                <Guilds  selectedGuild={handleGuildSelected} />
            </ModalView>
        </KeyboardAvoidingView>
    )
}