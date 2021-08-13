import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';


export const Textarea = ({...rest}:TextInputProps) => {
    return (
        <TextInput {...rest} style={styles.container} keyboardType='default'  />
    )
}