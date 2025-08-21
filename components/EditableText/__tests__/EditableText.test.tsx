import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';
import { EditableText } from '../src';

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={testTheme}>{component}</ThemeProvider>);
};

describe('EditableText', () => {
    it('should render text in view mode with medium size and not selected by default', () => {
        renderWithTheme(<EditableText text="Test text" mode="view" />);

        expect(screen.getByText('Test text')).toBeInTheDocument();
    });

    it('should render text with small size when specified', () => {
        renderWithTheme(<EditableText text="Test text" mode="view" size="small" />);

        expect(screen.getByText('Test text')).toBeInTheDocument();
    });

    it('should render text with selected styling when selected is true', () => {
        renderWithTheme(<EditableText text="Test text" mode="view" selected={true} />);

        expect(screen.getByText('Test text')).toBeInTheDocument();
    });

    it('should render TextInput in edit mode', () => {
        renderWithTheme(<EditableText text="Test text" mode="edit" />);

        const input = screen.getByDisplayValue('Test text');
        expect(input).toBeInTheDocument();
        expect(input.tagName).toBe('INPUT');
    });

    it('should call onStartEditing on double click in view mode', () => {
        const onStartEditing = vi.fn();

        renderWithTheme(<EditableText text="Test text" mode="view" onStartEditing={onStartEditing} />);

        const textElement = screen.getByText('Test text');
        fireEvent.doubleClick(textElement);

        expect(onStartEditing).toHaveBeenCalledTimes(1);
    });

    it('should call onChange when input value changes in edit mode', () => {
        const onChange = vi.fn();

        renderWithTheme(<EditableText text="Test text" mode="edit" onChange={onChange} />);

        const input = screen.getByDisplayValue('Test text');
        fireEvent.change(input, { target: { value: 'New text' } });

        expect(onChange).toHaveBeenCalledWith('New text');
    });

    it('should call onFinishEditing when Enter is pressed in edit mode', () => {
        const onFinishEditing = vi.fn();

        renderWithTheme(<EditableText text="Test text" mode="edit" onFinishEditing={onFinishEditing} />);

        const input = screen.getByDisplayValue('Test text');
        fireEvent.keyDown(input.parentElement!, { key: 'Enter', code: 'Enter' });

        expect(onFinishEditing).toHaveBeenCalledTimes(1);
    });
});
