import React from 'react';
import { useNavigate } from 'react-router-dom';
import './errorPage.scss';

const ErrorPage = (): JSX.Element => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="error-page">
      <h1>Oops! Something went wrong</h1>
      <p>We can't find the page you're looking for.</p>
      <button onClick={handleBackToHome} className="error-page__button">
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
