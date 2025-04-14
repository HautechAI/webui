import React from 'react';
import { css, styled } from '@hautechai/webui.themeprovider';
import { Typography, TypographyProps } from '@hautechai/webui.typography';
import { Avatar } from '@hautechai/webui.avatar';
import { Row } from '@hautechai/webui.row';
import { Hint, HintProps } from '@hautechai/webui.hint';

const ColumnContainer = styled.div<Pick<DataItemProps, 'size' | 'primary' | 'stretch'>>`
    display: flex;
    flex-direction: column;
    align-self: center;
    ${({ stretch }) =>
        stretch &&
        css`
            flex: 1;
        `}
`;

const RowContainer = styled(Row)<Pick<DataItemProps, 'size'>>`
    padding: ${({ theme, size }) => (size === 'small' ? 0 : theme.foundation.spacing.m)}px 0;
    gap: ${({ theme }) => theme.foundation.spacing.m}px;
`;

export type DataItemBaseProps = {
    label: string;
    value: string;
    primary?: 'data' | 'heading';
    size?: 'medium' | 'small';
    stretch?: boolean;
};

export type DataItemRowProps = DataItemBaseProps & {
    direction?: 'row';
    trailingIcon?: React.ReactNode;
};

export type DataItemColumnProps = DataItemBaseProps & {
    direction: 'column';
    leadingIcon?: React.ReactNode;
    hintProps?: HintProps;
};

export type DataItemProps = DataItemRowProps | DataItemColumnProps;

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
        <RowContainer justify="space-between" align="center" stretch={stretch} size={props.size}>
            <Typography
                variant="LabelSmallEmphasized"
                color={primary === 'data' ? 'layout.onSurface.tertiary' : 'layout.onSurface.primary'}
            >
                {props.label}
            </Typography>
            <Row spacing="ml" align="center" noOverflow>
                <Typography
                    variant="LabelSmallRegular"
                    color={primary === 'data' ? 'layout.onSurface.primary' : 'layout.onSurface.tertiary'}
                    noWrap
                    overflow="ellipsis"
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
        <Row spacing="m" stretch={stretch}>
            {props.direction === 'column' && props.leadingIcon && <Avatar icon={props.leadingIcon} />}
            <ColumnContainer size={size} primary={primary} stretch={stretch}>
                <Row spacing="xs" align="center">
                    <Typography
                        variant={HeadingTypographyVariants[size][primary]}
                        color={primary === 'data' ? 'layout.onSurface.tertiary' : 'layout.onSurface.primary'}
                    >
                        {props.label}
                    </Typography>
                    {props.direction === 'column' && props.hintProps && <Hint {...props.hintProps} />}
                </Row>
                <Typography
                    variant={DataTypographyVariants[size][primary]}
                    color={primary === 'data' ? 'layout.onSurface.primary' : 'layout.onSurface.tertiary'}
                >
                    {props.value}
                </Typography>
            </ColumnContainer>
        </Row>
    );
};
