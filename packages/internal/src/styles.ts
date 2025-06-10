import { css } from "lit";

// Base theme tokens
export const tokens = {
  // Colors
  colors: {
    primary: {
      light: "#e31337",
      dark: "#ff4757",
    },
    secondary: {
      light: "#2c3e50",
      dark: "#34495e",
    },
    surface: {
      light: "#ffffff",
      dark: "#1a1a1a",
    },
    surfaceVariant: {
      light: "#f8f9fa",
      dark: "#2d2d2d",
    },
    onSurface: {
      light: "#212529",
      dark: "#ffffff",
    },
    onSurfaceVariant: {
      light: "#6c757d",
      dark: "#adb5bd",
    },
    border: {
      light: "#dee2e6",
      dark: "#495057",
    },
    error: {
      light: "#dc3545",
      dark: "#e74c3c",
    },
    success: {
      light: "#28a745",
      dark: "#2ecc71",
    },
  },
  // Typography
  typography: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    lineHeight: {
      tight: "1.25",
      normal: "1.5",
      relaxed: "1.75",
    },
  },
  // Spacing
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
  },
  // Border radius
  borderRadius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    full: "9999px",
  },
  // Shadows
  shadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  },
};

// Base styles that all components can inherit
export const baseStyles = css`
  :host {
    font-family:
      Inter,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: var(--hive-on-surface, #212529);
    background-color: var(--hive-surface, #ffffff);
    box-sizing: border-box;
  }

  :host([theme="dark"]) {
    color: var(--hive-on-surface, #ffffff);
    background-color: var(--hive-surface, #1a1a1a);
  }

  @media (prefers-color-scheme: dark) {
    :host([theme="auto"]) {
      color: var(--hive-on-surface, #ffffff);
      background-color: var(--hive-surface, #1a1a1a);
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;

// Theme CSS custom properties
export const themeStyles = css`
  :host {
    /* Light theme (default) */
    --hive-primary: #e31337;
    --hive-secondary: #2c3e50;
    --hive-surface: #ffffff;
    --hive-surface-variant: #f8f9fa;
    --hive-on-surface: #212529;
    --hive-on-surface-variant: #6c757d;
    --hive-border: #dee2e6;
    --hive-error: #dc3545;
    --hive-success: #28a745;
  }

  :host([theme="dark"]) {
    --hive-primary: #ff4757;
    --hive-secondary: #34495e;
    --hive-surface: #1a1a1a;
    --hive-surface-variant: #2d2d2d;
    --hive-on-surface: #ffffff;
    --hive-on-surface-variant: #adb5bd;
    --hive-border: #495057;
    --hive-error: #e74c3c;
    --hive-success: #2ecc71;
  }

  @media (prefers-color-scheme: dark) {
    :host([theme="auto"]) {
      --hive-primary: #ff4757;
      --hive-secondary: #34495e;
      --hive-surface: #1a1a1a;
      --hive-surface-variant: #2d2d2d;
      --hive-on-surface: #ffffff;
      --hive-on-surface-variant: #adb5bd;
      --hive-border: #495057;
      --hive-error: #e74c3c;
      --hive-success: #2ecc71;
    }
  }
`;
