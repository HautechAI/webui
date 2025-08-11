import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { IconButton } from '../src/IconButton';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('IconButton', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <IconButton icon="test" onClick={() => {}} />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
