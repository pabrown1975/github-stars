import {useState} from "react";
import ProjectDescription from "./projectDescription";
import ProjectCommits from "./projectCommits";

export default function ProjectCard(props) {

  const [showCommits, setShowCommits] = useState(false);

  const {
    name,
    description,
    owner,
    stargazers_count,
    html_url,
    commits_url
  } = props.projectInfo;

  const {
    login,
    avatar_url
  } = owner;

  return (
    <div className="card">
      <div className="owner">
        <div className="owner-inner">
          <img src={avatar_url} alt={login}/><br/>
          <p className="name">{login}</p>
          <button onClick={() => setShowCommits(!showCommits)}>
            commits { showCommits ? <>&#10005;</> : <>&rarr;</> }
          </button>
        </div>
      </div>
      {
        showCommits
          ? <ProjectCommits commitsURL={commits_url.replace(/{.+}/, "")}/>
          : <ProjectDescription name={name} description={description} stars={stargazers_count} url={html_url}/>
      }
    </div>
  );
}