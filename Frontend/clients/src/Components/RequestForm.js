// src/components/RequestForm.js
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import './RequestForm.css';

const RequestFormContainer = styled.div`
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;

  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 600px) {
    padding: 5px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 600px) {
    padding: 5px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 600px) {
    padding: 8px 16px;
  }
`;

const RequestForm = ({ onAddRequest }) => {
  const [residentName, setResidentName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/requests', {
        residentName,
        content,
      });

      onAddRequest(response.data);
      setResidentName('');
      setContent('');
    } catch (error) {
      console.error('Error creating request:', error);
    }
  };

  return (
    <div className="request-form-container">
      <h2>Create a Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="residentName">Resident Name:</label>
          <input
            id="residentName"
            type="text"
            value={residentName}
            onChange={(e) => setResidentName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default RequestForm;
