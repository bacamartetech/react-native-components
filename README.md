# React Native Components
> A collection of React Native components.

## Install

### Using yarn
```sh
yarn add victorwpbastos/react-native-components
```

### Using npm
```sh
npm install victorwpbastos/react-native-components
```

## Components

### Radio

#### Usage

```jsx
import React, { useState } from 'react';

const App = () => {
    const [option, setOption] = useState(1);

    return (
        <>
            <Radio
                checked={option === 1}
                label="Option 1"
                onPress={() => setOption(1)}
            />

            <Radio
                checked={option === 2}
                label="Option 2"
                onPress={() => setOption(2)}
            />
        </>
    )
}

export default App;
```

#### Props

| Property        | Default Value | Description |
|-----------------|:-------------:|-------------|
| label           | ''            | Set button text                                |
| checked         | false         | Set button visual state                        |
| color           | '#555555'     | Set colors (border, background, text and icon) |
| onPress         | () => {}      | Action triggered when component is clicked     |
| buttonStyle     | {}            | Override button styles                         |
| buttonIconStyle | {}            | Override button icon styles                    |
| buttonTextStyle | {}            | Override button text styles                    |

---

### Select

#### Usage

```jsx
import React, { useState } from 'react';

const App = () => {
    const [option, setOption] = useState(1);

    const options = [
        { label: 'Option #1', value: 1 },
        { label: 'Option #2', value: 2 },
        { label: 'Option #3', value: 3 },
        { label: 'Option #4', value: 4 },
        { label: 'Option #5', value: 5 },
    ];

    return (
        <Select
            options={options}
            value={option}
            labelExtractor={(item) => item.label}
            valueExtractor={(item) => item.value}
            onChange={(item) => setOption(item)}
        />
    )
}

export default App;
```

#### Props

| Property        | Default Value            | Description                                                           |
|-----------------|:------------------------:|-----------------------------------------------------------------------|
| label           | '-- choose an option --' | Set button unselected state text                                      |
| options         | []                       | The options array that will populate component options                |
| value           | ''                       | Set selected option                                                   |
| valueExtractor  | (item) => item           | Function to get the property of the item that should be used as value |
| labelExtractor  | (item) => item           | Function to get the property of the item that should be used as label |
| onChange        | (item) => {}             | Action triggered when selected value changes                          |