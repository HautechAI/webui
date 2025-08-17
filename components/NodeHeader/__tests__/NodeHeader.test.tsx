import { render } from '@testing-library/react';
import { NodeHeader } from '../src/NodeHeader';

describe('NodeHeader', () => {
    it('should render without crashing', () => {
        render(<NodeHeader label="Test Label" />);
    });
});