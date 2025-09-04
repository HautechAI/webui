import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import React, { useCallback } from 'react';

const Container = styled.input`
    background: ${themeVars.actions.primary};
    appearance: none;
    -webkit-appearance: none;
    border-radius: ${themeVars.cornerRadius.s};
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: linear-gradient(
        to right,
        ${themeVars.actions.primary} 0%,
        ${themeVars.actions.primary} var(--slider-percentage, 0%),
        ${themeVars.layout.surfaceMid} var(--slider-percentage, 0%),
        ${themeVars.layout.surfaceMid} 100%
    );

    &::-webkit-slider-thumb {
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border-width: ${themeVars.stroke.thick};
        border-style: solid;
        border-color: ${themeVars.layout.surfaceLow};
        background: ${themeVars.actions.primary};
        cursor: pointer;
    }
`;

export type SliderProps = {
    min: number;
    max: number;
    step?: number;
    value: number;
    onChange: (value: number) => void;
    testId?: string;
};

const Slider = ({ min, max, step = 1, value, onChange, testId }: SliderProps) => {
    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            onChange(Number(event.target.value));
        },
        [onChange],
    );

    const percentage = ((value - min) / (max - min)) * 100;

    return (
        <Container
            style={{ ['--slider-percentage' as string]: `${percentage}%` }}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
            data-testid={testId}
        />
    );
};

export default Slider;
