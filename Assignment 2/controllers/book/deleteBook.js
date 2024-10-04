import logger from "../../utils/logger.js";

import { StatusCodes } from "http-status-codes";
import { successResponse, errorResponse } from "../../utils/responses.js";


import Book from "../../models/book.js";

const deleteBook = async (req, res, next) => {
    try {
        logger.info("START: Delete Book Service");

        const bookToDelete = await Book.findOneAndDelete({ _id: req.params.id, createdBy: req.user.userId });

        if (!bookToDelete) {
            logger.info("END: Delete Book Service");
            errorResponse(res, StatusCodes.NOT_FOUND, { message: "Book does not exist." });
            return;
        }
        
        logger.info("END: Delete Book Service");
        successResponse(res, StatusCodes.OK, { message: "Book deleted successfully." });
        
    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export default deleteBook;