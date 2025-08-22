import { useCallback } from 'react';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { IconButton } from '@hautechai/webui.iconbutton';
import { MinusIcon, PlusIcon } from '@hautechai/webui.icon';
import { Typography } from '@hautechai/webui.typography';

const ZoomContainer = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${themeVars.spacing.m};
    padding: ${themeVars.spacing.m};
    background: ${themeVars.layout.surfaceLow};
    border-radius: ${themeVars.cornerRadius.m};
    border: ${themeVars.stroke.thin} solid ${themeVars.layout.strokes};
    box-sizing: border-box;
`;

const ZoomControls = styled.div`
    display: flex;
    align-items: center;
    gap: ${themeVars.spacing.m};
`;

export type ZoomProps = {
    value: number;
    onChange: (value: number) => void;
    step?: number;
};

export const Zoom = ({ value, onChange, step = 10 }: ZoomProps) => {
    const handleDecrement = useCallback(() => {
        const newValue = Math.floor(value / step) * step;
        // If value is already at a step boundary, go to previous step
        const finalValue = newValue === value ? newValue - step : newValue;
        onChange(finalValue);
    }, [value, onChange, step]);

    const handleIncrement = useCallback(() => {
        const newValue = Math.ceil(value / step) * step;
        // If value is already at a step boundary, go to next step
        const finalValue = newValue === value ? newValue + step : newValue;
        onChange(finalValue);
    }, [value, onChange, step]);

    return (
        <ZoomContainer>
            <ZoomControls>
                <IconButton size="xsmall" variant="flat" onClick={handleDecrement} icon={<MinusIcon />} />
                <Typography variant="Body" textAlign="center">
                    {Math.round(value)}%
                </Typography>
                <IconButton size="xsmall" variant="flat" onClick={handleIncrement} icon={<PlusIcon />} />
            </ZoomControls>
        </ZoomContainer>
    );
};
