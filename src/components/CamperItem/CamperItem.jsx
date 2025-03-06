export const CamperItems = ({ campers }) => {
  return (
    <div>
      <ul>
        {campers.map(camper => {
          return (
            <li key={camper.id}>
              <p>{camper.name}</p>
              <p>{camper.price}</p>
              <p>{camper.rating}</p>
              <p>{camper.location}</p>
              <ul>
                {campers.gallery?.map(image => (
                  <li key={image.id}>
                    <img
                      src={image.original}
                      alt={`Images ${camper.name}`}
                      width={200}
                    />
                  </li>
                ))}
              </ul>
              <p>{camper.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
