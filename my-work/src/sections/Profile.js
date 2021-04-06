import React from 'react';
import { Link } from 'react-router-dom';

import Banner from '../components/Banner'
import CandidateProfile from '../components/CandidateProfile'

import bannerImg from "../img/banner-10.jpg";
import Img from "../img/can-2.png";

import ClientData from '../data/client/Data'

// import bannerImg from "../img/";

export default function App() {
    return (
        <>
            {/* <Banner /> */}
            <Banner bgImg={bannerImg} title="Employer Profilee" />

            <CandidateProfile
                img={Img}
                name={ClientData[0].name}
                designation={ClientData[0].designation}
                post={ClientData[0].jobPost}
                like={ClientData[0].Liked}
                share={ClientData[0].jobShared} />
        </>
    )
}