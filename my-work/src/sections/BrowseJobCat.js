import React from 'react';
import { Link } from 'react-router-dom';

import bannerImg from "../img/banner-10.jpg";

import JobArticle from "../components/JobArticle"
import SideWidget from "../components/SideWidget"
import Jobs from "../data/client/JobsPosted"

import img from "../img/com-2.jpg";

const Data = 
    {
        compensation: [
            {
                'name': '$10,000 - $15,000',
                'count': 102
            },
            {
                'name': '$10,000 - $15,000',
                'count': 102
            },
            {
                'name': '$10,000 - $15,000',
                'count': 102
            },
            {
                'name': '$10,000 - $15,000',
                'count': 102
            }
        ],
        location: [
            {
                'name': 'Karachi',
                'count': 102
            },
            {
                'name': 'Karachi',
                'count': 102
            },
            {
                'name': 'Karachi',
                'count': 102
            },
            {
                'name': 'Karachi',
                'count': 102
            }
        ],
        designation: [
            {
                'name': 'Web Designer',
                'count': 102
            },
            {
                'name': 'Web Designer',
                'count': 102
            },
            {
                'name': 'Web Designer',
                'count': 102
            },
            {
                'name': 'Web Designer',
                'count': 102
            }
        ],
        job_type: [
            {
                'name': 'Full Time',
                'count': 102
            },
            {
                'name': 'Part Time',
                'count': 102
            },
            {
                'name': 'Internship',
                'count': 102
            },
            {
                'name': 'Freelancer',
                'count': 102
            }
        ]
    }

export default function BrowseJobCategory() {
    return (
        <>
            {/* <!-- ========== Begin: Brows job Category ===============  --> */}
            <section class="brows-job-category gray-bg">
                <div class="container">
                    <div class="col-md-9 col-sm-12">
                        <div class="full-card">

                            <div class="card-header">
                                <div class="row mrg-0">
                                    <div class="col-md-4 col-sm-4">
                                        <select class="selectpicker form-control" multiple title="Job Type">
                                            {
                                                Data.job_type.map((val)=>{
                                                    <option>{val.name}</option>
                                                })
                                            }
                                            <option>Full Time</option>
                                            <option>Part Time</option>
                                            <option>Freelancer</option>
                                            <option>Internship</option>
                                        </select>
                                    </div>
                                    <div class="col-md-4 col-sm-4 small-padd">
                                        <select class="selectpicker form-control" multiple title="All Categories">
                                            <option>Teacher Jobs</option>
                                            <option>Consultant Jobs</option>
                                            <option>IT Jobs</option>
                                            <option>Sales Jobs</option>
                                            <option>Graphic Designer Jobs</option>
                                        </select>
                                    </div>
                                    <div class="col-md-4 col-sm-4">
                                        <ol class="breadcrumb pull-right">
                                            <li><a href="#"><i class="fa fa-home"></i></a></li>
                                            <li><a href="#">Full Time</a></li>
                                            <li class="active">IT Jobs</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>

                            <div class="card-body">

                                <JobArticle
                                    img={img}
                                    jobTitle={Jobs[0].jobtitle}
                                    premium={Jobs[0].premium}
                                    jobCompany={Jobs[0].companyDetail.name}
                                    loc={Jobs[0].companyDetail.loc}
                                    apply={Jobs[0].applied}
                                />
                                <JobArticle
                                    img={img}
                                    jobTitle={Jobs[0].jobtitle}
                                    premium={Jobs[0].premium}
                                    jobCompany={Jobs[0].companyDetail.name}
                                    loc={Jobs[0].companyDetail.loc}
                                    apply={Jobs[0].applied}
                                />
                                <JobArticle
                                    img={img}
                                    jobTitle={Jobs[0].jobtitle}
                                    premium={Jobs[0].premium}
                                    jobCompany={Jobs[0].companyDetail.name}
                                    loc={Jobs[0].companyDetail.loc}
                                    apply={Jobs[0].applied}
                                />
                                <JobArticle
                                    img={img}
                                    jobTitle={Jobs[0].jobtitle}
                                    premium={Jobs[0].premium}
                                    jobCompany={Jobs[0].companyDetail.name}
                                    loc={Jobs[0].companyDetail.loc}
                                    apply={Jobs[0].applied}
                                />
                                <JobArticle
                                    img={img}
                                    jobTitle={Jobs[0].jobtitle}
                                    premium={Jobs[0].premium}
                                    jobCompany={Jobs[0].companyDetail.name}
                                    loc={Jobs[0].companyDetail.loc}
                                    apply={Jobs[0].applied}
                                />
                            </div>
                        </div>

                        <div class="row">
                            <ul class="pagination">
                                <li><a href="#">&laquo;</a></li>
                                <li class="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#"><i class="fa fa-ellipsis-h"></i></a></li>
                                <li><a href="#">&raquo;</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- Sidebar Start --> */}
                    <div class="col-md-3 col-sm-12">
                        <div class="sidebar right-sidebar">

                            <div class="side-widget">
                                <h2 class="side-widget-title">Job Alert</h2>
                                <div class="job-alert">
                                    <div class="widget-text">
                                        <form>
                                            <input type="text" name="keyword" class="form-control" placeholder="Job Keyword" />
                                            <input type="email" name="email" class="form-control" placeholder="Email ID" />
                                            <button type="submit" class="btn btn-alrt">Add Alert</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div class="side-widget">
                                <h2 class="side-widget-title">Advertisment</h2>
                                <div class="widget-text padd-0">
                                    <div class="ad-banner">
                                        <img src="http://via.placeholder.com/320x285" class="img-responsive" alt="" />
                                    </div>
                                </div>
                            </div>

                            <SideWidget 
                            idname="compensation" 
                            title={"Compensation"}
                            data={Data.compensation}
                            />
                            <SideWidget 
                            idname="designation" 
                            title={"Designation"} 
                            data={Data.designation}
                            />
                            <SideWidget 
                            idname="location" 
                            title={"Location"} 
                            data={Data.location}
                            />
                            <SideWidget 
                            idname="job-type" 
                            title={"Job Type"} 
                            data={Data.job_type}
                            />

                            {/* <div class="side-widget">
                                <h2 class="side-widget-title"><a href="#designation" data-toggle="collapse">Designation<i class="pull-right fa fa-angle-double-down" aria-hidden="true"></i></a></h2>
                                <div class="widget-text padd-0 collapse" id="designation">
                                    <ul>
                                        <li>
                                            <span class="custom-checkbox">
                                                <input type="checkbox" id="1" />
                                                <label for="1"></label>
                                            </span>
											Web Designer
											<span class="pull-right">102</span>
                                        </li>

                                        <li>
                                            <span class="custom-checkbox">
                                                <input type="checkbox" id="2" />
                                                <label for="2"></label>
                                            </span>
											Php Developer
											<span class="pull-right">78</span>
                                        </li>

                                        <li>
                                            <span class="custom-checkbox">
                                                <input type="checkbox" id="3" />
                                                <label for="3"></label>
                                            </span>
											Project Manager
											<span class="pull-right">12</span>
                                        </li>

                                        <li>
                                            <span class="custom-checkbox">
                                                <input type="checkbox" id="4" />
                                                <label for="4"></label>
                                            </span>
											Human Resource
											<span class="pull-right">85</span>
                                        </li>

                                        <li>
                                            <span class="custom-checkbox">
                                                <input type="checkbox" id="5" />
                                                <label for="5"></label>
                                            </span>
											CMS Developer
											<span class="pull-right">307</span>
                                        </li>

                                        <li>
                                            <span class="custom-checkbox">
                                                <input type="checkbox" id="6" />
                                                <label for="6"></label>
                                            </span>
											App Developer
											<span class="pull-right">256</span>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}

                            {/* <div class="side-widget">
                                <h2 class="side-widget-title"><a href="#job-location" data-toggle="collapse">Location<i class="pull-right fa fa-angle-double-down" aria-hidden="true"></i></a></h2>
                                <div class="widget-text padd-0 collapse" id="job-location">
                                    <ul>
                                        <li>
                                            <span class="custom-checkbox">
                                                <input type="checkbox" id="1" />
                                                <label for="1"></label>
                                            </span>
											Mohali
											<span class="pull-right">102</span>
                                        </li>

                                        <li>
                                            <span class="custom-checkbox">
                                                <input type="checkbox" id="2" />
                                                <label for="2"></label>
                                            </span>
											Chandigarh
											<span class="pull-right">78</span>
                                        </li>

                                        <li>
                                            <span class="custom-checkbox">
                                                <input type="checkbox" id="3" />
                                                <label for="3"></label>
                                            </span>
											Chennai
											<span class="pull-right">12</span>
                                        </li>

                                        <li>
                                            <span class="custom-checkbox">
                                                <input type="checkbox" id="4" />
                                                <label for="4"></label>
                                            </span>
											Delhi
											<span class="pull-right">85</span>
                                        </li>

                                        <li>
                                            <span class="custom-checkbox">
                                                <input type="checkbox" id="5" />
                                                <label for="5"></label>
                                            </span>
											Noida
											<span class="pull-right">307</span>
                                        </li>

                                        <li>
                                            <span class="custom-checkbox">
                                                <input type="checkbox" id="6" />
                                                <label for="6"></label>
                                            </span>
											Chhatisgarh
											<span class="pull-right">256</span>
                                        </li>

                                    </ul>
                                </div>
                            </div> */}

                            {/* <div class="side-widget">
                                <h2 class="side-widget-title"><a href="#job-type" data-toggle="collapse">Job type<i class="pull-right fa fa-angle-double-down" aria-hidden="true"></i></a></h2>
                                <div class="widget-text padd-0 collapse" id="job-type">
                                    <ul>
                                        <li>
                                            <span class="custom-checkbox">
                                                <input type="checkbox" id="1" />
                                                <label for="1"></label>
                                            </span>
											Full Time
											<span class="pull-right">102</span>
                                        </li>
                                        <li>
                                            <span class="custom-checkbox">
                                                <input type="checkbox" id="2" />
                                                <label for="2"></label>
                                            </span>
											Part Time
											<span class="pull-right">78</span>
                                        </li>
                                        <li>
                                            <span class="custom-checkbox">
                                                <input type="checkbox" id="3" />
                                                <label for="3"></label>
                                            </span>
											Internship
											<span class="pull-right">12</span>
                                        </li>
                                        <li>
                                            <span class="custom-checkbox">
                                                <input type="checkbox" id="4" />
                                                <label for="4"></label>
                                            </span>
											Freelancer
											<span class="pull-right">85</span>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}

                        </div>
                    </div>
                    {/* <!-- Sidebar End --> */}

                </div>
            </section>
            {/* <!-- ========== Begin: Brows job Category End ===============  --> */}

        </>
    )
}