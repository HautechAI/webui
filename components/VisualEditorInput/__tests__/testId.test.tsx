import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { VisualEditorInput } from '../src/VisualEditorInput';
import { TextInput } from '../../TextInput/src';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('VisualEditorInput - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <VisualEditorInput
                    testId="my-test-visualeditorinput"
                    isPort={false}
                    keyframesState="noKeyframes"
                >
                    <TextInput type="text" value="test" placeholder="Enter text" />
                </VisualEditorInput>
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-visualeditorinput')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <VisualEditorInput
                    isPort={false}
                    keyframesState="noKeyframes"
                >
                    <TextInput type="text" value="test" placeholder="Enter text" />
                </VisualEditorInput>
            </ThemeProvider>,
        );

        const element = container.firstChild as Element;
        expect(element?.getAttribute?.('data-testid')).toBeNull();
    });
});
