import React, { useContext } from 'react';
import { AuthContext } from '../proveider/AuthProvider';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Register = () => {
    const {user, createUser} = useContext(AuthContext);
    console.log(user)

    // ----------------------
    const handleRegister = (event) => {
        event.preventDefault(); //reload hobe na
        // setSuccess('');
        // setError('');
        const form = event.target;
        const password = form.password.value;
        const name = form.name.value;
        const email = form.email.value;

        createUser (email, password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser)
          form.reset();

          sendVerificationEmail(loggedUser);
          updateUserData(loggedUser, name);
        
        })
        .catch(error => {
          console.log(error)
        })
    }
    // -----------------------------
    const sendVerificationEmail = (user) =>{
      sendEmailVerification(user)
      .then(result => {
          // console.log(result);
          alert('verify your email')
      })

  }
  // ----------------------------
  const updateUserData = (user, name) => {
    updateProfile(user , {
        displayName:name
    })
    .then(()=>{
        console.log('user name updated')
    })
    .catch(error => {
        // console.log(error.message)
    })
}
    return (
        <div>
         <div  className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">register now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <span>Already Have you an account ?   <Link to='/login' className="label-text-alt link link-hover">Log In</Link> </span>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">Register</button>
        </div>
      </form> 
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;