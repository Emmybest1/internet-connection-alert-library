import React, {useState} from 'react';
import './accordion.style.scss';

type TAccordionProps = {
  children: React.ReactNode;
  accordionTitle?: string;
};
export const Accordion: React.FC<TAccordionProps> = ({children, accordionTitle}): JSX.Element => {
  const [accordionOpened, setAccordionOpened] = useState<boolean>(false);
  return (
    <div role="region">
      {/* accordion controllers */}
      <span
        className="accordion-controller"
        role="button"
        tabIndex={0}
        aria-controls="accordionPanel"
        onClick={() => setAccordionOpened(!accordionOpened)}
      >
        <span role="heading">{accordionTitle}</span>
        {!accordionOpened ? (
          <i className="fa fa-angle-up arrow-up"></i>
        ) : (
          <i className="fa fa-angle-down arrow-down"></i>
        )}
      </span>

      {/* content view */}
      {accordionOpened && (
        <div className="accordion-content" aria-expanded={accordionOpened ? true : false} id="accordionPanel">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
