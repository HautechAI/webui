import { useCallback } from 'react';
import { styled } from '@hautechai/webui.themeprovider';
import { IconButton } from '@hautechai/webui.iconbutton';
import { LockIcon, MinusIcon, PlusIcon } from '@hautechai/webui.icon';
import { Typography } from '@hautechai/webui.typography';
import { Row } from '@hautechai/webui.row';

const Container = styled.div<{ clickable?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
    flex: 1;
`;

const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.foundation.spacing.m}px;
    border: ${({ theme }) => theme.foundation.stroke.thin}px solid ${({ theme }) => theme.palette.layout.strokes};
    border-radius: ${({ theme }) => theme.foundation.cornerRadius.s}px;
    min-width: 120px;
    color: ${({ theme }) => theme.palette.layout.onSurface.secondary};
    box-sizing: border-box;
`;

const CounterValue = styled(Typography)`
    width: 32px;
    height: 32px;
    align-content: center;
    padding: ${({ theme }) => theme.foundation.spacing.xs}px;
    text-align: center;
`;

type LockedProps = {
    locked: true;
    onLockedClick: () => void;
};

type UnlockedProps = {
    locked?: false;
    onLockedClick?: never;
};

export type CounterProps = (LockedProps | UnlockedProps) & {
    label?: string;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    onChange: (value: number) => void;
};

export const Counter = ({ label, locked, onLockedClick, min, max, step = 1, value = 0, onChange }: CounterProps) => {
    const handleDecrement = useCallback(() => {
        onChange(value - step);
    }, [value, min, onChange]);

    const handleIncrement = useCallback(() => {
        onChange(value + step);
    }, [value, max, onChange]);

    return (
        <Container clickable={locked} onClick={locked ? onLockedClick : undefined}>
            {(label || locked) && (
                <Row spacing="xs" align="center">
                    {label && (
                        <Typography variant="LabelSmallEmphasized" color="layout.onSurface.tertiary">
                            {label}
                        </Typography>
                    )}
                    {locked && <LockIcon size={20} color="layout.onSurface.secondary" />}
                </Row>
            )}
            <CounterContainer>
                <IconButton
                    size="small"
                    variant="flat"
                    onClick={locked ? undefined : handleDecrement}
                    disabled={value === min}
                    icon={<MinusIcon size={20} />}
                />
                <CounterValue variant="LabelSmallRegular">{value}</CounterValue>
                <IconButton
                    size="small"
                    variant="flat"
                    onClick={locked ? undefined : handleIncrement}
                    disabled={value === max}
                    icon={<PlusIcon size={20} />}
                />
            </CounterContainer>
        </Container>
    );
};
