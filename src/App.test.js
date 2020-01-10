import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import App from './App';

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("renders with or without a name", () => {
  act(() => {
    render(<App />, container);
  });

  const actualHeading = container.querySelector('h1');
  expect(actualHeading.textContent).toBe("React Tutorial");

  const actualParagraph = container.querySelector('p');
  expect(actualParagraph.textContent).toBe("Add a character with a name and a job to the table.");



});
