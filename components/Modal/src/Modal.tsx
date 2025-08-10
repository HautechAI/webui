import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { themeVars } from '@hautechai/webui.themeprovider';

const Container = styled.div<{ open?: boolean }>`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 999;
    display: ${({ open }) => (open ? 'block' : 'none')};
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

const ContentContainer = styled.div<{
    customPosition: boolean;
    contentPosition?: { left?: number; top?: number; right?: number; bottom?: number };
}>`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: ${({ customPosition }) => (customPosition ? 'flex-start' : 'center')};
    align-items: ${({ customPosition }) => (customPosition ? 'flex-start' : 'center')};
    pointer-events: none;

    ${({ contentPosition }) =>
        contentPosition?.left
            ? css`
                  left: ${contentPosition.left}px;
              `
            : ''};

    ${({ contentPosition }) =>
        contentPosition?.right
            ? css`
                  right: ${contentPosition.right}px;
              `
            : ''};

    ${({ contentPosition }) =>
        contentPosition?.bottom
            ? css`
                  bottom: ${contentPosition.bottom}px;
              `
            : ''};

    ${({ contentPosition }) =>
        contentPosition?.top
            ? css`
                  top: ${contentPosition.top}px;
              `
            : ''};
`;

const Content = styled.div`
    pointer-events: auto;
`;

export type ModalProps = {
    open?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
    contentPosition?: { left?: number; top?: number; right?: number; bottom?: number };
    backdropStyle?: React.CSSProperties;
};

export const Modal = (props: ModalProps) => {
    const contentPosition = { top: 0, left: 0, ...props.contentPosition };
    return (
        <Container open={props.open}>
            <Backdrop onClick={props.onClose} style={props.backdropStyle} />
            <ContentContainer customPosition={!!props.contentPosition} contentPosition={contentPosition}>
                <Content>{props.children}</Content>
            </ContentContainer>
        </Container>
    );
};
