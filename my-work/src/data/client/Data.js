import JobPosted from "./JobsPosted"



const ClientData = [
  {
    name: "Adam Declizer",
    designation: "CEO & Founder",
    profile: "",
    coverPhoto: "",
    email: "youremail@gmail.com",
    location: {
      city: "Mohali",
      zip: 71000,
      state: "Punjab",
      country: "India",
      Address: "SCO 210, Neez Plaza",
    },
    password: "",
    phone: "+91 123 456 7854",
    fax: "(622) 123 456",
    organization: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    // rating:"",
    // verified:true,
    //skills:[],
    jobPost: 200,
    jobShared: 450,
    Liked: 189,
    socialLinks: [
      {
        web: "",
        blog: "",
        portfolio: "",
        facebook: "",
        linkdin: "",
        pintererst: "",
        instagram: "",
        twitter: ""
      }
    ],
    messages: [{}],
    online: true,
    friends: [{
      name: "Charles Hopman",
      designation: "Web designer",
      profile: "",
      email: "friendemail@gmail.com",
      status: "Pending",
      description: "Our analysis team at Megriosft use end to end innovation proces",


    },
    {
      name: "Ethan Marion",
      designation: "IOS designer",
      profile: "",
      email: "friend2email@gmail.com",
      status: "Available",
      description: "Our analysis team at Megriosft use end to end innovation proces",


    }],
    jobs: JobPosted,
    // reviews:[
    //   {
    //     clientName:"",
    //     tagline:"",
    //     time:"",
    //     message:""
    //   }
    // ]
  }
]
export default ClientData;