export const ALL_DATA_QUERY = `{
  "siteSettings": *[_type == "siteSettings" && _id == "siteSettings"][0]{
    displayName,
    tagline,
    bio,
    "avatarUrl": avatar.asset->url,
    email,
    githubUrl,
    linkedinUrl,
    ctaHeadline,
    heroTags[]{_key, label, color},
    jobTags[]{_key, label, color},
    stats[]{_key, label, value, unit, desc},
    educationTitle,
    educationPeriod,
    educationStatus,
    educationDesc
  },
  "projects": *[_type == "project"] | order(order asc){
    "slug": slug.current,
    title,
    desc,
    fullContent,
    tags,
    themeColor,
    iconName,
    stat,
    statLabel
  },
  "notes": *[_type == "note"] | order(date desc){
    "slug": slug.current,
    title,
    date,
    readTime,
    summary,
    fullContent,
    tags,
    themeColor
  },
  "skills": *[_type == "skill"] | order(order asc){
    title,
    desc,
    iconName,
    points,
    themeColor
  }
}`
