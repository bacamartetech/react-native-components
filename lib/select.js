import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Modal, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
var Select = function (_a) {
    var _b = _a.options, options = _b === void 0 ? [] : _b, _c = _a.value, value = _c === void 0 ? null : _c, _d = _a.label, label = _d === void 0 ? '-- choose an option --' : _d, _e = _a.valueExtractor, valueExtractor = _e === void 0 ? function (option) { return option; } : _e, _f = _a.labelExtractor, labelExtractor = _f === void 0 ? function (option) { return option; } : _f, _g = _a.onChange, onChange = _g === void 0 ? function () { } : _g;
    var _h = useState(false), showOptions = _h[0], setShowOptions = _h[1];
    function handleSelect(option) {
        var _option = valueExtractor(option);
        onChange(_option);
        setShowOptions(false);
    }
    function comparator(option) {
        return valueExtractor(option) === value;
    }
    return (<>
            <TouchableWithoutFeedback onPress={function () { return setShowOptions(!showOptions); }}>
                <View style={styles.label}>
                    {options.find(comparator) ? (<Text>{labelExtractor(options.find(comparator))}</Text>) : (<Text>{label}</Text>)}
                    <Icon name="chevron-down" size={24}/>
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={showOptions} transparent={true}>
                <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={function () { return setShowOptions(false); }}>
                    <ScrollView contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center'
    }}>
                        <View style={styles.listItem}>
                            <View style={styles.label}>
                                <Text>{label}</Text>
                            </View>
                        </View>

                        {options.map(function (item, index) { return (<TouchableOpacity key={index} activeOpacity={0.85} style={styles.listItem} onPress={function () { return handleSelect(item); }}>
                                {comparator(item) ? (<Icon name="check-circle-outline" size={24}/>) : (<Icon name="checkbox-blank-circle-outline" size={24}/>)}
                                <Text style={{ marginLeft: 10 }}>
                                    {labelExtractor(item)}
                                </Text>
                            </TouchableOpacity>); })}
                    </ScrollView>
                </TouchableOpacity>
            </Modal>
        </>);
};
var styles = StyleSheet.create({
    label: {
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 2,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    overlay: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 10,
        backgroundColor: '#ffffff'
    }
});
export default Select;
