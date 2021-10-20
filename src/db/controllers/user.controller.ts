import { RequestHandler } from 'express';

import User from '../models/user.model';

export const createUser: RequestHandler = async (req, res, next) => {
    const userInfo = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    }

    const user = new User(userInfo)

    const createdUser = await user.save()

    res.status(201).json({ message: 'Created the todo.', user: createdUser})
}

export const getUsers: RequestHandler = async (req, res, next) => {
    const users = await User.findAll();

    res.json({ users });
};