
import { useCountUp } from 'react-countup';

const Counter = ({ end, duration }) => {
  const { countUp } = useCountUp({
    start: 0,
    end:20,
    duration:2,
    useEasing: true,
    separator: ',',
    decimal: '',
    decimals: 0,
  });

  return <h2 className="text-3xl font-bold text-blue-700">{countUp}</h2>;
};

export default Counter;