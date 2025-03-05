import React, { useCallback, useMemo, useState } from 'react';
import { Typography } from '@hautechai/webui.typography';
import { MaterialContainer, HIGContainer, MaterialRow, HIGRow, EmptySpace } from './SegmentedControl.styles';

type Option = {
    label?: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
};

export type SegmentedControlProps = {
    options: Option[];
    defaultSelectedIndex?: number;
    onTabChange?: (index: number) => void;
    material?: boolean;
};

const SegmentedControl = ({ options, defaultSelectedIndex = 0, onTabChange, material }: SegmentedControlProps) => {
    const [selected, setSelected] = useState(defaultSelectedIndex);

    const handleClick = useCallback(
        (index: number) => {
            setSelected(index);
            if (onTabChange) onTabChange(index);
        },
        [onTabChange],
    );

    const Container = useMemo(() => (material ? MaterialContainer : HIGContainer), [material]);
    const Row = useMemo(() => (material ? MaterialRow : HIGRow), [material]);

    return (
        <Container>
            {options.map(({ label, leadingIcon, trailingIcon }, index) => {
                const isSelected = selected === index;
                const showEmptySpace = !material && (label || !!leadingIcon === !!trailingIcon);
                return (
                    <Row selected={isSelected} key={index} onClick={() => handleClick(index)}>
                        {showEmptySpace && <EmptySpace />}
                        {leadingIcon}
                        {label && (
                            <Typography
                                variant={isSelected ? 'LabelSmallEmphasized' : 'LabelSmallRegular'}
                                color={isSelected ? 'layout.onSurface.primary' : 'layout.onSurface.tertiary'}
                            >
                                {label}
                            </Typography>
                        )}
                        {trailingIcon}
                        {showEmptySpace && <EmptySpace />}
                    </Row>
                );
            })}
        </Container>
    );
};

export default SegmentedControl;
