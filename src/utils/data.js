import {FiCompass, FiTool } from 'react-icons/fi'
import {AiFillTool,   } from 'react-icons/ai'
import images from './images'



const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: 'about'
    },
    {
        name: 'Testimonials',
        path: 'testimonials'
    },
    {
        name: 'News',
        path: 'news'
    },
    {
        name: 'Contact',
        path: 'contact'
    },
]

const work = [
    {
        img: images.Work2,
        title: 'ModernKitchen',
        subTitle: 'Decor/Architecture'
    },
    {
        img: images.Work1,
        title: 'ModernKitchen',
        subTitle: 'Decor/Architecture'
    },
    {
        img: images.Work4,
        title: 'ModernKitchen',
        subTitle: 'Decor/Architecture'
    },
    {
        img: images.Work3,
        title: 'ModernKitchen',
        subTitle: 'Decor/Architecture'
    },
]


const steps = [
    {
        icon: <FiCompass />,
        title: 'Project Planning',
        desc: 'There are many variations of the passages of lorem Ipsum from available, majority.'
    },
    {
        icon: <FiTool />,
        title: 'Gaining Materials',
        desc: 'There are many variations of the passages of lorem Ipsum from available, majority.'
    },
    {
        icon: <AiFillTool />,
        title: 'Project Execution',
        desc: 'There are many variations of the passages of lorem Ipsum from available, majority.'
    },
]


const testimonials = [
    {
        name: 'Nattasha Mith',
        location: 'Greenville, USA',
        img: images.Testimonial1
    },
    {
        name: 'Jessica White',
        location: 'Oak Ridge, USA',
        img: images.Testimonial2
    },
    {
        name: 'Mike Davis',
        location: 'Berlin, Germany',
        img: images.Testimonial3
    },
    {
        name: 'Olivia Wilson',
        location: 'Blue Ridge, France',
        img: images.Testimonial4
    },
]


const stats = [
    {
        start: 0,
        end: 12,
        statsInfo: 'Years Of experience',
        border: 'border-r'
    },
    {
        start: 0,
        end: 85,
        statsInfo: 'Projects completed',
        border: 'border-r'
    },
    {
        start: 0,
        end: 15,
        statsInfo: 'Active Projects',
        border: 'border-r'
    },
    {
        start: 0,
        end: 95,
        statsInfo: 'Happy Customers',
        border: 'border-none'
    },
]


const news = [
    {
        img: images.News1,
        title: 'Let’s Get Solution For Building Construction Work',
        date: '22 June,2024'
    },
    {
        img: images.News2,
        title: 'Low Cost Latest Invented Interior Designing Ideas.',
        date: '24 June,2024'
    },
    {
        img: images.News3,
        title: 'Best For Any Office & Business Interior Solution',
        date: '28 June,2024'
    }
]


const data = {
    links,
    steps,
    testimonials,
    work,
    stats,
    news
}


export default data