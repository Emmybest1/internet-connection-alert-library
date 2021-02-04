import React from 'react';
import Button from '../button/button.component';
import {ReactPortal} from '../react-portal/react-portal.component';

type TInputInfoModalProps = {
  info: React.ReactNode;
};

const InputInfoModal: React.FC<TInputInfoModalProps> = ({info}): JSX.Element => {
  const [shouldShowModal, setShouldShowModal] = React.useState<boolean>(() => (info ? true : false));
  return (
    <>
      {shouldShowModal && (
        <ReactPortal>
          <div className="input-info-modal-container">{info}</div>

          <div className="ok-btn-wrapper">
            <Button buttonText="Ok" onClick={() => setShouldShowModal(false)} />
          </div>
        </ReactPortal>
      )}
    </>
  );
};

export default InputInfoModal;
