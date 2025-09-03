import { Avatar } from '@hautechai/webui.avatar';
import { Hint, HintProps } from '@hautechai/webui.hint';
import { Row } from '@hautechai/webui.row';
import { styled, themeVars } from '@hautechai/webui.themeprovider';
import { Typography, TypographyProps } from '@hautechai/webui.typography';
import React from 'react';

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    /* dynamic stretch applied via style prop */
`;

const RowContainer = styled(Row)`
    gap: ${themeVars.spacing.m};
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
    testId?: string;
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
        <div style={{ padding: `${props.size === 'small' ? '0' : 'var(--spacing-m)'} 0` }}>
            <RowContainer justify="space-between" align="center" stretch={stretch}>
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
                        if (React.isValidElement<{ size: number }>(child)) {
                            return React.cloneElement(child, {
                                size: 20,
                            });
                        }
                        return child;
                    })}
                </Row>
            </RowContainer>
        </div>
    ) : (
        <Row spacing="m" stretch={stretch}>
            {props.direction === 'column' && props.leadingIcon && <Avatar icon={props.leadingIcon} />}
            <ColumnContainer style={{ flex: stretch ? 1 : undefined }}>
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
