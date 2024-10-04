import logger from "../utils/logger.js";

import { StatusCodes } from "http-status-codes";
import { isAccessTokenValid } from "../utils/auth.js";
import { errorResponse } from "../utils/responses.js";

const verifyAccessToken = (req, res, next) => {
    try {

        const authenticationToken = req.headers.authorization;

        if (authenticationToken?.startsWith("Bearer")) {

            const accessToken = authenticationToken.split(" ")[1];
            console.log(accessToken)
            const jwtPayload = isAccessTokenValid(accessToken);

            if (jwtPayload) {
                req.user = jwtPayload;
                return next();
            }
        }

        errorResponse(res, StatusCodes.UNAUTHORIZED, { message: "Unauthorized." });

    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export default verifyAccessToken;