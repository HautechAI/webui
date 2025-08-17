import React from 'react';
import { Button } from '../../../components/Button/src';
import { Row } from '../../../components/Row/src';
import { IconButton } from '../../../components/IconButton/src';
import { BurgerIcon } from '../../../components/Icon/src';

export default {
    title: 'Layout/Row',
    component: Row as unknown,
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
        (Story: React.ComponentType) => (
            <div style={{ width: '200px' }}>
                <Story />
            </div>
        ),
    ],
};

export const AlignCenter = {
    args: {
        spacing: 's',
        align: 'center',
        children: (
            <>
                <IconButton icon={<BurgerIcon />} />
                <IconButton icon={<BurgerIcon />} size="small" />
            </>
        ),
    },
};

export const NoOverflow = {
    args: {
        noOverflow: true,
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
        (Story: React.ComponentType) => (
            <div
                style={{
                    display: 'flex',
                    width: '200px',
                    height: '200px',
                    border: '1px solid red',
                    flexDirection: 'column',
                }}
            >
                <Story />
            </div>
        ),
    ],
};
