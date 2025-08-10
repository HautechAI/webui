import { styled } from '@linaria/react';
import React, { useCallback } from 'react';

const Container = styled.input<{ percentage: number }>`
    background: ${({ theme }) => theme.palette.actions.primary};
    appearance: none;
    -webkit-appearance: none;
    border-radius: ${({ theme }) => theme.foundation.cornerRadius.s}px;
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: ${({ theme, percentage }) =>
        `linear-gradient(to right, ${theme.palette.actions.primary} 0%, ${theme.palette.actions.primary} ${percentage}%, ${theme.palette.layout.surfaceMid} ${percentage}%, ${theme.palette.layout.surfaceMid} 100%)`};

    &::-webkit-slider-thumb {
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border-width: ${({ theme }) => theme.foundation.stroke.thick}px;
        border-style: solid;
        border-color: ${({ theme }) => theme.palette.layout.surfaceLow};
        background: ${({ theme }) => theme.palette.actions.primary};
        cursor: pointer;
    }
`;

export type SliderProps = {
    min: number;
    max: number;
    step?: number;
    value: number;
    onChange: (value: number) => void;
};

const Slider = ({ min, max, step = 1, value, onChange }: SliderProps) => {
    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            onChange(Number(event.target.value));
        },
        [onChange],
    );

    const percentage = ((value - min) / (max - min)) * 100;

    return (
        <Container
            percentage={percentage}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
        />
    );
};

export default Slider;
