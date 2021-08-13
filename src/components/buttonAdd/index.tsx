import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";


export function ButtonAdd({...rest}: RectButtonProps) {
    return(
        <RectButton {...rest} style={styles.container}>
            <MaterialCommunityIcons name="plus" color={theme.colors.heading} size={24} />

        </RectButton>
    )
}