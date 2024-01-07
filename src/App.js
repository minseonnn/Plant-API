import React, { useState, useEffect } from 'react';
//import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail"
import Search  from "./component/Search";

function App() {
    return (
        <Router>
            <Search />
            <Routes>
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
                <Route path="/plant/:id" element={<Detail />} />
            </Routes>
        </Router>
    );
}

export default App;