import {Link, useParams} from "react-router-dom";
import {commitSearchURL} from "../utils/api";
import {useEffect, useState} from "react";

import {apiGet} from "../utils/api";

export default function CommitsPage() {

  const { owner, project } = useParams();
  const [commits, setCommits] = useState([]);

  useEffect(() => {

    const commitsURL = `${commitSearchURL}/${owner}/${project}/commits`;

    apiGet(commitsURL)
      .then(data => setCommits(data))
      .catch(error => {
        setCommits([]);
        console.log(error);
      });

  }, [owner, project]);

  return (
    <>
      <h1>{owner} - {project}</h1>
      <h2>Commits:</h2>
      { commits.length
        ? (
          <ul> {commits.map((c, i) =>
            <li key={i}>
              <a href={c.html_url}>
                {c.commit.author.name}: {c.commit.message.substr(0, 100)}
              </a>
            </li>)}
          </ul>)
        : <p>None</p>
      }
      <Link to={"/"}>&larr; Back to project</Link>
    </>
  );
}