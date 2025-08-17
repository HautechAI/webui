import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Field } from '../src/Field';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Field', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Field>Test Field</Field>
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render actionButton when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <Field label="Test Label" actionButton={<button data-testid="action-button">Action</button>}>
                    Test Field Content
                </Field>
            </ThemeProvider>,
        );

        expect(screen.getByTestId('action-button')).toBeInTheDocument();
        expect(screen.getByText('Action')).toBeInTheDocument();
    });

    it('should render label and actionButton together', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <Field label="Test Label" actionButton={<button data-testid="action-button">Action</button>}>
                    Test Field Content
                </Field>
            </ThemeProvider>,
        );

        expect(screen.getByText('Test Label')).toBeInTheDocument();
        expect(screen.getByTestId('action-button')).toBeInTheDocument();
    });

    it('should not render actionButton when not provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <Field label="Test Label">Test Field Content</Field>
            </ThemeProvider>,
        );

        expect(screen.getByText('Test Label')).toBeInTheDocument();
        expect(screen.queryByTestId('action-button')).not.toBeInTheDocument();
    });
});
