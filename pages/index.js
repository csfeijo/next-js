import React from 'react';

const Home = ({ repositories }) => {

  return (
    <>
      <h1>Repositories</h1>
      <ul>
        {repositories.map(repo => <li key={repo}>{repo}</li>)}
      </ul>
    </>
  )
}

export default Home;

export const getServerSideProps = async () => {
  const response = await fetch('https://api.github.com/users/csfeijo/repos')
  const data = await response.json();
  const repoNames = data.map(item => item.name);

  return {
    props: {
      repositories: repoNames
    }
  }
};
