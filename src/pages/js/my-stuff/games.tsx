import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import TitleBox from '../../../components/Title/TitleBox';
import itchLogo from "../../../images/itchLogo.png";
import { ItchaPI } from './types';
import "../../css/my-stuff/games.css"
import moment from 'moment';

const Games = () => {

    const [itchData, setItchData] = useState<ItchaPI>({ itch: [] });
    const [errorMsg, setErrorMsg] = useState<any>(null);

    useEffect(() => {
        async function getGitData() {
            try {
                await axios.get<ItchaPI>("https://api.simpkins.dev/itch")
                    .then((response: AxiosResponse) => {
                        if (response.status !== 200) {
                            const error = (response.statusText);
                            return Promise.reject(error);

                        }

                        setItchData(response.data);
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

    repos = repos.sort((a, b) => b.publishedAt - a.publishedAt)
    console.log(repos);

    return (
        <div>
            {
                TitleBox(
                    "My Games",
                    "Heres a wonderful list of all of the games that I have maked/helped with!",
                    itchLogo,
                    5
                )
            }

            <hr />

            <span className="buttonList">
                <ul>
                    {errorMsg ? <li>Error: {errorMsg}</li> :

                        repos.map(item => (
                            <a key={item.id}
                                href={item.url} target="_blank" rel='noreferrer'
                                className="repoBox">
                                {item.title}
                                <p className="repoBoxTimestamp">
                                    Last updated {moment(item.publishedAt).fromNow()}<br />{item.min_price > 0 ? `$${item.min_price}` : "Choose your price"}</p>

                                <p >👀 {item.views_count} ⬇️ {item.downloads_count}  </p>

                                <img src={item.cover_url} alt={item.title} className="repoimg"></img>


                            </a>
                        ))

                    }
                </ul>

            </span>


        </div>

    );
};

export default Games;