import React from 'react';
import '../Loader/Loader.css'; // CSS file for styling the loader

const Loader = () => {
  return (
    <>
        <div className='loader__logo'>
          <img src="https://ik.imagekit.io/mtmwll7w3/images/logoGBfin.png?updatedAt=1698121417788" alt="Logo" />
        </div>
    <div className="loader">
      <div className="loader__spinner" style={{marginTop: "235px"}}>
      </div>
    </div>

        </>
  );
};

export default Loader;
