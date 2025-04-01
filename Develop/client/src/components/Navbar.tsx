import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('id_token');
    setIsLoggedIn(!!token); 
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('id_token');
    setIsLoggedIn(false); 
  };

  return (
    <div className='nav'>
      <div className='nav-title'>
        <Link to='/'>Krazy Kanban Board</Link>
      </div>
      <ul>
        {!isLoggedIn ? (
          <li className='nav-item'>
            <Link to='/login'>
              <button type='button'>Login</button>
            </Link>
          </li>
        ) : (
          <li className='nav-item'>
            <button type='button' onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;