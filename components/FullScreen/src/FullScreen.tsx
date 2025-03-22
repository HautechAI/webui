import { styled } from '@hautechai/webui.themeprovider';

const Container = styled.div<Omit<FullScreenProps, 'children'>>`
    position: fixed;
    display: flex;
    flex-direction: column;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: ${({ zIndex }) => zIndex ?? 900};
`;

export type FullScreenProps = {
    children: React.ReactNode;
    zIndex?: number;
};

export const FullScreen = (props: FullScreenProps) => {
    const { children, ...rest } = props;
    return <Container {...rest}>{props.children}</Container>;
};
