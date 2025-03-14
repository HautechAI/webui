import { css, styled } from '@hautechai/webui.themeprovider';
import { Typography, TypographyProps } from '@hautechai/webui.typography';
import { Row } from '@hautechai/webui.row';
import React from 'react';

const ColumnContainer = styled.div<Pick<DataItemProps, 'size' | 'primary' | 'stretch'>>`
    display: flex;
    flex-direction: column;
    gap: ${({ theme, size }) => (size === 'medium' ? theme.foundation.spacing.s : 0)}px;
    ${({ stretch }) =>
        stretch &&
        css`
            flex: 1;
        `}
`;

const RowContainer = styled(Row)`
    padding: ${({ theme }) => theme.foundation.spacing.m}px 0;
`;

export type DataItemProps = {
    label: string;
    value: string;
    size?: 'medium' | 'small';
    primary?: 'data' | 'heading';
    stretch?: boolean;
    direction?: 'row' | 'column';
    trailingIcon?: React.ReactNode;
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
    return props.direction === 'row' ? (
        <RowContainer justify="space-between" stretch={stretch}>
            <Typography
                variant="LabelSmallEmphasized"
                color={primary === 'data' ? 'layout.onSurface.tertiary' : 'layout.onSurface.primary'}
            >
                {props.label}
            </Typography>
            <Row spacing="ml">
                <Typography
                    variant="LabelSmallRegular"
                    color={primary === 'data' ? 'layout.onSurface.primary' : 'layout.onSurface.tertiary'}
                >
                    {props.value}
                </Typography>

                {React.Children.map(props.trailingIcon, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            size: 20,
                        } as any);
                    }
                    return child;
                })}
            </Row>
        </RowContainer>
    ) : (
        <ColumnContainer size={size} primary={primary} stretch={stretch}>
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
        </ColumnContainer>
    );
};
