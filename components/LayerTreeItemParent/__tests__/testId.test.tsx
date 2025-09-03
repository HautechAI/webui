import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { LayerTreeItemParent } from '../src/LayerTreeItemParent';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('LayerTreeItemParent - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <LayerTreeItemParent testId="my-test-layertreeitemparent"  />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-layertreeitemparent')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <LayerTreeItemParent  />
            </ThemeProvider>,
        );

        const element = container.firstChild;
        expect(element?.getAttribute?.('data-testid')).toBeNull();
    });
});
