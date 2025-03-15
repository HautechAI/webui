import React, { useCallback, useEffect, useState } from 'react';
import { Typography } from '@hautechai/webui.typography';
import { MaterialContainer, HIGContainer, MaterialRow, HIGRow, WhiteSpace, Icon } from './SegmentedControl.styles';
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

const SegmentedControl = ({ options, defaultValue, value, onChange, material, whitespace }: SegmentedControlProps) => {
    const [selected, setSelected] = useState(value ?? defaultValue ?? options[0].value);

    useEffect(() => {
        if (value !== undefined) setSelected(value);
    }, [value]);

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, value: string) => {
        setSelected(value);
        onChange?.(e, value);
    };

    const Container = material ? MaterialContainer : HIGContainer;
    const Row = material ? MaterialRow : HIGRow;

    return (
        <Container>
            {options.map(({ label, leadingIcon, trailingIcon, value }) => {
                const isSelected = selected === value;
                const showEmptySpace = !material && (label || !!leadingIcon === !!trailingIcon);
                return (
                    <Row selected={isSelected} key={value} onClick={(e) => handleClick(e, value)}>
                        {showEmptySpace && <WhiteSpace whitespace={whitespace} />}
                        {leadingIcon && <Icon selected={isSelected}>{leadingIcon}</Icon>}
                        {label && (
                            <Typography
                                variant={'LabelSmallRegular'}
                                color={isSelected ? 'layout.onSurface.primary' : 'layout.onSurface.tertiary'}
                            >
                                {label}
                            </Typography>
                        )}
                        {trailingIcon && <Icon selected={isSelected}>{trailingIcon}</Icon>}
                        {showEmptySpace && <WhiteSpace whitespace={whitespace} />}
                    </Row>
                );
            })}
        </Container>
    );
};

export default SegmentedControl;
