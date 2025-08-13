import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Tooltip } from '../src/Tooltip';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Tooltip', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Tooltip content="Tooltip content">Test</Tooltip>
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
