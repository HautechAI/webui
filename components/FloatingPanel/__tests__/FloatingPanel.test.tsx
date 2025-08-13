import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { FloatingPanel } from '../src/FloatingPanel';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('FloatingPanel', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <FloatingPanel />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
