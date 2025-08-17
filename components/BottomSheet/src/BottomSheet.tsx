import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';

const Container = styled.div`
    position: fixed;
    display: none;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 900;

    &[data-open='true'] {
        display: flex;
    }
    &[data-z] {
        z-index: var(--bs-z-index);
    }
`;

const Backdrop = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: auto;
`;

const ContentContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;

    display: flex;
    align-items: flex-end;
    pointer-events: none;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    background-color: ${themeVars.layout.surfaceLow};
    border-radius: ${themeVars.cornerRadius.l} ${themeVars.cornerRadius.l} 0 0;
    max-height: 100%;
    pointer-events: all;
`;

export type BottomSheetProps = {
    open?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
    inset?: {
        top?: number;
        left?: number;
        right?: number;
        bottom?: number;
    };
    zIndex?: number;
    backdropStyle?: React.CSSProperties;
};

export const BottomSheet = (props: BottomSheetProps) => {
    const { children: _children, ..._rest } = props;
    const styleInsets: React.CSSProperties & Record<string, string | number | undefined> = {
        paddingTop: props.inset?.top,
        paddingRight: props.inset?.right,
        paddingBottom: props.inset?.bottom,
        paddingLeft: props.inset?.left,
        // optional z-index via CSS var
        '--bs-z-index': props.zIndex ? `${props.zIndex}` : undefined,
    };
    return (
        <Container data-open={props.open} data-z={props.zIndex ? 'true' : undefined}>
            <Backdrop onClick={props?.onClose} style={props.backdropStyle} />
            <ContentContainer style={styleInsets}>
                <Content>{props.children}</Content>
            </ContentContainer>
        </Container>
    );
};
