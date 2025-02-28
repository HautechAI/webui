import { css, styled } from '@hautechai/webui.themeprovider';
import { Typography, TypographyProps } from '@hautechai/webui.typography';

const Container = styled.div<Pick<DataItemProps, 'size' | 'primary' | 'stretch'>>`
    display: flex;
    flex-direction: column;
    gap: ${({ theme, size }) => (size === 'medium' ? theme.foundation.spacing.s : 0)}px;
    ${({ stretch }) =>
        stretch &&
        css`
            flex: 1;
        `}
`;

export type DataItemProps = {
    label: string;
    value: string;
    size?: 'medium' | 'small';
    primary?: 'data' | 'heading';
    stretch?: boolean;
};

const HeadingTypographyVariants: Record<
    Required<DataItemProps>['size'],
    Record<Required<DataItemProps>['primary'], TypographyProps['variant']>
> = {
    medium: {
        data: 'LabelSmallRegular',
        heading: 'LabelMediumEmphasized',
    },
    small: {
        data: 'CaptionRegular',
        heading: 'LabelSmallEmphasized',
    },
};

const DataTypographyVariants: Record<
    Required<DataItemProps>['size'],
    Record<Required<DataItemProps>['primary'], TypographyProps['variant']>
> = {
    medium: {
        data: 'LabelMediumEmphasized',
        heading: 'LabelSmallRegular',
    },
    small: {
        data: 'LabelSmallEmphasized',
        heading: 'CaptionRegular',
    },
};

export const DataItem = (props: DataItemProps) => {
    const { size = 'medium', primary = 'data', stretch } = props;
    return (
        <Container size={size} primary={primary}>
            <Typography
                variant={HeadingTypographyVariants[size][primary]}
                color={primary === 'data' ? 'layout.onSurface.tertiary' : 'layout.onSurface.primary'}
            >
                {props.label}
            </Typography>
            <Typography
                variant={DataTypographyVariants[size][primary]}
                color={primary === 'data' ? 'layout.onSurface.primary' : 'layout.onSurface.tertiary'}
            >
                {props.value}
            </Typography>
        </Container>
    );
};
