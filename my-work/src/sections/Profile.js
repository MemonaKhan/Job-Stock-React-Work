import React from 'react';
import { Link } from 'react-router-dom';

import Banner from '../components/Banner'
import CandidateProfile from '../components/CandidateProfile'

import bannerImg from "../img/banner-10.jpg";
import Img from "../img/can-2.png";

import ClientData from '../data/client/Data'

// import bannerImg from "../img/";

export default function App(props) {
    return (
        <>
            {/* <Banner /> */}
            <Banner bgImg={props.bgImg} title={props.title} />

            <CandidateProfile
                img={props.img}
                name={props.name}
                designation={props.designation}
                post={props.post}
                like={props.like}
                share={props.share} />
        </>
    )
}