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
      className="min-h-screen flex justify-center items-center flex-col gap-10"
    >
      <h1 className="mb-4 text-6xl tracking-tight font-extrabold text-center text-white ">
        Portfolio
      </h1>

      <div className="grid grid-cols-3 gap-24 items-center">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
