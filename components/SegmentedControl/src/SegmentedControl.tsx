import React, { useCallback, useState } from 'react';
import { Typography } from '@hautechai/webui.typography';
import { MaterialContainer, HIGContainer, MaterialRow, HIGRow, WhiteSpace, Icon } from './SegmentedControl.styles';
import { ThemeType } from '@hautechai/webui.themeprovider';

type Option = {
    label?: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
};

export type SegmentedControlProps = {
    options: Option[];
    defaultSelectedIndex?: number;
    onTabChange?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => void;
    material?: boolean;
    whitespace?: keyof ThemeType['foundation']['spacing'];
};

const SegmentedControl = ({
    options,
    defaultSelectedIndex = 0,
    onTabChange,
    material,
    whitespace,
}: SegmentedControlProps) => {
    const [selected, setSelected] = useState(defaultSelectedIndex);

    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
            setSelected(index);
            if (onTabChange) onTabChange(e, index);
        },
        [onTabChange],
    );

    const Container = material ? MaterialContainer : HIGContainer;
    const Row = material ? MaterialRow : HIGRow;

    return (
        <Container>
            {options.map(({ label, leadingIcon, trailingIcon }, index) => {
                const isSelected = selected === index;
                const showEmptySpace = !material && (label || !!leadingIcon === !!trailingIcon);
                return (
                    <Row selected={isSelected} key={index} onClick={(e) => handleClick(e, index)}>
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
