import { SegmentedControl, SegmentedControlProps } from '@hautechai/webui.segmentedcontrol';
import { ArrowAltRight } from '@hautechai/webui.icon';
import { styled } from '@hautechai/webui.themeprovider';

const Box = styled.div<{ width: number; height: number }>`
    height: ${({ height }) => height}px;
    width: ${({ width }) => width}px;
    border-color: ${({ theme }) => theme.palette.layout.onSurface.primary};
    border-style: solid;
    border-width: ${({ theme }) => theme.foundation.stroke.standard}px;
    border-radius: ${({ theme }) => theme.foundation.cornerRadius.s}px;
    margin-right: ${({ theme }) => theme.foundation.spacing.xs}px;
`;

export const AspectRatio = (props: SegmentedControlProps) => {
    return (
        <SegmentedControl
            {...props}
            options={[
                { label: '1:1', leadingIcon: <Box width={16} height={16} /> },
                { label: '2:3', leadingIcon: <Box width={13} height={16} /> },
                { label: '12:5', leadingIcon: <Box width={16} height={13} /> },
                { leadingIcon: <ArrowAltRight /> },
            ]}
            whitespace="m"
        />
    );
};
