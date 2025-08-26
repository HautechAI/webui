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
    stretch?: boolean;
    size?: 'default' | 'small';
};

const SegmentedControl = ({
    options,
    defaultValue: _defaultValue,
    value,
    onChange,
    material,
    whitespace,
    stretch,
    size = 'default',
}: SegmentedControlProps) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, value: string) => {
        onChange?.(e, value);
    };

    const Container = material ? MaterialContainer : HIGContainer;
    const Row = material ? MaterialRow : HIGRow;

    const injectIconSize = (icon: React.ReactNode): React.ReactNode => {
        if (React.isValidElement(icon) && icon.props && typeof icon.type !== 'string') {
            return React.cloneElement(icon as React.ReactElement<any>, { ...icon.props, size: 20 });
        }
        return icon;
    };

    return (
        <Container data-stretch={stretch}>
            {options.map(({ label, leadingIcon, trailingIcon, value: optionValue }) => {
                const isSelected = value === optionValue;
                return (
                    <Row
                        data-selected={isSelected}
                        data-whitespace={whitespace}
                        data-stretch={stretch}
                        data-size={size}
                        key={optionValue}
                        onClick={(e) => handleClick(e, optionValue)}
                    >
                        {leadingIcon && <Icon data-selected={isSelected}>{injectIconSize(leadingIcon)}</Icon>}
                        {label && <Typography variant={'LabelSmallRegular'}>{label}</Typography>}
                        {trailingIcon && <Icon data-selected={isSelected}>{injectIconSize(trailingIcon)}</Icon>}
                    </Row>
                );
            })}
        </Container>
    );
};

export default SegmentedControl;
