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
});
