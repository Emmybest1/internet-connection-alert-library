import React, {useState} from 'react';
import Button from '../../partials/button/button.component';
import ReactPortal from '../../partials/react-portal/react-portal.component';
import './api-error-engine.style.scss';

type ApiErrorEngineProps = {
  apiErrorEncountered: boolean;
  apiErrorHeading?: string;
  apiErrorMessage: string;
  fontFamily?: string;
  retryFunc: any;
};

const ApiErrorEngine: React.FC<ApiErrorEngineProps> = ({
  apiErrorHeading,
  apiErrorMessage,
  apiErrorEncountered,
  fontFamily,
  retryFunc,
}): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(() => apiErrorEncountered ?? false);
  return (
    <>
      {showModal && (
        <ReactPortal>
          <div
            className="api-error-engine-container"
            role="alert"
            aria-live="assertive"
            aria-labelledby="apiErrHeading"
            style={{fontFamily}}
          >
            <h4 id="apiErrHeading" className="api-error-heading pb-20">
              {apiErrorHeading ? apiErrorHeading : 'API Error'}
            </h4>
            <span className="row pb-20">
              <p className="api-error-symbol">X</p>
              <p className="api-error-message pl-20">{apiErrorMessage}</p>
            </span>
            <div className="btn-wrapper">
              <Button buttonText="Retry" onClick={retryFunc} />
              <Button
                buttonText="Close"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => setShowModal(false)}
              />
            </div>
          </div>
        </ReactPortal>
      )}
    </>
  );
};

export default ApiErrorEngine;
