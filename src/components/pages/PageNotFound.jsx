import React from 'react';

export default function NoPageFound() {
  const pageNotFoundStyle = {
    width: '900px',
  };

  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '100px',
  };

  return (
    <div style={divStyle}>
      <img src="https://i.postimg.cc/Qd7qKV0t/5067423-middle.png" alt="pageNotFoundPic" style={pageNotFoundStyle} />
    </div>
  );
}
