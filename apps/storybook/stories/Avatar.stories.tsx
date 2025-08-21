import img from '../../../assets/Avatar.png';
import { PlaceholderIcon } from '../../../components/Icon/src';
import { Avatar } from '../../../components/Avatar/src';

export default {
    title: 'Data Display/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: {
                type: 'select',
            },
            options: ['small', 'medium', 'large'],
        },
    },
};

export const Empty = {
    args: {},
};

export const WithImage = {
    args: {
        src: img,
    },
};

export const WithIcon = {
    args: {
        icon: <PlaceholderIcon />,
    },
};

export const WithInitials = {
    args: {
        initials: 'JC',
    },
};

// Size variants
export const SmallSize = {
    args: {
        initials: 'S',
        size: 'small',
    },
};

export const MediumSize = {
    args: {
        initials: 'M',
        size: 'medium',
    },
};

export const LargeSize = {
    args: {
        initials: 'L',
        size: 'large',
    },
};

// Gradient examples
export const WithGradient = {
    args: {
        initials: 'AB',
        gradient: ['#ff6b6b', '#4ecdc4'],
    },
};

export const LargeWithGradient = {
    args: {
        initials: 'XY',
        size: 'large',
        gradient: ['#667eea', '#764ba2'],
    },
};

export const SmallWithGradient = {
    args: {
        initials: 'CD',
        size: 'small',
        gradient: ['#ffecd2', '#fcb69f'],
    },
};

// Icon with different sizes
export const SmallWithIcon = {
    args: {
        icon: <PlaceholderIcon />,
        size: 'small',
    },
};

export const LargeWithIcon = {
    args: {
        icon: <PlaceholderIcon />,
        size: 'large',
    },
};

// Image with different sizes
export const SmallWithImage = {
    args: {
        src: img,
        size: 'small',
    },
};

export const LargeWithImage = {
    args: {
        src: img,
        size: 'large',
    },
};
