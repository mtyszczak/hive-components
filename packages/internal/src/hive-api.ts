import type { HivePost, HiveWitness, HiveComment, HiveTag } from "./types.js";

const DEFAULT_API_ENDPOINTS = [
  "https://api.hive.blog",
  "https://api.hivekings.com",
  "https://anyx.io",
  "https://api.openhive.network",
];

export class HiveApiClient {
  private endpoints: string[];
  private currentEndpointIndex = 0;

  constructor(endpoints: string[] = DEFAULT_API_ENDPOINTS) {
    this.endpoints = endpoints;
  }

  private async makeRequest<T>(method: string, params: unknown[]): Promise<T> {
    const payload = {
      jsonrpc: "2.0",
      method,
      params,
      id: Math.floor(Math.random() * 1000),
    };

    for (let i = 0; i < this.endpoints.length; i++) {
      try {
        const endpoint = this.endpoints[this.currentEndpointIndex];
        if (!endpoint) {
          throw new Error("No valid endpoint available");
        }
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        if (data.error) {
          throw new Error(data.error.message || "API Error");
        }

        return data.result;
      } catch (error) {
        console.warn(`Failed to fetch from ${this.endpoints[this.currentEndpointIndex]}:`, error);
        this.currentEndpointIndex = (this.currentEndpointIndex + 1) % this.endpoints.length;

        if (i === this.endpoints.length - 1) {
          throw new Error(`All API endpoints failed. Last error: ${error}`);
        }
      }
    }

    throw new Error("Failed to make request to any endpoint");
  }

  async getContent(author: string, permlink: string): Promise<HivePost> {
    return this.makeRequest("condenser_api.get_content", [author, permlink]);
  }

  async getContentReplies(author: string, permlink: string): Promise<HiveComment[]> {
    return this.makeRequest("condenser_api.get_content_replies", [author, permlink]);
  }

  async getWitnessByAccount(account: string): Promise<HiveWitness> {
    return this.makeRequest("condenser_api.get_witness_by_account", [account]);
  }

  async getDiscussionsByTag(tag: string, limit = 20): Promise<HivePost[]> {
    return this.makeRequest("condenser_api.get_discussions_by_trending", [{ tag, limit }]);
  }

  async getTrendingTags(afterTag = "", limit = 100): Promise<HiveTag[]> {
    return this.makeRequest("condenser_api.get_trending_tags", [afterTag, limit]);
  }
}

// Singleton instance
export const hiveApi = new HiveApiClient();
