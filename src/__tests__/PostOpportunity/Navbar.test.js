import Navbar from '../../Components/PostOpportunity/sections/Navbar'
import userEvent from "@testing-library/user-event";
import React from 'react'
import { render} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import {unmountComponentAtNode} from "react-dom";



let container = null;
import { cleanup } from '@testing-library/react'
// Other import and mock props


it("opportunities navbar renders correctly ", () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(<Navbar/>).toBeTruthy()
})

it("renders Dropdown Links", () => {
    act(() => {
        render(<Navbar/>);
    });

});