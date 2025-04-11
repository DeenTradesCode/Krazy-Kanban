import { Ticket } from '../models/ticket.js';
import { User } from '../models/user.js';
export const getAllTickets = async (_req, res) => {
    try {
        const tickets = await Ticket.findAll({
            include: [
                {
                    model: User,
                    as: 'assignedUser',
                    attributes: ['username'],
                },
            ],
        });
        res.json(tickets);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const getTicketById = async (req, res) => {
    const { id } = req.params;
    try {
        const ticket = await Ticket.findByPk(id, {
            include: [
                {
                    model: User,
                    as: 'assignedUser',
                    attributes: ['username'],
                },
            ],
        });
        if (ticket) {
            res.json(ticket);
        }
        else {
            res.status(404).json({ message: 'Ticket not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const createTicket = async (req, res) => {
    const { name, status, description, assignedUserId } = req.body;
    try {
        const newTicket = await Ticket.create({ name, status, description, assignedUserId });
        res.status(201).json(newTicket);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const updateTicket = async (req, res) => {
    const { id } = req.params;
    const updates = req.body; // Get only the fields provided in the request body
    try {
        const ticket = await Ticket.findByPk(id);
        if (!ticket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }
        // Ensure only provided fields are updated
        const allowedUpdates = ['name', 'status', 'description', 'assignedUserId'];
        const fieldsToUpdate = Object.keys(updates).filter((key) => allowedUpdates.includes(key));
        if (fieldsToUpdate.length === 0) {
            return res.status(400).json({ message: 'No valid fields to update' });
        }
        // Update only the provided fields
        await ticket.update(updates, { fields: fieldsToUpdate });
        return res.status(200).json(ticket);
    }
    catch (error) {
        console.error('Error updating ticket:', error);
        return res.status(400).json({ message: error.message });
    }
};
export const deleteTicket = async (req, res) => {
    const { id } = req.params;
    try {
        const ticket = await Ticket.findByPk(id);
        if (ticket) {
            await ticket.destroy();
            res.json({ message: 'Ticket deleted' });
        }
        else {
            res.status(404).json({ message: 'Ticket not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
