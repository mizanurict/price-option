import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {price, name, features } = option;
    return (
        <div className='flex flex-col bg-slate-300 m-4 p-4 rounded-lg' >
            <h1 className='text-5xl'>{ price }</h1>
            <h1 className='text-3xl'>{ name }</h1>
            <div className='flex-grow'>
                {
                    features.map((feature, idx) => <Feature
                    key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className='btn bg-green-500 text-white hover:bg-green-800  w-full'>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option:PropTypes.object.isRequired
}
export default PriceOption;