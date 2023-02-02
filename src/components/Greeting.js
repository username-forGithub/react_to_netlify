import { useSelector, useDispatch } from 'react-redux';
import * as React from 'react';
import { fetchText } from '../redux/slices/greetingSlice';
import dog from '../img/dog.jpg';

const Greeting = () => {
  const dispatch = useDispatch();
  const allgreetings = useSelector((state) => state.textobj.greeting);
  if (allgreetings.length === 0) {
    dispatch(fetchText());
  }

  let title;
  if (allgreetings.length !== 0) {
    title = allgreetings[0].greetings;
  }

  const updateText = () => {
    dispatch(fetchText());
  };

  return (
    <div className="container">
      <p className="text-center pt-5 textp">{`${title || ''}`}</p>
      <p className="text-center"><button type="button" className="neon-button" onClick={updateText}>Click Me</button></p>
      <img src={dog} className="dog" alt="" />
    </div>
  );
};

export default Greeting;
