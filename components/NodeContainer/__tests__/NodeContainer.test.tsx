import { render } from '@testing-library/react';
import { NodeContainer } from '../src/NodeContainer';

describe('NodeContainer', () => {
    it('should render without crashing', () => {
        render(<NodeContainer>Test content</NodeContainer>);
    });
});