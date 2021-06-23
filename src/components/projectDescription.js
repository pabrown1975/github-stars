export default function ProjectDescription(props) {

  const { name, stars, url, description } = props;

  return (
    <div className="project">
      <div className="project-inner">
        <h2>{name}</h2>
        <p className="stats">
          <span>&#9733; {stars}</span>
          <span><a href={url} target="_blank" rel="noreferrer">&#8599; project</a></span>
        </p>
        <p className="description">{description}</p>
      </div>
    </div>);
}