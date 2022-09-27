import React, { useEffect, useState } from 'react';

const Home = () => {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/csfeijo/repos')
      .then(response => response.json())
      .then(data => {
        const repoNames = data.map(item => item.name);

        setRepos(repoNames);
      })
  },[]);

  return (
    <>
      <h1>Repositories</h1>
      <ul>
        {repos.map(repo => <li key={repo}>{repo}</li>)}
      </ul>
    </>
  )
}

export default Home;
