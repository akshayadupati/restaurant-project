import { RESTAURANT_BASE_URL } from "../utils/constants";

const AccordionBody = ({ show, itemCards }) => {
  if (show)
    return (
      <div>
        {itemCards.map((eachItem) => (
          <div className="flex justify-between border border-b-gray-600 my-6">
            <div className="text-md text-left py-2 my-2  w-9/12">
              <p className="font-semibold">{eachItem.card.info.name}</p>
              <p className="text-sm">Rs. {eachItem.card.info.price / 100}</p>
              <p className="text-sm">{eachItem.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4 relative">
              <div className="absolute">
                <button className="bg-black text-white rounded-md p-2 mb-20 right-2 top-10 left-10 mx-auto">
                  Add +
                </button>
              </div>
              <img
                src={RESTAURANT_BASE_URL + "/" + eachItem.card.info.imageId}
              />
            </div>
          </div>
        ))}
      </div>
    );
};

export default AccordionBody;
