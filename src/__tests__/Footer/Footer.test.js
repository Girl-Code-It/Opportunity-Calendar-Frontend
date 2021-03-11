import Footer from '../../Components/Footer/Footer'
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


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


it("check if footer component renders correctly", () => {
    act(() => {
        render(<Footer/>,container);
    });

    expect(Footer).toBeTruthy()

    // Checking if different parts of the component renders.
    const copyrightElement = container.querySelector("[data-testid='copyright']")
    const copyrightPart = "  2020 Girl Code It | All rights reserved."
    expect(copyrightElement.textContent).toBe(copyrightPart || " 2021 Girl Code It | All rights reserved." | " 2022 Girl Code It | All rights reserved." )

});

it("renders Footer Links", () => {
    act(() => {
        render(<Footer/>,container);
    });
    // Checking if Links are working fine.
    expect(
        container.querySelector("[data-testid='linkedin']").getAttribute("href")
    ).toEqual("https://www.linkedin.com/company/14568052/admin/");
    expect(
        container.querySelector("[data-testid='instagram']").getAttribute("href")
    ).toEqual("https://www.instagram.com/girlcodeit/");
    expect(
        container.querySelector("[data-testid='twitter']").getAttribute("href")
    ).toEqual("https://twitter.com/GirlCodeIt1");
});