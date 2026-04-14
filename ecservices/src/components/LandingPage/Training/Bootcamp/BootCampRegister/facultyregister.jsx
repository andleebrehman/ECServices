import React, { useState } from 'react';
import './facultyregister.css';
import RegisterBackground from '../../../../RegisterBackground';

const FacultyRegister = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    cnic: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    mobile: '',
    qualification: '',
    experience: '',
    designation: '',
    department: '',
    address: '',
    city: '',
    country: '',
    linkedin: '',
    portfolio: '',
    cv: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      cv: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add API call here
    alert('Registration Submitted Successfully!');
  };

  return (
    <div className="faculty-register-page">
      <RegisterBackground />
      <div className="register-container">
        <header className="register-header">
          <h1>Faculty Registration</h1>
          <p>Join our team of diverse and talented professionals.</p>
        </header>

        <form onSubmit={handleSubmit} className="register-form">
          
          {/* Personal Information Section */}
          <section className="form-section">
            <h2 className="section-title">Personal Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName" 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  required 
                  placeholder="e.g. John Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="fatherName">Father's Name</label>
                <input 
                  type="text" 
                  id="fatherName" 
                  name="fatherName" 
                  value={formData.fatherName} 
                  onChange={handleChange} 
                  required 
                  placeholder="e.g. Richard Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="cnic">CNIC</label>
                <input 
                  type="text" 
                  id="cnic" 
                  name="cnic" 
                  value={formData.cnic} 
                  onChange={handleChange} 
                  required 
                  placeholder="00000-0000000-0"
                />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input 
                  type="date" 
                  id="dob" 
                  name="dob" 
                  value={formData.dob} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select 
                  id="gender" 
                  name="gender" 
                  value={formData.gender} 
                  onChange={handleChange} 
                  required
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </section>

          {/* Contact Details Section */}
          <section className="form-section">
            <h2 className="section-title">Contact Details</h2>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="john@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="+92 51 1234567"
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input 
                  type="tel" 
                  id="mobile" 
                  name="mobile" 
                  value={formData.mobile} 
                  onChange={handleChange} 
                  required 
                  placeholder="+92 300 1234567"
                />
              </div>
            </div>
          </section>

          {/* Professional Information Section */}
          <section className="form-section">
            <h2 className="section-title">Professional Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="qualification">Highest Qualification</label>
                <input 
                  type="text" 
                  id="qualification" 
                  name="qualification" 
                  value={formData.qualification} 
                  onChange={handleChange} 
                  required 
                  placeholder="e.g. PhD Computer Science"
                />
              </div>
              <div className="form-group">
                <label htmlFor="experience">Years of Experience</label>
                <input 
                  type="number" 
                  id="experience" 
                  name="experience" 
                  value={formData.experience} 
                  onChange={handleChange} 
                  required 
                  min="0"
                  placeholder="Total years"
                />
              </div>
              <div className="form-group">
                <label htmlFor="designation">Current Designation</label>
                <input 
                  type="text" 
                  id="designation" 
                  name="designation" 
                  value={formData.designation} 
                  onChange={handleChange} 
                  placeholder="e.g. Assistant Professor"
                />
              </div>
              <div className="form-group">
                <label htmlFor="department">Department</label>
                <input 
                  type="text" 
                  id="department" 
                  name="department" 
                  value={formData.department} 
                  onChange={handleChange} 
                  placeholder="e.g. Computer Science"
                />
              </div>
            </div>
          </section>

          {/* Address Section */}
          <section className="form-section">
            <h2 className="section-title">Address</h2>
            <div className="form-grid">
              <div className="form-group full-width">
                <label htmlFor="address">Address Line</label>
                <input 
                  type="text" 
                  id="address" 
                  name="address" 
                  value={formData.address} 
                  onChange={handleChange} 
                  required 
                  placeholder="Street, House/Apt No"
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input 
                  type="text" 
                  id="city" 
                  name="city" 
                  value={formData.city} 
                  onChange={handleChange} 
                  required 
                  placeholder="e.g. Islamabad"
                />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input 
                  type="text" 
                  id="country" 
                  name="country" 
                  value={formData.country} 
                  onChange={handleChange} 
                  required 
                  placeholder="e.g. Pakistan"
                />
              </div>
            </div>
          </section>

          {/* Online Profiles & CV */}
          <section className="form-section">
            <h2 className="section-title">Professional Profile & CV</h2>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="linkedin">LinkedIn Profile</label>
                <input 
                  type="url" 
                  id="linkedin" 
                  name="linkedin" 
                  value={formData.linkedin} 
                  onChange={handleChange} 
                  placeholder="https://linkedin.com/in/..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="portfolio">Portfolio / Website</label>
                <input 
                  type="url" 
                  id="portfolio" 
                  name="portfolio" 
                  value={formData.portfolio} 
                  onChange={handleChange} 
                  placeholder="https://..."
                />
              </div>
              <div className="form-group full-width file-upload-group">
                <label htmlFor="cv">Upload CV / Resume</label>
                <div className="file-input-wrapper">
                  <input 
                    type="file" 
                    id="cv" 
                    name="cv" 
                    accept=".pdf,.doc,.docx" 
                    onChange={handleFileChange} 
                    required 
                  />
                  <span className="file-cta">
                    {formData.cv ? formData.cv.name : 'Choose a file or drag it here'}
                  </span>
                </div>
                <small className="hint">Accepted formats: PDF, DOC, DOCX. Max size: 5MB</small>
              </div>
            </div>
          </section>

          <div className="form-actions">
            <button type="submit" className="submit-btn-register">Submit Registration</button>
            <button type="button" className="cancel-btn-register" onClick={() => window.history.back()}>Back</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FacultyRegister;
