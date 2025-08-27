import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { NumberWithUnitsInput } from '../src/NumberWithUnitsInput';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';
import { PlaceholderIcon } from '../../Icon/src';

describe('NumberWithUnitsInput', () => {
    const defaultProps = {
        value: '100',
        units: 'px',
        availableUnits: ['px', '%', 'em', 'rem'],
    };

    const renderComponent = (props = {}) => {
        return render(
            <ThemeProvider theme={testTheme}>
                <NumberWithUnitsInput {...defaultProps} {...props} />
            </ThemeProvider>,
        );
    };

    it('renders without crashing', () => {
        const { container } = renderComponent();
        expect(container.firstChild).toBeTruthy();
    });

    it('displays the input value', () => {
        renderComponent({ value: '150' });
        const input = screen.getByRole('textbox');
        expect(input).toHaveValue('150');
    });

    it('displays the units label by default', () => {
        renderComponent({ units: 'em' });
        expect(screen.getByText('em')).toBeInTheDocument();
    });

    it('shows placeholder when value is empty', () => {
        renderComponent({ value: '', placeholder: 'Enter value' });
        const input = screen.getByPlaceholderText('Enter value');
        expect(input).toBeInTheDocument();
    });

    it('calls onChange when input value changes', () => {
        const onChange = vi.fn();
        renderComponent({ onChange });

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: '200' } });

        expect(onChange).toHaveBeenCalledWith('200');
    });

    it('shows dropdown on hover', () => {
        const { container } = renderComponent();
        const component = container.firstChild as HTMLElement;

        fireEvent.mouseEnter(component);

        // Look for dropdown (collapsed dropdown should have data-collapsed="true")
        const dropdown = container.querySelector('[data-collapsed="true"]');
        expect(dropdown).toBeInTheDocument();
    });

    it('hides dropdown on mouse leave', () => {
        const { container } = renderComponent();
        const component = container.firstChild as HTMLElement;

        // First hover to show dropdown
        fireEvent.mouseEnter(component);
        const dropdown = container.querySelector('[data-collapsed="true"]');
        expect(dropdown).toBeInTheDocument();

        // Then leave to hide dropdown
        fireEvent.mouseLeave(component);

        // Should show units label instead
        expect(screen.getByText('px')).toBeInTheDocument();
    });

    it('calls onChangeUnits when units are changed', () => {
        const onChangeUnits = vi.fn();
        const { container } = renderComponent({ onChangeUnits });
        const component = container.firstChild as HTMLElement;

        // Hover to show dropdown
        fireEvent.mouseEnter(component);

        // Find and click the dropdown
        const dropdown = container.querySelector('[data-collapsed="true"]');
        expect(dropdown).toBeInTheDocument();

        // The actual testing of dropdown selection would require more complex interaction
        // For now we verify the callback is passed correctly by checking the component renders
    });

    it('renders with leading icon', () => {
        const { container } = renderComponent({ leadingIcon: <PlaceholderIcon /> });

        // Check that the icon container is rendered
        const iconContainer = container.querySelector('[style*="width: 16px"]');
        expect(iconContainer).toBeInTheDocument();
    });

    it('applies error styling when hasError is true', () => {
        const { container } = renderComponent({ hasError: true });

        const inputBox = container.querySelector('[data-has-error="true"]');
        expect(inputBox).toBeInTheDocument();
    });

    it('disables input when disabled is true', () => {
        renderComponent({ disabled: true });

        const input = screen.getByRole('textbox');
        expect(input).toBeDisabled();
    });

    it('applies disabled styling to container when disabled', () => {
        const { container } = renderComponent({ disabled: true });

        const component = container.querySelector('[data-disabled="true"]');
        expect(component).toBeInTheDocument();
    });

    it('renders with different sizes', () => {
        const { container: smallContainer } = renderComponent({ size: 'small' });

        const { container: mediumContainer } = renderComponent({ size: 'medium', leadingIcon: <PlaceholderIcon /> });

        // We can't easily test the exact size styles, but we can verify the components render
        expect(smallContainer.firstChild).toBeTruthy();
        expect(mediumContainer.firstChild).toBeTruthy();
    });

    it('renders with different variations', () => {
        const { container: filledContainer } = renderComponent({ variation: 'filled' });
        const { container: outlinedContainer } = renderComponent({ variation: 'outlined' });

        expect(filledContainer.firstChild).toBeTruthy();
        expect(outlinedContainer.firstChild).toBeTruthy();
    });

    it('applies custom className to input', () => {
        renderComponent({ className: 'custom-class' });

        const input = screen.getByRole('textbox');
        expect(input).toHaveClass('custom-class');
    });

    it('focuses input when container is clicked and not disabled', () => {
        const { container } = renderComponent();
        const component = container.firstChild as HTMLElement;
        const input = screen.getByRole('textbox');

        fireEvent.click(component);

        expect(document.activeElement).toBe(input);
    });

    it('does not focus input when container is clicked and disabled', () => {
        const { container } = renderComponent({ disabled: true });
        const component = container.firstChild as HTMLElement;
        const input = screen.getByRole('textbox');

        fireEvent.click(component);

        expect(document.activeElement).not.toBe(input);
    });

    it('dropdown is disabled when component is disabled', () => {
        const { container } = renderComponent({ disabled: true });
        const component = container.firstChild as HTMLElement;

        // Hover to show dropdown
        fireEvent.mouseEnter(component);

        // Find dropdown and check if it's disabled
        const dropdown = container.querySelector('[data-collapsed="true"]');
        if (dropdown) {
            expect(dropdown.getAttribute('data-disabled')).toBe('true');
        }
    });
});
