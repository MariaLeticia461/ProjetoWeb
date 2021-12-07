import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'
import Rogerio from '../../views/contents/Rogerio'
import UseState from '../../views/contents/UseState'
import Musicas from '../../views/contents/Musicas'
import Biblio from '../../views/contents/Biblio'
import NaoEncontrado from '../../views/contents/NaoEncontrado'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Rogerio />
            </Route>
            <Route path="/Biblio">
                <Biblio />
            </Route>
            <Route path="/Musicas">
                <Musicas />
            </Route>
            <Route path="*">
                <NaoEncontrado />
            </Route>
        </Switch>
    </main>
)
export default Content