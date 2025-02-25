import React from 'react';
import '../styles/root.scss';
import { useRoot } from 'src/hooks/useRoot'

const Root = (): JSX.Element => {
  const { state, controller } = useRoot();
  
  return (
    <div className="root-container">
      <h1 className='project-title'>{state.title}</h1>
      <p className='project-description'>{state.description}</p>
    </div>
  );
}

export default Root;
