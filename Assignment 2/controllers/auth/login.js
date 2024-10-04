import { StatusCodes } from "http-status-codes";

import User from "../../models/user.js";

import { createAccessToken, isPasswordValid } from "../../utils/auth.js";

import logger from "../../utils/logger.js";

import { successResponse, errorResponse } from "../../utils/responses.js";

const login = async (req, res, next) => {
    try {
        logger.info("START: Login Account Service");

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            logger.info("END: Login Account Service");
            errorResponse(res, StatusCodes.NOT_FOUND, { message: "Login failed; Invalid email or password." });
            return;
        }

        if (isPasswordValid(password, user.password)) {

            const accessToken = createAccessToken(user._id);

            logger.info("END: Login Account Service");

            successResponse(res, StatusCodes.OK, { message: "Login successful.", accessToken });
        } else {
            logger.info("END: Login Account Service");
            errorResponse(res, StatusCodes.NOT_FOUND, { message: "Login failed; Invalid email or password." });
        }

    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export default login;