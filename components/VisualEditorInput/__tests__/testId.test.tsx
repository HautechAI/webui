import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { VisualEditorInput } from '../src/VisualEditorInput';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('VisualEditorInput - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <VisualEditorInput
                    testId="my-test-visualeditorinput"
                    value="test"
                    units="px"
                    availableUnits={['px']}
                    isPort={false}
                    keyframesState="noKeyframes"
                />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-visualeditorinput')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <VisualEditorInput
                    value="test"
                    units="px"
                    availableUnits={['px']}
                    isPort={false}
                    keyframesState="noKeyframes"
                />
            </ThemeProvider>,
        );

        const element = container.firstChild as Element;
        expect(element?.getAttribute?.('data-testid')).toBeNull();
    });
});
