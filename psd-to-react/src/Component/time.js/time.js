import React from 'react';


const GetTime = ({start_date,delivery}) => {
    const calculateTimeLeft = () => {
      // console.log(new Date(delivery).toString());
      
      const difference = +new Date(delivery) - +new Date(); 
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
  
      return timeLeft;
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    });
  
    const timerComponents = [];
  
    Object.keys(timeLeft).forEach(interval => {
      if (!timeLeft[interval]) {
        return;
      }
  
      timerComponents.push(
        <span>
          {timeLeft[interval]} {interval === 'days' ? "D :" : interval === 'hours' ? "H :" : interval === 'seconds' ? "S " : interval === "minutes" ? "M :" : ''}{" "}
        </span>
      );
    });
    return (
      <span>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</span>
    )
  }
export default GetTime
