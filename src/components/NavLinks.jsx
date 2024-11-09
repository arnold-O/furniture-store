import React from 'react';
import { links } from '../utils/Links';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavLinks = () => {
    const user = useSelector((state)=> state.userState.user)
    return (<div className='lg:flex gap-x-1'>
        {links.map((item)=>{
            const {text, id, url} = item
            if((url ==='checkout' || url === 'orders') && user === null) return null
            return<li key={id} >
               
                <Link className='capitalize' to={url}>{text}</Link>
            </li>
        })}
    </div>
    );
}

export default NavLinks;
