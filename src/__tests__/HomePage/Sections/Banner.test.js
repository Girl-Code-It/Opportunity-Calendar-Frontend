import Banner from '../../../Components/HomePage/Sections/Banner'
import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {fireEvent} from '@testing-library/react';


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

it("banner rendering", () => {
    render(<Banner/>, container)
})

it("banner explore button", () => {
    act(() => {
        render(<Banner/>,container);
    });
    expect(Banner).toBeTruthy()
    jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(container.querySelector("[data-testid='explore-btn']").getAttribute('href')).toEqual("/viewopportunity/fulltime")
})