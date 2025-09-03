import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Modal } from '../src/Modal';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Modal testId', () => {
    it('should render with data-testid when testId is provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Modal testId="test-modal" open>
                    <div>Modal content</div>
                </Modal>
            </ThemeProvider>,
        );

        const modal = container.querySelector('[data-testid="test-modal"]');
        expect(modal).toBeInTheDocument();
    });

    it('should not render data-testid when testId is not provided', () => {
        const { container } = render(
            <ThemeProvider theme={testTheme}>
                <Modal open>
                    <div>Modal content</div>
                </Modal>
            </ThemeProvider>,
        );

        const modalWithTestId = container.querySelector('[data-testid]');
        expect(modalWithTestId).toBeNull();
    });
});
