import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { VisualEditorTextInput } from '../src/VisualEditorTextInput';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={testTheme}>{children}</ThemeProvider>
);

describe('VisualEditorTextInput testId', () => {
    it('should apply testId correctly', () => {
        const props = {
            value: 'Test',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            testId: 'visual-editor-text-input',
        };

        const { getByTestId } = render(
            <TestWrapper>
                <VisualEditorTextInput {...props} />
            </TestWrapper>,
        );

        expect(getByTestId('visual-editor-text-input')).toBeTruthy();
    });

    it('should not break when testId is not provided', () => {
        const props = {
            value: 'Test',
            isPort: false,
            keyframesState: 'noKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorTextInput {...props} />
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
    });
});
