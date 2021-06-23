import {act, render} from "@testing-library/react";
import {unmountComponentAtNode} from "react-dom";
import App from "./App";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("Rendering cards from mock API data", async () => {

  const mockApiData = {
    "total_count": 2,
    "incomplete_results": false,
    "items": [
      {
        "name": "Project 1",
        "description": "Example project one",
        "stargazers_count": "5000",
        "html_url": "https://example.com/project1",
        "commits_url": "https://example.com/project1/commits",
        "owner": {
          "login": "user1",
          "avatar_url": "https://example.com/user1.jpg"
        }
      },
      {
        "name": "Project 2",
        "description": "Example project two",
        "stargazers_count": "2500",
        "html_url": "https://example.com/project2",
        "commits_url": "https://example.com/project2/commits",
        "owner": {
          "login": "user2",
          "avatar_url": "https://example.com/user2.jpg"
        }
      }
    ]};

  // Mock the browser's fetch() function
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve(
      {
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockApiData)
      }));

  // Use act() to allow asynchronous behavior while rendering the app
  await act(async () => { render(<App />, container); });

  const cards = document.querySelectorAll(".card");

  // Verify that a card is rendered for each project in the mock data
  expect(cards.length).toBe(2);
  expect(cards[0].querySelectorAll(".owner .name")[0].innerHTML).toBe("user1");
  expect(cards[0].querySelectorAll(".project h2")[0].innerHTML).toBe("Project 1");
  expect(cards[0].querySelectorAll(".project .description")[0].innerHTML).toBe("Example project one");
  expect(cards[1].querySelectorAll(".owner .name")[0].innerHTML).toBe("user2");
  expect(cards[1].querySelectorAll(".project h2")[0].innerHTML).toBe("Project 2");
  expect(cards[1].querySelectorAll(".project .description")[0].innerHTML).toBe("Example project two");
});
