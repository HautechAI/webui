import { styled } from '@hautechai/webui.themeprovider';

const Container = styled.div<{ open?: boolean }>`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
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
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
`;

const Content = styled.div`
    pointer-events: auto;
`;

export type ModalProps = {
    open?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
};

export const Modal = (props: ModalProps) => {
    return (
        <Container style={{ display: props.open ? 'block' : 'none' }}>
            <Backdrop onClick={props.onClose} />
            <ContentContainer>
                <Content>{props.children}</Content>
            </ContentContainer>
        </Container>
    );
};
