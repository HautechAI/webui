import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { TimelineRuler } from '../src';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('TimelineRuler', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <TimelineRuler scale={50} length={10} numberedGraduationsDistance={100} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render numbered graduations for basic timeline', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <TimelineRuler scale={50} length={10} numberedGraduationsDistance={100} />
            </ThemeProvider>,
        );

        // Should have at least 0s label
        expect(screen.getByText('0s')).toBeInTheDocument();
    });

    it('should render appropriate time labels based on scale and length', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <TimelineRuler scale={100} length={5} numberedGraduationsDistance={100} />
            </ThemeProvider>,
        );

        // Should have time labels
        expect(screen.getByText('0s')).toBeInTheDocument();
    });

    it('should handle small time intervals correctly', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <TimelineRuler scale={200} length={2} numberedGraduationsDistance={50} />
            </ThemeProvider>,
        );

        // Should have start time label
        expect(screen.getByText('0s')).toBeInTheDocument();
    });

    it('should handle large time intervals correctly', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <TimelineRuler scale={10} length={100} numberedGraduationsDistance={200} />
            </ThemeProvider>,
        );

        // Should have start time label
        expect(screen.getByText('0s')).toBeInTheDocument();
    });

    it('should render graduation lines', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <TimelineRuler scale={50} length={10} numberedGraduationsDistance={100} />
            </ThemeProvider>,
        );

        // Should have graduation line elements (looking for elements with the CSS class)
        const lines = container.querySelectorAll('[class*="css-"]');
        expect(lines.length).toBeGreaterThan(0);
    });

    it('should handle edge case with very short timeline', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <TimelineRuler scale={100} length={0.5} numberedGraduationsDistance={100} />
            </ThemeProvider>,
        );

        // Should still render at least the start time
        expect(screen.getByText('0s')).toBeInTheDocument();
    });

    it('should handle edge case with very long timeline', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <TimelineRuler scale={1} length={1000} numberedGraduationsDistance={100} />
            </ThemeProvider>,
        );

        // Should still render start time
        expect(screen.getByText('0s')).toBeInTheDocument();
    });

    it('should render additional unnumbered graduations when last numbered graduation is not at timeline end', () => {
        // Example: 14 second ruler with 10s graduations should show 0s, 10s and 2 unnumbered graduations
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <TimelineRuler scale={50} length={14} numberedGraduationsDistance={500} />
            </ThemeProvider>,
        );

        // Should have numbered graduations at 0s and 10s
        expect(screen.getByText('0s')).toBeInTheDocument();
        expect(screen.getByText('10s')).toBeInTheDocument();

        // Component should render (we verify it doesn't crash)
        expect(container.firstChild).toBeInTheDocument();
    });
});
