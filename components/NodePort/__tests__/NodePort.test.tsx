import { render } from '@testing-library/react';
import { NodePort } from '../src/NodePort';

describe('NodePort', () => {
    it('should render without crashing', () => {
        render(<NodePort type="input" />);
    });
});