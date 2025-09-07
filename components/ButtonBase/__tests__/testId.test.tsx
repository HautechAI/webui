import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ButtonBase } from '../src/ButtonBase';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('ButtonBase - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <ButtonBase testId="my-button-base">Test Button</ButtonBase>
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-button-base')).toBeInTheDocument();
    });
});
