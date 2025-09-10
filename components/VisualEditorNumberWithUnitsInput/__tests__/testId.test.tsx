import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { VisualEditorNumberWithUnitsInput } from '../src/VisualEditorNumberWithUnitsInput';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={testTheme}>{children}</ThemeProvider>
);

describe('VisualEditorNumberWithUnitsInput testId', () => {
    it('should apply testId to the component root', () => {
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: false,
            keyframesState: 'noKeyframes' as const,
            testId: 'test-visual-editor-number-input',
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput {...props} />
            </TestWrapper>,
        );

        const element = container.querySelector('[data-testid="test-visual-editor-number-input"]');
        expect(element).toBeTruthy();
    });

    it('should not apply testId when not provided', () => {
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: false,
            keyframesState: 'noKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorNumberWithUnitsInput {...props} />
            </TestWrapper>,
        );

        const element = container.querySelector('[data-testid]');
        expect(element).toBeFalsy();
    });
});
