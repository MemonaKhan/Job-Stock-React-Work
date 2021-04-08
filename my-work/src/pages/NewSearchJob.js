import React from 'react';
import {Link} from 'react-router-dom';
import TitleBanner from '../components/TitleBanner'
import BottomSearch from '../components/BottomSearch'
import BrowseJobCategory from "../sections/BrowseJobCat"

import bannerImg from "../img/banner-10.jpg";

export default function NewSearchJob() {
  return (
    <>
            <TitleBanner img={bannerImg} title1="Work There." title2=" Find the dream job" jobs={704} days={7}/>
			{/* <!-- bottom form section start --> */}
            <BottomSearch />
			{/* <!-- Bottom Search Form Section End --> */}
			
			{/* <!-- ========== Begin: Brows job Category ===============  --> */}
            <BrowseJobCategory />
			
			{/* <!-- ========== Begin: Brows job Category End ===============  --> */}
			
    </>
  )
}