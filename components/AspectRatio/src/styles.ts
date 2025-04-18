import { styled } from '@hautechai/webui.themeprovider';
import { maxPxSize } from './CustomRatio';

export const OptionLabel = styled.div`
    padding-left: ${({ theme }) => theme.foundation.spacing.ml}px;
    padding-bottom: ${({ theme }) => theme.foundation.spacing.m}px;
    min-width: 100px;
`;

export const AspectRatioBoxContainer = styled.div`
    min-width: ${({}) => maxPxSize + 2}px;
    min-height: ${({}) => maxPxSize + 2}px;
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const RatioBox = styled.div<{ width: number; height: number }>`
    display: flex;
    height: ${({ height }) => height}px;
    width: ${({ width }) => width}px;
    border-color: ${({ theme }) => theme.palette.layout.onSurface.tertiary};
    border-style: solid;
    border-width: ${({ theme }) => theme.foundation.stroke.standard}px;
    border-radius: ${({ theme }) => theme.foundation.cornerRadius.m}px;
    align-items: center;
    justify-content: center;
`;

export const SmallRatioBox = styled.div<{ width: number; height: number }>`
    display: flex;
    height: ${({ height }) => height}px;
    width: ${({ width }) => width}px;
    border-color: currentcolor;
    border-style: solid;
    border-width: ${({ theme }) => theme.foundation.stroke.standard}px;
    border-radius: ${({ theme }) => theme.foundation.cornerRadius.s}px;
`;

export const RatioBoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
`;

export const ModalContentContainer = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.foundation.spacing.xxl}px;
    padding: ${({ theme }) => theme.foundation.spacing.xxl}px;
    border-radius: ${({ theme }) => theme.foundation.cornerRadius.l}px;
    border-color: ${({ theme }) => theme.palette.layout.strokes};
    border-style: solid;
    border-width: ${({ theme }) => theme.foundation.stroke.thin}px;
    background-color: ${({ theme }) => theme.palette.layout.surfaceLow};
`;

export const Ratio = styled.div<{ selected: boolean }>`
    display: flex;
    flex-direction: row;
    padding: ${({ theme }) => theme.foundation.spacing.m}px ${({ theme }) => theme.foundation.spacing.ml}px;
    gap: ${({ theme }) => theme.foundation.spacing.s}px;
    border-radius: ${({ theme }) => theme.foundation.cornerRadius.m}px;
    border-color: transparent;
    border-style: solid;
    cursor: pointer;
    background-color: ${({ theme, selected }) => (selected ? theme.palette.layout.surfaceHigh : 'transparent')};

    :hover {
        background-color: ${({ theme }) => theme.palette.layout.surfaceMid};
    }
`;

export const Sizes = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CustomRatioContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    gap: ${({ theme }) => theme.foundation.spacing.s}px;
    padding: ${({ theme }) => theme.foundation.spacing.m}px ${({ theme }) => theme.foundation.spacing.ml}px;
    cursor: pointer;
    margin-top: ${({ theme }) => theme.foundation.spacing.xs}px;
`;

export const CheckAsDefault = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.foundation.spacing.m}px;
    margin-top: ${({ theme }) => theme.foundation.spacing.xl}px;
    margin-left: ${({ theme }) => theme.foundation.spacing.ml}px;
    align-items: center;
`;
