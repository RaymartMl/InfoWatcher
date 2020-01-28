import React, { useState } from 'react';

const InfoForm = () => {
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
    // TODO make a submit state
  };

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
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            name="date"
            className="form-control"
            onChange={onChange}
            value={info.date}
          />
        </div>
        <input
          type="submit"
          value="Submit Info"
          className="btn btn-block btn-outline-dark"
        />
      </form>
    </div>
  );
};

export default InfoForm;
