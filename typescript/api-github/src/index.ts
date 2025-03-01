interface User {
  id: number;
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  repos_url: string;
}

interface Repos {
  name: string;
  description: string;
  fork: boolean;
  stargazers_count: number;
}

const users: User[] = [];

const getUserFromAPI = async (username: string) => {
  const resp = await fetch(`https://api.github.com/users/${username}`).then(
    (resp) => resp.json()
  );
  if (resp.message === `Not Found`) {
    console.log(`Usuário não encontrado`);
    return;
  }
  console.log(`Usuário ${username} encontrado.`);
  users.push({
    id: resp.id,
    login: resp.login,
    name: resp.name,
    bio: resp.bio,
    public_repos: resp.public_repos,
    repos_url: resp.repos_url,
  });
};

getUserFromAPI(`therermz`);
getUserFromAPI(`CamilaCPG`);
getUserFromAPI(`IgorLimadeJesus`);
getUserFromAPI(`Kayque48`);
getUserFromAPI(`AnaJCastro`);

const findUserByUsername = (username: string) => {
  const usernameExists = users.find(
    (u) => u.login.toLowerCase() === username.toLowerCase()
  );
  if (!usernameExists) {
    console.log(`Usuário não encontrado`);
    return;
  }
  return usernameExists;
};

const listUserRepos = async (username: string) => {
  const user = findUserByUsername(username);
  const resp = await fetch(
    `https://api.github.com/users/${user.login}/repos`
  ).then((res) => res.json());
  const repos: Repos[] = [];
  repos.push(
    resp.slice(0, 5).map((repo: Repos) => ({
      name: repo.name,
      description: repo.description,
      fork: repo.fork,
      stargazers_count: repo.stargazers_count,
    }))
  );
  return repos;
};

const showUsers = () => {
  console.log(`Usuários`);
  users.forEach((user) => {
    console.log(`Nome: ${user.name}`);
    console.log(`Bio: ${user.bio ? user.bio : `Sem bio`} `);
    console.log(`Repositórios Públicos: ${user.public_repos}`);
  });
};

const showTopUsers = () => {
  console.log(`Top 5 Usuários`);
  const topUsers = users
    .sort((a, b) => b.public_repos - a.public_repos)
    .slice(0, 5);

  topUsers.forEach((user, index) => {
    console.log(
      `${index + 1}. ${user.name ? user.name : user.login} - ${
        user.public_repos
      } repositórios públicos`
    );
  });
};
