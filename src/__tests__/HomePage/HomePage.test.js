import HomePage from '../../Components/HomePage/HomePage'
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


let container = null;
beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
});
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders homepage correctly", () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<HomePage/>, container)
})
