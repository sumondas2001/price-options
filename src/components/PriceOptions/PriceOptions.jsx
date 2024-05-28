import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
     const [data, setData] = useState([])
     useEffect(() => {
          fetch('Price.json')
               .then(res => res.json())
               .then(data => setData(data))
     }, [])

     return (
          <div>
               <h2 className="text-3xl text-center font-medium my-4">Best Prices In The Town</h2>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 m-16 gap-6  text-white">
                    {
                         data.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                    }

               </div>

          </div>
     );
};

export default PriceOptions;