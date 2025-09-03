import React, { useMemo } from 'react';
import { styled } from '@hautechai/webui.themeprovider';
import { themeVars } from '@hautechai/webui.themeprovider';
import { Typography } from '@hautechai/webui.typography';
import { IconButton } from '@hautechai/webui.iconbutton';
import { Row } from '@hautechai/webui.row';
import { ArrowAltLeftIcon, ArrowAltRightIcon } from '@hautechai/webui.icon';

const PageLink = styled.a<{ active?: boolean }>`
    text-decoration: none;
`;

const Number = styled.div`
    width: 36px;
    height: 36px;
    align-content: center;
    padding: ${themeVars.spacing.xs};
    border-radius: ${themeVars.cornerRadius.s};

    cursor: pointer;

    color: ${themeVars.layout.onSurface.secondary};

    &:hover {
        color: ${themeVars.layout.onSurface.primary};
        background-color: ${themeVars.layout.surfaceMid};
    }

    &[data-readonly='true'] {
        cursor: default;
        &:hover {
            color: ${themeVars.layout.onSurface.secondary};
            background-color: transparent;
        }
    }

    &[data-selected='true'] {
        background-color: ${themeVars.layout.surfaceHigh};
    }
`;

export type PaginationProps = {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    getPageHref?: (page: number) => string;
    testId?: string;
};

const step = 2;

export const Pagination = ({ totalPages, currentPage, onPageChange, getPageHref }: PaginationProps) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement data-testid={props.testId || testId}>, page: number) => {
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
                    <Number key={index} data-readonly>
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
                        <Number data-selected={currentPage === page}>
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
