import React from 'react';
import './Title.scss';

interface TitleWithLinesProps {
  title: string;
}

const Title: React.FC<TitleWithLinesProps> = ({ title }) => {
  return (
    <div className="title-container">
      <div className="line"></div>
      <h1 className="title-related">{title}</h1>
      <div className="line"></div>
    </div>
  );
};

export default Title;
