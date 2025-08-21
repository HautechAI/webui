import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Avatar } from '../src/Avatar';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Avatar', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Avatar />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render with default medium size', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Avatar initials="AB" />
            </ThemeProvider>,
        );
        const avatarElement = container.querySelector('div');
        expect(avatarElement).toHaveStyle({ width: '40px', height: '40px' });
    });

    it('should render small size correctly', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Avatar size="small" initials="AB" />
            </ThemeProvider>,
        );
        const avatarElement = container.querySelector('div');
        expect(avatarElement).toHaveStyle({ width: '24px', height: '24px' });
    });

    it('should render large size correctly', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Avatar size="large" initials="AB" />
            </ThemeProvider>,
        );
        const avatarElement = container.querySelector('div');
        expect(avatarElement).toHaveStyle({ width: '60px', height: '60px' });
    });

    it('should render with gradient background', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Avatar gradient={['#ff0000', '#0000ff']} initials="AB" />
            </ThemeProvider>,
        );
        const avatarElement = container.querySelector('div');
        expect(avatarElement).toHaveStyle({
            background: 'linear-gradient(180deg, #ff0000 0%, #0000ff 100%)',
        });
    });

    it('should render image when src is provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Avatar src="/test-image.jpg" />
            </ThemeProvider>,
        );
        // Should have an Image component (div > div structure)
        const imageElement = container.querySelector('div > div');
        expect(imageElement).toBeTruthy();
        // Should not have Typography when image is provided
        const textElement = container.querySelector('[data-variant]');
        expect(textElement).toBeNull();
    });

    it('should render initials with appropriate typography', () => {
        const { getByText } = render(
            <ThemeProvider theme={testTheme}>
                <Avatar size="small" initials="AB" />
            </ThemeProvider>,
        );
        const textElement = getByText('AB');
        expect(textElement).toHaveAttribute('data-variant', 'CaptionEmphasized');
    });

    it('should render icon with appropriate size', () => {
        const MockIcon = ({ size }: { size?: number }) => <span data-size={size}>Icon</span>;
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Avatar size="small" icon={<MockIcon />} />
            </ThemeProvider>,
        );
        const iconElement = container.querySelector('[data-size]');
        expect(iconElement).toHaveAttribute('data-size', '12');
    });
});
