import { Column } from '@hautechai/webui.column';
import { Row } from '@hautechai/webui.row';
import { TextArea, TextAreaProps } from '@hautechai/webui.textarea';
import { TextInput, TextInputProps } from '@hautechai/webui.textinput';
import { styled } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import React, { useCallback, useRef } from 'react';
import { LockIcon } from '@hautechai/webui.icon';

const Container = styled.div<{ disabled?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.foundation.spacing.s}px;
    flex: 1;

    cursor: default;
`;

type LockedProps = {
    locked?: true;
    onLockedClick?: () => void;
};

type BaseProps = LockedProps & {
    title?: string;
    direction?: 'vertical' | 'horizontal';
    error?: string;
    caption?: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    onIconButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    icon?: React.ReactNode;
};

export type FieldProps = BaseProps &
    (
        | { type: 'text' | 'password' | 'email' | 'number'; inputProps?: TextInputProps }
        | { type: 'textarea'; textareaProps?: TextAreaProps }
    );

export const Field = (props: FieldProps) => {
    const {
        type,
        title,
        direction = 'vertical',
        error,
        caption,
        locked,
        leadingIcon,
        trailingIcon,
        icon,
        onIconButtonClick,
        onLockedClick,
    } = props;
    const ref = useRef<HTMLDivElement>(null);
    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            if (onLockedClick) {
                event.stopPropagation();
                onLockedClick();
            }
        },
        [onLockedClick],
    );
    const Main = direction === 'vertical' ? Column : Row;

    return (
        <Container onClick={handleClick} ref={ref}>
            <Main spacing={direction === 'vertical' ? 'm' : 'ml'} stretch>
                <Row spacing="s" align="center">
                    {title && (
                        <Typography variant="LabelSmallEmphasized" color={'layout.onSurface.tertiary'}>
                            {title}
                        </Typography>
                    )}
                    {locked && <LockIcon size={16} color="layout.onSurface.secondary" />}
                </Row>
                <Row stretch spacing="s" align="center">
                    {type === 'textarea' ? (
                        <TextArea
                            hasError={!!error}
                            icon={icon}
                            leadingIcon={leadingIcon}
                            trailingIcon={trailingIcon}
                            onIconButtonClick={locked ? undefined : onIconButtonClick}
                            {...props.textareaProps}
                            onChange={locked ? undefined : props.textareaProps?.onChange}
                        />
                    ) : (
                        <TextInput
                            type={type}
                            hasError={!!error}
                            icon={icon}
                            leadingIcon={leadingIcon}
                            trailingIcon={trailingIcon}
                            onIconButtonClick={locked ? undefined : onIconButtonClick}
                            {...props.inputProps}
                            onChange={locked ? undefined : props.inputProps?.onChange}
                        />
                    )}
                </Row>
            </Main>
            {caption && (
                <Typography variant="CaptionRegular" color="layout.onSurface.secondary">
                    {caption}
                </Typography>
            )}
            {error && (
                <Typography variant="CaptionRegular" color="actions.error">
                    {error}
                </Typography>
            )}
        </Container>
    );
};
