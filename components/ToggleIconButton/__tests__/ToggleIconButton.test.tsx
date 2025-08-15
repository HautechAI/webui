import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { ToggleIconButton } from '../src/ToggleIconButton';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('ToggleIconButton', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <ToggleIconButton icon="test" onClick={() => {}} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render with checked state', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <ToggleIconButton icon="test" checked={true} onClick={() => {}} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render with all variants', () => {
        const variants = ['filled', 'outlined', 'flat', 'primary'] as const;
        variants.forEach(variant => {
            expect(() => {
                render(
                    <ThemeProvider theme={testTheme}>
                        <ToggleIconButton icon="test" variant={variant} onClick={() => {}} />
                    </ThemeProvider>,
                );
            }).not.toThrow();
        });
    });

    it('should render with all sizes', () => {
        const sizes = ['medium', 'small', 'xsmall'] as const;
        sizes.forEach(size => {
            expect(() => {
                render(
                    <ThemeProvider theme={testTheme}>
                        <ToggleIconButton icon="test" size={size} onClick={() => {}} />
                    </ThemeProvider>,
                );
            }).not.toThrow();
        });
    });
});