import topicsData from "@/app/data/topicsData";
import Image from "next/image";

export default function Topics() {
  return (
    <ul className="topics grid grid-cols-1 gap-6 px-0 md:grid-cols-2 lg:grid-cols-3">
      {topicsData?.map((topic) => (
        <li
          key={topic.label}
          className="relative flex list-none flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-8 sm:p-12 dark:border-slate-900 dark:bg-black"
        >
          <Image src={topic.icon} width={32} alt="" className="dark:invert" />
          <h2 className="text-2xl font-medium">{topic.label}</h2>
          <p>{topic.description}</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={topic.docsLink}
            className="absolute inset-0 rounded-2xl transition duration-200 hover:ring-2 hover:ring-black focus-visible:overflow-hidden focus-visible:border-none focus-visible:shadow-none dark:hover:ring-white dark:focus:ring-white dark:focus-visible:outline-white dark:focus-visible:ring-white"
          >
            <span className="sr-only">{topic.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
