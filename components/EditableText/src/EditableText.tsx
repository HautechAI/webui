import React, { useCallback, useEffect, useRef } from 'react';
import { Typography } from '@hautechai/webui.typography';
import { TextInput } from '@hautechai/webui.textinput';

type Mode = 'view' | 'edit';

export type EditableTextProps = {
    text: string;
    mode: Mode;
    size?: 'medium' | 'small';
    selected?: boolean;
    onStartEditing?: () => void;
    onChange?: (value: string) => void;
    onFinishEditing?: () => void;
    testId?: string;
};

// Get Typography variant based on size and selected state
const getTypographyVariant = (size: 'medium' | 'small' = 'medium', selected: boolean = false) => {
    if (size === 'medium') {
        return selected ? 'LabelMediumEmphasized' : 'LabelMediumRegular';
    } else {
        return selected ? 'LabelSmallEmphasized' : 'LabelSmallRegular';
    }
};

export const EditableText = (props: EditableTextProps) => {
    const { text, mode, size = 'medium', selected = false, onStartEditing, onChange, onFinishEditing } = props;
    const containerRef = useRef<HTMLDivElement data-testid={props.testId || testId}>(null);

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

    if (mode === 'edit') {
        return (
            <div
                ref={containerRef}
                style={{ display: 'inline-block' }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onFinishEditing?.();
                    }
                }}
            >
                <TextInput type="text" value={text} onChange={handleInputChange} size="small" variation="outlined" />
            </div>
        );
    }

    return (
        <div onDoubleClick={handleDoubleClick} style={{ cursor: 'pointer', display: 'inline-block', width: '100%' }}>
            <Typography variant={getTypographyVariant(size, selected)} noWrap={true} overflow="ellipsis">
                {text.trim() || '\u00A0'}
            </Typography>
        </div>
    );
};
