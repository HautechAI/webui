import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { NodePort } from '../src/NodePort';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('NodePort', () => {
    it('should render without crashing', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <NodePort type="input" />
            </ThemeProvider>,
        );
    });

    it('should render with label when provided', () => {
        const { getByText } = render(
            <ThemeProvider theme={testTheme}>
                <NodePort type="input" label="Test Label" />
            </ThemeProvider>,
        );
        expect(getByText('Test Label')).toBeInTheDocument();
    });

    it('should render interactiveHandle when provided', () => {
        const { getByTestId } = render(
            <ThemeProvider theme={testTheme}>
                <NodePort type="input" interactiveHandle={<div data-testid="interactive-handle">Interactive</div>} />
            </ThemeProvider>,
        );
        expect(getByTestId('interactive-handle')).toBeInTheDocument();
    });

    it('should render both label and interactiveHandle when both provided', () => {
        const { getByText, getByTestId } = render(
            <ThemeProvider theme={testTheme}>
                <NodePort
                    type="input"
                    label="Test Label"
                    interactiveHandle={<div data-testid="interactive-handle">Interactive</div>}
                />
            </ThemeProvider>,
        );
        expect(getByText('Test Label')).toBeInTheDocument();
        expect(getByTestId('interactive-handle')).toBeInTheDocument();
    });

    it('should render in normal state by default', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <NodePort type="input" label="Test Label" />
            </ThemeProvider>,
        );
        const portHandle = container.querySelector('[data-state="normal"]');
        expect(portHandle).toBeInTheDocument();
    });

    it('should render warning icon in warning state', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <NodePort type="input" label="Test Label" state="warning" />
            </ThemeProvider>,
        );
        // Check for the WarningIcon's SVG
        const warningIcon = container.querySelector('svg[viewBox="0 0 20 20"]');
        expect(warningIcon).toBeInTheDocument();
    });

    it('should apply error styling to port handle in error state', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <NodePort type="input" label="Test Label" state="error" />
            </ThemeProvider>,
        );
        const portHandle = container.querySelector('[data-state="error"]');
        expect(portHandle).toBeInTheDocument();
    });

    it('should not render warning icon in normal state', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <NodePort type="input" label="Test Label" state="normal" />
            </ThemeProvider>,
        );
        const warningIcon = container.querySelector('svg[viewBox="0 0 20 20"]');
        expect(warningIcon).not.toBeInTheDocument();
    });

    it('should not render warning icon in error state', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <NodePort type="input" label="Test Label" state="error" />
            </ThemeProvider>,
        );
        const warningIcon = container.querySelector('svg[viewBox="0 0 20 20"]');
        expect(warningIcon).not.toBeInTheDocument();
    });

    it('should render warning icon for output port in warning state', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <NodePort type="output" label="Output Label" state="warning" />
            </ThemeProvider>,
        );
        const warningIcon = container.querySelector('svg[viewBox="0 0 20 20"]');
        expect(warningIcon).toBeInTheDocument();
    });

    it('should position warning icon after label for output ports', () => {
        const { container, getByText } = render(
            <ThemeProvider theme={testTheme}>
                <NodePort type="output" label="Output Label" state="warning" />
            </ThemeProvider>,
        );

        // Check that both elements exist
        expect(getByText('Output Label')).toBeInTheDocument();
        const warningIcon = container.querySelector('svg[viewBox="0 0 20 20"]');
        expect(warningIcon).toBeInTheDocument();

        // For output ports, check that the label container contains both elements in correct order
        const labelContainer = container.querySelector('div > div');
        const htmlContent = labelContainer?.innerHTML || '';

        // Find positions of the label text and svg tag
        const labelPosition = htmlContent.indexOf('Output Label');
        const svgPosition = htmlContent.indexOf('<svg');

        // In output ports, label should come before svg
        expect(labelPosition).toBeGreaterThan(-1);
        expect(svgPosition).toBeGreaterThan(-1);
        expect(labelPosition).toBeLessThan(svgPosition);
    });

    it('should position warning icon before label for input ports', () => {
        const { container, getByText } = render(
            <ThemeProvider theme={testTheme}>
                <NodePort type="input" label="Input Label" state="warning" />
            </ThemeProvider>,
        );

        // Check that both elements exist
        expect(getByText('Input Label')).toBeInTheDocument();
        const warningIcon = container.querySelector('svg[viewBox="0 0 20 20"]');
        expect(warningIcon).toBeInTheDocument();

        // For input ports, check that the label container contains both elements in correct order
        const labelContainer = container.querySelector('div > div');
        const htmlContent = labelContainer?.innerHTML || '';

        // Find positions of the label text and svg tag
        const labelPosition = htmlContent.indexOf('Input Label');
        const svgPosition = htmlContent.indexOf('<svg');

        // In input ports, svg should come before label
        expect(labelPosition).toBeGreaterThan(-1);
        expect(svgPosition).toBeGreaterThan(-1);
        expect(svgPosition).toBeLessThan(labelPosition);
    });
});
