import { Column } from '@hautechai/webui.column';
import { Row } from '@hautechai/webui.row';
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

type FieldProps = LockedProps & {
    title?: string;
    direction?: 'vertical' | 'horizontal';
    error?: string;
    caption?: string;
    children: React.ReactNode;
};

export const Field = (props: FieldProps) => {
    const { title, direction = 'vertical', error, caption, locked, onLockedClick, children } = props;
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
                    {children}
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
