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


const data = {
    links,
    steps,
    testimonials
}


export default data