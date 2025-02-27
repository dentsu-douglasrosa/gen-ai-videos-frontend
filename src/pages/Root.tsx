import React from 'react';
import '../styles/root.scss';
import { useRoot } from 'src/hooks/useRoot'
import Input from 'src/components/Input';

const Root = (): JSX.Element => {
  const { state, controller } = useRoot();
  
  return (
    <div className="root-container">
      <h1 className='project-title'>{state.title}</h1>
      <p className='project-description'>{state.description}</p>

      {state.isLoading && <p className=''>GENERATING ...</p>}
      {state.result && <p className=''>{`Result (now needs to get from POOL endpoint): ${JSON.stringify(state.result)}`}</p>}

      <Input value={state.promptText} handleChange={controller.handleInput} onClickRightButton={controller.generateVideo}/>

    </div>
  );
}

export default Root;
