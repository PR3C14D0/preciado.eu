const {
    NEXT_PUBLIC_API_URL,
    LNK_LINK,
    GITHUB_LINK,
    PAGE_TITLE
} = process.env

export const EnvConf = () => ({
    api: NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
    linkedin: LNK_LINK,
    github: GITHUB_LINK,
    title: PAGE_TITLE
})