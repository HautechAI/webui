import { styled } from '@hautechai/webui.themeprovider';
import { themeVars, type IconColorProp, resolveColor } from '@hautechai/webui.themeprovider';

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

const StyledTileDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--tile-bg-color, ${themeVars.layout.surfaceMid});
    border-radius: ${themeVars.cornerRadius.m};
    background-image: var(--tile-bg-image, none);
    background-size: cover;
    background-position: center;

    border-width: ${themeVars.stroke.standard};
    border-style: solid;

    background-origin: border-box;
    box-sizing: border-box;

    transition:
        background-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut},
        outline-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut},
        transform ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut},
        border-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};

    border-color: transparent;
    &[data-selected='true'] {
        border-color: ${themeVars.actions.primary};
    }
    .htch-webui-hoverable:hover & {
        border-color: ${themeVars.actions.primary};
    }
`;

const StyledTileImg = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--tile-bg-color, ${themeVars.layout.surfaceMid});
    border-radius: ${themeVars.cornerRadius.m};

    border-width: ${themeVars.stroke.standard};
    border-style: solid;

    background-origin: border-box;
    box-sizing: border-box;

    transition:
        background-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut},
        border-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut},
        outline-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut},
        transform ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};

    border-color: transparent;
    &[data-selected='true'] {
        border-color: ${themeVars.actions.primary};
    }
    .htch-webui-hoverable:hover & {
        border-color: ${themeVars.actions.primary};
    }
`;

const StyledTileVideo = styled.video`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--tile-bg-color, ${themeVars.layout.surfaceMid});
    border-radius: ${themeVars.cornerRadius.m};

    border-width: ${themeVars.stroke.standard};
    border-style: solid;

    background-origin: border-box;
    box-sizing: border-box;

    transition:
        background-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut},
        border-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut},
        outline-color ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut},
        transform ${themeVars.animation.duration.fast} ${themeVars.animation.timing.easeOut};

    border-color: transparent;
    &[data-selected='true'] {
        border-color: ${themeVars.actions.primary};
    }
    .htch-webui-hoverable:hover & {
        border-color: ${themeVars.actions.primary};
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
    color?: IconColorProp;
    testId?: string;
};

export const Tile = (props: TileProps) => {
    const {
        icon,
        size,
        aspectRatio,
        src,
        component,
        alt,
        controls,
        autoplay,
        loop,
        muted,
        playsInline,
        color,
        ...rest
    } = props;
    const { width, height } = props;

    if (size && (width || height || aspectRatio)) {
        throw new Error('size and width/height/aspectRatio are mutually exclusive');
    }
    if (aspectRatio && width && height) {
        throw new Error('aspectRatio can be used only with one of width/height');
    }
    if ((component === 'img' || component === 'video') && icon) {
        throw new Error('icon can not be used with img/video component');
    }

    const styleDims: React.CSSProperties = {
        width: sizeToUnits(width) ?? (size ? sizeToUnits(tileSize[size]) : undefined),
        height: sizeToUnits(height) ?? (size ? sizeToUnits(tileSize[size]) : undefined),
        aspectRatio: aspectRatio ?? (!size && (!width || !height) ? 1 : undefined),
        ['--tile-bg-color' as string]: color ? resolveColor(color, themeVars.layout.surfaceMid) : undefined,
    } as React.CSSProperties;

    if (component === 'img') {
        return <StyledTileImg data-selected={!!props.selected} src={src} alt={alt} style={styleDims} {...rest} / data-testid={props.testId || testId}>;
    }

    if (component === 'video') {
        return (
            <StyledTileVideo
                data-selected={!!props.selected}
                src={src}
                controls={controls}
                autoPlay={autoplay}
                loop={loop}
                muted={muted ?? true}
                playsInline={playsInline ?? true}
                style={styleDims}
                {...rest}
            />
        );
    }

    return (
        <StyledTileDiv
            data-selected={!!props.selected}
            style={{
                ...styleDims,
                ['--tile-bg-image' as string]: src ? `url(${src})` : undefined,
            }}
            {...rest}
        >
            {icon}
        </StyledTileDiv>
    );
};
