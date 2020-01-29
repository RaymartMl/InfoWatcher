import React, { useReducer } from 'react';

import InfoContext from './infoContext';
import infoReducer from './infoReducer';
import { ADD_INFO, DELETE_INFO, UPDATE_INFO } from '../types';

const InfoState = props => {
  const initialState = [
    {
      id: 1,
      name: 'Thalia Maa',
      text:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ipsam voluptas nisi molestias est vitae corporis libero autem aspernatur! Pariatur?',
      date: '01/20/2020'
    },
    {
      id: 2,
      name: 'Fernan Maa',
      text:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ipsam voluptas nisi molestias est vitae corporis libero autem aspernatur! Pariatur?',
      date: '10/29/2002'
    },
    {
      id: 3,
      name: 'David Maa',
      text:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ipsam voluptas nisi molestias est vitae corporis libero autem aspernatur! Pariatur?',
      date: '07/21/2012'
    },
    {
      id: 4,
      name: 'Gwin Maa',
      text:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ipsam voluptas nisi molestias est vitae corporis libero autem aspernatur! Pariatur?',
      date: '12/23/2000'
    }
  ];

  const [state, dispatch] = useReducer(infoReducer, initialState);

  //   Add
  const addInfo = info => {
    dispatch({ type: ADD_INFO, payload: info });
  };
  // Delete
  const deleteInfo = id => {
    dispatch({ type: DELETE_INFO, payload: id });
  };
  // Update
  const updateInfo = info => {
    dispatch({ type: UPDATE_INFO, payload: info });
  };

  return (
    <InfoContext.Provider
      value={{
        infos: state,
        addInfo,
        deleteInfo,
        updateInfo
      }}
    >
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoState;
