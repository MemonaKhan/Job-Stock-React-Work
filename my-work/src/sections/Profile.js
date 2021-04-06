import React from 'react';
import { Link } from 'react-router-dom';

import Banner from '../components/Banner'
import CandidateProfile from '../components/CandidateProfile'

import bannerImg from "../img/banner-10.jpg";
import Img from "../img/can-2.png";

// import bannerImg from "../img/";

export default function App() {
    return (
        <>
        {/* <Banner /> */}
        <Banner bgImg={bannerImg} title="Employer Profilee" />

        <CandidateProfile img = {Img} name = "Adam Declizer" position = "CEO & Founder" post = {742} like = {570} share = {210}/>
         </>
    )
}