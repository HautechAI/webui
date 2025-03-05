import { Button } from '../../../components/Button/src';
import { Column } from '../../../components/Column/src';
import { Popover } from '../../../components/Popover/src/Popover';
import { Typography } from '../../../components/Typography/src';

export default {
    title: 'Interaction/Popover',
    component: Popover,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export const Main = {
    args: {
        content: () => (
            <Column>
                <Typography variant="Body">This is a popover content</Typography>
                <Typography variant="Body">This is a popover content</Typography>
                <Typography variant="Body">This is a popover content</Typography>
            </Column>
        ),
        trigger: () => <Button label="Click me" />,
    },
};

export const WithCustomPosition = {
    args: {
        content: () => <Typography variant="Body">This is a popover content</Typography>,
        contentPositions: ['bottom'],
        trigger: () => <Button label="Click me" />,
    },
};
