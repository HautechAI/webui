import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { LinkButton } from '../src/LinkButton';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('LinkButton - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <LinkButton label="Test Link" testId="my-test-link" />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-link')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <LinkButton label="Test Link" />
            </ThemeProvider>,
        );

        const button = container.querySelector('button');
        expect(button?.getAttribute('data-testid')).toBeNull();
    });
});
