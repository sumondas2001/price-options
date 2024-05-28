import { GiCheckMark } from "react-icons/gi";

const Feature = ({ feature }) => {
     console.log(feature)
     return (

          <div >
               <h1 className="text-lg font-normal mb-2 px-6 flex "><GiCheckMark className="mr-3 text-2xl text-red-500" />{feature}</h1>

          </div>



     );
};
import PropTypes from 'prop-types';

Feature.propTypes = {
     feature: PropTypes.object
}

export default Feature;