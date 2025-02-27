import { wrap } from 'module';
import { Button } from '../../../components/Button/src';
import { Row } from '../../../components/Row/src';

export default {
    title: 'Data Display/Row',
    component: Row,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const DefaultSpacing = {
    args: {
        children: (
            <>
                <Button label="Button" />
                <Button label="Button" />
                <Button label="Button" />
            </>
        ),
    },
};

export const SpacingXXXL = {
    args: {
        spacing: 'xxxl',
        children: (
            <>
                <Button label="Button" />
                <Button label="Button" />
                <Button label="Button" />
            </>
        ),
    },
};

export const Wrap = {
    args: {
        wrap: true,
        children: (
            <>
                <Button label="Button" />
                <Button label="Button" />
                <Button label="Button" />
                <Button label="Button" />
                <Button label="Button" />
                <Button label="Button" />
                <Button label="Button" />
            </>
        ),
    },
    decorators: [
        (Story: any) => (
            <div style={{ width: '200px' }}>
                <Story />
            </div>
        ),
    ],
};
