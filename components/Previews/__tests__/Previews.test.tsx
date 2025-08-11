import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Previews } from '../src/Previews';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Previews', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Previews images={['test1.jpg', 'test2.jpg']} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
