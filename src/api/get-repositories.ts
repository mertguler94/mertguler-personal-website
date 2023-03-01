export interface RepoInterface {
  id: number;
  url: string;
  name: string;
  description: string;
}

export default async function getRepositories() {
  try {
    const res = await fetch(
      "https://api.github.com/users/mertguler94/repos?per_page=6",
      {
        headers: {
          "Content-Type": "application/json",
          accept: "application/vnd.github+json",
        },
      }
    );

    if (res.ok) {
      const resData = await res.json();
      const repos: Promise<RepoInterface[]> = Promise.all(
        resData.map((repo: any) => {
          return {
            id: repo.id,
            name: repo.name,
            description: repo.description,
            url: repo.svn_url,
          };
        })
      );

      return repos;
    }
  } catch (err) {
    console.error(err);
  }
}
