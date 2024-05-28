import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({ option }) => {
     const { name, price, features } = option
     return (
          <div className="bg-cyan-900 hover:bg-cyan-600 rounded-xl px-2 flex flex-col">
               <div className='text-center'>
                    <h2 className='mt-8'>
                         <span className="text-5xl font-extrabold "><span className='text-5xl font-semibold'>$ </span>{price}</span>
                         <span className="text-xl">/Month</span>
                    </h2>
                    <h2 className="text-3xl font-semibold mt-24 my-4">{name}</h2>
               </div>
               <div className='flex-grow'>
                    {
                         features.map((feature, inx) => <Feature key={inx} feature={feature}></Feature>)
                    }
               </div>

               <div className='px-6'>
                    <button className='mt-10 p-4 text-xl font-bold mb-16  bg-red-500 w-full rounded-xl hover:bg-lime-600 '>Buy Now</button>
               </div>

          </div>
     );
};

PriceOption.propTypes = {
     option: PropTypes.object
}
export default PriceOption;