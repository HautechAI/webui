import { styled } from '@hautechai/webui.themeprovider';

export const CustomContainer = styled.div`
    display: flex;
    cursor: pointer;
    padding: ${({ theme }) => theme.foundation.spacing.m}px ${({ theme }) => theme.foundation.spacing.ml}px;

    &:hover {
        background-color: ${({ theme }) => theme.palette.layout.surfaceMid};
    }
`;

export const ItemContainer = styled.div`
    display: flex;
    cursor: pointer;
    padding: ${({ theme }) => theme.foundation.spacing.m}px ${({ theme }) => theme.foundation.spacing.ml}px;
    justify-content: space-between;

    &:hover {
        background-color: ${({ theme }) => theme.palette.layout.surfaceMid};
    }
`;

export const Container = styled.div`
    display: flex;
    border-radius: ${({ theme }) => theme.foundation.cornerRadius.m}px;
    border: ${({ theme }) => theme.foundation.stroke.thin}px solid ${({ theme }) => theme.palette.layout.strokes};
    background-color: ${({ theme }) => theme.palette.layout.surfaceLow};
    flex-direction: column;
    padding: ${({ theme }) => theme.foundation.spacing.l}px ${({ theme }) => theme.foundation.spacing.s}px;
    gap: ${({ theme }) => theme.foundation.spacing.s}px;
    min-width: 200px;
`;

export const Divider = styled.div`
    width: 100%;
    border: ${({ theme }) => theme.foundation.stroke.thin}px solid ${({ theme }) => theme.palette.layout.strokes};
    margin: ${({ theme }) => theme.foundation.spacing.s}px 0;
`;
