import * as Icons from './assets';
export * as Icons from './assets';

export type IconName = keyof typeof Icons;
export type Size = 'xsmall' | 'small' | 'medium';

export const IconSize = {
    xsmall: 16,
    small: 20,
    medium: 24,
};

const Icon = ({ name, size }: { name: IconName; size: Size }) => {
    const Component = Icons[name];
    return Component ? <Component size={IconSize[size]} /> : null;
};

export default Icon;
