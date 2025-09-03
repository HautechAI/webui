import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Table } from '../src/Table';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Table - testId prop', () => {
    it('should apply testId as data-testid attribute when provided', () => {
        render(
            <ThemeProvider theme={testTheme}>
                <Table testId="my-test-table"  />
            </ThemeProvider>,
        );

        expect(screen.getByTestId('my-test-table')).toBeInTheDocument();
    });

    it('should not render data-testid attribute when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Table  />
            </ThemeProvider>,
        );

        const element = container.firstChild;
        expect(element?.getAttribute?.('data-testid')).toBeNull();
    });
});
