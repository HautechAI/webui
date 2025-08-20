import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import {
    CheckIcon,
    WorkflowIcon,
    UnlinkIcon,
    SparkleIcon,
    XIcon,
    YIcon,
    WIcon,
    HIcon,
    AngleIcon,
    OptionsIcon,
    OpacityIcon,
    ColorPickerIcon,
    EyeIcon,
    EyeClosedIcon,
    TextIcon,
    ImageIcon,
} from '../src/assets';
import { ThemeProvider } from '../../ThemeProvider/src';
import { testTheme } from '../../test-theme';

describe('Icon', () => {
    it('should render without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <CheckIcon />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render WorkflowIcon without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <WorkflowIcon />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render WorkflowIcon with outlined style', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <WorkflowIcon style="outlined" />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render WorkflowIcon with bold style', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <WorkflowIcon style="bold" />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render UnlinkIcon without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <UnlinkIcon />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render SparkleIcon without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <SparkleIcon />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render XIcon without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <XIcon />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render YIcon without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <YIcon />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render WIcon without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <WIcon />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render HIcon without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <HIcon />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render AngleIcon without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <AngleIcon />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render OptionsIcon without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <OptionsIcon />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render OpacityIcon without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <OpacityIcon />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render ColorPickerIcon without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <ColorPickerIcon />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render EyeIcon without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <EyeIcon />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render EyeClosedIcon without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <EyeClosedIcon />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render TextIcon without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <TextIcon />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });

    it('should render ImageIcon without crashing', () => {
        expect(() => {
            render(
                <ThemeProvider theme={testTheme}>
                    <ImageIcon />
                </ThemeProvider>,
            );
        }).not.toThrow();
    });
});
