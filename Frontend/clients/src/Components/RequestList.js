// src/components/RequestList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RequestForm from './RequestForm';
import './RequestList.css';

/****Responsiveness of RequestList  *****/
const RequestListContainer = styled.div`
  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const RequestItem = styled.li`
  background-color: #f9f9f9;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 10px;
  list-style: none;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const ResidentName = styled.p`
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const RequestContent = styled.p`
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Likes = styled.p`
  color: #007bff;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const LikeButton = styled.button`
  padding: 5px 10px;
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
    padding: 5px;
    font-size: 0.8rem;
  }
`;

const RequestList = () => {
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    try {
      const response = await axios.get('http://localhost:5000/requests');
      setRequests(response.data);
    } catch (error) {
      console.error('Error fetching requests:', error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleLike = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/requests/${id}/like`);
      fetchRequests(); // Refresh the list of requests after liking
    } catch (error) {
      console.error('Error liking request:', error);
    }
  };

  return (
    <div className="request-list-container">
      <RequestForm onAddRequest={(newRequest) => setRequests([newRequest, ...requests])} />
      <ul className="request-list">
        {requests.map((request) => (
          <li key={request._id} className="request-item">
            <p className="resident-name">{request.residentName}</p>
            <p className="request-content">{request.content}</p>
            <p className="likes">Likes: {request.likes}</p>
            <button className="like-button" onClick={() => handleLike(request._id)}>
              Like
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RequestList;
