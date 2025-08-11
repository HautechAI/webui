import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { AspectRatio } from '../src/AspectRatio';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('AspectRatio', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <AspectRatio 
                        options={['1:1', '4:3', '16:9', '2:1']}
                        defaultOptions={['1:1', '4:3', '16:9']}
                        sizeForRatio={(ratio) => ({ width: 100, height: 100 })}
                    />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});