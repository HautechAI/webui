import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { NodeFooter } from '../src/NodeFooter';

describe('NodeFooter', () => {
    it('should render without crashing', () => {
        render(<NodeFooter />);
    });
});
