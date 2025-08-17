import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { ToolButton } from '../src';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('ToolButton', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <ToolButton icon={<div>test-icon</div>} onClick={() => {}} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render with selected state', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <ToolButton icon={<div>test-icon</div>} selected={true} onClick={() => {}} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
