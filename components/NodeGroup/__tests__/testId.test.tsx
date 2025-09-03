import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { NodeGroup } from '../src/NodeGroup';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('NodeGroup - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <NodeGroup testId="my-test-nodegroup"  />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-nodegroup')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <NodeGroup  />
            </ThemeProvider>,
        );

        const element = container.firstChild;
        expect(element?.getAttribute?.('data-testid')).toBeNull();
    });
});
