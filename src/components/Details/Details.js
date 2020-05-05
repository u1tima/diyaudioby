import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';

const Details = (props) => {
  return (
    <div>
      <Tooltip
        placement="left"
        align={{
          offset: [-10, 0]
        }}
        overlay={props.data}
        arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
      >
        <FontAwesomeIcon
          icon={faTools}
          size="lg"
        />
      </Tooltip>
    </div>
  );
}

export default Details;
