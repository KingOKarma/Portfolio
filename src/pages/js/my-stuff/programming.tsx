import React, { useEffect, useState } from 'react';
import TitleBox from '../../../components/Title/TitleBox';
import githubLogo from "../../../images/githubLogo.png";
import { GithubAPI } from './types';
import axios, { AxiosResponse } from "axios";
import "../../css/my-stuff/programming.css"
import moment from 'moment';
// import moment from 'moment';



const Programming = () => {

  const [githubData, setGithubData] = useState<GithubAPI>({ github: [] });
  const [errorMsg, setErrorMsg] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getGitData() {
      try {
        setIsLoading(true);
        await axios.get<GithubAPI>("https://api.simpkins.dev/github")
          .then((response: AxiosResponse) => {
            if (response.status !== 200) {
              const error = (response.statusText);
              return Promise.reject(error);

            }
            setTimeout(() => {
              setIsLoading(false);
              setGithubData(response.data);

            }, 5000);
          })

      } catch (err: any) {

        setErrorMsg(err.toString());
        console.error('There was an error!', err);

      }

    }
    getGitData()
  }, []);

  let repos = githubData.github;

  repos = repos.map((r) => {
    // const date = moment(r.updated_at).valueOf()
    const date = Date.parse(r.pushed_at);

    r.updatedAt = date
    return r;
  })

  repos = repos.sort((a, b) => b.updatedAt - a.updatedAt)
  console.log(repos);

  return (
    <div className="fadein">

      {
        TitleBox(
          "Code",
          "A list of all my public repositories from Github, (from lasted updated order)",
          githubLogo,
          5
        )
      }

      <hr />

      <span className="buttonList">
        <ul>
          {errorMsg ? <li>Error: {errorMsg}</li> :

            repos.map(item => (
              <a key={item.id}
                href={item.html_url} target="_blank" rel='noreferrer'
                className="repoBox">
                {item.name}
                <p className="repoBoxTimestamp">
                  Last updated {moment(item.updatedAt).fromNow()}<br />{item.language}</p>

                <p >⭐ {item.stargazers_count} </p>

                {item.is_template ? <p className="repoBoxTemplate">Template </p> : <p />}


              </a>
            ))

          }
          {isLoading ?
            <div className="preloader">
              <div className="text">Loading...</div>
              <span className="circle circle-white"></span>
            </div>
            : <br />}
        </ul>

      </span>
    </div>

  );
}

export default Programming;