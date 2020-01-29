import React, { useState, useContext } from 'react';

import InfoContext from '../context/info/infoContext';

const InfoForm = () => {
  const infoContext = useContext(InfoContext);
  const { addInfo } = infoContext;

  const [info, setInfo] = useState({
    name: '',
    text: '',
    date: ''
  });

  const onChange = e => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    addInfo(info);
    clearInfo();
  };

  const clearInfo = () => setInfo({ name: '', text: '', date: '' });

  return (
    <div>
      <form onSubmit={onSubmit} className="mt-5">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            id="name"
            name="name"
            onChange={onChange}
            value={info.name}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Infos</label>
          <textarea
            className="form-control"
            placeholder="Enter Whatever you want"
            id="text"
            name="text"
            onChange={onChange}
            value={info.text}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            className="form-control"
            onChange={onChange}
            value={info.date}
            required
          />
        </div>
        <input
          type="submit"
          value="Submit Info"
          className="btn btn-block btn-outline-dark"
          required
        />
      </form>
    </div>
  );
};

export default InfoForm;
