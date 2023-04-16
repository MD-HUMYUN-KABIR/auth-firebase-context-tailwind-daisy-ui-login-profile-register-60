import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../proveider/AuthProvider';

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
  <Link className="btn btn-ghost normal-case text-xl" to='/'> home </Link>
  <Link className="btn btn-ghost normal-case text-xl" to='/orders'> Orders </Link>
  {user && <Link className="btn btn-ghost normal-case text-xl" to='/profile'> Profile </Link>} 
  <Link className="btn btn-ghost normal-case text-xl" to='/login'> LOG IN </Link>
  <Link className="btn btn-ghost normal-case text-xl" to='/register'> Register </Link>
  {user ? <div>{user.email}
<button onClick={handleSignOut} className="btn btn-primary">Sign Out</button>
</div> : <button className="btn btn-primary">  <Link to='/login'> Log In</Link> </button>}
</div>
        </div>
    );
};

export default Header;