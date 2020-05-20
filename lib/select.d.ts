import React from 'react';
declare type SelectProps = {
    options: any[];
    value: any;
    label: string;
    valueExtractor(option: any): any;
    labelExtractor(option: any): any;
    onChange(option: any): void;
};
declare const Select: React.FC<SelectProps>;
export default Select;
//# sourceMappingURL=select.d.ts.map