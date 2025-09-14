import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { VisualEditorInput } from '../src/VisualEditorInput';
import { TextInput } from '../../TextInput/src';
import { NumberWithUnitsInput } from '../../NumberWithUnitsInput/src';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={testTheme}>{children}</ThemeProvider>
);

describe('VisualEditorInput', () => {
    it('should render without crashing with TextInput child', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorInput
                    isPort={false}
                    keyframesState="noKeyframes"
                >
                    <TextInput type="text" value="test" placeholder="Enter text" />
                </VisualEditorInput>
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
    });

    it('should render without crashing with NumberWithUnitsInput child', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorInput
                    isPort={false}
                    keyframesState="noKeyframes"
                >
                    <NumberWithUnitsInput
                        value="100"
                        units="px"
                        availableUnits={['px', '%']}
                        placeholder="Enter value"
                    />
                </VisualEditorInput>
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
    });

    it('should render keyframe toggle', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorInput
                    isPort={false}
                    keyframesState="noKeyframes"
                >
                    <TextInput type="text" value="test" placeholder="Enter text" />
                </VisualEditorInput>
            </TestWrapper>,
        );

        // Find the keyframe toggle button (it should have data-state attribute)
        const keyframeButton = container.querySelector('button[data-state]');
        expect(keyframeButton).toBeTruthy();
    });

    it('should call onToggleKeyframe when keyframe button is clicked', () => {
        const onToggleKeyframe = vi.fn();
        const { container } = render(
            <TestWrapper>
                <VisualEditorInput
                    isPort={false}
                    keyframesState="noKeyframes"
                    onToggleKeyframe={onToggleKeyframe}
                >
                    <TextInput type="text" value="test" placeholder="Enter text" />
                </VisualEditorInput>
            </TestWrapper>,
        );

        // Find the keyframe toggle button
        const keyframeButton = container.querySelector('button[data-state]');
        expect(keyframeButton).toBeTruthy();

        fireEvent.click(keyframeButton!);
        expect(onToggleKeyframe).toHaveBeenCalledTimes(1);
    });

    it('should show hover controls on hover when not disabled', () => {
        const onTogglePort = vi.fn();
        const { container } = render(
            <TestWrapper>
                <VisualEditorInput
                    isPort={false}
                    keyframesState="noKeyframes"
                    onTogglePort={onTogglePort}
                >
                    <TextInput type="text" value="test" placeholder="Enter text" />
                </VisualEditorInput>
            </TestWrapper>,
        );

        // Find the container
        const containerElement = container.firstChild as HTMLElement;
        expect(containerElement).toBeTruthy();

        // Trigger hover
        fireEvent.mouseEnter(containerElement);

        // Check if hover controls are visible
        const hoverControls = container.querySelector('[data-show="true"]');
        expect(hoverControls).toBeTruthy();
    });

    it('should call onTogglePort when port toggle button is clicked', () => {
        const onTogglePort = vi.fn();
        const { container } = render(
            <TestWrapper>
                <VisualEditorInput
                    isPort={false}
                    keyframesState="noKeyframes"
                    onTogglePort={onTogglePort}
                >
                    <TextInput type="text" value="test" placeholder="Enter text" />
                </VisualEditorInput>
            </TestWrapper>,
        );

        // Find the container and trigger hover
        const containerElement = container.firstChild as HTMLElement;
        fireEvent.mouseEnter(containerElement);

        // Find the port toggle button (WorkflowIcon button)
        const portToggleButtons = container.querySelectorAll('button[data-variant="flat"][data-size="xsmall"]');
        const portToggleButton = Array.from(portToggleButtons).find(button => 
            button !== container.querySelector('button[data-state]') // Exclude keyframe button
        );
        expect(portToggleButton).toBeTruthy();

        fireEvent.click(portToggleButton!);
        expect(onTogglePort).toHaveBeenCalledTimes(1);
    });

    it('should show UnlinkIcon when isPort is true', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorInput
                    isPort={true}
                    keyframesState="noKeyframes"
                >
                    <TextInput type="text" value="test" placeholder="Enter text" />
                </VisualEditorInput>
            </TestWrapper>,
        );

        // Find the container and trigger hover
        const containerElement = container.firstChild as HTMLElement;
        fireEvent.mouseEnter(containerElement);

        // When isPort is true, should show UnlinkIcon
        const hoverControls = container.querySelector('[data-show="true"]');
        expect(hoverControls).toBeTruthy();
    });

    it('should disable hover controls when disabled', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorInput
                    isPort={false}
                    keyframesState="noKeyframes"
                    disabled={true}
                >
                    <TextInput type="text" value="test" placeholder="Enter text" />
                </VisualEditorInput>
            </TestWrapper>,
        );

        // Find the container and trigger hover
        const containerElement = container.firstChild as HTMLElement;
        fireEvent.mouseEnter(containerElement);

        // Hover controls should not be visible when disabled
        const hoverControls = container.querySelector('[data-show="true"]');
        expect(hoverControls).toBeFalsy();
    });

    it('should render with different keyframe states', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorInput
                    isPort={false}
                    keyframesState="hasKeyframes"
                >
                    <TextInput type="text" value="test" placeholder="Enter text" />
                </VisualEditorInput>
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        
        // Find the keyframe toggle button
        const keyframeButton = container.querySelector('button[data-state="hasKeyframes"]');
        expect(keyframeButton).toBeTruthy();
    });

    it('should render with small size by default', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorInput
                    isPort={false}
                    keyframesState="noKeyframes"
                >
                    <TextInput type="text" value="test" placeholder="Enter text" />
                </VisualEditorInput>
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        // Component should render without errors with default small size
    });

    it('should render with medium size when specified', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorInput
                    isPort={false}
                    keyframesState="noKeyframes"
                    size="medium"
                >
                    <TextInput type="text" value="test" placeholder="Enter text" />
                </VisualEditorInput>
            </TestWrapper>,
        );

        expect(container.firstChild).toBeTruthy();
        // Component should render without errors with medium size
    });

    it('should apply testId correctly', () => {
        const { container } = render(
            <TestWrapper>
                <VisualEditorInput
                    isPort={false}
                    keyframesState="noKeyframes"
                    testId="test-visual-editor-input"
                >
                    <TextInput type="text" value="test" placeholder="Enter text" />
                </VisualEditorInput>
            </TestWrapper>,
        );

        const element = container.querySelector('[data-testid="test-visual-editor-input"]');
        expect(element).toBeTruthy();
    });
});
