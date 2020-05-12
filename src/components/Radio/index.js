import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Radio = ({ checked = false, label = '', onPress = () => {} }) => {
    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={checked ? styles.buttonChecked : styles.buttonUnchecked}
            activeOpacity={0.85}>
            {checked && <Icon name="check-circle-outline" size={24} style={styles.buttonIconChecked} />}
            {!checked && <Icon name="checkbox-blank-circle-outline" size={24} style={styles.buttonIconUnchecked} />}
            <Text style={checked ? styles.buttonTextChecked : styles.buttonTextUnchecked}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonChecked: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#555555',
        borderRadius: 2,
        height: 50,
        backgroundColor: '#ffffff',
    },

    buttonUnchecked: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 2,
        height: 50,
    },

    buttonIconChecked: {
        color: '#555555',
    },

    buttonIconUnchecked: {
        color: '#ffffff',
    },

    buttonTextChecked: {
        fontWeight: 'bold',
        color: '#555555',
        marginLeft: 5,
    },

    buttonTextUnchecked: {
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft: 5,
    },
});

export default Radio;
