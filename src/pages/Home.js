import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
      <nav>
        <Link to="/">
            <h4>Home</h4>
        </Link>
        <Link to="/rooms">
              
        </Link>
    </nav>
  )
}

export default Home