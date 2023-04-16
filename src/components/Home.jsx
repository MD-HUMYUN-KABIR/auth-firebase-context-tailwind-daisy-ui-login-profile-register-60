import React, { useContext } from 'react';
import { AuthContext } from '../proveider/AuthProvider';

const Home = () => {
    const user = useContext(AuthContext);
    return (
        <div>
          { user && <h2>{user.displayName}</h2>}
        </div>
    );
};

export default Home;