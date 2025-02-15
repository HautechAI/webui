import { styled } from '@hautechai/webui.themeprovider';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.foundation.spacing.xxxl}px;
`;

export type DataListProps = {
    className?: string;
    children?: React.ReactNode;
};

export const DataList = (props: DataListProps) => {
    return <Container className={props.className}>{props.children}</Container>;
};
