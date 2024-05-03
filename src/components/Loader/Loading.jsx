import HashLoader from 'react-spinners/HashLoader';
import RingLoader from 'react-spinners/RingLoader';
import SyncLoader from 'react-spinners/SyncLoader';

const Loading = () => {
  return (
  <div className="flex items-center justify-center w-full h-full">
    <SyncLoader color="#e65437"/>
  </div>
  );
};

export default Loading;