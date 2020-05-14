import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Select = ({
    options = [],
    value,
    label = '-- choose an option --',
    valueExtractor = (i) => i,
    labelExtractor = (i) => i,
    onChange = (item) => {},
}) => {
    const [showOptions, setShowOptions] = useState(false);

    function handleSelect(item) {
        const _item = valueExtractor(item);

        onChange(_item);
        setShowOptions(false);
    }

    function comparator(item) {
        return valueExtractor(item) === value;
    }

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setShowOptions(!showOptions)}>
                <View style={styles.container}>
                    {options.find(comparator) ? (
                        <Text>{labelExtractor(options.find(comparator))}</Text>
                    ) : (
                        <Text>{label}</Text>
                    )}
                    <Icon name="chevron-down" size={24} />
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={showOptions} transparent={true}>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        padding: 15,
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}
                    activeOpacity={1}
                    onPress={() => setShowOptions(false)}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                        <View style={styles.listItem}>
                            <View style={styles.container}>
                                <Text>{label}</Text>
                            </View>
                        </View>
                        {options.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                activeOpacity={0.85}
                                style={styles.listItem}
                                onPress={() => handleSelect(item)}>
                                {comparator(item) ? (
                                    <Icon name="check-circle-outline" size={24} />
                                ) : (
                                    <Icon name="checkbox-blank-circle-outline" size={24} />
                                )}
                                <Text style={{ marginLeft: 10 }}>{labelExtractor(item)}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </TouchableOpacity>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 2,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 10,
        backgroundColor: '#ffffff',
    },
});

export default Select;
