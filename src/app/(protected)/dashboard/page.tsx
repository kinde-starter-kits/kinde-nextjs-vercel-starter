import Topics from "@/components/Topics";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Dashboard() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const contentToExplore = [
    {
      title: "Sign up and sign in",
      link: "https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#sign-up-and-sign-in",
    },
    {
      title: "Redirecting after authentication",
      link: "https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#redirecting-after-authentication",
    },
    {
      title: "Log out",
      link: "https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#logout",
    },

    {
      title: "Create organizations",
      link: "https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#create-organizations",
    },
    {
      title: "Sign in to organizations",
      link: "https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#sign-into-organizations",
    },

    {
      title: "Server side methods",
      link: "https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#kinde-auth-data---server",
    },
    {
      title: "Client side methods",
      link: "https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#kinde-auth-data---client",
    },
    {
      title: "Refreshing Kinde data",
      link: "https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#refreshing-kinde-data",
    },
    {
      title: "Kinde Management API",
      link: "https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#kinde-management-api",
    },
    {
      title: "Analytics",
      link: "https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#analytics",
    },
    {
      title: "Internationalization",
      link: "https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#internationalization",
    },
    {
      title: "Audience",
      link: "https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#audience",
    },
    {
      title: "Protecting routes",
      link: "https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#protecting-routes",
    },
  ];

  return (
    <main className="mx-auto flex h-full w-full max-w-6xl animate-fade-in-up flex-col gap-8 px-4 py-12 opacity-0 md:px-8">
      <section className="py-16">
        <h1 className="mb-12 break-keep text-center tracking-tight">
          Your authentication is all sorted!
        </h1>
        {(await isAuthenticated()) && (
          <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center gap-4 pt-10">
            <div className="flex w-full items-center justify-start gap-2">
              <div className="inline-flex rounded-md border border-slate-300 bg-slate-100 px-2 py-1 font-mono text-sm text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white">
                id
              </div>
              <div className="inline overflow-hidden text-ellipsis text-nowrap rounded-md border border-slate-200 bg-white px-2 py-1 font-mono text-sm dark:border-slate-900 dark:bg-black">
                {user?.id}
              </div>
            </div>
            <div className="flex w-full items-center justify-start gap-2">
              <div className="inline-flex rounded-md border border-slate-300 bg-slate-100 px-2 py-1 font-mono text-sm text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white">
                email
              </div>
              <div className="inline overflow-hidden text-ellipsis text-nowrap rounded-md border border-slate-200 bg-white px-2 py-1 font-mono text-sm dark:border-slate-900 dark:bg-black">
                {user?.email}
              </div>
            </div>
            <div className="flex w-full items-center justify-start gap-2">
              <div className="inline-flex rounded-md border border-slate-300 bg-slate-100 px-2 py-1 font-mono text-sm text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white">
                given_name
              </div>
              <div className="inline overflow-hidden text-ellipsis text-nowrap rounded-md border border-slate-200 bg-white px-2 py-1 font-mono text-sm dark:border-slate-900 dark:bg-black">
                {user?.given_name}
              </div>
            </div>
            <div className="flex w-full items-center justify-start gap-2">
              <div className="inline-flex rounded-md border border-slate-300 bg-slate-100 px-2 py-1 font-mono text-sm text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white">
                family_name
              </div>
              <div className="inline overflow-hidden text-ellipsis text-nowrap rounded-md border border-slate-200 bg-white px-2 py-1 font-mono text-sm dark:border-slate-900 dark:bg-black">
                {user?.family_name}
              </div>
            </div>
            <a
              href="https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/"
              className="button mt-4 block w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              See full Next.js docs
            </a>
          </div>
        )}
      </section>
      <hr className="my-10" />
      <section className="py-16">
        <h2 className="mb-16 text-4xl leading-none tracking-tight md:text-5xl">
          Get started with our Next.js SDK
        </h2>
        <ul className="flex flex-wrap gap-4">
          {contentToExplore.map((topic) => (
            <li key={topic.link} className="inline-flex">
              <a
                className="text-md rounded-lg border-2 border-slate-100 bg-white px-5 py-3 font-medium transition hover:border-2 hover:border-black md:text-xl dark:border-slate-900 dark:bg-black dark:hover:border-white"
                href={topic.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {topic.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center pb-2 pt-12">
          <a
            href="https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk"
            className="button inline-flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            See full Next.js SDK docs
          </a>
        </div>
      </section>
      <hr className="my-10" />
      <section className="py-16">
        <h2 className="mb-16 pb-6 text-4xl leading-none tracking-tight md:text-5xl">
          Explore all you can do with Kinde
        </h2>
        <Topics />
      </section>
    </main>
  );
}
