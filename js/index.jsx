import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import '../style/universal.scss';
import '../style/app.scss';

ReactDOM.render(<App />, document.getElementById("weatherapp"));