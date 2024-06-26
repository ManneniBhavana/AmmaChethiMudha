import { Link, Navigate } from 'react-router-dom';

import './index.css';

const error =
  'https://res.cloudinary.com/dpnobkqmw/image/upload/v1634290874/erroring_1_q4upqy.png';

const EmptyComponent = () => { 
  return (
    <>
      <div className='not-found'>
        <img src={error} alt='not found' />
        <h1>PAGE NOT FOUND</h1>
        <p className='we-are'>
          we are sorry, the page you requested could not be found
        </p>
        <Link to='/home'>
          <button type='button' className='button-back-home'>
            Home Page
          </button>
        </Link>
      </div>
    </>
  );
};

export default EmptyComponent;
