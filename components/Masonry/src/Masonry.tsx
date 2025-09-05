import React from 'react';
import { ThemeType, themeVars } from '@hautechai/webui.themeprovider';
import Masonry, { MasonryProps as _MasonryProps } from 'react-responsive-masonry';

export type MasonryProps = _MasonryProps & {
    gutter?: keyof ThemeType['foundation']['spacing'];
    testId?: string;
};

const MasonryGrid: React.FC<MasonryProps> = ({ gutter, children, testId, ...rest }) => {
    return (
        <Masonry {...rest} gutter={themeVars.spacing[gutter ?? 'm']} data-testid={testId}>
            {children}
        </Masonry>
    );
};

export default MasonryGrid;
