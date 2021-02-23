import React, {useState} from 'react';
import {useLocalstorage} from '../../react-ui-bucket';
import {Accordion} from '../../react-ui-bucket';

const STATIC_ACCORDION_CHILDREN: React.ReactNode = (
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
  </ul>
);

export const Others: React.FC = (): JSX.Element => {
  const [randomText] = useState<React.ReactNode>(() => window.localStorage.getItem('randomText') ?? null);

  useLocalstorage({
    key: 'randomText',
    value:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, rerum tenetur delectus quisquam aliquid laboriosam tempore esse pariatur incidunt enim quas eum sit architecto totam, nam atque molestias facere aspernatur.',
  });
  return (
    <main>
      <h1>Other Views Test</h1>
      <div className="other-section-wrapper">
        <section>
          <h3>LocalStorage Test Below</h3>
          <>{randomText}</>
        </section>

        <section>
          <h3>Accordion Test Below</h3>
          {<Accordion accordionTitle="Random text" children={STATIC_ACCORDION_CHILDREN} />}
        </section>
      </div>
    </main>
  );
};

export default Others;
