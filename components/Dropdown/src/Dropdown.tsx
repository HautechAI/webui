import { css, styled } from '@hautechai/webui.themeprovider';
import { Menu } from '@hautechai/webui.menu';
import { Typography } from '@hautechai/webui.typography';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowAltDownIcon } from '@hautechai/webui.icon';

const Container = styled.div<{ disabled?: boolean }>`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1 0 0;
    gap: ${({ theme }) => theme.foundation.spacing.m}px;
    min-width: 132px;

    ${({ theme, disabled }) =>
        disabled &&
        css`
            color: ${theme.palette.layout.strokes};
        `}
`;

export const ButtonContainer = styled.div<{
    disabled?: boolean;
    type?: 'filled' | 'outlined' | 'flat';
    hasError?: boolean;
    isOpen?: boolean;
}>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

    padding: ${({ theme }) => theme.foundation.spacing.m}px ${({ theme }) => theme.foundation.spacing.ml}px;

    border-radius: ${({ theme }) => theme.foundation.cornerRadius.m}px;

    ${({ theme }) => {
        const normalDuration = theme.foundation.animation.duration.normal;
        const timingFunction = theme.foundation.animation.timing.ease;

        return `
        transition: 
            background-color ${normalDuration}s ${timingFunction},
            border-color  ${normalDuration}s ${timingFunction},
            outline-color  ${normalDuration}s ${timingFunction},
            transform  ${normalDuration}s ${timingFunction};
        `;
    }}

    ${({ type, theme }) =>
        type === 'filled' &&
        css`
            background: ${theme.palette.layout.surfaceLow};
            border: ${theme.foundation.stroke.thin}px solid ${theme.palette.layout.strokes};
        `}

    ${({ type }) =>
        type === 'flat' &&
        css`
            background: transparent;
        `}

  ${({ type, theme }) =>
        type === 'outlined' &&
        css`
            background: transparent;
            border: ${theme.foundation.stroke.thin}px solid ${theme.palette.layout.strokes};
        `}

    ${({ type, theme }) =>
        type !== 'flat' &&
        css`
            border-width: ${theme.foundation.stroke.thin}px;
            border-style: solid;
            border-color: ${theme.palette.layout.strokes};
        `}

    ${({ hasError, type, theme }) =>
        hasError &&
        css`
            ${type === 'flat'
                ? css`
                      background: ${theme.palette.actions.onError};
                  `
                : css`
                      border: ${theme.foundation.stroke.thin}px solid ${theme.palette.actions.error};
                      outline: ${theme.foundation.stroke.thin}px solid ${theme.palette.actions.error};
                  `}
        `}
    
    ${({ disabled, type, theme }) =>
        !disabled &&
        css`
            &:hover {
                ${type === 'flat'
                    ? css`
                          background-color: ${theme.palette.layout.surfaceHigh};
                      `
                    : css`
                          border-color: ${theme.palette.layout.onSurface.tertiary};
                      `}
            }

            &:active {
                ${type === 'flat'
                    ? css`
                          background-color: ${theme.palette.layout.strokes};
                      `
                    : css`
                          border-color: ${theme.palette.layout.onSurface.tertiary};
                          outline: ${theme.foundation.stroke.thin}px solid ${theme.palette.layout.onSurface.tertiary};
                      `}
            }
        `}

    ${({ isOpen, type, theme }) =>
        isOpen &&
        css`
            ${type === 'flat'
                ? css`
                      background-color: ${theme.palette.layout.surfaceHigh};
                  `
                : css`
                      border-color: ${theme.palette.actions.primary};
                      outline: ${theme.foundation.stroke.thin}px solid ${theme.palette.actions.primary};
                  `}
        `}
`;

const Label = styled(Typography)`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const RotatingArrow = styled.div<{ isOpen?: boolean }>`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform ${({ theme }) => theme.foundation.animation.duration.normal}s
        ${({ theme }) => theme.foundation.animation.timing.customBounce};
`;

const MenuContainer = styled.div<{ isOpen?: boolean }>`
    position: absolute;
    top: 100%;
    z-index: 1000;
    min-width: 100%;
    max-height: 200px;
    overflow-y: scroll;

    margin-top: 4px;

    background: ${({ theme }) => theme.palette.layout.surfaceLow};
    border: ${({ theme }) => theme.foundation.stroke.thin}px solid ${({ theme }) => theme.palette.layout.strokes};
    border-radius: ${({ theme }) => theme.foundation.cornerRadius.m}px;
    box-shadow: ${({ theme }) => theme.foundation.elevation.two};

    transform: ${({ isOpen }) => (isOpen ? 'scaleY(1)' : 'scaleY(0.95)')};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transform-origin: top;

    ${({ theme }) => {
        const normalDuration = theme.foundation.animation.duration.normal;
        const timingFunction = theme.foundation.animation.timing.ease;

        return `
        transition: 
            opacity  ${normalDuration}s ${timingFunction},
            transform  ${normalDuration}s ${timingFunction};
        `;
    }}

    pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
`;

export type DropdownProps = {
    label?: string;
    disabled?: boolean;
    type?: 'filled' | 'outlined' | 'flat';
    value?: string;
    options: Array<{ label: string; value: string }>;
    onChange?: (value: string) => void;
    hasError?: boolean;
};

export const Dropdown = (props: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const selectedOption = useMemo(
        () => props.options.find((opt) => opt.value === props.value),
        [props.options, props.value],
    );

    const handleToggle = useCallback(() => {
        if (!props.disabled) setIsOpen((prev) => !prev);
    }, [props.disabled]);

    const handleSelect = (val: string) => {
        props.onChange?.(val);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const { disabled } = props;

    return (
        <Container disabled={disabled} ref={ref}>
            <ButtonContainer
                disabled={disabled}
                type={props.type ?? 'filled'}
                hasError={props.hasError}
                onClick={handleToggle}
                isOpen={isOpen}
            >
                <Label variant="LabelSmallRegular" color={disabled ? 'layout.strokes' : 'layout.onSurface.primary'}>
                    {selectedOption ? selectedOption.label : props.label}
                </Label>
                <RotatingArrow isOpen={isOpen}>
                    <ArrowAltDownIcon color={disabled ? 'layout.strokes' : 'layout.onSurface.secondary'} />
                </RotatingArrow>
            </ButtonContainer>
            <MenuContainer isOpen={isOpen}>
                <Menu
                    options={props.options.map((option) => ({
                        ...option,
                        onClick: () => handleSelect(option.value),
                        isSelected: props.value === option.value,
                    }))}
                />
            </MenuContainer>
        </Container>
    );
};
