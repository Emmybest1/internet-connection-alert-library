import React from 'react';

type THomeProps = {
  heading: string;
  body: string;
  imgSrc: string;
};

export const HomeCard: React.FC<THomeProps> = ({heading, body, imgSrc}): JSX.Element => {
  return (
    <article className="home-card-article">
      <img src={`${process.env.PUBLIC_URL}/assets/images/${imgSrc}`} alt="" />
      <h2>{heading}</h2>
      <p>{body}</p>
    </article>
  );
};

export default HomeCard;
// images reference: https://www.flaticon.com/
