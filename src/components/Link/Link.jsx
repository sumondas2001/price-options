import PropTypes from 'prop-types';

const Link = ({ route }) => {
     // console.log(route)
     return (

          <li className='mr-10 hover:bg-lime-600 text-base font-medium  px-6 py-3 rounded-lg hover:text-white hover:text-center'><a href={route.path} >{route.name}</a></li>

     );

};
Link.propTypes = {
     route: PropTypes.object
}

export default Link;