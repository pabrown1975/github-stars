import ProjectDescription from "./projectDescription";
import {Link} from "react-router-dom";

export default function ProjectCard(props) {

  const {
    name,
    description,
    owner,
    stargazers_count,
    html_url
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
        </div>
      </div>
      <ProjectDescription
        name={name}
        ownerName={owner.login}
        description={description}
        stars={stargazers_count}
        url={html_url}/>
    </div>
  );
}