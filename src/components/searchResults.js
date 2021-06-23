import {useEffect, useState} from "react";
import {apiGet, repoSearchURL} from "../utils/api";
import ProjectCard from "./projectCard";

export default function SearchResults(props) {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const { page, perPage } = props;

  useEffect(() => {
    setLoading(true);

    apiGet(repoSearchURL,
      {
        q: "stars:>=1000",
        sort: "stars",
        order: "desc",
        per_page: perPage,
        page
      })
    .then(data => {
      if (!data.items) {
        throw new Error("Unrecognized response");
      }

      setProjects(data.items);
    })
    .catch(err => console.log("ERROR:", err))
    .finally(() => setLoading(false));
  }, [page, perPage]);

  return (
    <div className="results">
    {
      loading
        ? <p>Loading...</p>
        : projects.map((p, i) => <ProjectCard projectInfo={p} key={i}/>)
    }
    </div>);
}