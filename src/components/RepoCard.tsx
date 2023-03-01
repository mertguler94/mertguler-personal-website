import Link from "next/link";
import { RepoInterface } from "../api/get-repositories";

interface RepoCardProps {
  repo: RepoInterface;
}

export default function RepoCard({ repo }: RepoCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="font-bold text-2xl">{repo.name}</h4>
      <p className="text-gray-400">{repo.description}</p>
      <Link
        className="w-fit relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden
        text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600
        group-hover:from-green-400 group-hover:to-blue-600 hover:text-white text-white focus:ring-4 focus:outline-none  focus:ring-green-800"
        href={repo.url}
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
          View Repository
        </span>
      </Link>
      <button
        type="button"
        className="w-fit text-white hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-white dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
      >
        View Repository
      </button>
    </div>
  );
}

// <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
//   <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//       Green to blue
//   </span>
// </button>
