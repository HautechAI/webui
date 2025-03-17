import { styled, ThemeType } from '@hautechai/webui.themeprovider';

export const MaterialContainer = styled.div`
    display: flex;
    overflow: hidden;
    gap: ${({ theme }) => theme.foundation.spacing.xl}px;
    border-bottom-color: ${({ theme }) => theme.palette.layout.strokes};
    border-bottom-style: solid;
    border-bottom-width: ${({ theme }) => theme.foundation.stroke.thin}px;
    padding: 0 ${({ theme }) => theme.foundation.spacing.l}px;
`;

export const HIGContainer = styled.div`
    display: flex;
    border-color: ${({ theme }) => theme.palette.layout.strokes};
    border-radius: ${({ theme }) => theme.foundation.cornerRadius.s}px;
    border-style: solid;
    border-width: ${({ theme }) => theme.foundation.stroke.thin}px;
    overflow: hidden;
    padding: ${({ theme }) => theme.foundation.spacing.xs}px;
    gap: ${({ theme }) => theme.foundation.spacing.s}px;
`;

export const HIGRow = styled.div<{ selected: boolean; whitespace?: keyof ThemeType['foundation']['spacing'] }>`
    flex-direction: row;
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.foundation.spacing.s * 1.5}px
        ${({ theme, whitespace }) => (whitespace ? theme.foundation.spacing[whitespace] : theme.foundation.spacing.s)}px;
    background-color: ${({ theme, selected }) => (selected ? theme.palette.layout.surfaceHigh : 'transparent')};
    cursor: pointer;
    border-radius: ${({ theme }) => theme.foundation.cornerRadius.s}px;
    gap: ${({ theme }) => theme.foundation.spacing.s}px;
`;

export const MaterialRow = styled.div<{ selected: boolean; whitespace?: keyof ThemeType['foundation']['spacing'] }>`
    flex-direction: row;
    display: flex;
    padding: ${({ theme }) => theme.foundation.spacing.s}px
        ${({ theme, whitespace }) => (whitespace ? theme.foundation.spacing[whitespace] : theme.foundation.spacing.s)}px;
    padding-bottom: ${({ theme }) => theme.foundation.spacing.ml}px;
    cursor: pointer;
    gap: ${({ theme }) => theme.foundation.spacing.s}px;
    border-bottom-color: ${({ theme, selected }) => (selected ? theme.palette.actions.primary : 'transparent')};
    border-bottom-style: solid;
    border-bottom-width: ${({ theme }) => theme.foundation.stroke.thick}px;
`;

export const WhiteSpace = styled.div<{ whitespace?: keyof ThemeType['foundation']['spacing'] }>`
    height: ${({ theme, whitespace }) =>
        whitespace ? theme.foundation.spacing[whitespace] : theme.foundation.spacing.l}px;
    width: ${({ theme, whitespace }) =>
        whitespace ? theme.foundation.spacing[whitespace] : theme.foundation.spacing.l}px;
`;

export const Icon = styled.div<{ selected: boolean }>`
    display: flex;
    color: ${({ theme, selected }) =>
        selected ? theme.palette.layout.onSurface.primary : theme.palette.layout.onSurface.tertiary};
`;
