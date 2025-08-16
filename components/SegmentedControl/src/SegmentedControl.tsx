import React from 'react';
import { Typography } from '@hautechai/webui.typography';
import { MaterialContainer, HIGContainer, MaterialRow, HIGRow, Icon } from './SegmentedControl.styles';
import { ThemeType } from '@hautechai/webui.themeprovider';

type Option = {
    label?: string;
    value: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
};

export type SegmentedControlProps = {
    options: Option[];
    defaultValue?: string;
    value?: string;
    onChange?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, value: string) => void;
    material?: boolean;
    whitespace?: keyof ThemeType['foundation']['spacing'];
};

const SegmentedControl = ({ options, defaultValue: _defaultValue, value, onChange, material, whitespace: _whitespace }: SegmentedControlProps) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, value: string) => {
        onChange?.(e, value);
    };

    const Container = material ? MaterialContainer : HIGContainer;
    const Row = material ? MaterialRow : HIGRow;

    return (
        <Container>
            {options.map(({ label, leadingIcon, trailingIcon, value: optionValue }) => {
                const isSelected = value === optionValue;
                return (
                    <Row
                        data-selected={isSelected}
                        key={optionValue}
                        onClick={(e) => handleClick(e, optionValue)}
                    >
                        {leadingIcon && <Icon data-selected={isSelected}>{leadingIcon}</Icon>}
                        {label && <Typography variant={'LabelSmallRegular'}>{label}</Typography>}
                        {trailingIcon && <Icon data-selected={isSelected}>{trailingIcon}</Icon>}
                    </Row>
                );
            })}
        </Container>
    );
};

export default SegmentedControl;
