# SPOR-TUIT

This document have information about this app.

### Component List and Functionality :
1. <b>Event Page</b>: This is an event page  which is used to display list All Events and Selected Events
2. <b>Render Event List</b>: This component loops through all the events and calls a card component.
3. <b>Card Component</b>: This is the component which is logic heavy. Not only it render a card but also performs the following operations:

    - Select an Event: This methods populates the selectedEvents arrayList. It has some basic checks, if a user has selected an event it first check if it is not overlapping with already selected events, also it limits the user to select at max 3 booking.
    - Remove an Event: It remove an event from the selectedEvents arrayList.   

4.<b>Custom Buttom</b>: This is a custom button with these props - {id, buttonName, buttonAction }.

### List of available context :
1. Snackbar Context
2. Events Context

#### There are some other files like:

- xhr - Has all API calls ans API configs
- utils - For helper functions
- constants - To store App Constants
- network - It has an axiosWrapper, so that if in future we want to modify the axios call we can do the changes at a centralized place.

