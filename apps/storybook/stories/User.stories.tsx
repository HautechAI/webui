import React from 'react';
import avatar from '../../../assets/Avatar.png';
import { fn } from '@storybook/test';

import { User } from '../../../components/User/src';
import { MoreIcon, UploadIcon } from '../../../components/Icon/src';
import { Box } from '../../../components/Box/src';
import { Menu } from '../../../components/Menu/src';
import { ContextMenu } from '../../../components/ContextMenu/src';
import { DataItem } from '../../../components/DataItem/src';
import { IconButton } from '../../../components/IconButton/src';

export default {
    title: 'Data Display/User',
    component: User,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        (Story: React.ComponentType) => (
            <Box width={200}>
                <Story />
            </Box>
        ),
    ],
};

export const Main = {
    args: {
        avatar,
        title: 'John Doe',
        subtitle: '4 min ago',
    },
};

export const WithIconButton = {
    args: {
        avatar,
        title: 'John Doe',
        subtitle: '4 min ago',
        actions: (
            <IconButton
                size="small"
                variant="flat"
                icon={<MoreIcon />}
                onClick={fn() as (e: React.MouseEvent<HTMLButtonElement>) => void}
            />
        ),
    },
};

export const WithMenu = {
    args: {
        avatar,
        title: 'John Doe',
        subtitle: '4 min ago',
        actions: (
            <ContextMenu
                isLeftClick
                heading={{
                    data: <DataItem primary="heading" direction="column" label="Heading" value="Data" />,
                    badge: 'Label',
                }}
                menus={[
                    <Menu
                        options={[
                            {
                                label: 'Option 1',
                                leadingIcon: <UploadIcon />,
                                onClick: () => fn(),
                                size: 'small',
                            },
                            { label: 'Any text', onClick: () => fn(), size: 'small' },
                        ]}
                    />,
                ]}
            >
                <IconButton size="small" variant="flat" icon={<MoreIcon />} />
            </ContextMenu>
        ),
    },
};
