import { StoryObj } from '@storybook/react';
import Icon, { IconName, Icons, IconSize, Size } from '../../../components/Icon';

export default {
    title: 'Icons/Icons',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'select',
            options: Object.keys(Icons) as IconName[],
        },
        size: {
            control: 'radio',
            options: Object.keys(IconSize) as Size[],
        },
    },
};

export const Default = {
    args: {
        name: 'Placeholder',
        size: 'medium',
    },
};

const iconStories: Record<string, StoryObj<typeof Icon>> = {};

Object.entries(Icons).forEach(([key]) => {
    iconStories[key] = {
        args: {
            name: key as IconName,
            size: 'medium' as Size,
        },
    };
});

export const Burger = iconStories.Burger;
export const Undo = iconStories.Undo;
export const TextPrompt = iconStories.TextPrompt;
export const Download = iconStories.Download;
export const Camera = iconStories.Camera;
export const Redo = iconStories.Redo;
