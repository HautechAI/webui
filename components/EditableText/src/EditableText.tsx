import React, { useCallback, useEffect, useRef } from 'react';
import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';

type TextStyle = 'medium-regular' | 'medium-emphasized' | 'small-regular' | 'small-emphasized';

type Mode = 'view' | 'edit';

export type EditableTextProps = {
    text: string;
    mode: Mode;
    textStyle?: TextStyle;
    onStartEditing?: () => void;
    onChange?: (value: string) => void;
    onFinishEditing?: () => void;
};

// Styled input that matches TextInput small size
const EditInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: ${themeVars.layout.onSurface.primary};
    background: transparent;
    border: none;
    outline: none;
    padding: 4px 8px;
    border-radius: 8px;
    border: 1px solid ${themeVars.layout.strokes};

    &:focus {
        border-color: ${themeVars.actions.primary};
        outline: 1px solid ${themeVars.actions.primary};
        outline-offset: -1px;
    }

    &:hover {
        border-color: ${themeVars.layout.onSurface.tertiary};
    }
`;

const InputContainer = styled.div`
    display: inline-block;
`;

// Map textStyle to Typography variants
const getTypographyVariant = (textStyle: TextStyle) => {
    switch (textStyle) {
        case 'medium-regular':
            return 'LabelMediumRegular';
        case 'medium-emphasized':
            return 'LabelMediumEmphasized';
        case 'small-regular':
            return 'LabelSmallRegular';
        case 'small-emphasized':
            return 'LabelSmallEmphasized';
        default:
            return 'LabelMediumRegular';
    }
};

export const EditableText = (props: EditableTextProps) => {
    const { text, mode, textStyle = 'medium-regular', onStartEditing, onChange, onFinishEditing } = props;
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Handle double click to start editing
    const handleDoubleClick = useCallback(() => {
        if (mode === 'view') {
            onStartEditing?.();
        }
    }, [mode, onStartEditing]);

    // Handle input changes
    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
        },
        [onChange],
    );

    // Handle key press (Enter to finish editing)
    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                onFinishEditing?.();
            }
        },
        [onFinishEditing],
    );

    // Handle click outside to finish editing
    useEffect(() => {
        if (mode === 'edit') {
            const handleClickOutside = (event: MouseEvent) => {
                if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                    onFinishEditing?.();
                }
            };

            // Add listener after a small delay to avoid immediate triggering
            const timeoutId = setTimeout(() => {
                document.addEventListener('click', handleClickOutside);
            }, 0);

            return () => {
                clearTimeout(timeoutId);
                document.removeEventListener('click', handleClickOutside);
            };
        }
    }, [mode, onFinishEditing]);

    // Focus and select input when entering edit mode
    useEffect(() => {
        if (mode === 'edit' && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [mode]);

    if (mode === 'edit') {
        return (
            <InputContainer ref={containerRef}>
                <EditInput
                    ref={inputRef}
                    type="text"
                    value={text}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
            </InputContainer>
        );
    }

    return (
        <div onDoubleClick={handleDoubleClick} style={{ cursor: 'pointer', display: 'inline-block', width: '100%' }}>
            <Typography 
                variant={getTypographyVariant(textStyle) as any}
                noWrap={true}
                overflow="ellipsis"
            >
                {text}
            </Typography>
        </div>
    );
};
