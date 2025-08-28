import { styled } from '@hautechai/webui.themeprovider';
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
    max-width: 100%;

    &[data-disabled='true'] {
        color: ${themeVars.layout.strokes};
    }

    /* Do not expand in collapsed mode */
    &[data-collapsed='true'] {
        flex: 0 0 auto;
        width: fit-content;
        align-self: flex-start;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    padding: ${themeVars.spacing.m} ${themeVars.spacing.ml};
    gap: ${themeVars.spacing.m};

    border-radius: ${themeVars.cornerRadius.m};
    transition:
        background-color ${themeVars.animation.duration.normal} ${themeVars.animation.timing.ease},
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

    /* Size variants */
    &[data-size='small'] {
        padding: ${themeVars.spacing.s} ${themeVars.spacing.m};
        gap: ${themeVars.spacing.s};
    }

    &[data-size='xsmall'] {
        padding: ${themeVars.spacing.s} ${themeVars.spacing.m};
        gap: ${themeVars.spacing.s};
    }

    /* Collapsed state shows only the icon */
    &[data-collapsed='true'] {
        padding: ${themeVars.spacing.s};
        justify-content: center;
    }

    /* For xsmall collapsed, use tighter padding */
    &[data-size='xsmall'][data-collapsed='true'] {
        padding: ${themeVars.spacing.xs};
        border-radius: ${themeVars.cornerRadius.s};
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
        &[data-type='filled'],
        &[data-type='outlined'] {
            background: transparent;
            border-color: ${themeVars.layout.onSurface.tertiary};
        }
    }

    &:active {
        background-color: ${themeVars.layout.strokes};
        &[data-type='filled'],
        &[data-type='outlined'] {
            background: transparent;
            border-color: ${themeVars.layout.onSurface.tertiary};
            outline: ${themeVars.stroke.thin} solid ${themeVars.layout.onSurface.tertiary};
        }
    }

    &[data-open='true'] {
        background-color: ${themeVars.layout.surfaceHigh};
        &[data-type='filled'],
        &[data-type='outlined'] {
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

    &[data-size='small'] {
        width: 16px;
        height: 16px;
    }

    &[data-size='xsmall'] {
        width: 16px;
        height: 16px;
    }
`;

const HoverControlsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${themeVars.spacing.xs};
    opacity: 0;
    width: 0;
    overflow: hidden;
    transition:
        opacity ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut},
        width ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};
    pointer-events: none;

    &[data-show='true'] {
        opacity: 1;
        width: auto;
        overflow: visible;
        pointer-events: auto;
    }
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

    transition:
        opacity ${themeVars.animation.duration.normal} ${themeVars.animation.timing.ease},
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
    size?: 'xsmall' | 'small' | 'medium';
    collapsed?: boolean;
    value?: string;
    options: Array<{ label: string; value: string }>;
    onChange?: (value: string) => void;
    hasError?: boolean;
    hoverControls?: React.ReactNode;
};

export const Dropdown = (props: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const selectedOption = useMemo(
        () => props.options.find((opt) => opt.value === props.value),
        [props.options, props.value],
    );

    const handleToggle = useCallback(() => {
        if (!props.disabled) setIsOpen((prev) => !prev);
    }, [props.disabled]);

    const handleSelect = useCallback(
        (val: string) => {
            props.onChange?.(val);
            setIsOpen(false);
        },
        [props.onChange],
    );

    const handleMouseEnter = useCallback(() => {
        setIsHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
    }, []);

    const handleFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

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

    const { disabled, hoverControls } = props;
    const size = props.size ?? 'medium';
    const collapsed = !!props.collapsed;
    const showHoverControls = (isHovered || isFocused) && hoverControls && !disabled;

    return (
        <Container data-disabled={disabled} data-collapsed={collapsed} ref={ref}>
            <ButtonContainer
                data-disabled={disabled}
                data-type={props.type ?? 'filled'}
                data-has-error={props.hasError}
                onClick={handleToggle}
                data-open={isOpen}
                data-size={size}
                data-collapsed={collapsed}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onFocus={handleFocus}
                onBlur={handleBlur}
                tabIndex={disabled ? -1 : 0}
            >
                {!collapsed && (
                    <Label
                        variant={size === 'medium' ? 'LabelMediumRegular' : 'LabelSmallRegular'}
                        color={disabled ? 'layout.strokes' : 'layout.onSurface.primary'}
                    >
                        {selectedOption ? selectedOption.label : props.label}
                    </Label>
                )}
                {hoverControls && (
                    <HoverControlsContainer data-show={showHoverControls}>{hoverControls}</HoverControlsContainer>
                )}
                <RotatingArrow data-size={size} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <ArrowAltDownIcon
                        size={size === 'medium' ? 20 : 16}
                        color={disabled ? 'layout.strokes' : 'layout.onSurface.secondary'}
                    />
                </RotatingArrow>
            </ButtonContainer>
            <MenuContainer data-open={isOpen}>
                <Menu
                    size={size === 'xsmall' ? 'small' : size}
                    value={selectedOption?.value}
                    options={props.options}
                    onChange={handleSelect}
                />
            </MenuContainer>
        </Container>
    );
};
