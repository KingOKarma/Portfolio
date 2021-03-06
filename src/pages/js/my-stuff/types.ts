export interface GithubAPI {
    github: GithubRepoData[]

}

export interface GithubRepoData {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: boolean
    };
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: string;
    updated_at: string;
    updatedAt: number;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    forks_count: number;
    mirror_url: string | null;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license: {
        key: string;
        name: string;
        spdx_id: string;
        url: string;
        node_id: string;
    };
    allow_forking: boolean;
    is_template: boolean;
    topics: string[];
    visibility: string;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string
}

export interface ItchaPI {
    itch: ItchRepoData[];
}

export interface ItchRepoData {
    purchases_count: 1;
    earnings: Earnigns[];
    p_osx: boolean;
    id: number;
    published: boolean;
    published_at: string;
    publishedAt: number;
    views_count: number;
    url: string;
    can_be_bought: boolean;
    p_android: boolean;
    p_linux: boolean;
    created_at: string;
    user: User;
    downloads_count: number;
    has_demo: boolean;
    title: string;
    in_press_system: boolean;
    p_windows: boolean;
    cover_url: string;
    min_price: number;
    classification: string;
    short_text: string;
    type: string;

}

interface Earnigns {
    amount: number;
    currency: string;
    amount_formatted: string;
}

interface User {
    url: string;
    cover_url: string;
    username: string;
    id: number;
}
