import React from 'react';
import { SegmentedControl } from '@hautechai/webui.segmentedcontrol';
import { AlignTextLeftIcon, AlignTextCenterIcon, AlignTextRightIcon } from '@hautechai/webui.icon';

export type HorizontalTextAlignmentControlProps = {
    value?: 'left' | 'center' | 'right';
    onChange?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, value: 'left' | 'center' | 'right') => void;
    size?: 'default' | 'small';
};

const HorizontalTextAlignmentControl = ({ value, onChange, size }: HorizontalTextAlignmentControlProps) => {
    const options = [
        {
            value: 'left' as const,
            leadingIcon: <AlignTextLeftIcon />,
        },
        {
            value: 'center' as const,
            leadingIcon: <AlignTextCenterIcon />,
        },
        {
            value: 'right' as const,
            leadingIcon: <AlignTextRightIcon />,
        },
    ];

    const handleChange = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, newValue: string) => {
        onChange?.(event, newValue as 'left' | 'center' | 'right');
    };

    return <SegmentedControl options={options} value={value} onChange={handleChange} whitespace="m" size={size} />;
};

export default HorizontalTextAlignmentControl;
