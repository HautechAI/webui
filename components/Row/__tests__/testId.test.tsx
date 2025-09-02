import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Row } from '../src/Row';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Row - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <Row testId="my-row">Test Content</Row>
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-row')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Row>Test Content</Row>
            </ThemeProvider>,
        );

        const element = container.firstChild as Element;
        expect(element?.getAttribute('data-testid')).toBeNull();
    });
});
