import React, {useState, useEffect} from 'react';

type LoaderProps = {
  isLoading: boolean;
  assertive?: boolean;
  loadingIcon?: JSX.Element;
};

export const Loader: React.FC<LoaderProps> = ({isLoading, assertive, loadingIcon}): JSX.Element => {
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [isDoneLoading, setIsDoneLoading] = useState<boolean>(false);
  const [wasThereALoad, setWasThereALoad] = useState<boolean>(false);

  /*****************************************************************************************************
   *@useEffect this controls when to show the loading bar with respect to @argument(@isLoading boolean)
   *****************************************************************************************************/
  useEffect(() => {
    let timeout: /* NodeJS.Timeout*/ number;

    if (isLoading) {
      /*
       * because some api are extremely,lets give a benefit of 1 sec doubt
       */
      timeout = setTimeout(() => setShowLoading(true), 1000);
    }

    /*
     * during unmount of this component e.g:loading is done,reset @stateVariable[@setShowLoading]=false
     */
    return () => {
      setShowLoading(false);
      //the below state will help track that there was ones a load thereby helping the @isDoneLoading to be reactive
      setWasThereALoad(true);
      window.clearTimeout(timeout);
    };
  }, [isLoading]);

  /*********************************************************************************************************************
   *@useEffect this controls the @useState [isDoneLoading] by checking if previously there was a loading & now !Loading
   *********************************************************************************************************************/
  useEffect(() => {
    let timeout: /*NodeJS.Timeout*/ number;

    if (wasThereALoad) {
      setIsDoneLoading(true);
    } else {
      setIsDoneLoading(false);
    }

    //after few seconds remove the isDone alerter
    timeout = setTimeout(() => setWasThereALoad(false), 2000);

    return () => window.clearTimeout(timeout);
  }, [wasThereALoad]);

  return (
    <>
      {showLoading && (
        <div
          className={`loader-container ${assertive ? 'loader-centered' : 'loader-top'}`}
          role="progressbar"
          aria-live="polite"
          aria-atomic={true}
        >
          {isDoneLoading && <p className="finish-p">Finished!</p>}
          {loadingIcon ? (
            loadingIcon
          ) : (
            <img src={`${process.env.PUBLIC_URL}/assets/images/loader.gif`} alt="A loading gif" />
          )}
        </div>
      )}
    </>
  );
};

export default Loader;
