import { css, styled } from '@hautechai/webui.themeprovider';

type TileSize = 'medium' | 'small' | 'xlarge';

const tileSize = {
    small: 100,
    medium: 120,
    xlarge: 200,
};

const sizeToUnits = (size?: number | string) => {
    if (!size) return undefined;
    return typeof size === 'number' ? `${size}px` : size;
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
            width: ${sizeToUnits(width) ?? sizeToUnits(tileSize[size ?? 'medium'])};
        `};
    ${({ height, size }) =>
        (height || size) &&
        css`
            height: ${sizeToUnits(height) ?? sizeToUnits(tileSize[size ?? 'medium'])};
        `};

    ${({ aspectRatio }) =>
        aspectRatio &&
        css`
            aspect-ratio: ${aspectRatio};
        `};

    background-image: ${({ image }) => (image ? `url(${image})` : 'none')};
    background-size: cover;
    background-position: center;

    border-width: ${({ theme }) => `${theme.foundation.stroke.standard}`}px;
    border-style: solid;

    background-origin: border-box;
    box-sizing: border-box;

    transition: background-color 0.3s ease, border-color 0.3s ease, outline-color 0.3s ease, transform 0.3s ease;

    border-color: ${({ selected, theme }) => (selected ? theme.palette.actions.primary : 'transparent')};
    .htch-webui-hoverable:hover & {
        border-color: ${({ theme }) => theme.palette.actions.primary};
    }
`;

export type TileProps = {
    className?: string;
    icon?: React.ReactNode;
    image?: string;
    selected?: boolean;
    size?: TileSize;
    width?: number | string;
    height?: number | string;
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
