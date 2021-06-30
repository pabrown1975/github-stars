import {Link} from "react-router-dom";

export default function ProjectDescription(props) {

  const { name, ownerName, stars, url, description } = props;

  return (
    <div className="project">
      <div className="project-inner">
        <h2>{name}</h2>
        <p className="stats">
          <span>&#9733; {stars}</span>
          <span><a href={url} target="_blank" rel="noreferrer">&#8599; project</a></span>
          <span><Link to={`/commits/${ownerName}/${name}`}>&#8599; commits</Link></span>
        </p>
        <p className="description">{description}</p>
      </div>
    </div>);
}