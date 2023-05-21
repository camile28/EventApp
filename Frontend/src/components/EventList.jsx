import { useEffect, useState } from "react";
import { Container } from "../styles/StyledEvent";
import axios from "axios";
import Table from "react-bootstrap/Table";

export const EventList = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios
      .get("http://localhost:5000/events")
      .then((response) => {
        setEvents(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const deleteEvent = (eventId) => {
    axios
      .delete(`http://localhost:5000/events/${eventId}`)
      .then(() => {
        fetchEvents();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Event title</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.title}</td>
              <td>{event.name}</td>
              <td>{event.surname}</td>
              <td>{event.email}</td>
              <td>{event.phoneNumber}</td>
              <td>
                <button onClick={() => deleteEvent(event.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
