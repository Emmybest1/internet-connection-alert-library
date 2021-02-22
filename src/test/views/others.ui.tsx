import React, {useState} from 'react';
import {useLocalstorage} from '../../react-ui-bucket';

const Others: React.FC = (): JSX.Element => {
  const [randomText] = useState<React.ReactNode>(() => window.localStorage.getItem('randomText') ?? null);

  useLocalstorage({
    key: 'randomText',
    value:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, rerum tenetur delectus quisquam aliquid laboriosam tempore esse pariatur incidunt enim quas eum sit architecto totam, nam atque molestias facere aspernatur.',
  });
  return (
    <main>
      <h1>Other Views Test</h1>
      <h3>LocalStorage Test Below</h3>
      <>{randomText}</>
    </main>
  );
};

export default Others;
