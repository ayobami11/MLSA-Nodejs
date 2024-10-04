import { StatusCodes } from "http-status-codes";

import User from "../../models/user.js";
import { hashPassword } from "../../utils/auth.js";

import logger from "../../utils/logger.js";

import { errorResponse, successResponse } from "../../utils/responses.js";

const signup = async (req, res, next) => {
    try {
        logger.info("START: Signup Account Service");

        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            logger.info("END: Signup Account Service");
            errorResponse(res, StatusCodes.UNPROCESSABLE_ENTITY, "User already exists.");
            return;
        }

        const newUser = await User.create({
            username,
            email,
            password: hashPassword(password)
        });

        logger.info("END: Signup Account Service");
        // accessToken not created in signup because user would be redirected to login page to get it
        successResponse(res, StatusCodes.CREATED, { message: "New user created successfully." });

    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export default signup;