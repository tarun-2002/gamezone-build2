import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './BookForm.css'; // Import the CSS file

const BookForm = () => {
  const form = useRef();
  const [names, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [locality, setLocality] = useState('');
  const [device, setDevice] = useState('');
  const [specifics, setSpecifics] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [upiId, setUpiId] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDurationTime,setDurationTime ] = useState('');



  const handleDeviceChange = (e) => {
    setDevice(e.target.value);
    setSpecifics('');
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleDuration = (e) => {
    setDurationTime(e.target.value);
  };

  const renderSpecificOptions = () => {
    switch (device) {
      case 'PS5':
        return (
          <select
            className="form-input"
            id="specifics"
            value={specifics}
            required
            name='specifics'
            onChange={(e) => setSpecifics(e.target.value)}
          >
            <option value="">Select specifics for PS5</option>
            <option value="Game 1">Game 1</option>
            <option value="Game 2">Game 2</option>
            <option value="Game 3">Game 3</option>
          </select>
        );
      case 'PS4':
        return (
          <select
            className="form-input"
            id="specifics"
            value={specifics}
            required
            name='specifics'
            onChange={(e) => setSpecifics(e.target.value)}
          >
            <option value="">Select specifics for PS4</option>
            <option value="Game 4">Game 4</option>
            <option value="Game 5">Game 5</option>
            <option value="Game 66">Game 6</option>
          </select>
        );
      case 'PC':
        return (
          <select
            className="form-input"
            id="specifics"
            value={specifics}
            required
            name="specifics"
            onChange={(e) => setSpecifics(e.target.value)}
          >
            <option value="">Select specifics for PC</option>
            <option value="Game 7">Game 7</option>
            <option value="Game 8">Game 8</option>
            <option value="Game 9">Game 9</option>
          </select>
        );
      default:
        return null;
    }
  };

  const renderTimeSlots = () => {
    const timeSlots = [
      "12:00 PM",
      "12:30 PM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM",
      "04:30 PM",
      "05:00 PM",
      "05:30 PM",
      "06:00 PM",
      "06:30 PM",
      "07:00 PM"
    ];

    return (
      <select
        className="form-input"
        id="time"
        value={selectedTime}
        required
        name ="time"
        onChange={handleTimeChange}
      >
        <option value="">Select a time slot</option>
        {timeSlots.map((slot) => (
          <option key={slot} value={slot}>
            {slot}
          </option>
        ))}
      </select>
    );
  };

  const duration = () => {
    const durationTime = [
      "1 Hour",
      "2 Hour",
      "3 Hour",
      "4 Hour",
    ];

    return (
      <select
        className="form-input"
        id="duration"
        value={selectedDurationTime}
        required
        name='duration'
        onChange={handleDuration}
      >
        <option value="">Select Duration</option>
        {durationTime.map((dur) => (
          <option key={dur} value={dur}>
            {dur}
          </option>
        ))}
      </select>
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_beulddh', 'template_umimqua', form.current, 'Oj2ojy-iwOEHIcpVj')
      .then((result) => {
          console.log(result.text);
          alert("Booking Successfull")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <form ref={form} className="form-container" onSubmit={handleSubmit}>

      <div className='posi text writing'>
        <input
          className=""
          type="text"
          id="names"
          name='names'
          value={names}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Name:</label>
        <span></span>
      </div>
      <div className='posi text writing'>
        <input
          className=""
          type="email"
          id="email"
          name='email'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <span></span>
      </div>
      <div className='text writing posi'>
        <input inputmode="numeric"
          className=""
          type="text"
          id="age"
          name ="age"
          value={age}
          required
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor="age">Age:</label>
        <span></span>
      </div>
      <div className='text writing posi'>
        <input
          className=""
          type="text"
          id="locality"
          value={locality}
          name="locality"
          required
          onChange={(e) => setLocality(e.target.value)}
        />
<label htmlFor="locality">Locality:</label>
        <span></span>
      </div>
      <div className='text timeslot-writing posi'>
      <label htmlFor="device">Device:</label>
        <select 
          className="form-input"
          id="device"
          value={device}
          required
          name="device"
          onChange={handleDeviceChange}
        >
          <option value="">Select a device</option>
          <option value="PS5">PS5</option>
          <option value="PS4">PS4</option>
          <option value="PC">PC</option>
        </select>
        
        <span></span>
      </div>
      <div className='text timeslot-writing posi'>
        <label htmlFor="specifics">Specifics:</label>
        {renderSpecificOptions()}
      </div>
      <div className='text writing posi'>
        <input
          className=""
          type="text"
          id="aadhar"
          name ="aadhar"
          value={aadhar}
          required
          onChange={(e) => setAadhar(e.target.value)}
        />
        <label htmlFor="aadhar">Aadhar No.:</label>
        <span></span>
      </div>
      <div className="qr-wrapper">
        <div className="qr">
          <img src="https://ik.imagekit.io/mtmwll7w3/images/QRPNG.png?updatedAt=1698121419579" alt="qr-code" />
        </div>
      </div>
      <h1 className="qr-heading">Chandan Tripathi</h1>
      <h1 className="qr-detail">Pay ₹100 to Book. We will refund you with this amount when you visit the Game Zone for your Booking.</h1>
      <div className='instruct'>
        <ul>
          <li><h1>After payment, enter the Transaction ID and UPI ID below for confirmation. You will receive an Email after confirmation. For any queries, contact:</h1></li>
        </ul>
      </div>
      <div className='text writing posi'>
        <input
          className=""
          type="text"
          id="transactionId"
          value={transactionId}
          name="transactionId"
          required
          onChange={(e) => setTransactionId(e.target.value)}
        />
        <label htmlFor="image">UPI Transaction ID</label>
        <span></span>
      </div>
      <div className='text writing posi'>
        <input
          className=""
          type="text"
          id="upiId"
          value={upiId}
          name="upiId"
          required
          onChange={(e) => setUpiId(e.target.value)}
        />
        <label htmlFor="image">UPI ID</label>
        <span></span>
      </div>
      <div className='text writing posi'>
        <input
          className=""
          type="date"
          id="date"
          name ="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <label htmlFor="date">Date:</label>
        <span></span>
      </div>
      <div className='timeslot-writing posi'>
      <label htmlFor="time">Time Slot:</label>
        {renderTimeSlots()}
      </div>
      <div className='timeslot-writing posi'>
      <label htmlFor="time">Duration:</label>
        {duration()}
      </div>
      <button type="submit" className="form-submit book_form_submit">
        Submit
      </button>
    </form>
  );
};

export default BookForm;
