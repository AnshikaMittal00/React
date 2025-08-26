import { IMG_URL } from "../utils/constants";

const ResCard = (props) => {
   
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } = resData?.info || {};

    return (
        <div className="m-4 p-4 w-[250px] h-[350px] bg-pink-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
                className="w-full h-40 object-cover rounded-md mb-2"
                src={`${IMG_URL}/${cloudinaryImageId}`}
                alt={name}
            />
            <div className="flex flex-col justify-between ">
                <div>
                    <h3 className="font-bold text-lg mb-1 truncate">{name}</h3>
                    <p className="text-sm  mb-1 truncate overflow-ellipsis">
                        {cuisines.join(", ")}
                    </p>
                </div>
                <div>
                    <p className="text-sm text-gray-600 font-semibold mt-2">
                        {avgRating} ⭐
                    </p>
                    <p className="text-sm text-gray-600">{costForTwo}</p>
                    <p className="text-sm text-gray-600">{sla.slaString}</p>
                </div>
            </div>
        </div>
    );
};
 export const Popular=(ResCard)=>{
    return(props)=>{
         return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2  rounded-2xl  ">Popular</label>
        <ResCard {...props}/>
      </div>
    )

    }
   
}

export default ResCard;