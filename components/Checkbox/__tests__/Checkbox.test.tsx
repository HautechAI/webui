import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Checkbox } from '../src/Checkbox';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Checkbox', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Checkbox checked={false} onChange={() => {}} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
