import logger from "../../utils/logger.js";

import { StatusCodes } from "http-status-codes";
import { successResponse } from "../../utils/responses.js";

import Book from "../../models/book.js";

const getBooks = async (req, res, next) => {
    try {
        logger.info("START: Get Books Service");
        
        const books = await Book.find({ createdBy: req.user.userId });
        
        logger.info("END: Get Books Service");
        successResponse(res, StatusCodes.OK, { books });

    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export default getBooks;