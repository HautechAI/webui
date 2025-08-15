import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { PropertyBlock } from '../src/PropertyBlock';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('PropertyBlock', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <PropertyBlock />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render with default props', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <PropertyBlock />
            </ThemeProvider>,
        );
        
        expect(screen.getByText('Property')).toBeInTheDocument();
        expect(screen.getByText('Content placeholder')).toBeInTheDocument();
    });

    it('should render with custom children', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <PropertyBlock>Custom content</PropertyBlock>
            </ThemeProvider>,
        );
        
        expect(screen.getByText('Property')).toBeInTheDocument();
        expect(screen.getByText('Custom content')).toBeInTheDocument();
        expect(screen.queryByText('Content placeholder')).not.toBeInTheDocument();
    });

    it('should show remove button when removable is true', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <PropertyBlock removable />
            </ThemeProvider>,
        );
        
        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(1);
    });

    it('should not show remove button when removable is false', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <PropertyBlock removable={false} />
            </ThemeProvider>,
        );
        
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('should hide content when removed is true', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <PropertyBlock removable removed>
                    Custom content
                </PropertyBlock>
            </ThemeProvider>,
        );
        
        expect(screen.getByText('Property')).toBeInTheDocument();
        expect(screen.queryByText('Custom content')).not.toBeInTheDocument();
        expect(screen.queryByText('Content placeholder')).not.toBeInTheDocument();
    });
});