import { fn } from '@storybook/test';
import { Button } from '../../../components/Button/src';
import { Column } from '../../../components/Column/src';
import { Divider } from '../../../components/Divider/src';
import { MoreIcon, UploadIcon } from '../../../components/Icon/src';
import { IconButton } from '../../../components/IconButton/src';
import { Menu } from '../../../components/Menu/src';
import { Popover, PopoverRef } from '../../../components/Popover/src';
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

export const WithMenus = {
    args: {
        content: ({ close }: PopoverRef) => (
            <Column spacing="s">
                <Menu
                    options={[
                        {
                            label: 'Option 1',
                            leadingIcon: <UploadIcon />,
                            onClick: () => {
                                fn();
                                close();
                            },
                            size: 'medium',
                        },
                        {
                            label: 'Any text',
                            onClick: () => {
                                fn();
                                close();
                            },
                            size: 'medium',
                        },
                    ]}
                />
                <Divider />
                <Menu
                    options={[
                        {
                            label: 'Option 2',
                            onClick: () => {
                                fn();
                                close();
                            },
                            size: 'small',
                        },
                        {
                            label: 'Any text very very long text',
                            trailingIcon: <UploadIcon />,
                            onClick: () => {
                                fn();
                                close();
                            },
                            size: 'small',
                        },
                    ]}
                />
                <Divider />
                <Menu
                    options={[
                        {
                            label: 'Delete',
                            trailingIcon: <MoreIcon />,
                            onClick: () => {
                                fn();
                                close();
                            },
                            size: 'medium',
                        },
                    ]}
                />
            </Column>
        ),
        contentPositions: ['bottom'],
        trigger: () => <IconButton icon={<MoreIcon />} />,
    },
};
