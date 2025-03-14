import avatar from '../../../assets/Avatar.png';

import { PlaceholderIcon } from '../../../components/Icon/src';
import { Box } from '../../../components/Box/src';
import { DataItem } from '../../../components/DataItem/src/DataItem';
import { IconButton } from '../../../components/IconButton/src';

export default {
    title: 'Data Display/DataItem',
    component: DataItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story: any) => (
            <Box width={300}>
                <Story />
            </Box>
        ),
    ],
};

export const Column = {
    args: {
        label: 'Current plan',
        value: 'Basic',
    },
};

export const SmallData = {
    args: {
        label: 'Current plan',
        value: 'Basic',
        size: 'small',
        primary: 'data',
        direction: 'column',
    },
};

export const MediumHeading = {
    args: {
        label: 'Current plan',
        value: 'Basic',
        size: 'medium',
        primary: 'heading',
        direction: 'column',
    },
};

export const SmallHeading = {
    args: {
        label: 'Current plan',
        value: 'Basic',
        size: 'small',
        primary: 'heading',
        direction: 'column',
    },
};

export const Row = {
    args: {
        label: 'Heading',
        value: 'Data',
        direction: 'row',
    },
};

export const RowWithIcon = {
    args: {
        label: 'Heading',
        value: 'Data',
        direction: 'row',
        trailingIcon: <PlaceholderIcon />,
    },
};

export const RowWithButton = {
    args: {
        label: 'Heading',
        value: 'Data',
        direction: 'row',
        trailingIcon: <IconButton size="small" variant="flat" icon={<PlaceholderIcon />} />,
    },
};
