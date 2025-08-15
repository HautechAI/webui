import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { VisualEditorInput } from '../src/VisualEditorInput';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={testTheme}>
        {children}
    </ThemeProvider>
);

describe('VisualEditorInput', () => {
    it('should render without crashing', () => {
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: false,
            keyframesState: 'noKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorInput {...props} />
            </TestWrapper>
        );

        expect(container.firstChild).toBeTruthy();
    });

    it('should render with isPort true', () => {
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: true,
            keyframesState: 'noKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorInput {...props} />
            </TestWrapper>
        );

        expect(container.firstChild).toBeTruthy();
    });

    it('should render with different keyframe states', () => {
        const props = {
            value: '100',
            units: 'px',
            availableUnits: ['px', '%', 'em'],
            isPort: false,
            keyframesState: 'hasKeyframes' as const,
        };

        const { container } = render(
            <TestWrapper>
                <VisualEditorInput {...props} />
            </TestWrapper>
        );

        expect(container.firstChild).toBeTruthy();
    });
});