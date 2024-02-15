import {FiCompass, FiTool } from 'react-icons/fi'
import {AiFillTool,   } from 'react-icons/ai'



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



const data = {
    links,
    steps
}


export default data