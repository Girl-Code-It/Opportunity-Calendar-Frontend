import KnowAboutCard from '../../../Components/HomePage/Sections/KnowAboutCard'
import React from "react";
import {render, unmountComponentAtNode} from "react-dom";


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

it("Know About Card rendering", () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(<KnowAboutCard/>).toBeTruthy()
})