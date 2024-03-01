import React from 'react';
import NavBar from './ui/NavBar';

export default function App({ children, user, initState }) {
  return (
    <>
      <NavBar initState={initState} user={user} />
      <div className="divApp">
        {children}
      </div>
    </>
  );
}
