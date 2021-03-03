import React, {useState} from 'react';
import TestViews from '../baseview/base-view';
import Button from '../../libraries/components/partials/button/button.component';
import {Accordion} from '../../react-ui-bucket';
import {_localStorage} from '../../react-ui-bucket';
import Combobox from '../../libraries/components/packages/combobox/combobox.lib';

const STATIC_ACCORDION_CHILDREN: React.ReactNode = (
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
  </ul>
);

const PROGRAMMING_LANGUAGES = [
  {
    id: 'xx001',
    name: 'javascript',
    value: 'JavaScript',
  },
  {
    id: 'xx002',
    name: 'java',
    value: 'Java',
  },
  {
    id: 'xx003',
    name: 'python',
    value: 'Python',
  },
];

export const Others: React.FC = (): JSX.Element => {
  const [randomText] = useState<React.ReactNode>(() => _localStorage.get('randomText') ?? null);
  const randomFruit = ['🍏', '🍊', '🍌', '🍍', '🍉'];

  return (
    <TestViews
      children={
        <>
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

            <section>
              <h3>Combobox Test Below</h3>
              <Combobox itemType="Programming languages" items={PROGRAMMING_LANGUAGES} />
            </section>
          </div>
        </>
      }
    />
  );
};

export default Others;
