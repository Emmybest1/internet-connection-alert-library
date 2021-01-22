import React, {useState} from 'react';
import {Button} from '../../partials/button/button.component';
import ReactPortal from '../../partials/react-portal/react-portal.component';
import {APIEngineProps} from '../../../react-app-env';
import '../../../sass/api-engine.scss';

export const ApiSuccessEngine: React.FC<APIEngineProps> = ({
  heading,
  message,
  shouldShowModal,
  fontFamily,
  retryFunc,
  backgroundColor,
  contentTextColor,
  buttonBackgroundColor,
  buttonTextColor,
  modalPosition,
}): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(() => shouldShowModal ?? false);
  return (
    <>
      {showModal && (
        <ReactPortal>
          <div
            className={`api-engine-container api-success-engine-container  modal-${
              modalPosition ? modalPosition : 'top'
            }`}
            role="alert"
            aria-live="assertive"
            aria-labelledby="apiSuccHeading"
            style={{backgroundColor: backgroundColor, color: contentTextColor, fontFamily}}
          >
            <h4 id="apiSuccHeading" className="api-heading pb-20">
              {heading ? heading : 'API Error'}
            </h4>
            <span className="row pb-20">
              <p className="api-symbol">✔️</p>
              <p className="api-message pl-20">{message}</p>
            </span>
            <div className="btn-wrapper" style={{color: buttonTextColor}}>
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

export default ApiSuccessEngine;
