const {
    NEXT_PUBLIC_API_URL,
    LNK_LINK,
    GH_LINK,
    PAGE_TITLE
} = process.env

export const EnvConf = () => ({
    api: NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
    linkedin: LNK_LINK,
    github: GH_LINK,
    title: PAGE_TITLE
})