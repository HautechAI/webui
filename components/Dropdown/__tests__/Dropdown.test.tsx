import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Dropdown } from '../src/Dropdown';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Dropdown', () => {
    const options = [{ label: 'Test', value: 'test' }];

    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Dropdown options={options} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render small and collapsed without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Dropdown size="small" collapsed options={options} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render xsmall and collapsed without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Dropdown size="xsmall" collapsed options={options} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    describe('hoverControls', () => {
        it('should render hoverControls when provided', () => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Dropdown
                        options={options}
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
                    <Dropdown
                        options={options}
                        hoverControls={<button data-testid="hover-control">Hover Control</button>}
                    />
                </ThemeProvider>,
            );

            const buttonContainer = container.querySelector('[data-size]') as HTMLElement;
            const hoverControlsContainer = container.querySelector('[data-show]') as HTMLElement;

            // Initially hidden
            expect(hoverControlsContainer.getAttribute('data-show')).toBe('false');

            // Show on hover
            fireEvent.mouseEnter(buttonContainer);
            expect(hoverControlsContainer.getAttribute('data-show')).toBe('true');

            // Hide on mouse leave
            fireEvent.mouseLeave(buttonContainer);
            expect(hoverControlsContainer.getAttribute('data-show')).toBe('false');
        });

        it('should show hoverControls on focus', () => {
            const { container } = render(
                <ThemeProvider theme={testTheme}>
                    <Dropdown
                        options={options}
                        hoverControls={<button data-testid="hover-control">Hover Control</button>}
                    />
                </ThemeProvider>,
            );

            const buttonContainer = container.querySelector('[data-size]') as HTMLElement;
            const hoverControlsContainer = container.querySelector('[data-show]') as HTMLElement;

            // Initially hidden
            expect(hoverControlsContainer.getAttribute('data-show')).toBe('false');

            // Show on focus
            fireEvent.focus(buttonContainer);
            expect(hoverControlsContainer.getAttribute('data-show')).toBe('true');

            // Hide on blur
            fireEvent.blur(buttonContainer);
            expect(hoverControlsContainer.getAttribute('data-show')).toBe('false');
        });

        it('should not show hoverControls when disabled', () => {
            const { container } = render(
                <ThemeProvider theme={testTheme}>
                    <Dropdown
                        options={options}
                        disabled={true}
                        hoverControls={<button data-testid="hover-control">Hover Control</button>}
                    />
                </ThemeProvider>,
            );

            const buttonContainer = container.querySelector('[data-size]') as HTMLElement;
            const hoverControlsContainer = container.querySelector('[data-show]') as HTMLElement;

            // Hover should not show controls when disabled
            fireEvent.mouseEnter(buttonContainer);
            expect(hoverControlsContainer.getAttribute('data-show')).toBe('false');
        });

        it('should render hoverControls alongside arrow icon', () => {
            const { container } = render(
                <ThemeProvider theme={testTheme}>
                    <Dropdown
                        options={options}
                        hoverControls={<button data-testid="hover-control">Hover Control</button>}
                    />
                </ThemeProvider>,
            );

            const hoverControl = screen.getByTestId('hover-control');
            expect(hoverControl).toBeDefined();

            // Show hoverControls on hover
            const buttonContainer = container.querySelector('[data-size]') as HTMLElement;
            fireEvent.mouseEnter(buttonContainer);

            const hoverControlsContainer = container.querySelector('[data-show="true"]') as HTMLElement;
            expect(hoverControlsContainer).toBeDefined();
        });

        it('should render hoverControls in collapsed mode', () => {
            const { container } = render(
                <ThemeProvider theme={testTheme}>
                    <Dropdown
                        options={options}
                        collapsed={true}
                        hoverControls={<button data-testid="hover-control">Hover Control</button>}
                    />
                </ThemeProvider>,
            );

            const hoverControl = screen.getByTestId('hover-control');
            expect(hoverControl).toBeDefined();

            // Show hoverControls on hover
            const buttonContainer = container.querySelector('[data-size]') as HTMLElement;
            fireEvent.mouseEnter(buttonContainer);

            const hoverControlsContainer = container.querySelector('[data-show="true"]') as HTMLElement;
            expect(hoverControlsContainer).toBeDefined();
        });
    });
});
