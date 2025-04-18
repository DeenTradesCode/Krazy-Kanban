import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { retrieveTickets, deleteTicket } from '../api/ticketAPI';
import ErrorPage from './ErrorPage';
import Swimlane from '../components/Swimlane';
import { TicketData } from '../interfaces/TicketData';
import { ApiMessage } from '../interfaces/ApiMessage';

const boardStates = ['Todo', 'In Progress', 'Done'];

const Board = () => {
  const [tickets, setTickets] = useState<TicketData[]>([]);
  const [error, setError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLogin = () => {
    const token = localStorage.getItem('id_token');
    setIsLoggedIn(!!token); // Set to true if token exists, false otherwise
  };

  const fetchTickets = async () => {
    try {
      const data = await retrieveTickets();
      setTickets(data);
    } catch (err) {
      console.error('Failed to retrieve tickets:', err);
      setError(true);
    }
  };

  const deleteIndvTicket = async (ticketId: number): Promise<ApiMessage> => {
    try {
      const data = await deleteTicket(ticketId);
      fetchTickets();
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      fetchTickets();
    }
  }, [isLoggedIn]);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {!isLoggedIn ? (
        <div className='login-notice'>
          <h1>Login to create & view tickets</h1>
        </div>
      ) : (
        <div className='board'>
          <button type='button' id='create-ticket-link'>
            <Link to='/create'>New Ticket</Link>
          </button>
          <div className='board-display'>
            {boardStates.map((status) => {
              const filteredTickets = tickets.filter((ticket) => ticket.status === status);
              return (
                <Swimlane
                  title={status}
                  key={status}
                  tickets={filteredTickets}
                  deleteTicket={deleteIndvTicket}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Board;