import PropTypes from 'prop-types';


const Link = ({ route }) => {
    
    return (
        <div>
            <li className='mr-10 my-3 hover:bg-slate-100 p-2 rounded-lg'><a href={ route.path }>{ route.name}</a></li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired 
}
export default Link;