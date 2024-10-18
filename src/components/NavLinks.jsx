import React from 'react';
import { links } from '../utils/Links';
import { Link } from 'react-router-dom';

const NavLinks = () => {
    return (<div className='lg:flex gap-x-1'>
        {links.map((item)=>{
            const {text, id, url} = item
            return<li key={id} >
               
                <Link className='capitalize' to={url}>{text}</Link>
            </li>
        })}
    </div>
    );
}

export default NavLinks;
