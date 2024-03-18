import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions =[
        {
          "id": 1,
          "name": "Basic Membership",
          "features": ["Access to gym equipment", "Personal locker", "Showers and changing rooms"],
          "price": "$29.99/month"
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "features": ["Access to gym equipment", "Personal locker", "Showers and changing rooms", "Group fitness classes", "Sauna and steam room access"],
          "price": "$49.99/month"
        },
        {
          "id": 3,
          "name": "Platinum Membership",
          "features": ["Access to gym equipment", "Personal locker", "Showers and changing rooms", "Group fitness classes", "Sauna and steam room access", "Personal training sessions (2/month)"],
          "price": "$99.99/month"
        },
        {
          "id": 4,
          "name": "Student Membership",
          "features": ["Access to gym equipment", "Personal locker", "Showers and changing rooms (Student ID required)"],
          "price": "$24.99/month"
        },
        {
          "id": 5,
          "name": "Family Membership",
          "features": ["Access to gym equipment", "Personal lockers (for each family member)", "Showers and changing rooms", "Group fitness classes"],
          "price": "$89.99/month"
        }
      ]
      
    return (
      <div>
        <h1 className="text-3xl">Best Price</h1>
        <div className='grid md:grid-cols-3 m-4'>
        {
          priceOptions.map((option) => <PriceOption
            key={ option.id }
            option={option}
          ></PriceOption>) 
        }
        </div>   
        
        
        </div>
    );
};

export default PriceOptions;