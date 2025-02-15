import { ComponentProps } from 'react';
import * as S from './Table.styled';

export const Root = (props: ComponentProps<typeof S.Root>) => {
    return <S.Root {...props}></S.Root>;
};

export const Head = (props: ComponentProps<typeof S.Head>) => {
    return <S.Head {...props}></S.Head>;
};

export const HeadCell = (props: ComponentProps<typeof S.HeadCell>) => {
    return <S.HeadCell {...props}></S.HeadCell>;
};

export const Body = (props: ComponentProps<typeof S.Body>) => {
    return <S.Body {...props}></S.Body>;
};

export const Row = (props: ComponentProps<typeof S.Row>) => {
    return <S.Row {...props}></S.Row>;
};

export const Cell = (props: ComponentProps<typeof S.Cell>) => {
    return <S.Cell {...props}></S.Cell>;
};
