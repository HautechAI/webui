import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Modal } from '../src/Modal';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Modal', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Modal open={true} onClose={() => {}}>Test Modal</Modal>
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
