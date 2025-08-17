import { styled } from '@hautechai/webui.themeprovider';

const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 999;
    display: none;
    &[data-open='true'] {
        display: block;
    }
`;

const Backdrop = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: auto;
`;

const ContentContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;

    &[data-custom-position='true'] {
        justify-content: flex-start;
        align-items: flex-start;
    }
`;

const Content = styled.div`
    pointer-events: auto;
`;

export type ModalProps = {
    open?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
    contentPosition?: {
        left?: number | string;
        top?: number | string;
        right?: number | string;
        bottom?: number | string;
    };
    backdropStyle?: React.CSSProperties;
};

export const Modal = (props: ModalProps) => {
    const contentPosition = { top: 0, left: 0, ...props.contentPosition };
    return (
        <Container data-open={!!props.open}>
            <Backdrop onClick={props.onClose} style={props.backdropStyle} />
            <ContentContainer
                data-custom-position={!!props.contentPosition}
                style={{
                    left: contentPosition.left,
                    right: contentPosition.right,
                    top: contentPosition.top,
                    bottom: contentPosition.bottom,
                }}
            >
                <Content>{props.children}</Content>
            </ContentContainer>
        </Container>
    );
};
