import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Container from '../../components/Container';
import Radio from '../../components/Radio';
import Select from '../../components/Select';

const Main: React.FC = () => {
    const [isPrivate, setIsPrivate] = useState(true);
    const [num, setNum] = useState(2);
    const nums = [
        { label: 'Option #1', value: 1 },
        { label: 'Option #2', value: 2 },
        { label: 'Option #3', value: 3 },
        { label: 'Option #4', value: 4 },
        { label: 'Option #5', value: 5 },
    ];

    return (
        <Container style={{ flex: 1, justifyContent: 'center' }}>
            <Text>Radios</Text>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                <Radio checked={isPrivate} label="Privado" color="#286b86" onPress={() => setIsPrivate(true)} />
                <Radio checked={!isPrivate} label="Público" color="#286b86" onPress={() => setIsPrivate(false)} />
            </View>

            <Text style={{ marginTop: 20 }}>Combobox</Text>
            <Select
                options={nums}
                value={num}
                labelExtractor={(item) => item.label}
                valueExtractor={(item) => item.value}
                onChange={(item) => setNum(item)}
            />
        </Container>
    );
};

export default Main;
