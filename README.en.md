General information:

The goal of the project is to create a front-end part of a web application for
the company "TravelTrucks", which rents campers. The web application should
include several pages, including a home page, a catalog page, and a page of an
individual camper with reviews and a booking form.

To implement the Back-End we use a ready-made API -
https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers

Its main endpoints:

GET /campers - get all campers GET /campers/:id - get camper details by its ID

Project requirements:

1. Framework and libraries:

- Redux -for condition management;
- React Router - for routing;
- Axios - for requests;
- Styled-components - stylization of components;
- Material UI- finished components.

2. Main pages:

- Homepage: contain a banner with a main call to action;
- Catalog: a page displaying all available vehicles with the ability to filter
  by certain criteria (location, type of vehicle, availability of air
  conditioning, kitchen, etc.) and the ability to add a camper to your
  favorites.
- Detail camper page: page with a detailed description of the selected camper,
  photo gallery, user reviews, booking form. The following properties are used
  for the description characteristics, if they are present on this camper:
  gearbox, engine, air conditioning, bathroom, kitchen, TV, radio, refrigerator,
  microwave, gas, water. The following properties are used for the description
  of the details: form, length, width, height, tank, consumption.

3.  Routing::

/ - Home Page; /catalog - Catalog; /catalog/:id- Detail camper;

4.  Application State:

Use Redux to manage state. Create a global state to store the vehicle list,
filter state, and favorites list. When sending a query for filtered vehicles, it
is important to first reset the previous search results to ensure that the
displayed data is current and accurate according to the new filtering criteria.

5. Functional requirements:

- Navigate to the Catalog page: The user should be able to click the "View Now"
  button on the home page to navigate to the catalog page.
- Vehicle filtering (must be done on the backend, not on the frontend). The user
  should be able to filter vehicles by: location (text field) body type (one
  body type can be selected) presence of air conditioning, kitchen, and other
  criteria (several criteria can be selected).
- Favorites: The user should be able to add vehicles to a favorites list. The
  list of favorite campers should be saved when the page is refreshed.
- The rental price must be written as a single value (for example, 8000). In
  UI - it is displayed with a dot (8000.00).
- Go to details page: The user should be able to click the "Show more" button on
  the vehicle card on the catalog page to go to a page with a detailed
  description of that vehicle in a new browser tab.
- Loading maps: the catalog page should have a "Load More" button, which, when
  clicked, loads additional vehicle maps taking into account the selected
  filters.
- Reviews: The individual camper page should display reviews from other users
  who rate the camper on a five-star scale.
- Booking form: the user should be able to book a camper by filling out a form
  on the individual camper page. The result of a successful submission of the
  form should be a notification of a successful booking.

6. Design:

Follow the provided layout. Layout should be done for the desktop version.
https://www.figma.com/design/6vTbzaB3EPgOreQz2jOJJe/Campers?node-id=0-1&t=wWUj9PeSd7v1KZ5q-1
