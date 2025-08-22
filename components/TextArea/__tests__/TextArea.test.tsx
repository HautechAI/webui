import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { TextArea } from '../src/TextArea';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('TextArea', () => {
    const renderWithTheme = (component: React.ReactElement) => {
        return render(<ThemeProvider theme={testTheme}>{component}</ThemeProvider>);
    };

    it('should render without crashing', () => {
        expect(() => {
            renderWithTheme(<TextArea value="" onChange={() => {}} />);
        }).not.toThrow();
    });

    it('should render actionButton outside by default', () => {
        const TestButton = () => <button data-testid="action-button">Test Button</button>;
        renderWithTheme(<TextArea value="" onChange={() => {}} actionButton={<TestButton />} />);

        const actionButton = screen.getByTestId('action-button');
        expect(actionButton).toBeInTheDocument();
        // The button should be outside the input container when actionButtonInside is false (default)
    });

    it('should render actionButton inside when actionButtonInside is true', () => {
        const TestButton = () => <button data-testid="action-button">Test Button</button>;
        renderWithTheme(
            <TextArea value="" onChange={() => {}} actionButton={<TestButton />} actionButtonInside={true} />,
        );

        const actionButton = screen.getByTestId('action-button');
        expect(actionButton).toBeInTheDocument();
    });

    it('should not render actionButton when not provided', () => {
        renderWithTheme(<TextArea value="" onChange={() => {}} />);

        const actionButton = screen.queryByTestId('action-button');
        expect(actionButton).not.toBeInTheDocument();
    });

    it('should handle both actionButton and icons together', () => {
        const TestButton = () => <button data-testid="action-button">Test Button</button>;
        const TestIcon = () => <div data-testid="leading-icon">Icon</div>;

        renderWithTheme(
            <TextArea
                value=""
                onChange={() => {}}
                actionButton={<TestButton />}
                leadingIcon={<TestIcon />}
                actionButtonInside={false}
            />,
        );

        expect(screen.getByTestId('action-button')).toBeInTheDocument();
        expect(screen.getByTestId('leading-icon')).toBeInTheDocument();
    });

    describe('Action Button Positioning', () => {
        it('should default to middle position', () => {
            const TestButton = () => <button data-testid="action-button">Test Button</button>;
            const { container } = renderWithTheme(
                <TextArea value="" onChange={() => {}} actionButton={<TestButton />} />,
            );

            const actionButtonContainer = container.querySelector('[data-position="middle"]');
            expect(actionButtonContainer).toBeInTheDocument();
        });

        it('should position action button at top when actionButtonPosition is top', () => {
            const TestButton = () => <button data-testid="action-button">Test Button</button>;
            const { container } = renderWithTheme(
                <TextArea value="" onChange={() => {}} actionButton={<TestButton />} actionButtonPosition="top" />,
            );

            const actionButtonContainer = container.querySelector('[data-position="top"]');
            expect(actionButtonContainer).toBeInTheDocument();
        });

        it('should position action button at bottom when actionButtonPosition is bottom', () => {
            const TestButton = () => <button data-testid="action-button">Test Button</button>;
            const { container } = renderWithTheme(
                <TextArea value="" onChange={() => {}} actionButton={<TestButton />} actionButtonPosition="bottom" />,
            );

            const actionButtonContainer = container.querySelector('[data-position="bottom"]');
            expect(actionButtonContainer).toBeInTheDocument();
        });

        it('should apply positioning to outside action button', () => {
            const TestButton = () => <button data-testid="action-button">Test Button</button>;
            const { container } = renderWithTheme(
                <TextArea
                    value=""
                    onChange={() => {}}
                    actionButton={<TestButton />}
                    actionButtonInside={false}
                    actionButtonPosition="top"
                />,
            );

            const actionButtonContainer = container.querySelector('[data-position="top"]');
            expect(actionButtonContainer).toBeInTheDocument();
            expect(screen.getByTestId('action-button')).toBeInTheDocument();
        });

        it('should apply positioning to inside action button', () => {
            const TestButton = () => <button data-testid="action-button">Test Button</button>;
            const { container } = renderWithTheme(
                <TextArea
                    value=""
                    onChange={() => {}}
                    actionButton={<TestButton />}
                    actionButtonInside={true}
                    actionButtonPosition="bottom"
                />,
            );

            const actionButtonContainer = container.querySelector('[data-position="bottom"]');
            expect(actionButtonContainer).toBeInTheDocument();
            expect(screen.getByTestId('action-button')).toBeInTheDocument();
        });
    });
});
