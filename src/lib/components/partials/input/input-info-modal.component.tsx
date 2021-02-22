import React from 'react';
import Button from '../button/button.component';
import {ReactPortal} from '../react-portal/react-portal.component';
import './input.style.scss';

type TInputInfoModalProps = {
  info: React.ReactNode;
};

const InputInfoModal: React.FC<TInputInfoModalProps> = ({info}): JSX.Element => {
  const [infoCopy, setInfoCopy] = React.useState<React.ReactNode>('');
  const [shouldShowModal, setShouldShowModal] = React.useState<boolean>(false);

  //control the emptiness and updating of infoCopy
  React.useEffect(() => {
    if (!!info && !shouldShowModal) {
      setInfoCopy(info);
      setShouldShowModal(true);
    } else {
    }
    return () => {
      setInfoCopy('');
      setShouldShowModal(false);
    };
  }, [info]);
  return (
    <>
      {shouldShowModal && (
        <ReactPortal>
          <div className="input-info-modal-container modal-top">
            <div className="info-heading-wrapper">
              <h4 style={{display: 'flex', alignItems: 'center'}}>
                <i className="fa fa-info-circle" style={{paddingRight: '5px'}}></i>
                Info
              </h4>
            </div>
            <div className="info-content-wrapper">{infoCopy}</div>

            <div className="ok-btn-wrapper">
              <Button buttonText="Ok" onClick={() => setShouldShowModal(false)} />
            </div>
          </div>
        </ReactPortal>
      )}
    </>
  );
};

export default InputInfoModal;
