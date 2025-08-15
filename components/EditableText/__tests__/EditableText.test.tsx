import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';
import { EditableText } from '../src';

const renderWithTheme = (component: React.ReactElement) => {
    return render(
        <ThemeProvider theme={testTheme}>
            {component}
        </ThemeProvider>
    );
};

describe('EditableText', () => {
    it('should render text in view mode', () => {
        renderWithTheme(
            <EditableText 
                text="Test text" 
                mode="view" 
                textStyle="medium-regular"
            />
        );
        
        expect(screen.getByText('Test text')).toBeInTheDocument();
    });

    it('should render input in edit mode', () => {
        renderWithTheme(
            <EditableText 
                text="Test text" 
                mode="edit" 
                textStyle="medium-regular"
            />
        );
        
        const input = screen.getByDisplayValue('Test text');
        expect(input).toBeInTheDocument();
        expect(input.tagName).toBe('INPUT');
    });

    it('should call onStartEditing on double click in view mode', () => {
        const onStartEditing = vi.fn();
        
        renderWithTheme(
            <EditableText 
                text="Test text" 
                mode="view" 
                textStyle="medium-regular"
                onStartEditing={onStartEditing}
            />
        );
        
        const textElement = screen.getByText('Test text');
        fireEvent.doubleClick(textElement);
        
        expect(onStartEditing).toHaveBeenCalledTimes(1);
    });

    it('should call onChange when input value changes in edit mode', () => {
        const onChange = vi.fn();
        
        renderWithTheme(
            <EditableText 
                text="Test text" 
                mode="edit" 
                textStyle="medium-regular"
                onChange={onChange}
            />
        );
        
        const input = screen.getByDisplayValue('Test text');
        fireEvent.change(input, { target: { value: 'New text' } });
        
        expect(onChange).toHaveBeenCalledWith('New text');
    });

    it('should call onFinishEditing when Enter is pressed in edit mode', () => {
        const onFinishEditing = vi.fn();
        
        renderWithTheme(
            <EditableText 
                text="Test text" 
                mode="edit" 
                textStyle="medium-regular"
                onFinishEditing={onFinishEditing}
            />
        );
        
        const input = screen.getByDisplayValue('Test text');
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
        
        expect(onFinishEditing).toHaveBeenCalledTimes(1);
    });
});