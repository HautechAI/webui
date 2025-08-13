import { useCallback } from 'react';
import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';
import { IconButton } from '@hautechai/webui.iconbutton';
import { MinusIcon, PlusIcon } from '@hautechai/webui.icon';
import { Typography } from '@hautechai/webui.typography';

const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${themeVars.spacing.m};
    border: ${themeVars.stroke.thin} solid ${themeVars.layout.strokes};
    border-radius: ${themeVars.cornerRadius.m};
    min-width: 120px;
    color: ${themeVars.layout.onSurface.secondary};
    box-sizing: border-box;
`;

const CounterValue = styled(Typography)`
    width: 32px;
    height: 32px;
    align-content: center;
    padding: ${themeVars.spacing.xs};
    text-align: center;
`;

export type CounterProps = {
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    onChange: (value: number) => void;
};

export const Counter = ({ min, max, step = 1, value = 0, onChange }: CounterProps) => {
    const handleDecrement = useCallback(() => {
        onChange(value - step);
    }, [value, min, onChange]);

    const handleIncrement = useCallback(() => {
        onChange(value + step);
    }, [value, max, onChange]);

    return (
        <CounterContainer>
            <IconButton
                size="small"
                variant="flat"
                onClick={handleDecrement}
                disabled={value === min}
                icon={<MinusIcon size={20} />}
            />
            <CounterValue textAlign='center' variant="LabelSmallRegular">{value}</CounterValue>
            <IconButton
                size="small"
                variant="flat"
                onClick={handleIncrement}
                disabled={value === max}
                icon={<PlusIcon size={20} />}
            />
        </CounterContainer>
    );
};
