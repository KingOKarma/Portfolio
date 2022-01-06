import React, { useEffect, useState } from 'react';
import TitleBox from '../../../components/Title/TitleBox';
import githubLogo from "../../../images/githubLogo.png";
import { GithubAPI, GithubRepoData } from './types';
import axios, { AxiosResponse } from "axios";
import "../../css/my-stuff/programming.css"
import moment from 'moment';
import { Loading } from '../../../utils/Loading';
// import moment from 'moment';



const Programming = () => {

  const [githubData, setGithubData] = useState<GithubAPI>({ github: [] });
  const [errorMsg, setErrorMsg] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedText, setLoadedText] = useState("Loading");
  const [repoData, setRepoData] = useState<GithubRepoData>()

  Loading(loadedText, setLoadedText, isLoading);

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

            }, 3000);
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

  function clickRepo(itemData?: GithubRepoData) {
    window.scrollTo({ "behavior": "smooth", "top": 0 })
    if (itemData) {
      setRepoData(itemData);
    } else {
      setRepoData(undefined);
    }
  }

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

      {typeof repoData === "undefined" ?

        <span className="buttonList">
          <ul>
            {errorMsg ? <li>Error: {errorMsg}</li> :

              repos.map(item => (
                <p key={item.id}
                  onClick={() => clickRepo(item)}
                  className={`repoBox ${isLoading ? "" : "fadein"}`}>
                  {item.name}
                  <p className="repoBoxTimestamp">
                    Last updated {moment(item.updatedAt).fromNow()}<br />{item.language}</p>

                  <p >⭐ {item.stargazers_count} </p>
                  <span className="tagsList">
                    <span>
                      {item.is_template ? <p className="repoBoxTemplate">Template </p> : <br />}
                    </span>
                  </span>
                </p>
              ))

            }
            {isLoading ?
              <div className="preloader">
                <div className="text">{loadedText}</div>
                <span className="circle circle-white"></span>
                <br /> <br /> <br /> <br /> <br />
              </div>
              : <div />}
          </ul>

        </span>

        :
        <div>
          <p className="centertext">{repoData.description}</p>
          <span className="buttonList">
            <p className='arrow right' onClick={() => clickRepo(undefined)}
            ></p>
            <a key={repoData.id}
              href={repoData.html_url} target="_blank" rel='noreferrer'
              className={`repoBox ${isLoading ? "" : "fadein"}`}>
              {repoData.name}
              <p className="repoBoxTimestamp">
                Last updated {moment(repoData.updatedAt).fromNow()}<br />{repoData.language}</p>

              <p >⭐ {repoData.stargazers_count} </p>
              <span className="tagsList">
                <span>
                  {repoData.is_template ? <p className="repoBoxTemplate">Template </p> : <br />}
                  {repoData.topics.length !== 0 ? repoData.topics.map((m) => {
                    return <p key={m} className="repoBoxTemplate">{m}</p>
                  }) : <br />}
                </span>
              </span>
            </a>
          </span>
        </div>
      }
    </div>

  );
}

export default Programming;