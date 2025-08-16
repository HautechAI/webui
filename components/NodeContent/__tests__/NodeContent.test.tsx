import { render } from '@testing-library/react';
import { NodeContent } from '../src/NodeContent';

describe('NodeContent', () => {
    it('should render without crashing', () => {
        render(<NodeContent>Test content</NodeContent>);
    });
});