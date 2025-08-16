import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { KeyframeToggle } from '../src/KeyframeToggle';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('KeyframeToggle', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <KeyframeToggle state="noKeyframes" />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should call onClick when clicked', () => {
        const handleClick = vi.fn();
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <KeyframeToggle state="noKeyframes" onClick={handleClick} />
            </ThemeProvider>,
        );

        const button = container.querySelector('button');
        expect(button).not.toBeNull();
        
        if (button) {
            fireEvent.click(button);
            expect(handleClick).toHaveBeenCalledTimes(1);
        }
    });

    it('should not call onClick when disabled', () => {
        const handleClick = vi.fn();
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <KeyframeToggle state="noKeyframes" onClick={handleClick} disabled />
            </ThemeProvider>,
        );

        const button = container.querySelector('button');
        expect(button).not.toBeNull();
        if (button) {
            expect(button).toHaveProperty('disabled', true);
            fireEvent.click(button);
            expect(handleClick).not.toHaveBeenCalled();
        }
    });

    it('should render with different states', () => {
        const states: Array<'noKeyframes' | 'hasKeyframes' | 'isKeyframe'> = [
            'noKeyframes',
            'hasKeyframes', 
            'isKeyframe'
        ];

        states.forEach(state => {
            expect(() => {
                render(
                    <ThemeProvider theme={testTheme}>
                        <KeyframeToggle state={state} />
                    </ThemeProvider>,
                );
            }).not.toThrow();
        });
    });
});