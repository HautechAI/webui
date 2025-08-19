import React from 'react';
import { fn } from '@storybook/test';

import { Box } from '../../../components/Box/src';
import { Tooltip } from '../../../components/Tooltip/src';
import { Sidebar, SidebarSection } from '../../../components/Sidebar/src';
import { Button } from '../../../components/Button/src';
import { Logo } from '../../../components/Logo/src';

export default {
    title: 'Data Display/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        text: 'This is a tooltip. Tooltips are used to describe or identify an element.',
        children: <div>This is a hoverable item</div>,
    },
    decorators: [
        (Story: React.ComponentType) => (
            <Box width={150}>
                <Story />
            </Box>
        ),
    ],
};

export const Small = {
    args: {},
};

export const SmallLeft = {
    args: {
        position: 'left',
    },
};

export const SmallRight = {
    args: {
        position: 'right',
    },
};

export const SmallBottom = {
    args: {
        position: 'bottom',
    },
};

export const Medium = {
    args: {
        size: 'medium',
    },
};

export const MediumWithLink = {
    args: {
        size: 'medium',
        buttonLabel: 'Label',
        onClick: fn() as React.MouseEventHandler<HTMLButtonElement>,
    },
};

export const WithSidebarZOrderIssue = {
    args: {
        text: 'This tooltip may appear behind the sidebar content due to z-order issues',
        children: <Button label="Hover me near sidebar" />,
    },
    decorators: [
        (Story: React.ComponentType) => (
            <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
                <Sidebar
                    header={
                        <SidebarSection>
                            <Logo />
                        </SidebarSection>
                    }
                    content={
                        <SidebarSection>
                            <div style={{ position: 'relative', zIndex: 10 }}>
                                Content with higher z-index that might cover tooltip
                            </div>
                        </SidebarSection>
                    }
                />
                <div style={{ padding: '20px', position: 'relative' }}>
                    <Story />
                    <p>
                        Hover the button above. The tooltip should appear on top of all content, including the sidebar.
                    </p>
                </div>
            </div>
        ),
    ],
    parameters: {
        layout: 'fullscreen',
    },
};

export const WithCustomZIndex = {
    args: {
        text: 'This tooltip uses a custom z-index of 2000',
        children: <Button label="Hover me" />,
        zIndex: 2000,
    },
    decorators: [
        (Story: React.ComponentType) => (
            <div>
                <div style={{ position: 'relative', zIndex: 1500, backgroundColor: '#f0f0f0', padding: '10px' }}>
                    Background element with z-index 1500
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Story />
                    <p>This tooltip has zIndex=2000 and should appear above the background element.</p>
                </div>
            </div>
        ),
    ],
};
