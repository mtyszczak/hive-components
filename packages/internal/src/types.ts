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

export interface PosItem {
  title: string;
  price: string;
  image?: string | undefined;
  author: string;
  permlink: string;
}

export type ThemeType = "light" | "dark" | "auto";

export interface ComponentConfig {
  theme: ThemeType;
  apiEndpoint?: string;
  fallbackData?: unknown;
}

// Asset structure used in database_api responses
export interface HiveAsset {
  amount: string;
  nai: string;
  precision: number;
}

// Authority structure for owner, active, posting keys
export interface HiveAuthority {
  weight_threshold: number;
  account_auths: [string, number][];
  key_auths: [string, number][];
}

export interface HiveAccountRest {
  id: number;
  name: string;
  can_vote: boolean;
  mined: boolean;
  proxy: string;
  recovery_account: string;
  last_account_recovery: string;
  created: string;
  reputation: number;
  pending_claimed_accounts: number;
  json_metadata: string;
  posting_json_metadata: string;
  profile_image: string;
  hbd_balance: number;
  balance: number;
  vesting_shares: string;
  vesting_balance: number;
  hbd_saving_balance: number;
  savings_balance: number;
  savings_withdraw_requests: number;
  reward_hbd_balance: number;
  reward_hive_balance: number;
  reward_vesting_balance: string;
  reward_vesting_hive: number;
  posting_rewards: string;
  curation_rewards: string;
  delegated_vesting_shares: string;
  received_vesting_shares: string;
  proxied_vsf_votes: string[];
  withdrawn: string;
  vesting_withdraw_rate: string;
  to_withdraw: string;
  withdraw_routes: number;
  delayed_vests: string;
  witness_votes: string[];
  witnesses_voted_for: number;
  ops_count: number;
  is_witness: boolean;
}

export interface HiveAccount {
  id: number;
  name: string;
  owner: HiveAuthority;
  active: HiveAuthority;
  posting: HiveAuthority;
  memo_key: string;
  json_metadata: string;
  posting_json_metadata: string;
  proxy: string;
  previous_owner_update: string;
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
    current_mana: number;
    last_update_time: number;
  };
  downvote_manabar: {
    current_mana: number;
    last_update_time: number;
  };
  post_voting_power: HiveAsset;
  balance: HiveAsset;
  savings_balance: HiveAsset;
  hbd_balance: HiveAsset;
  savings_hbd_balance: HiveAsset;
  hbd_seconds: string;
  hbd_seconds_last_update: string;
  hbd_last_interest_payment: string;
  savings_hbd_seconds: string;
  savings_hbd_seconds_last_update: string;
  savings_hbd_last_interest_payment: string;
  savings_withdraw_requests: number;
  reward_hbd_balance: HiveAsset;
  reward_hive_balance: HiveAsset;
  reward_vesting_balance: HiveAsset;
  reward_vesting_hive: HiveAsset;
  vesting_shares: HiveAsset;
  delegated_vesting_shares: HiveAsset;
  received_vesting_shares: HiveAsset;
  vesting_withdraw_rate: HiveAsset;
  next_vesting_withdrawal: string;
  withdrawn: number;
  to_withdraw: number;
  withdraw_routes: number;
  curation_rewards: number;
  posting_rewards: number;
  proxied_vsf_votes: [number, number, number, number];
  witnesses_voted_for: number;
  last_post: string;
  last_post_edit: string;
  last_root_post: string;
  last_vote_time: string;
  post_bandwidth: number;
  pending_claimed_accounts: number;
  pending_transfers: number;
  open_recurrent_transfers: number;
  delayed_votes: unknown[];
  governance_vote_expiration_ts: string;
  is_smt: boolean;
}

export interface HiveDynamicGlobalProperties {
  head_block_number: number;
  head_block_id: string;
  time: string;
  current_witness: string;
  total_pow: number;
  num_pow_witnesses: number;
  virtual_supply: HiveAsset;
  current_supply: HiveAsset;
  confidential_supply: HiveAsset;
  current_hbd_supply: HiveAsset;
  confidential_hbd_supply: HiveAsset;
  init_hbd_supply: HiveAsset;
  total_vesting_fund_hive: HiveAsset;
  total_vesting_shares: HiveAsset;
  total_reward_fund_hive: HiveAsset;
  total_reward_shares2: string;
  pending_rewarded_vesting_shares: HiveAsset;
  pending_rewarded_vesting_hive: HiveAsset;
  hbd_interest_rate: number;
  hbd_print_rate: number;
  maximum_block_size: number;
  required_actions_partition_percent: number;
  current_aslot: number;
  recent_slots_filled: string;
  participation_count: number;
  last_irreversible_block_num: number;
  vote_power_reserve_rate: number;
  delegation_return_period: number;
  reverse_auction_seconds: number;
  available_account_subsidies: number;
  hbd_stop_percent: number;
  hbd_start_percent: number;
  next_maintenance_time: string;
  last_budget_time: string;
  next_daily_maintenance_time: string;
  content_reward_percent: number;
  vesting_reward_percent: number;
  proposal_fund_percent: number;
}
