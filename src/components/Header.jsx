import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../proveider/AuthProvider';
import ActiveLink from './ActiveLink';

const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  // -----------------
  const handleSignOut = () => {
    logOut()
    .then(result => {

    })
    .cath(error => {
      console.log(error.message)
    })
  }
    return (
        <div>
<div className="navbar bg-primary text-primary-content">
  <a className="btn btn-ghost normal-case text-xl">firebase auth</a>
  <li className="btn btn-ghost normal-case text-xl"> <ActiveLink  to='/'> home </ActiveLink> </li> 
  <li className="btn btn-ghost normal-case text-xl" > <ActiveLink to='/orders'> Orders </ActiveLink> </li> 
 <li className="btn btn-ghost normal-case text-xl"> {user && <ActiveLink className="btn btn-ghost normal-case text-xl" to='/profile'> Profile </ActiveLink>} </li>  
 <li className="btn btn-ghost normal-case text-xl" >  <ActiveLink to='/login'> Log In </ActiveLink> </li>
 <li  className="btn btn-ghost normal-case text-xl">  <ActiveLink to='/register'> Register </ActiveLink> </li>
 
  {user ? <div>{user.email}
<button onClick={handleSignOut} className="btn btn-primary">Sign Out</button>
</div> : <button className="btn btn-primary">  <Link to='/login'> Log In</Link> </button>}
</div>
        </div>
    );
};

export default Header;