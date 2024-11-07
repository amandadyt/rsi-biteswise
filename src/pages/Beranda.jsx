import React from "react";
import MainPageLayout from "../components/Layout/MainPageLayout";
import Deskripsi from '../components/DestinationPage/Deskripsi'
import OurFeatures from '../components/DestinationPage/OurFeatures'

const LandingPage = () => {
    return(
        <MainPageLayout>
            <Deskripsi/>
            <OurFeatures/>
        </MainPageLayout>
    )
}

export default LandingPage;