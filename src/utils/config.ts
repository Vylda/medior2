/**
 * Exposes public ENV variables from Next.js environment files.
 * */

type TPublicRuntimeConfig = {
  articlesUrl: string;
  usersUrl: string;
  userUrl: string;
};

const publicRuntimeConfig = {
  articlesUrl: process.env.NEXT_PUBLIC_ARTICLES_URL ?? '',
  usersUrl: process.env.NEXT_PUBLIC_USERS_URL ?? '',
  userUrl: process.env.NEXT_PUBLIC_USER_URL ?? '',
} satisfies TPublicRuntimeConfig;

export default publicRuntimeConfig;
