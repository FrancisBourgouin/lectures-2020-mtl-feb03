import React, { useState, useEffect } from "react";
import { CommitList } from "./CommitList";
import { CommitForm } from "./CommitForm";

import listOfCommits from "./json/master.json"
import axios from 'axios';
import "./App.css";

// API ADDRESS : https://api.github.com/repos/:owner/:repo/commits
// API ADDRESS : https://api.github.com/repos/:owner/:repo/branches

// FrancisBourgouin
// windows-terminal-color-scheme-builder
// lhl-12-w10d3
const TemporaryComponent = () => {

  const consoleTheClick = e => console.log(e)

  useEffect(() => {
    document.addEventListener('click', consoleTheClick)

    return () => document.removeEventListener('click', consoleTheClick)

  }, [])

  return (<h1>Clickyness active</h1>)
}


function App() {
  const [name, setName] = useState("Francis");
  const [repoData, setRepoData] = useState({
    owner: "FrancisBourgouin",
    repo: "windows-terminal-color-scheme-builder",
    commits: []
  })
  const { owner, repo, commits } = repoData
  const consoleTheClick = e => console.log(e)
  // useEffect(() => { //equivalent to componentDidMount
  //   axios
  //     .get(`https://api.github.com/repos/${repoData.owner}/${repoData.repo}/commits`)
  //     .then(data => setRepoData({ ...repoData, commits: data.data }))
  //     .catch(err => console.log(err))
  // }, [])

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/${owner}/${repo}/commits`)
      .then(data => setRepoData(oldRepo => ({ ...oldRepo, commits: data.data })))
      .catch(err => console.log(err))


  }, [owner, repo])

  // useEffect(() => {
  //   document.addEventListener('click', consoleTheClick)

  //   return () => document.removeEventListener('click', consoleTheClick)

  // })


  const updateOwnerAndRepo = (owner, repo) => {
    if (owner && repo) {
      setRepoData({ ...repoData, owner, repo })
    }
  }


  return (
    <div className='App'>
      <h1 onClick={() => setName(name === "Francis" ? "" : "Francis")}>{name}'s Github viewer ! ;D</h1>
      {name && <TemporaryComponent />}
      <CommitForm updateOwnerAndRepo={updateOwnerAndRepo} />
      <CommitList commits={commits} />

    </div>
  );
}

export default App;
