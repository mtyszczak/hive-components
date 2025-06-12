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

export interface HiveAccount {
  id: number;
  name: string;
  owner: {
    weight_threshold: number;
    account_auths: unknown[];
    key_auths: string[][];
  };
  active: {
    weight_threshold: number;
    account_auths: unknown[];
    key_auths: string[][];
  };
  posting: {
    weight_threshold: number;
    account_auths: unknown[];
    key_auths: string[][];
  };
  memo_key: string;
  json_metadata: string;
  posting_json_metadata: string;
  proxy: string;
  last_owner_update: string;
  last_account_update: string;
  created: string;
  mined: boolean;
  recovery_account: string;
  last_account_recovery: string;
  reset_account: string;
  comment_count: number;
  lifetime_vote_count: number;
  post_count: number;
  can_vote: boolean;
  voting_manabar: {
    current_mana: string;
    last_update_time: number;
  };
  downvote_manabar: {
    current_mana: string;
    last_update_time: number;
  };
  voting_power: number;
  balance: string;
  savings_balance: string;
  hbd_balance: string;
  savings_hbd_balance: string;
  hbd_seconds: string;
  hbd_seconds_last_update: string;
  hbd_last_interest_payment: string;
  savings_hbd_seconds: string;
  savings_hbd_seconds_last_update: string;
  savings_hbd_last_interest_payment: string;
  savings_withdraw_requests: number;
  reward_hbd_balance: string;
  reward_hive_balance: string;
  reward_vesting_balance: string;
  reward_vesting_hive: string;
  vesting_shares: string;
  delegated_vesting_shares: string;
  received_vesting_shares: string;
  vesting_withdraw_rate: string;
  next_vesting_withdrawal: string;
  withdrawn: string;
  to_withdraw: string;
  withdraw_routes: number;
  curation_rewards: number;
  posting_rewards: number;
  proxied_vsf_votes: [string, number][];
  witnesses_voted_for: number;
  last_post: string;
  last_root_post: string;
  last_vote_time: string;
  post_bandwidth: number;
  pending_claimed_accounts: number;
  reputation: number;
}
