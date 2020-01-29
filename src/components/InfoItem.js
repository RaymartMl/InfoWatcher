import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import InfoContext from '../context/info/infoContext';

const InfoItem = ({ info: { id, name, text, date } }) => {
  const infoContext = useContext(InfoContext);
  const { deleteInfo } = infoContext;

  const onDelete = () => {
    console.log(id);
    deleteInfo(id);
  };

  return (
    <div className="md-col-3 mt-2">
      <div className="card" style={{ width: '16rem' }}>
        <div className="card-body">
          <h5 className="card-title">
            {name} <small className="text-info">{date}</small>
          </h5>
          <p className="card-text">{text}</p>
          <button className="btn btn-block btn-danger" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

InfoItem.propTypes = {
  info: PropTypes.object.isRequired
};

export default InfoItem;
