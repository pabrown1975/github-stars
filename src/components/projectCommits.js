import {useEffect, useState} from "react";
import {apiGet} from "../utils/api";

export default function ProjectCommits(props) {

  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);
  const { commitsURL } = props;

  useEffect(() => {

    const since = new Date();

    since.setDate(since.getDate() - 1);
    setLoading(true);

    apiGet(commitsURL,
      {
        since: since.toISOString()
      })
      .then(data => setCommits(data))
      .catch(() => setCommits([]))
      .finally(() => setLoading(false));
  }, [commitsURL]);

  return (
    <div className="commits">
      <div className="commits-inner">
        <h3>Commits in the last 24h:</h3>
        {
          loading
            ? <p>Loading commits...</p>
            : (commits.length
                ? <ul>
                  {
                    commits.map((c, i) => (
                      <li key={i}>
                        <a href={c.html_url} target="_blank" rel="noreferrer">
                          {c.commit.author.name}: {c.commit.message.substr(0, 50)}
                        </a>
                      </li>
                    ))
                  }
                  </ul>
                : <p>None</p>
            )
        }
      </div>
    </div>);
}