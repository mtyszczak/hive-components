import { property } from "lit/decorators.js";
import type { ThemeType } from "./types.js";

/**
 * Property decorator for theme attribute
 */
export const themeProperty = () => property({ type: String, reflect: true });

/**
 * Property decorator for account attribute
 */
export const accountProperty = () => property({ type: String, reflect: true });

/**
 * Property decorator for permlink attribute
 */
export const permlinkProperty = () => property({ type: String, reflect: true });

/**
 * Property decorator for tag attribute
 */
export const tagProperty = () => property({ type: String, reflect: true });

/**
 * State decorator for loading state
 */
export const loadingState = () => property({ type: Boolean, state: true });

/**
 * State decorator for error state
 */
export const errorState = () => property({ type: String, state: true });

/**
 * Mixin for common Hive component properties
 */
export function withHiveTheme<T extends new (...args: any[]) => object>(Base: T) {
  class HiveThemeMixin extends Base {
    @themeProperty()
    theme: ThemeType = "light";
  }

  return HiveThemeMixin;
}
