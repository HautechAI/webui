import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { TextInput } from '../src/TextInput';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('TextInput', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <TextInput type="text" value="" onChange={() => {}} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should clone icons with correct size for medium (default)', () => {
        const TestIcon = ({ size, ...rest }: { size?: number } & Record<string, unknown>) => <div data-testid={rest['data-testid']} data-size={size} />;

        render(
            <ThemeProvider theme={testTheme}>
                <TextInput
                    type="text"
                    value=""
                    onChange={() => {}}
                    leadingIcon={<TestIcon data-testid="leading-icon" />}
                    trailingIcon={<TestIcon data-testid="trailing-icon" />}
                    icon={<TestIcon data-testid="icon-button-icon" />}
                />
            </ThemeProvider>,
        );

    expect(screen.getByTestId('leading-icon').getAttribute('data-size')).toBe('20');
    expect(screen.getByTestId('trailing-icon').getAttribute('data-size')).toBe('20');
    expect(screen.getByTestId('icon-button-icon').getAttribute('data-size')).toBe('20');
    });

    it('should clone icons with correct size for small', () => {
        const TestIcon = ({ size, ...rest }: { size?: number } & Record<string, unknown>) => <div data-testid={rest['data-testid']} data-size={size} />;

        render(
            <ThemeProvider theme={testTheme}>
                <TextInput
                    size="small"
                    type="text"
                    value=""
                    onChange={() => {}}
                    leadingIcon={<TestIcon data-testid="leading-icon" />}
                    trailingIcon={<TestIcon data-testid="trailing-icon" />}
                    icon={<TestIcon data-testid="icon-button-icon" />}
                />
            </ThemeProvider>,
        );

    expect(screen.getByTestId('leading-icon').getAttribute('data-size')).toBe('16');
    expect(screen.getByTestId('trailing-icon').getAttribute('data-size')).toBe('16');
    expect(screen.getByTestId('icon-button-icon').getAttribute('data-size')).toBe('16');
    });
});
