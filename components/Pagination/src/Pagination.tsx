import React, { useMemo } from 'react';
import { css, styled } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import { IconButton } from '@hautechai/webui.iconbutton';
import { Row } from '@hautechai/webui.row';
import { ArrowAltLeftIcon, ArrowAltRightIcon } from '@hautechai/webui.icon';

const PageLink = styled.a<{ active?: boolean }>`
    text-decoration: none;
`;

const Number = styled.div<{ isSelected?: boolean; readonly?: boolean }>`
    width: 36px;
    height: 36px;
    align-content: center;
    padding: ${({ theme }) => theme.foundation.spacing.xs}px;
    border-radius: ${({ theme }) => theme.foundation.cornerRadius.s}px;

    cursor: ${({ readonly }) => (readonly ? 'default' : 'pointer')};

    color: ${({ theme }) => theme.palette.layout.onSurface.secondary};

    ${({ theme, readonly }) =>
        !readonly &&
        css`
            &:hover {
                color: ${theme.palette.layout.onSurface.primary};
                background-color: ${theme.palette.layout.surfaceMid};
            }
        `}

    ${({ theme, isSelected }) =>
        isSelected &&
        css`
            background-color: ${theme.palette.layout.surfaceHigh};
        `}
`;

export type PaginationProps = {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    getPageHref?: (page: number) => string;
};

const step = 2;

export const Pagination = ({ totalPages, currentPage, onPageChange, getPageHref }: PaginationProps) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, page: number) => {
        if (onPageChange) {
            event.preventDefault();
            onPageChange(page);
        }
    };

    const pages = useMemo(() => {
        let pages: (number | string)[] = [];

        if (totalPages <= step * 2 + 3) {
            pages = Array.from({ length: totalPages }, (_, i) => i + 1);
        } else if (currentPage <= step + 3) {
            pages = [...Array.from({ length: step * 2 + 2 }, (_, i) => i + 1), '...', totalPages];
        } else if (currentPage >= totalPages - step - 2) {
            pages = [1, '...', ...Array.from({ length: step * 2 + 2 }, (_, i) => totalPages - step * 2 - 1 + i)];
        } else {
            pages = [
                1,
                '...',
                ...Array.from({ length: step * 2 + 1 }, (_, i) => currentPage - step + i),
                '...',
                totalPages,
            ];
        }

        return pages;
    }, [totalPages, currentPage]);

    return (
        <Row spacing="m">
            <IconButton
                onClick={(e) => {
                    if (currentPage > 1) {
                        e.preventDefault();
                        onPageChange(currentPage - 1);
                    }
                }}
                aria-label="Previous page"
                icon={<ArrowAltLeftIcon />}
                disabled={currentPage <= 1}
                variant="flat"
                size="small"
            />
            {pages.map((page, index) =>
                typeof page === 'string' ? (
                    <Number key={index} readonly>
                        <Typography variant="LabelSmallRegular" textAlign="center" color="layout.onSurface.secondary">
                            {page}
                        </Typography>
                    </Number>
                ) : (
                    <PageLink
                        key={index}
                        href={getPageHref ? getPageHref(page) : undefined}
                        onClick={(e) => handleClick(e, page)}
                    >
                        <Number isSelected={currentPage === page}>
                            <Typography variant="LabelSmallRegular" textAlign="center">
                                {page}
                            </Typography>
                        </Number>
                    </PageLink>
                ),
            )}
            <IconButton
                onClick={(e) => {
                    if (currentPage < totalPages) {
                        e.preventDefault();
                        onPageChange(currentPage + 1);
                    }
                }}
                aria-label="Next page"
                icon={<ArrowAltRightIcon />}
                disabled={currentPage >= totalPages}
                variant="flat"
                size="small"
            />
        </Row>
    );
};
