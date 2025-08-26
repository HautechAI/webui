import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import SegmentedControl from '../src/SegmentedControl';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

// Mock icon component for testing
const MockIcon = ({ size, ...props }: { size?: number; testId?: string }) => (
    <svg data-testid={props.testId} data-size={size} {...props}>
        <circle cx="10" cy="10" r="5" />
    </svg>
);

describe('SegmentedControl', () => {
    const mockOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <SegmentedControl options={[{ value: 'test', label: 'Test' }]} value="test" onChange={() => {}} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should apply whitespace data attribute when whitespace prop is provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <SegmentedControl options={mockOptions} value="option1" onChange={() => {}} whitespace="xl" />
            </ThemeProvider>,
        );

        const items = container.querySelectorAll('[data-whitespace="xl"]');
        expect(items.length).toBe(3); // Should apply to all options
    });

    it('should apply stretch data attribute when stretch prop is true', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <SegmentedControl options={mockOptions} value="option1" onChange={() => {}} stretch={true} />
            </ThemeProvider>,
        );

        const containerElement = container.querySelector('[data-stretch="true"]');
        expect(containerElement).toBeInTheDocument();

        const items = container.querySelectorAll('[data-stretch="true"]');
        expect(items.length).toBe(4); // Container + 3 options
    });

    it('should work with both stretch and whitespace props together', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <SegmentedControl
                    options={mockOptions}
                    value="option1"
                    onChange={() => {}}
                    stretch={true}
                    whitespace="l"
                />
            </ThemeProvider>,
        );

        const stretchItems = container.querySelectorAll('[data-stretch="true"]');
        expect(stretchItems.length).toBe(4); // Container + 3 options

        const whitespaceItems = container.querySelectorAll('[data-whitespace="l"]');
        expect(whitespaceItems.length).toBe(3); // 3 options
    });

    it('should work with material variant', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <SegmentedControl
                    options={mockOptions}
                    value="option1"
                    onChange={() => {}}
                    material={true}
                    stretch={true}
                    whitespace="m"
                />
            </ThemeProvider>,
        );

        const stretchItems = container.querySelectorAll('[data-stretch="true"]');
        expect(stretchItems.length).toBe(4);

        const whitespaceItems = container.querySelectorAll('[data-whitespace="m"]');
        expect(whitespaceItems.length).toBe(3);
    });

    it('should apply size data attribute when size prop is provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <SegmentedControl options={mockOptions} value="option1" onChange={() => {}} size="small" />
            </ThemeProvider>,
        );

        const sizeItems = container.querySelectorAll('[data-size="small"]');
        expect(sizeItems.length).toBe(3); // Should apply to all options
    });

    it('should default to default size when no size prop is provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <SegmentedControl options={mockOptions} value="option1" onChange={() => {}} />
            </ThemeProvider>,
        );

        const defaultSizeItems = container.querySelectorAll('[data-size="default"]');
        expect(defaultSizeItems.length).toBe(3); // Should apply to all options
    });

    it('should work with size prop combined with other props', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <SegmentedControl
                    options={mockOptions}
                    value="option1"
                    onChange={() => {}}
                    size="small"
                    stretch={true}
                    whitespace="m"
                    material={true}
                />
            </ThemeProvider>,
        );

        const sizeItems = container.querySelectorAll('[data-size="small"]');
        expect(sizeItems.length).toBe(3);

        const stretchItems = container.querySelectorAll('[data-stretch="true"]');
        expect(stretchItems.length).toBe(4); // Container + 3 options

        const whitespaceItems = container.querySelectorAll('[data-whitespace="m"]');
        expect(whitespaceItems.length).toBe(3);
    });

    it('should inject size 20 into leadingIcon React elements', () => {
        const optionsWithLeadingIcons = [
            { value: 'option1', label: 'Option 1', leadingIcon: <MockIcon testId="leading-icon-1" /> },
            { value: 'option2', label: 'Option 2', leadingIcon: <MockIcon testId="leading-icon-2" size={16} /> },
            { value: 'option3', label: 'Option 3' },
        ];

        const { getByTestId } = render(
            <ThemeProvider theme={testTheme}>
                <SegmentedControl options={optionsWithLeadingIcons} value="option1" onChange={() => {}} />
            </ThemeProvider>,
        );

        // Icons should have size 20 injected
        expect(getByTestId('leading-icon-1')).toHaveAttribute('data-size', '20');
        expect(getByTestId('leading-icon-2')).toHaveAttribute('data-size', '20');
    });

    it('should inject size 20 into trailingIcon React elements', () => {
        const optionsWithTrailingIcons = [
            { value: 'option1', label: 'Option 1', trailingIcon: <MockIcon testId="trailing-icon-1" /> },
            { value: 'option2', label: 'Option 2', trailingIcon: <MockIcon testId="trailing-icon-2" size={24} /> },
            { value: 'option3', label: 'Option 3' },
        ];

        const { getByTestId } = render(
            <ThemeProvider theme={testTheme}>
                <SegmentedControl options={optionsWithTrailingIcons} value="option1" onChange={() => {}} />
            </ThemeProvider>,
        );

        // Icons should have size 20 injected
        expect(getByTestId('trailing-icon-1')).toHaveAttribute('data-size', '20');
        expect(getByTestId('trailing-icon-2')).toHaveAttribute('data-size', '20');
    });

    it('should handle non-React elements in icon slots without error', () => {
        const optionsWithNonReactIcons = [
            { value: 'option1', label: 'Option 1', leadingIcon: 'string-icon' },
            { value: 'option2', label: 'Option 2', trailingIcon: null },
            { value: 'option3', label: 'Option 3' },
        ];

        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <SegmentedControl options={optionsWithNonReactIcons} value="option1" onChange={() => {}} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should inject size 20 into both leading and trailing icons', () => {
        const optionsWithBothIcons = [
            {
                value: 'option1',
                label: 'Option 1',
                leadingIcon: <MockIcon testId="both-leading" />,
                trailingIcon: <MockIcon testId="both-trailing" />,
            },
        ];

        const { getByTestId } = render(
            <ThemeProvider theme={testTheme}>
                <SegmentedControl options={optionsWithBothIcons} value="option1" onChange={() => {}} />
            </ThemeProvider>,
        );

        expect(getByTestId('both-leading')).toHaveAttribute('data-size', '20');
        expect(getByTestId('both-trailing')).toHaveAttribute('data-size', '20');
    });
});
