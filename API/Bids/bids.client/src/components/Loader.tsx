import DotLoader from 'react-spinners/DotLoader';

const Loader = () => {
  return (
    <div className='flex flex-1 justify-center items-center'>
      <DotLoader
        color='#6f4dff'
        size={45}
        speedMultiplier={2}
      />
    </div>
  );
};
