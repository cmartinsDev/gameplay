import React from "react";
import { StyleSheet, View } from 'react-native';
import { theme } from "../../global/styles/theme";

export function ListDivider() {
    return(
        <View style={styles.container}/>
    )
}

export const styles = StyleSheet.create({
    container: {
        width: '75%',
        height: 1,
        backgroundColor: theme.colors.secondary40,
        marginTop: 2,
        marginVertical: 31,
        alignSelf: 'flex-end'
    }
})