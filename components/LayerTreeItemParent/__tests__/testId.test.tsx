import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { LayerTreeItemParent } from '../src/LayerTreeItemParent';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('LayerTreeItemParent - testId prop', () => {
    const testIcon = <div>icon</div>;
    const testLabel = 'Test Layer';

    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <LayerTreeItemParent testId="my-test-layertreeitemparent" icon={testIcon} label={testLabel} />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-layertreeitemparent')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <LayerTreeItemParent icon={testIcon} label={testLabel} />
            </ThemeProvider>,
        );

        const element = container.firstChild as Element;
        expect(element?.getAttribute?.('data-testid')).toBeNull();
    });
});
