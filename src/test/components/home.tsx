import React from 'react';
import BaseView from '../baseview/base-view';
import {HomeCard} from './home-card';
import {ourAim} from '../../data/our-aim.data.json';

export const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <BaseView
        children={
          <div className="home-container">
            <div
              className="banner banner--green"
              style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/loader.gif)`}}
            >
              <div className="banner__content">
                <img src={`${process.env.PUBLIC_URL}/assets/images/computer-img.svg`} alt="" />

                <div className="banner-content__text-content">
                  <h2>Welcome to React UI Library</h2>
                  <p>A sub-ui-library of elegant UI Library</p>

                  <a
                    href="https://github.com/Emmybest1/react-ui-bucket"
                    className="get-started-btn get-started-btn--curved-border"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="banner-overlay banner-overlay--lightgreen"></div>

            <section className="home-card-wraper">
              {ourAim.map((aim) => (
                <HomeCard key={aim.id} {...aim} />
              ))}
            </section>
          </div>
        }
      />

      <footer className="home-footer">
        <p>Made with ❤️ by &copy;CreativeDevelopals</p> <time>{new Date().getFullYear()}</time>
      </footer>
    </>
  );
};

export default Home;
