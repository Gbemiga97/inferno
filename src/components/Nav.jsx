import { Link } from 'react-scroll'
import { data } from '../utils'

const Nav = ({showNav}) => {
  return (
    <nav>
          <ul className={`${showNav ? 'h-[340px] p-6' : 'h-0 p-0'} fixed bg-white w-full overflow-hidden border-t top-[90px] left-0 ring-0 flex flex-col gap-4
                   lg:static lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all`}>
                {
                    data.links.map(({name, path}, i) => (
                        <li key={i}>
                            <Link to={path} className='cursor-pointer'>
                            {name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
    </nav>
  )
}

export default Nav