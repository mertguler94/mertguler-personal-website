import Link from "next/link";
import { RepoInterface } from "../api/get-repositories";
import { BsArrowRightCircle } from "react-icons/bs";

interface RepoCardProps {
  repo: RepoInterface;
}

export default function RepoCard({ repo }: RepoCardProps) {
  return (
    <div className="flex flex-col gap-2 lg:items-start items-center">
      {repo.homepage ? (
        <Link
          className="font-bold text-xl lg:text-2xl text-center lg:text-left hover:text-slate-300"
          href={repo.homepage}
        >
          {repo.name}
        </Link>
      ) : (
        <h4 className="font-bold text-xl lg:text-2xl text-center lg:text-left">
          {repo.name}
        </h4>
      )}

      <p className="text-gray-400 text-center lg:text-left">
        {repo.description}
      </p>
      <Link
        className="mt-3 w-fit relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden
        text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600
        group-hover:from-green-400 group-hover:to-blue-600 hover:text-white text-white focus:ring-4 focus:outline-none  focus:ring-green-800"
        href={repo.url}
      >
        <span className="flex items-center gap-4 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
          View Repository{" "}
          <BsArrowRightCircle
            size={16}
            className="transition ease-out delay-100 group-hover:scale-150"
          />
        </span>
      </Link>
    </div>
  );
}
