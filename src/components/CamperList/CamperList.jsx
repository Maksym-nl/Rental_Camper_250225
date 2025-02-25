// import { ShowMoreBtn } from 'components/showMore/ShowMore';
// import { Equipment } from '../equipment/Equipment';
export const CamperList = ({ campers }) => {
  console.log(campers);
  return (
    <ul>
      {campers.map(camper => {
        return (
          <li key={camper.id}>
            <p>{camper.name}</p>
            <p>{camper.price}</p>
            <p>{camper.rating}</p>
            <p>{camper.location}</p>
            <p>{camper.description}</p>
            <ul>
              {camper.gallery?.map((image, index) => (
                <li key={index}>
                  <img
                    src={image.original}
                    alt={`Images ${index + 1}`}
                    width={200}
                  />
                </li>
              ))}
            </ul>

            {/* <ShowMoreBtn /> */}
          </li>
        );
      })}
    </ul>
  );
};
