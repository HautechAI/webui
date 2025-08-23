import React from 'react';
import { SegmentedControl } from '@hautechai/webui.segmentedcontrol';
import { AlignTopIcon, AlignMiddleIcon, AlignBottomIcon } from '@hautechai/webui.icon';

export type VerticalAlignmentControlProps = {
    value?: 'top' | 'middle' | 'bottom';
    onChange?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, value: 'top' | 'middle' | 'bottom') => void;
    size?: 'default' | 'small';
};

const VerticalAlignmentControl = ({ value, onChange, size }: VerticalAlignmentControlProps) => {
    const options = [
        {
            value: 'top' as const,
            leadingIcon: <AlignTopIcon />,
        },
        {
            value: 'middle' as const,
            leadingIcon: <AlignMiddleIcon />,
        },
        {
            value: 'bottom' as const,
            leadingIcon: <AlignBottomIcon />,
        },
    ];

    const handleChange = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, newValue: string) => {
        onChange?.(event, newValue as 'top' | 'middle' | 'bottom');
    };

    return <SegmentedControl options={options} value={value} onChange={handleChange} whitespace="m" size={size} />;
};

export default VerticalAlignmentControl;
