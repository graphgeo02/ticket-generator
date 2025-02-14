import React, { useState, useEffect } from 'react';
import '../styles/attendee.css';
import '../styles/font.css';
import { useNavigate } from 'react-router-dom';

const AttendeeDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    avatarUrl: '',
    projectDetails: ''
  });
  const [errors, setErrors] = useState({});
  const [isValidImage, setIsValidImage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem('attendeeDetails');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('attendeeDetails', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Check if the Avatar URL is a valid image URL
    if (name === 'avatarUrl') {
      validateImage(value);
    }
  };

  const validateImage = (url) => {
    const img = new Image();
    img.onload = () => setIsValidImage(true);
    img.onerror = () => setIsValidImage(false);
    img.src = url;
  };

  const validate = () => {
    let validationErrors = {};
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = 'Invalid email format';
    if (!formData.avatarUrl) validationErrors.avatarUrl = 'Avatar URL is required';
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      navigate('/book-ticketed', { state: formData });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="main-container">
      <div className="card-2">
        <div className="inline">
          <h1>Attendee Details</h1>
          <p className="step">Step <span className="step"><strong className="levels">2</strong>/3</span></p>
        </div>
        <div className="progress-bar2">
          <div className="progress-bar-fill2"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="feature">
            <div className="sub-1">
              <p>Upload Profile Picture (Paste Image URL)</p>
              <input 
                type="text" 
                name="avatarUrl" 
                placeholder="https://example.com/avatar.jpg" 
                value={formData.avatarUrl} 
                onChange={handleChange} 
                aria-label="Avatar URL"
                id='url'
              />
              {errors.avatarUrl && <p className="error" style={{color: 'red'}}>{errors.avatarUrl}</p>}

              {isValidImage && (
                <div className="image-preview">
                  <p>Image Preview:</p>
                  <img src={formData.avatarUrl} alt="Avatar Preview" className="avatar-preview" 
                   onError={(e) => { 
                    e.target.src = '/path/to/default-avatar.png'; 
                  }}
                  />
                </div>
              )}
            </div>

            <div className="divider"></div>
            <label>Enter your name</label><br />
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              aria-label="Full Name"
              id='name'
              placeholder='First name only'
            />
            {errors.name && <p className="error">{errors.name}</p>}
            <label>Enter your email*</label><br />
            <input 
              type="email" 
              name="email" 
              placeholder="hello@gmail.com" 
              value={formData.email} 
              onChange={handleChange} 
              aria-label="Email"
              id='email'
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <label>About Project*</label><br />
            <textarea 
              name="projectDetails" 
              placeholder="Text area..." 
              value={formData.projectDetails} 
              onChange={handleChange} 
              aria-label="Project Details"
              id='textarea'
            ></textarea>
            <div className="attendee-button">
              <button type="button" className="back" onClick={() => navigate('/events')}>Back</button>
              <button type="submit" className="free-ticket">Get My Free Ticket</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AttendeeDetails;
