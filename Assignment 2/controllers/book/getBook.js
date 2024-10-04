import logger from "../../utils/logger.js";

import { StatusCodes } from "http-status-codes";
import { errorResponse, successResponse } from "../../utils/responses.js";

import Book from "../../models/book.js";

const getBook = async (req, res) => {
    try {
        logger.info("START: Get Book Service");
        
        const book = await Book.findOne({ _id: req.params.id, createdBy: req.user.userId });
        
        if (book) {
            logger.info("END: Get Book Service");
            successResponse(res, StatusCodes.OK, { book });
        } else {
            logger.info("END: Get Book Service");
            errorResponse(res, StatusCodes.NOT_FOUND, { message: "Resource not found." });
        }

    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export default getBook;