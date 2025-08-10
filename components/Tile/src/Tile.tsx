import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';

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

const StyledTileDiv = styled.div<Omit<TileProps, 'icon'>>`
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

    background-image: ${({ src }) => (src ? `url(${src})` : 'none')};
    background-size: cover;
    background-position: center;

    border-width: ${({ theme }) => `${theme.foundation.stroke.standard}`}px;
    border-style: solid;

    background-origin: border-box;
    box-sizing: border-box;

    ${({ theme }) => {
        const normalDuration = theme.foundation.animation.duration.fast;
        const timingFunction = theme.foundation.animation.timing.easeOut;

        return `
        transition: 
            background-color ${normalDuration}s ${timingFunction},
            outline-color ${normalDuration}s ${timingFunction},
            transform ${normalDuration}s ${timingFunction},
            border-color  ${normalDuration}s ${timingFunction};
        `;
    }}

    border-color: ${({ selected, theme }) => (selected ? theme.palette.actions.primary : 'transparent')};
    .htch-webui-hoverable:hover & {
        border-color: ${({ theme }) => theme.palette.actions.primary};
    }
`;

const StyledTileImg = styled.img<Omit<TileProps, 'icon'>>`
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

    border-width: ${({ theme }) => `${theme.foundation.stroke.standard}`}px;
    border-style: solid;

    background-origin: border-box;
    box-sizing: border-box;

    transition:
        background-color 0.3s ease,
        border-color 0.3s ease,
        outline-color 0.3s ease,
        transform 0.3s ease;

    border-color: ${({ selected, theme }) => (selected ? theme.palette.actions.primary : 'transparent')};
    .htch-webui-hoverable:hover & {
        border-color: ${({ theme }) => theme.palette.actions.primary};
    }
`;

const StyledTileVideo = styled.video<Omit<TileProps, 'icon'>>`
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

    border-width: ${({ theme }) => `${theme.foundation.stroke.standard}`}px;
    border-style: solid;

    background-origin: border-box;
    box-sizing: border-box;

    transition:
        background-color 0.3s ease,
        border-color 0.3s ease,
        outline-color 0.3s ease,
        transform 0.3s ease;

    border-color: ${({ selected, theme }) => (selected ? theme.palette.actions.primary : 'transparent')};
    .htch-webui-hoverable:hover & {
        border-color: ${({ theme }) => theme.palette.actions.primary};
    }
`;

export type TileProps = {
    className?: string;
    icon?: React.ReactNode;
    src?: string;
    selected?: boolean;
    size?: TileSize;
    width?: number | string;
    height?: number | string;
    aspectRatio?: number;
    component?: 'div' | 'img' | 'video';
    alt?: string;
    controls?: boolean; // for video component
    autoplay?: boolean; // for video component
    loop?: boolean; // for video component
    muted?: boolean; // for video component
    playsInline?: boolean; // for video component
};

export const Tile = (props: TileProps) => {
    const { icon, size, aspectRatio, src, component, alt, controls, autoplay, loop, muted, playsInline, ...rest } =
        props;
    const { width, height } = props;

    if (size && (width || height || aspectRatio)) {
        throw new Error('size and width/height/aspectRatio are mutually exclusive');
    }
    if (aspectRatio && width && height) {
        throw new Error('aspectRatio can be used only with one of width/height');
    }
    if ((props.component === 'img' || props.component === 'video') && icon) {
        throw new Error('icon can not be used with img/video component');
    }

    if (props.component === 'img') {
        return (
            <StyledTileImg
                size={size ?? (!width && !height ? 'medium' : undefined)} // default medium size if no other size or width/height is provided
                aspectRatio={aspectRatio ?? (!size && (!width || !height) ? 1 : undefined)} // default aspect ratio to 1 if no other aspect ratio or width/height is provided
                src={src}
                alt={alt}
                {...rest}
            />
        );
    }

    if (props.component === 'video') {
        return (
            <StyledTileVideo
                size={size ?? (!width && !height ? 'medium' : undefined)} // default medium size if no other size or width/height is provided
                aspectRatio={aspectRatio ?? (!size && (!width || !height) ? 1 : undefined)} // default aspect ratio to 1 if no other aspect ratio or width/height is provided
                src={src}
                alt={alt}
                controls={controls}
                autoPlay={autoplay}
                loop={loop}
                muted={muted ?? true}
                playsInline={playsInline ?? true}
                {...rest}
            />
        );
    }

    return (
        <StyledTileDiv
            size={size ?? (!width && !height ? 'medium' : undefined)} // default medium size if no other size or width/height is provided
            aspectRatio={aspectRatio ?? (!size && (!width || !height) ? 1 : undefined)} // default aspect ratio to 1 if no other aspect ratio or width/height is provided
            src={src}
            {...rest}
        >
            {icon}
        </StyledTileDiv>
    );
};
