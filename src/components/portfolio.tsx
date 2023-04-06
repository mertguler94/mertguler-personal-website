import { useEffect, useState } from "react";
import getRepositories, { RepoInterface } from "../api/get-repositories";
import RepoCard from "./RepoCard";

function Portfolio() {
  const [repos, setRepos] = useState<RepoInterface[]>([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      const data = await getRepositories();
      if (!data) return;
      setRepos(data);
    };

    fetchRepositories();
  }, []);

  return (
    <section
      id="portfolio"
      className="min-h-screen flex justify-center items-center flex-col gap-10 lg:p-0 py-10"
    >
      <div>
        <h1 className="mb-4 t text-3xl lg:text-6xl  tracking-tight font-extrabold text-center text-white ">
          Portfolio
        </h1>
        <p className="text-center tracking-tight">
          <i>Last 6 Public Repositories</i>
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-10 lg:gap-24 items-center overflow-hidden">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
