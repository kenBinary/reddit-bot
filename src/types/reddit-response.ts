interface RedditListing {
  kind: string;
  data: ListingData;
}

interface ListingData {
  after: string | null;
  dist: number;
  modhash: string;
  geo_filter: string;
  children: RedditPost[];
  before: string | null;
}

interface RedditPost {
  kind: string;
  data: PostData;
}

interface PostData {
  approved_at_utc: number | null;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title: string | null;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: LinkFlairRichtext[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: number;
  link_flair_css_class: string;
  downs: number;
  top_awarded_type: string | null;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  upvote_ratio: number;
  author_flair_background_color: string | null;
  subreddit_type: string;
  ups: number;
  total_awards_received: number;
  media_embed: Record<string, unknown>;
  author_flair_template_id: string | null;
  is_original_content: boolean;
  user_reports: unknown[];
  secure_media: RedditMedia | null;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: string | null;
  secure_media_embed: Record<string, unknown>;
  link_flair_text: string;
  can_mod_post: boolean;
  score: number;
  approved_by: string | null;
  is_created_from_ads_ui: boolean;
  author_premium: boolean;
  thumbnail: string;
  edited: number | boolean;
  author_flair_css_class: string | null;
  author_flair_richtext: AuthorFlairRichtext[];
  gildings: Record<string, unknown>;
  content_categories: string[] | null;
  is_self: boolean;
  mod_note: string | null;
  created: number;
  link_flair_type: string;
  wls: number;
  removed_by_category: string | null;
  banned_by: string | null;
  author_flair_type: string;
  domain: string;
  allow_live_comments: boolean;
  selftext_html: string | null;
  likes: boolean | null;
  suggested_sort: string | null;
  banned_at_utc: number | null;
  url_overridden_by_dest?: string;
  view_count: number | null;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  all_awardings: unknown[];
  awarders: unknown[];
  media_only: boolean;
  link_flair_template_id: string;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: string | null;
  treatment_tags: unknown[];
  visited: boolean;
  removed_by: string | null;
  num_reports: number | null;
  distinguished: string | null;
  subreddit_id: string;
  author_is_blocked: boolean;
  mod_reason_by: string | null;
  removal_reason: string | null;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: string[] | null;
  author: string;
  discussion_type: string | null;
  num_comments: number;
  send_replies: boolean;
  contest_mode: boolean;
  mod_reports: unknown[];
  author_patreon_flair: boolean;
  author_flair_text_color: string | null;
  permalink: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media: RedditMedia | null;
  is_video: boolean;
}

interface LinkFlairRichtext {
  e: string;
  t: string;
}

interface AuthorFlairRichtext {
  e: string;
  t: string;
}

interface RedditMedia {
  reddit_video?: RedditVideo;
}

interface RedditVideo {
  bitrate_kbps: number;
  fallback_url: string;
  has_audio: boolean;
  height: number;
  width: number;
  scrubber_media_url: string;
  dash_url: string;
  duration: number;
  hls_url: string;
  is_gif: boolean;
  transcoding_status: string;
}

export type RedditApiResponse = RedditListing;

export type {
  RedditListing,
  ListingData,
  RedditPost,
  PostData,
  LinkFlairRichtext,
  AuthorFlairRichtext,
  RedditMedia,
  RedditVideo,
};
