import { hexToRgba } from "src/utils/colors";

export const COLORS = {
    "$neutrals-lightest": "#f0f0f2",
    "$neutrals-extra-light": "#e0e2e6",
    "$neutrals-light": "#c0c2c8",
    "$neutrals-medium": "#9ea0a5",
    "$neutrals-dark": "#7f8185",
    "$neutrals-extra-dark": "#5e5f63",
    "$neutrals-darkest": "#202122",
    // --
    "$primary-light": "#0b0e3a",
    "$primary-medium": "#060725",
    "$primary-dark": "#020318",
    // --
    "$secondary-lightest": "#ffe6ee",
    "$secondary-extra-light": "#fcd2df",
    "$secondary-light": "#ef4c84",
    "$secondary-medium-5percent": hexToRgba("#d31450", 0.05),
    "$secondary-medium": "#d31450",
    "$secondary-dark": "#8c1038",
    // --
    "$accent1-light": "#00bfc1",
    "$accent1-medium": "#009598",
    "$accent1-dark": "#006c6e",
} as const