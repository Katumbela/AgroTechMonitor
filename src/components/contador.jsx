import React, { useState, useEffect } from 'react';

const Contador = ({ dataTermino }) => {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const targetDate = new Date(dataTermino).getTime();

    const timer = setInterval(() => {
      const currentDate = new Date().getTime();
      const difference = targetDate - currentDate;

      if (difference > 0) {
        const daysRemaining = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown(`${daysRemaining} dias : ${hoursRemaining}h : ${minutesRemaining}min : ${secondsRemaining}s`);
      } else {
        setCountdown('Leilão Terminado');
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [dataTermino]);

  return <div>{countdown}</div>;
};

export default Contador;
