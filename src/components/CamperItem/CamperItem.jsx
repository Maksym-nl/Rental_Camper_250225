import { ContainerItems } from './CamperItem.styled';

export const CamperItems = ({ campers }) => {
  return (
    <ContainerItems>
      <ul>
        {campers.map(camper => {
          return (
            <li key={camper.id}>
              <ul>
                <div>
                  {campers.gallery?.map(image => (
                    <li key={image.id}>
                      <img
                        src={image.original}
                        alt={`Images ${camper.name}`}
                        width={200}
                      />
                    </li>
                  ))}
                </div>
              </ul>
              <div>
                <p>{camper.name}</p>
                <p>{camper.price}</p>
                <p>{camper.rating}</p>
                <p>{camper.location}</p>
                <p>{camper.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </ContainerItems>
  );
};
