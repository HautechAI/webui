import { css, styled } from '@hautechai/webui.themeprovider';

type TileSize = 'medium' | 'small' | 'xlarge';

const tileSize = {
    small: 100,
    medium: 120,
    xlarge: 200,
};

const StyledTile = styled.div<Omit<TileProps, 'icon'>>`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.palette.layout.surfaceMid};
    border-radius: 8px;

    ${({ width, size }) =>
        (width || size) &&
        css`
            width: ${width ?? tileSize[size ?? 'medium']}px;
        `};
    ${({ height, size }) =>
        (height || size) &&
        css`
            height: ${height ?? tileSize[size ?? 'medium']}px;
        `};

    ${({ aspectRatio }) =>
        aspectRatio &&
        css`
            aspect-ratio: ${aspectRatio};
        `};

    background-image: ${({ image }) => (image ? `url(${image})` : 'none')};
    background-size: cover;
    background-position: center;

    border-color: ${({ theme }) => theme.palette.actions.primary};
    border-width: ${({ selected, theme }) => (selected ? theme.foundation.stroke.standard : 0)}px;
    border-style: solid;

    background-origin: border-box;
    box-sizing: border-box;

    .htch-webui-hoverable:hover & {
        border-width: ${({ theme }) => `${theme.foundation.stroke.standard}`}px;
    }
`;

export type TileProps = {
    icon?: React.ReactNode;
    image?: string;
    selected?: boolean;
    size?: TileSize;
    width?: number;
    height?: number;
    aspectRatio?: number;
};

export const Tile = (props: TileProps) => {
    const { icon, size, aspectRatio, ...rest } = props;
    const { width, height } = props;

    if (size && (width || height || aspectRatio)) {
        throw new Error('size and width/height/aspectRatio are mutually exclusive');
    }
    if (aspectRatio && width && height) {
        throw new Error('aspectRatio can be used only with one of width/height');
    }

    return (
        <StyledTile
            size={size ?? (!width && !height ? 'medium' : undefined)} // default medium size if no other size or width/height is provided
            aspectRatio={aspectRatio ?? (!size && (!width || !height) ? 1 : undefined)} // default aspect ratio to 1 if no other aspect ratio or width/height is provided
            {...rest}
        >
            {icon}
        </StyledTile>
    );
};
