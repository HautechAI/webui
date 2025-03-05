import React from 'react';
import { ThemeType, useTheme } from '@hautechai/webui.themeprovider';
import Masonry, { MasonryProps as _MasonryProps } from 'react-responsive-masonry';

export type MasonryProps = _MasonryProps & {
    gutter?: keyof ThemeType['foundation']['spacing'];
};

const MasonryGrid: React.FC<MasonryProps> = ({ gutter, children, ...rest }) => {
    const theme = useTheme();
    return (
        <Masonry
            {...rest}
            gutter={gutter ? `${theme.foundation.spacing[gutter]}px` : `${theme.foundation.spacing.m}px`}
        >
            {children}
        </Masonry>
    );
};

export default MasonryGrid;
