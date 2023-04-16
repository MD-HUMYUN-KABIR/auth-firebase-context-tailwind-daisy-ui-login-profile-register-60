import React, { useContext, useRef } from 'react';
import { AuthContext } from '../proveider/AuthProvider';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const emailRef = useRef()
  const {signIn , sendPassword , google , gitHub} = useContext(AuthContext)
    const handleLogIn = (event) =>{
        event.preventDefault(); //reload hobe na
        // setSuccess('');
        // setError('');
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;

        signIn(email, password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser)
          form.reset();
          if (!loggedUser.emailVerified) {
            alert('at first verify your email')
            return;
        }
        })
        .catch(error => {
          console.log(error.message)
        })
    }
    // -----------------------------
    const handlePassword = () => {
      const email = emailRef.current.value;
      if (!email) {
          alert('at first input email')
          return;
      }
      sendPassword(email)
          .then(() => {
              alert('please check your email')
          })
          .catch(error => {
              // console.log(error)
              setError(error.message)
          })
  }
//-------------------------
const handleGoogle = () => {
  google()
}
// ------------------------
const handleGitHub = () => {
  gitHub()
}
// ------------------------
    return (
        <div>
          <div  className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input ref={emailRef} type="email" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Login</button>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleGoogle} className="btn btn-primary">Login with google</button>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleGitHub} className="btn btn-primary">Login with GitHub</button>
        </div>
        <label className="label">
            <span>Are you new ?   <Link to='/register' className="label-text-alt link link-hover">Register</Link> </span>
          </label>
      <label className="label label-text-alt link link-hover" onClick={handlePassword}>
          Forgotten password ?
          </label>
      </form>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default LogIn;