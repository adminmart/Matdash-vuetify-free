import type { RevenueProjects,BlogCards,DailyActivities } from '@/types/dashboard/index';

import product1 from "@/assets/images/products/dash-prd-1.jpg";
import product2 from "@/assets/images/products/dash-prd-2.jpg";
import product3 from "@/assets/images/products/dash-prd-3.jpg";
import product4 from "@/assets/images/products/dash-prd-4.jpg";

import user1 from '@/assets/images/profile/user-1.jpg';
import user2 from '@/assets/images/profile/user-2.jpg';
import user3 from '@/assets/images/profile/user-3.jpg';
import img1 from '@/assets/images/blog/blog-img1.jpg';
import img2 from '@/assets/images/blog/blog-img2.jpg';
import img3 from '@/assets/images/blog/blog-img3.jpg';

/*--Revenue Projects --*/
const RevenueProjectsData: RevenueProjects[] = [
    {
        img: product1,
        leadname: "Minecraf App",
        designation: "Jason Roy",
        projectname: "73.2%",
        statuscolor: "warning",
        statustext: "Medium",
        money: "$3.5K",
    },
    {
        img: product2,
        leadname: "Web App Project",
        designation: "Mathew Flintoff",
        projectname: "73.2%",
        statuscolor: "secondary",
        statustext: "Very High",
        money: "$24.5K",
    },
    {
        img: product3,
        leadname: "Modernize Dashboard",
        designation: "Anil Kumar",
        projectname: "73.2%",
        statuscolor: "success",
        statustext: "Low",
        money: "$12.8K",
    },
    {
        img: product4,
        leadname: "Dashboard Co",
        designation: "George Cruize",
        projectname: "73.2%",
        statuscolor: "error",
        statustext: "High",
        money: "$2.4K",
    },
];


/*--Blog Cards--*/
const BlogCardData: BlogCards[] = [
    {
        avatar: user1,
        coveravatar: img1,
        read: '2 min Read',
        title: 'As yen tumbles, gadget-loving Japan goes for secondhand iPhones',
        link: '/',
        category: 'Social',
        name: 'Georgeanna Ramero',
        view: '9,125',
        comments: '3',
        time: 'Mon, Dec 19'
    },
    {
        avatar: user2,
        coveravatar: img2,
        read: '2 min Read',
        title: 'Intel loses bid to revive antitrust case against patent foe Fortress',
        link: '/',
        category: 'Gadget',
        name: 'Georgeanna Ramero',
        view: '4,150',
        comments: '38',
        time: 'Sun, Dec 18'
    },
    {
        avatar: user3,
        coveravatar: img3,
        read: '2 min Read',
        title: 'COVID outbreak deepens as more lockdowns loom in China',
        link: '/',
        category: 'Health',
        name: 'Georgeanna Ramero',
        view: '9,480',
        comments: '12',
        time: 'Sat, Dec 17'
    }
];

/*--Daily Activities--*/
const DailyActivitiesData  : DailyActivities[] = [
    {
        title:'09:30 am',
        subtitle:'Payment received from John Doe of $385.90',
        textcolor:'primary',
        boldtext:false,
        line:true,
        link:'',
        url:''
      },
      {
        title:'10:00 am',
        subtitle:'New sale recorded',
        textcolor:'secondary',
        boldtext:true,
        line:true,
        link:'#ML-3467',
        url:''
      },
      {
        title:'12:00 am',
        subtitle:'Payment was made of $64.95 to Michael',
        textcolor:'success',
        boldtext:false,
        line:true,
        link:'',
        url:''
      },
      {
        title:'09:30 am',
        subtitle:'New sale recorded',
        textcolor:'warning',
        boldtext:true,
        line:true,
        link:'#ML-3467',
        url:''
      },
      {
        title:'09:30 am',
        subtitle:'New arrival recorded',
        textcolor:'error',
        boldtext:true,
        line:true,
        link:'#ML-3467',
        url:''
      },
      {
        title:'12:00 am',
        subtitle:'Payment Done',
        textcolor:'success',
        boldtext:false,
        line:false,
        link:'',
        url:''
      },
]



export {RevenueProjectsData,BlogCardData,DailyActivitiesData}