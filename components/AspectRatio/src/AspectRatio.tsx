import { SegmentedControl, SegmentedControlProps } from '@hautechai/webui.segmentedcontrol';
import { ArrowAltRight } from '@hautechai/webui.icon';
import { styled } from '@hautechai/webui.themeprovider';

const Box = styled.div<{ width: number; height: number }>`
    height: ${({ height }) => height}px;
    width: ${({ width }) => width}px;
    border-color: ${({ theme }) => theme.palette.layout.onSurface.primary};
    border-style: solid;
    border-width: ${({ theme }) => theme.foundation.stroke.thick}px;
    border-radius: ${({ theme }) => theme.foundation.cornerRadius.s}px;
    margin-right: ${({ theme }) => theme.foundation.spacing.xs}px;
`;

export const AspectRatio = (props: SegmentedControlProps) => {
    return (
        <SegmentedControl
            {...props}
            options={[
                { label: '1:1', leadingIcon: <Box width={18} height={18} /> },
                { label: '2:3', leadingIcon: <Box width={12} height={18} /> },
                { label: '12:5', leadingIcon: <Box width={18} height={12} /> },
                { leadingIcon: <ArrowAltRight /> },
            ]}
            whitespace="m"
        />
    );
};
