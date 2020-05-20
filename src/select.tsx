import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
    Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type SelectProps = {
    options: any[];
    value: any;
    label: string;
    valueExtractor(option: any): any;
    labelExtractor(option: any): any;
    onChange(option: any): void;
};

const Select: React.FC<SelectProps> = ({
    options = [],
    value = null,
    label = '-- choose an option --',
    valueExtractor = (option) => option,
    labelExtractor = (option) => option,
    onChange = () => {},
}) => {
    const [showOptions, setShowOptions] = useState(false);

    function handleSelect(option: any) {
        const _option = valueExtractor(option);

        onChange(_option);
        setShowOptions(false);
    }

    function comparator(option: any) {
        return valueExtractor(option) === value;
    }

    return (
        <>
            <TouchableWithoutFeedback
                onPress={() => setShowOptions(!showOptions)}>
                <View style={styles.label}>
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
                    style={styles.overlay}
                    activeOpacity={1}
                    onPress={() => setShowOptions(false)}>
                    <ScrollView
                        contentContainerStyle={{
                            flexGrow: 1,
                            justifyContent: 'center',
                        }}>
                        <View style={styles.listItem}>
                            <View style={styles.label}>
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
                                    <Icon
                                        name="check-circle-outline"
                                        size={24}
                                    />
                                ) : (
                                    <Icon
                                        name="checkbox-blank-circle-outline"
                                        size={24}
                                    />
                                )}
                                <Text style={{ marginLeft: 10 }}>
                                    {labelExtractor(item)}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </TouchableOpacity>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    label: {
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 2,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    overlay: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
