import "@babel/polyfill"
import "./main.css";
import React from "react"
import {render} from "react-dom"
import Root from "#root/components/Root"

render(
    <Root />,
    document.getElementById("root")
)