import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Root, Head, HeadCell, Body, Row, Cell } from '../src/Table';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Table', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <Root>
                        <Head>
                            <Row>
                                <HeadCell>Test Header</HeadCell>
                            </Row>
                        </Head>
                        <Body>
                            <Row>
                                <Cell>Test Cell</Cell>
                            </Row>
                        </Body>
                    </Root>
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
