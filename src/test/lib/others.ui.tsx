import React, {useState} from 'react';
import Button from '../../lib/components/partials/button/button.component';
import {Accordion} from '../../react-ui-bucket';
import {_localStorage} from '../../react-ui-bucket';

const STATIC_ACCORDION_CHILDREN: React.ReactNode = (
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
  </ul>
);

export const Others: React.FC = (): JSX.Element => {
  const [randomText] = useState<React.ReactNode>(() => _localStorage.get('randomText') ?? null);
  const randomFruit = ['🍏', '🍊', '🍌', '🍍', '🍉'];

  return (
    <main>
      <h1>Other Views Test</h1>
      <div className="other-section-wrapper">
        <section>
          <h3>LocalStorage Test Below</h3>
          <>{randomText}</>
          <div>
            <Button
              buttonText="Save"
              className="success"
              onClick={() => {
                _localStorage.set(
                  'randomText',
                  `${
                    randomFruit[Math.floor(Math.random() * 5)]
                  } Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, rerum tenetur delectus quisquam aliquid laboriosam tempore esse pariatur incidunt enim quas eum sit architecto totam, nam atque molestias facere aspernatur.`
                );
                window.location.reload();
              }}
            />
            <Button
              buttonText="Clear"
              className="danger"
              onClick={() => {
                window.localStorage.removeItem('randomText');
                window.location.reload();
              }}
            />
          </div>
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
