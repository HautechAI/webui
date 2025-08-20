import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { NodeContainer } from '../src/NodeContainer';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('NodeContainer', () => {
    it('should render without crashing', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <NodeContainer>Test content</NodeContainer>
            </ThemeProvider>,
        );
    });

    it('should not have selected state by default', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <NodeContainer>Test content</NodeContainer>
            </ThemeProvider>,
        );
        const nodeContainer = container.firstChild as HTMLElement;
        expect(nodeContainer).toHaveAttribute('data-selected', 'false');
    });

    it('should have selected state when selected prop is true', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <NodeContainer selected={true}>Test content</NodeContainer>
            </ThemeProvider>,
        );
        const nodeContainer = container.firstChild as HTMLElement;
        expect(nodeContainer).toHaveAttribute('data-selected', 'true');
    });

    it('should have selected state when selected prop is false', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <NodeContainer selected={false}>Test content</NodeContainer>
            </ThemeProvider>,
        );
        const nodeContainer = container.firstChild as HTMLElement;
        expect(nodeContainer).toHaveAttribute('data-selected', 'false');
    });

    it('should render children', () => {
        const { getByText } = render(
            <ThemeProvider theme={testTheme}>
                <NodeContainer>Test content</NodeContainer>
            </ThemeProvider>,
        );
        expect(getByText('Test content')).toBeInTheDocument();
    });

    it('should apply custom width when provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <NodeContainer width={300}>Test content</NodeContainer>
            </ThemeProvider>,
        );
        const nodeContainer = container.firstChild as HTMLElement;
        expect(nodeContainer).toHaveStyle('width: 300px');
    });
});
