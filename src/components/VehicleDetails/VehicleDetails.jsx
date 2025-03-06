export const VehicleDetails = ({ campers }) => {
  return (
    <div>
      <ul>
        {campers.map(camper => (
          <li key={camper.id}>
            <p>Form: {camper.form}</p>
            <p>Length: {camper.length}</p>
            <p>Width: {camper.width}</p>
            <p>Height: {camper.height}</p>
            <p>Tank: {camper.tank}</p>
            <p>Consumption: {camper.consumption}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
