import React, { memo } from "react";

import { Routes , Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Auth from "../pages/Auth";
import NotFound from "./Common/NotFound";
import Solstice from "../pages/Solstice";
// import Marketing from "../pages/Marketing";
import ProtectedRoute from '../utils/ProtectedRoute';
// import GoogleDrivePicker from "../pages/GoogleDrivePicker.js";

import Confirms from '../pages/Confirms' ;
import ProfileLink from '../pages/ProfileLink' ;
import SOLSLink from '../pages/SOLSLink' ;

import ProductLink from "../pages/ProductLink";
import ProductIntroLink from "../pages/ProductIntroLink";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={< Landing/>} />
            <Route path="/auth/*" element={< Auth/>} />
            <Route element={<ProtectedRoute />}>
                <Route path='/solstice/*' element={<Solstice />} />
                <Route path='/confirm/*' element={<Confirms/>} />
            </Route> 
            <Route path='/sols' element={<SOLSLink />} />
            <Route path='/product-intro' element={<ProductIntroLink />} />
            <Route path='/product-link' element={<ProductLink />} />
            <Route path='/*' element={<ProfileLink />} />
            <Route path="/*" element={<NotFound />}/>
        </Routes>
    );
}

Routing.propTypes = {
    // selectLanding: PropTypes.func.isRequired,
};

export default memo(Routing);
