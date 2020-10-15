import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CreateOrphanage from './pages/CreateOrphanage';
import Landing from './pages/Landing';
import Orphanage from './pages/Orphanage';
import OrphanagesMap from './pages/OrphanagesMap';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/app" component={OrphanagesMap} />
            <Route exact path="/orphanages/:id" component={Orphanage} />
            <Route exact path="/orphanages/create" component={CreateOrphanage} />
        </BrowserRouter>
    );
}

export default Routes;