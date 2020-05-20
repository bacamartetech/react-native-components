import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
declare type RadioProps = {
    checked: boolean;
    label: string;
    color: string;
    buttonStyle?: StyleProp<ViewStyle>;
    buttonIconStyle?: StyleProp<TextStyle>;
    buttonTextStyle?: StyleProp<TextStyle>;
    onPress(): void;
};
declare const Radio: React.FC<RadioProps>;
export default Radio;
//# sourceMappingURL=radio.d.ts.map