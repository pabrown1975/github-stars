import './App.css';
import {useState} from "react";
import {repoSearchMaxResults, repoSearchResultsPerPage} from "./utils/api";
import SearchResults from "./components/searchResults";

function App() {

  const [page, setPage] = useState(1);
  const numPages = Math.ceil(repoSearchMaxResults / repoSearchResultsPerPage);

  return (
    <div className="App">
      <h1>GitHub Stars</h1>
      <div className="nav">
        <SearchResults page={page} perPage={repoSearchResultsPerPage}/>
        <button onClick={() => setPage(Math.max(page - 1, 1))}>prev &larr;</button>
        { `page ${page} of ${numPages}` }
        <button onClick={() => setPage(Math.min(page + 1, numPages))}>&rarr; next</button>
      </div>
    </div>
  );
}

export default App;
