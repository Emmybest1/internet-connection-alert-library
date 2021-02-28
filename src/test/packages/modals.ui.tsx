import React from 'react';
import TestViews from '../baseview/base-view';
import * as Lib from '../../react-ui-bucket';

export const Modals: React.FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;

    timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <TestViews
      children={
        <>
          <Lib.InternetAlert />
          <Lib.Loader isLoading={isLoading} />
          <Lib.ApiErrorEngine
            shouldShowModal={true}
            heading="We are sorry!"
            message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur nisi aspernatur exercitationem autem!"
          />
          <Lib.ApiSuccessEngine
            shouldShowModal={true}
            heading="Its a Success!"
            message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur nisi aspernatur exercitationem autem!"
          />
        </>
      }
    />
  );
};

export default Modals;
