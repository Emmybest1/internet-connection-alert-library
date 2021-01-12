import React, {useState, useEffect} from 'react';
import ModalPortlet from '../react-portal/modal-portlet.component';
import './internet-connection-alert.style.scss';

type Props = {
  headingText?: string;
  bodyText?: string;
  buttonText?: string;
  width?: string;
  backgroundColor?: string;
  color?: string;
};
const InternetConnectionAlert: React.FC<Props> = ({
  headingText,
  bodyText,
  buttonText,
  width,
  backgroundColor,
  color,
}): JSX.Element => {
  const [isInternetDisconnected, setIsInternetDisconnected] = useState<boolean>(false);
  const [shouldCloseAlert, setShouldCloseAlert] = useState<boolean>(false);

  /***************
   *@function interinternetDisconnectedHandler this event handler gets invoke when an internet is disconnect
   ***************/
  const internetDisconnectedHandler: () => void = (): void => {
    setIsInternetDisconnected(true);
  };

  useEffect(() => {
    window.addEventListener('offline', internetDisconnectedHandler);

    return () => {
      window.removeEventListener('offline', internetDisconnectedHandler);
    };
  });

  /***************
   *@function interinternetConnectedHandler this event handler gets invoke when an internet is connected
   ***************/
  const internetConnectedHandler: () => void = (): void => {
    setIsInternetDisconnected(false);
  };

  useEffect(() => {
    window.addEventListener('online', internetConnectedHandler);

    return () => {
      window.removeEventListener('online', internetConnectedHandler);
    };
  });

  return (
    <ModalPortlet>
      <>
        {isInternetDisconnected && !shouldCloseAlert && (
          <div
            role="alertdialog"
            aria-modal="true"
            className="internet-alert-container"
            aria-live="assertive"
            style={{
              width: !/((%)|(px)|(rem)|(em)|(ex)|(ch)|(vh)|(vw)|(vmin)|(vmax))$/.test(width ?? '')
                ? width + 'px'
                : width,
              background: backgroundColor,
              color,
            }}
          >
            <figure>
              <img
                data-test="internet-failure-img"
                src={`${process.env.PUBLIC_URL}/assets/images/wifi-lost-img.svg`}
                alt=""
              />
              <figcaption className="internet-failure-img__resource" aria-hidden="true">
                reference:image taken from flaticon platform
                https://www.flaticon.com/free-icon/lock_3983101?term=internet%20connection&page=1&position=78&related_item_id=3983101
              </figcaption>
            </figure>
            <h3 data-test="internet-failure-heading">{headingText ? headingText : 'Internet Failure!'}</h3>
            <p data-test="internet-failure-body-text">
              {bodyText ? bodyText : "Sorry we can't continue, you seems to have gone offline.Try reconnecting."}
            </p>
            <button data-test="close-button" onClick={() => setShouldCloseAlert(true)}>
              {buttonText ? buttonText : 'Close'}
            </button>
          </div>
        )}
      </>
    </ModalPortlet>
  );
};

export default InternetConnectionAlert;
