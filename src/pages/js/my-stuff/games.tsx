import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import TitleBox from '../../../components/Title/TitleBox';
import itchLogo from "../../../images/itchLogo.png";
import { ItchaPI, ItchRepoData } from './types';
import "../../css/my-stuff/games.css"
import moment from 'moment';
import { Loading } from '../../../utils/Loading';

const Games = () => {

    const [itchData, setItchData] = useState<ItchaPI>({ itch: [] });
    const [errorMsg, setErrorMsg] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [loadedText, setLoadedText] = useState("Loading");
    const [repoData, setRepoData] = useState<ItchRepoData>()

    Loading(loadedText, setLoadedText, isLoading);

    useEffect(() => {
        async function getGitData() {
            try {
                setIsLoading(true);
                await axios.get<ItchaPI>("https://api.simpkins.dev/itch")
                    .then((response: AxiosResponse) => {
                        if (response.status !== 200) {
                            const error = (response.statusText);
                            return Promise.reject(error);

                        }

                        setTimeout(() => {
                            setIsLoading(false);
                            setItchData(response.data);

                        }, 3000);
                    })

            } catch (err: any) {

                setErrorMsg(err.toString());
                console.error('There was an error!', err);

            }

        }
        getGitData()
    }, []);

    let repos = itchData.itch;

    repos = repos.map((r) => {
        // const date = moment(r.updated_at).valueOf()
        const date = Date.parse(r.published_at);

        r.publishedAt = date
        return r;
    })
    repos = repos.filter((r) => r.published);

    repos = repos.sort((a, b) => b.publishedAt - a.publishedAt)
    console.log(repos);

    function clickRepo(itemData?: ItchRepoData) {
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
                    "My Games",
                    "Heres a wonderful list of all of the games that I have maked/helped with!",
                    itchLogo,
                    5
                )
            }

            <hr />

            {typeof repoData === "undefined" ?


                <span className="gamesbuttonList">
                    <ul>
                        {errorMsg ? <li>Error: {errorMsg}</li> :

                            repos.map(item => (
                                <p key={item.id}
                                    onClick={() => clickRepo(item)}
                                    className={`gamesrepoBox ${isLoading ? "" : "fadein"}`}>
                                    {item.title}
                                    <p className="gamesrepoBoxTimestamp">
                                        Last updated {moment(item.publishedAt).fromNow()}<br />{item.min_price > 0 ? `$${item.min_price}+` : "Choose your price"}</p>

                                    <p >👀 {item.views_count} ⬇️ {item.downloads_count}  </p>

                                    <img src={item.cover_url} alt={item.title} className="gamesrepoimg"></img>


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
                    <p className="centertext">{repoData.short_text}</p>
                    <span className="gamesbuttonList">
                        <p className='arrow right' onClick={() => clickRepo(undefined)}
                        ></p>
                        <a key={repoData.id}
                            href={repoData.url} target="_blank" rel='noreferrer'
                            className={`gamesrepoBox ${isLoading ? "" : "fadein"}`}>
                            {repoData.title}
                            <p className="gamesrepoBoxTimestamp">
                                Last updated {moment(repoData.publishedAt).fromNow()}<br />{repoData.min_price > 0 ? `$${repoData.min_price}+` : "Choose your price"}</p>

                            <p >👀 {repoData.views_count} ⬇️ {repoData.downloads_count}  </p>

                            <img src={repoData.cover_url} alt={repoData.title} className="gamesrepoimg"></img>
                        </a>
                    </span>
                </div>
            }

        </div>

    );
};

export default Games;