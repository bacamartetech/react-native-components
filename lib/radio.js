import React from 'react';
import { Text, TouchableOpacity, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
var Radio = function (_a) {
    var _b = _a.checked, checked = _b === void 0 ? false : _b, _c = _a.label, label = _c === void 0 ? '' : _c, _d = _a.color, color = _d === void 0 ? '#555555' : _d, _e = _a.buttonStyle, buttonStyle = _e === void 0 ? {} : _e, _f = _a.buttonIconStyle, buttonIconStyle = _f === void 0 ? {} : _f, _g = _a.buttonTextStyle, buttonTextStyle = _g === void 0 ? {} : _g, _h = _a.onPress, onPress = _h === void 0 ? function () { } : _h;
    return (<TouchableOpacity activeOpacity={0.85} style={[
        styles.button,
        { borderColor: color },
        buttonStyle,
        checked && { backgroundColor: color },
    ]} onPress={function () { return onPress(); }}>
            <Icon name={checked
        ? 'check-circle-outline'
        : 'checkbox-blank-circle-outline'} size={24} style={[
        { color: checked ? '#ffffff' : color },
        buttonIconStyle,
    ]}/>

            <Text style={[
        styles.buttonText,
        { color: checked ? '#ffffff' : color },
        buttonTextStyle,
    ]}>
                {label}
            </Text>
        </TouchableOpacity>);
};
var styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 2,
        height: 50
    },
    buttonText: {
        fontWeight: 'bold',
        marginLeft: 5
    }
});
export default Radio;
