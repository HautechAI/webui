import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { TimelineRuler } from '../src/TimelineRuler';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('TimelineRuler - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <TimelineRuler testId="my-test-timelineruler" scale={1} length={100} numberedGraduationsDistance={10} />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-timelineruler')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <TimelineRuler scale={1} length={100} numberedGraduationsDistance={10} />
            </ThemeProvider>,
        );

        const element = container.firstChild as Element;
        expect(element?.getAttribute?.('data-testid')).toBeNull();
    });
});
