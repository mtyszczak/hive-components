/**
 * Utility functions for Hive components
 */

/**
 * Formats a Hive timestamp to a human-readable format
 */
export function formatHiveDate(dateString: string): string {
  const date = new Date(dateString + "Z"); // Add Z to indicate UTC
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMinutes < 1) {
    return "just now";
  } else if (diffMinutes < 60) {
    return `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} ago`;
  } else if (diffHours < 24) {
    return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
  } else if (diffDays < 7) {
    return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
  } else {
    return date.toLocaleDateString();
  }
}

/**
 * Formats Hive currency values
 */
export function formatHiveCurrency(value: string): string {
  const parts = value.split(" ");
  const num = parseFloat(parts[0] || "0");
  const currency = parts[1] || "HIVE";

  if (num === 0) return "0.000 " + currency;

  return num.toFixed(3) + " " + currency;
}

/**
 * Calculates Hive reputation score
 */
export function calculateReputation(reputation: number): number {
  if (reputation === 0) return 25;

  let score = Math.log10(Math.abs(reputation));
  score = Math.max(score - 9, 0);
  score *= reputation < 0 ? -9 : 9;
  score += 25;

  return Math.floor(score);
}

/**
 * Truncates text to a specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
}

/**
 * Extracts tags from Hive post JSON metadata
 */
export function extractTags(jsonMetadata: string): string[] {
  try {
    const metadata = JSON.parse(jsonMetadata);
    return metadata.tags || [];
  } catch {
    return [];
  }
}

/**
 * Sanitizes HTML content for safe display
 */
export function sanitizeHtml(html: string): string {
  const div = document.createElement("div");
  div.textContent = html;
  return div.innerHTML;
}

/**
 * Debounces a function call
 */
export function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay, ...args);
  };
}

/**
 * Validates Hive account name format
 */
export function isValidHiveAccount(account: string): boolean {
  const accountRegex = /^[a-z][a-z0-9.-]{2,15}$/;
  return accountRegex.test(account);
}

/**
 * Validates Hive permlink format
 */
export function isValidPermlink(permlink: string): boolean {
  const permlinkRegex = /^[a-z0-9-]+$/;
  return permlinkRegex.test(permlink) && permlink.length > 0;
}

/**
 * Parses a Hive post URL to extract author and permlink
 */
export function parseHiveUrl(url: string): { author: string; permlink: string } | null {
  const match = url.match(/@([a-z][a-z0-9.-]{2,15})\/([a-z0-9-]+)/);
  if (match && match[1] && match[2]) {
    return {
      author: match[1],
      permlink: match[2],
    };
  }
  return null;
}

/**
 * Safely register a custom element to prevent duplicate registration errors
 */
export function safeDefineCustomElement(name: string, constructor: CustomElementConstructor): void {
  if (!customElements.get(name)) {
    customElements.define(name, constructor);
  }
}
