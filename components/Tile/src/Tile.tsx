import { styled } from '@hautechai/webui.themeprovider';

type TileSize = 'medium' | 'small';

const tileSize = {
    small: 100,
    medium: 120,
};

const StyledTile = styled.div<Omit<TileProps, 'icon'>>`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.palette.layout.surfaceMid};
    border-radius: 8px;
    width: ${({ size }) => tileSize[size ?? 'medium']}px;
    height: ${({ size }) => tileSize[size ?? 'medium']}px;

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
};

export const Tile = (props: TileProps) => {
    const { icon, ...rest } = props;
    return <StyledTile {...rest}>{icon}</StyledTile>;
};
