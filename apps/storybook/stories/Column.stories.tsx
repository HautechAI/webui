import { Button } from '../../../components/Button/src';
import { Column } from '../../../components/Column/src';

export default {
    title: 'Data Display/Column',
    component: Column,
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
