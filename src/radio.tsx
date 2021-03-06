import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    StyleProp,
    ViewStyle,
    TextStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type RadioProps = {
    checked: boolean;
    label: string;
    color: string;
    buttonStyle?: StyleProp<ViewStyle>;
    buttonIconStyle?: StyleProp<TextStyle>;
    buttonTextStyle?: StyleProp<TextStyle>;
    onPress(): void;
};

const Radio: React.FC<RadioProps> = ({
    checked = false,
    label = '',
    color = '#555555',
    buttonStyle = {},
    buttonIconStyle = {},
    buttonTextStyle = {},
    onPress = () => {},
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.85}
            style={[
                styles.button,
                { borderColor: color },
                buttonStyle,
                checked && { backgroundColor: color },
            ]}
            onPress={() => onPress()}>
            <Icon
                name={
                    checked
                        ? 'check-circle-outline'
                        : 'checkbox-blank-circle-outline'
                }
                size={24}
                style={[
                    { color: checked ? '#ffffff' : color },
                    buttonIconStyle,
                ]}
            />

            <Text
                style={[
                    styles.buttonText,
                    { color: checked ? '#ffffff' : color },
                    buttonTextStyle,
                ]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 2,
        height: 50,
    },

    buttonText: {
        fontWeight: 'bold',
        marginLeft: 5,
    },
});

export default Radio;
