export interface HivePost {
  author: string;
  permlink: string;
  title: string;
  body: string;
  created: string;
  last_update: string;
  category: string;
  tags: string[];
  net_votes: number;
  children: number;
  json_metadata: string;
  author_reputation: number;
  pending_payout_value: string;
  total_payout_value: string;
  curator_payout_value: string;
  cashout_time: string;
  vote_rshares: number;
  total_vote_weight: number;
  active_votes: {
    voter: string;
    percent: number;
    rshares: number;
    weight: number;
    reputation: number;
    time: string;
  }[];
  url: string;
}

export interface HiveWitness {
  owner: string;
  created: string;
  url: string;
  votes: number;
  virtual_last_update: string;
  virtual_position: string;
  virtual_scheduled_time: string;
  total_missed: number;
  last_confirmed_block_num: number;
  signing_key: string;
  props: {
    account_creation_fee: string;
    maximum_block_size: number;
    hbd_interest_rate: number;
  };
  hbd_exchange_rate: {
    base: string;
    quote: string;
  };
  last_hbd_exchange_update: string;
  last_work: string;
  running_version: string;
  hardfork_version_vote: string;
  hardfork_time_vote: string;
}

export interface HiveComment {
  id: number;
  author: string;
  author_reputation: number;
  permlink: string;
  title: string;
  body: string;
  json_metadata: string;
  last_update: string;
  created: string;
  pending_payout_value: string;
  active: string;
  last_payout: string;
  depth: number;
  children: number;
  net_rshares: number;
  abs_rshares: number;
  vote_rshares: number;
  children_abs_rshares: number;
  cashout_time: string;
  max_cashout_time: string;
  total_vote_weight: number;
  reward_weight: number;
  total_payout_value: string;
  curator_payout_value: string;
  author_rewards: number;
  net_votes: number;
  root_author: string;
  root_permlink: string;
  max_accepted_payout: string;
  percent_hbd: number;
  allow_replies: boolean;
  allow_votes: boolean;
  allow_curation_rewards: boolean;
  beneficiaries: {
    account: string;
    weight: number;
  }[];
  url: string;
}

export interface HiveTag {
  name: string;
  total_payouts: string;
  net_votes: number;
  top_posts: number;
  comments: number;
  trending: number;
}

export type ThemeType = "light" | "dark" | "auto";

export interface ComponentConfig {
  theme: ThemeType;
  apiEndpoint?: string;
  fallbackData?: unknown;
}
