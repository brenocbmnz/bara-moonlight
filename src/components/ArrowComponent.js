import React, { useEffect, useState, useContext } from 'react';
import Lottie from 'react-lottie';
import { ArrowContext } from '../ArrowContext';
import './ArrowComponent.css';

function Arrow() {
  const [arrowAnimationData, setArrowAnimationData] = useState(null);
  const [arrowOpacity, setArrowOpacity] = useState(0);
  const { isArrowVisible } = useContext(ArrowContext);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/arrow.json')
      .then(response => response.json())
      .then(data => setArrowAnimationData(data));

    const timer = setTimeout(() => {
      setArrowOpacity(1);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const arrowOptions = {
    loop: true,
    autoplay: true, 
    animationData: arrowAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
  };

  return (
    <Lottie options={arrowOptions} height={50} width={50} className="arrow-animation" style={{opacity: isArrowVisible ? arrowOpacity : 0}} isClickToPauseDisabled={true} />
  );
}

export default Arrow;