import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Table } from '../src/Table';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Table', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Table columns={[{ key: 'test', label: 'Test' }]} data={[{ test: 'Test Data' }]} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
