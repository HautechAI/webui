import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Typography } from '../src/Typography';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Typography', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Typography variant="LabelSmallRegular">Test Text</Typography>
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
