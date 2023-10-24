import React from 'react';
import '../Devices/Devices.css';

const Devices = () => {
  return (
    <section className="col">
      <div className="heading-wrapper">
        <h3>Devices</h3>
      </div>
      <div className="container">
        <div className="row"> 
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className="device-wrapper">
              <img className="device" src="https://ik.imagekit.io/mtmwll7w3/images/device1.svg?updatedAt=1698121410552" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className="device-wrapper">
              <img className="device" src="https://ik.imagekit.io/mtmwll7w3/images/device2.svg?updatedAt=1698121410552" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className="device-wrapper">
              <img className="device" src="https://ik.imagekit.io/mtmwll7w3/images/device3.svg?updatedAt=1698121410552" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className="device-wrapper">
              <img className="device" src="https://ik.imagekit.io/mtmwll7w3/images/device4.svg?updatedAt=1698121410552" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className="device-wrapper">
              <img className="device" src="https://ik.imagekit.io/mtmwll7w3/images/device5.svg?updatedAt=1698121410552" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className="device-wrapper">
              <img className="device" src="https://ik.imagekit.io/mtmwll7w3/images/device6.svg?updatedAt=1698121410552" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Devices;
