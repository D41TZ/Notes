import React from "react";
import { Route, Routes } from "react-router-dom"

import Note from "./Note"
import DefaultNote from "./DefaultNote"

const component = props => 
<Routes>
    <Route exact path="/" element={<DefaultNote />} />
    <Route path="/:id" element={<Note link={window.location.pathname} />} />
</Routes>

export default component