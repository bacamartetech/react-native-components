import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Container from '../../components/Container';
import Radio from '../../components/Radio';
import Select from '../../components/Select';

const Main: React.FC = () => {
    const [isPrivate, setIsPrivate] = useState(true);
    const [num, setNum] = useState(2);
    const nums = [
        { label: 'opção 1', value: 1 },
        { label: 'opção 2', value: 2 },
        { label: 'opção 3', value: 3 },
        { label: 'opção 4', value: 4 },
        { label: 'opção 5', value: 5 },
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
                <Radio checked={isPrivate} label="Privado" onPress={() => setIsPrivate(true)} />
                <Radio checked={!isPrivate} label="Público" onPress={() => setIsPrivate(false)} />
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
