import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { IconButton } from '../src/IconButton';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';
import { PlaceholderIcon } from '../../Icon/src';

describe('IconButton - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <IconButton icon={<PlaceholderIcon />} testId="my-icon-button" />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-icon-button')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <IconButton icon={<PlaceholderIcon />} />
            </ThemeProvider>,
        );

        const button = container.querySelector('button');
        expect(button?.getAttribute('data-testid')).toBeNull();
    });
});
