import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
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
        const TestIcon = ({ size, ...rest }: { size?: number } & Record<string, unknown>) => (
            <div data-testid={rest['data-testid']} data-size={size} />
        );

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
        const TestIcon = ({ size, ...rest }: { size?: number } & Record<string, unknown>) => (
            <div data-testid={rest['data-testid']} data-size={size} />
        );

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

    describe('hoverControls', () => {
        it('should render hoverControls when provided', () => {
            render(
                <ThemeProvider theme={testTheme}>
                    <TextInput
                        type="text"
                        value=""
                        onChange={() => {}}
                        hoverControls={<button data-testid="hover-control">Hover Control</button>}
                    />
                </ThemeProvider>,
            );

            const hoverControl = screen.getByTestId('hover-control');
            expect(hoverControl).toBeDefined();
        });

        it('should show hoverControls on mouse hover', () => {
            const { container } = render(
                <ThemeProvider theme={testTheme}>
                    <TextInput
                        type="text"
                        value=""
                        onChange={() => {}}
                        hoverControls={<button data-testid="hover-control">Hover Control</button>}
                    />
                </ThemeProvider>,
            );

            const input = container.querySelector('input') as HTMLInputElement;
            const hoverControlsContainer = container.querySelector('[data-show]') as HTMLElement;

            // Initially hidden
            expect(hoverControlsContainer.getAttribute('data-show')).toBe('false');

            // Show on hover
            fireEvent.mouseEnter(input.closest('[data-disabled]') as HTMLElement);
            expect(hoverControlsContainer.getAttribute('data-show')).toBe('true');

            // Hide on mouse leave
            fireEvent.mouseLeave(input.closest('[data-disabled]') as HTMLElement);
            expect(hoverControlsContainer.getAttribute('data-show')).toBe('false');
        });

        it('should show hoverControls on focus', () => {
            const { container } = render(
                <ThemeProvider theme={testTheme}>
                    <TextInput
                        type="text"
                        value=""
                        onChange={() => {}}
                        hoverControls={<button data-testid="hover-control">Hover Control</button>}
                    />
                </ThemeProvider>,
            );

            const input = container.querySelector('input') as HTMLInputElement;
            const hoverControlsContainer = container.querySelector('[data-show]') as HTMLElement;

            // Initially hidden
            expect(hoverControlsContainer.getAttribute('data-show')).toBe('false');

            // Show on focus
            fireEvent.focus(input);
            expect(hoverControlsContainer.getAttribute('data-show')).toBe('true');

            // Hide on blur
            fireEvent.blur(input);
            expect(hoverControlsContainer.getAttribute('data-show')).toBe('false');
        });

        it('should not show hoverControls when disabled', () => {
            const { container } = render(
                <ThemeProvider theme={testTheme}>
                    <TextInput
                        type="text"
                        value=""
                        onChange={() => {}}
                        disabled={true}
                        hoverControls={<button data-testid="hover-control">Hover Control</button>}
                    />
                </ThemeProvider>,
            );

            const input = container.querySelector('input') as HTMLInputElement;
            const hoverControlsContainer = container.querySelector('[data-show]') as HTMLElement;

            // Hover should not show controls when disabled
            fireEvent.mouseEnter(input.closest('[data-disabled]') as HTMLElement);
            expect(hoverControlsContainer.getAttribute('data-show')).toBe('false');
        });

        it('should render hoverControls alongside trailingIcon', () => {
            const TrailingIcon = () => <div data-testid="trailing-icon" />;

            const { container } = render(
                <ThemeProvider theme={testTheme}>
                    <TextInput
                        type="text"
                        value=""
                        onChange={() => {}}
                        trailingIcon={<TrailingIcon />}
                        hoverControls={<button data-testid="hover-control">Hover Control</button>}
                    />
                </ThemeProvider>,
            );

            const trailingIcon = screen.getByTestId('trailing-icon');
            const hoverControl = screen.getByTestId('hover-control');

            expect(trailingIcon).toBeDefined();
            expect(hoverControl).toBeDefined();

            // Show hoverControls on hover
            const input = container.querySelector('input') as HTMLInputElement;
            fireEvent.mouseEnter(input.closest('[data-disabled]') as HTMLElement);

            const hoverControlsContainer = container.querySelector('[data-show="true"]') as HTMLElement;
            expect(hoverControlsContainer).toBeDefined();
        });
    });
});
