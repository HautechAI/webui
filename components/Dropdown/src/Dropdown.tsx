import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Menu } from '@hautechai/webui.menu';
import { Typography } from '@hautechai/webui.typography';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowAltDownIcon } from '@hautechai/webui.icon';

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1 0 0;
    gap: ${themeVars.spacing.m};
    color: ${themeVars.layout.onSurface.primary};

    &[data-disabled='true'] {
        color: ${themeVars.layout.strokes};
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    padding: ${themeVars.spacing.m} ${themeVars.spacing.ml};

    border-radius: ${themeVars.cornerRadius.m};
    transition: background-color ${themeVars.animation.duration.normal} ${themeVars.animation.timing.ease},
        border-color ${themeVars.animation.duration.normal} ${themeVars.animation.timing.ease},
        outline-color ${themeVars.animation.duration.normal} ${themeVars.animation.timing.ease},
        transform ${themeVars.animation.duration.normal} ${themeVars.animation.timing.ease};

    border-width: ${themeVars.stroke.thin};
    border-style: solid;
    background: transparent;
    border-color: ${themeVars.layout.strokes};

    &[data-type='filled'] {
        background: ${themeVars.layout.surfaceLow};
    }

    &[data-disabled='true'] {
        cursor: not-allowed;
    }

    &[data-has-error='true'] {
        outline: ${themeVars.stroke.thin} solid ${themeVars.actions.error};
        border-color: ${themeVars.actions.error};
        &[data-type='flat'] {
            background: ${themeVars.actions.onError};
            outline: none;
        }
    }

    &:hover {
        background-color: ${themeVars.layout.surfaceHigh};
        &[data-type='filled'], &[data-type='outlined'] {
            background: transparent;
            border-color: ${themeVars.layout.onSurface.tertiary};
        }
    }

    &:active {
        background-color: ${themeVars.layout.strokes};
        &[data-type='filled'], &[data-type='outlined'] {
            background: transparent;
            border-color: ${themeVars.layout.onSurface.tertiary};
            outline: ${themeVars.stroke.thin} solid ${themeVars.layout.onSurface.tertiary};
        }
    }

    &[data-open='true'] {
        background-color: ${themeVars.layout.surfaceHigh};
        &[data-type='filled'], &[data-type='outlined'] {
            background: transparent;
            border-color: ${themeVars.actions.primary};
            outline: ${themeVars.stroke.thin} solid ${themeVars.actions.primary};
        }
    }
`;

const Label = styled(Typography)`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const RotatingArrow = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform ${themeVars.animation.duration.normal} ${themeVars.animation.timing.customBounce};
`;

const MenuContainer = styled.div`
    position: absolute;
    top: 100%;
    z-index: 1000;
    min-width: 100%;
    max-height: 200px;
    overflow-y: scroll;
    box-sizing: border-box;

    margin-top: 4px;

    background: ${themeVars.layout.surfaceLow};
    border: ${themeVars.stroke.thin} solid ${themeVars.layout.strokes};
    border-radius: ${themeVars.cornerRadius.m};
    box-shadow: ${themeVars.elevation.two};

    transform: scaleY(0.95);
    opacity: 0;
    transform-origin: top;

    transition: opacity ${themeVars.animation.duration.normal} ${themeVars.animation.timing.ease},
        transform ${themeVars.animation.duration.normal} ${themeVars.animation.timing.ease};

    pointer-events: none;

    &[data-open='true'] {
        transform: scaleY(1);
        opacity: 1;
        pointer-events: auto;
    }
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
        <Container data-disabled={disabled} ref={ref}>
            <ButtonContainer
                data-disabled={disabled}
                data-type={props.type ?? 'filled'}
                data-has-error={props.hasError}
                onClick={handleToggle}
                data-open={isOpen}
            >
                <Label variant="LabelSmallRegular" color={disabled ? 'layout.strokes' : 'layout.onSurface.primary'}>
                    {selectedOption ? selectedOption.label : props.label}
                </Label>
                <RotatingArrow style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <ArrowAltDownIcon color={disabled ? 'layout.strokes' : 'layout.onSurface.secondary'} />
                </RotatingArrow>
            </ButtonContainer>
            <MenuContainer data-open={isOpen}>
                <Menu value={selectedOption?.value} options={props.options} onChange={handleSelect} />
            </MenuContainer>
        </Container>
    );
};
