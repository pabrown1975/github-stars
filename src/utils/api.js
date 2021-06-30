export const repoSearchURL = "https://api.github.com/search/repositories";
export const commitSearchURL = "https://api.github.com/repos";
export const repoSearchMaxResults = 100;
export const repoSearchResultsPerPage = 10;


/**
 * Convert a URL to point to the local proxy cache
 * - Hardcoded to match GitHub API URLs, should load this info from a config file, based on environment
 * - Has no effect on any other URLs
 *
 * @param url - Target ("real") URL
 * @return string - URL string redirected to local proxy cache
 */
function getCacheURL (url)
{
  return url.replace("https://api.github.com", "http://localhost:3001");
}

/**
 * Perform an asynchronous HTTP GET
 * - Encodes query parameters
 * - Throws an Error on failed response status codes
 * - Performs JSON parse on the return data if response status is "OK"
 *
 * @param url - the URL to fetch including scheme, domain, and path - eg "https:example.com/path"
 * @param queryParams - optional query parameters to be encoded and appended to the URL - eg {"user": "bob"}
 * @throws Error - contains status message if status is not "OK" (status = 200 ... 299)
 * @return Promise - resolves to parsed JSON object on success
 */
export function apiGet(url, queryParams) {

  if (queryParams) {

    let query = [];

    Object.keys(queryParams).forEach(qp => {
      query.push(encodeURIComponent(qp) + "=" + encodeURIComponent(queryParams[qp]));
    });

    url += "?" + query.join("&");
  }

  return fetch(getCacheURL(url))
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    });
}