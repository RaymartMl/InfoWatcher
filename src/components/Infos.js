import React, { useContext } from 'react';

import InfoItem from './InfoItem';
import InfoContext from '../context/info/infoContext';

const Infos = () => {
  const infoContext = useContext(InfoContext);
  const { infos } = infoContext;
  return (
    <div className="mt-5 d-flex flex row justify-content-around">
      {infos.map(info => (
        <InfoItem info={info} key={info.id} />
      ))}
    </div>
  );
};

export default Infos;
