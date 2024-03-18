import PropTypes from 'prop-types';
import { AiOutlineCheckCircle } from "react-icons/ai";
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex gap-2 items-center'><AiOutlineCheckCircle />{ feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature:PropTypes.string.isRequired
}
export default Feature;