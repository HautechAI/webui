import { styled } from '@hautechai/webui.themeprovider';

const Container = styled.div<Omit<BottomSheetProps, 'children'>>`
    position: fixed;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: ${({ zIndex }) => zIndex ?? 900};
`;

const Backdrop = styled.div<Omit<BottomSheetProps, 'children'>>`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: auto;
`;

const ContentContainer = styled.div<Omit<BottomSheetProps, 'children'>>`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    padding: ${({ inset }) => inset?.top ?? 0}px ${({ inset }) => inset?.right ?? 0}px
        ${({ inset }) => inset?.bottom ?? 0}px ${({ inset }) => inset?.left ?? 0}px;

    display: flex;
    align-items: flex-end;
    pointer-events: none;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    background-color: ${({ theme }) => theme.palette.layout.surfaceLow};
    border-radius: ${({ theme }) => theme.foundation.cornerRadius.l}px
        ${({ theme }) => theme.foundation.cornerRadius.l}px 0 0;
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
    const { children, ...rest } = props;
    return (
        <Container {...rest}>
            <Backdrop {...rest} onClick={props?.onClose} style={props.backdropStyle} />
            <ContentContainer {...rest}>
                <Content {...rest}>{props.children}</Content>
            </ContentContainer>
        </Container>
    );
};
