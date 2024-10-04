import { StatusCodes } from "http-status-codes";

import { successResponse, errorResponse } from "../../utils/responses.js";

import Book from "../../models/book.js";

import logger from "../../utils/logger.js";

const updateBook = async (req, res, next) => {
    try {
        logger.info("START: Update Book Service");

        const { title, author, genre } = req.body;

        const bookToUpdate = await Book.findOne({
            _id: req.params.id,
            createdBy: req.user.userId
        });

        if (!bookToUpdate) {
            logger.info("END: Update Book Service");
            errorResponse(res, StatusCodes.NOT_FOUND, { message: "Book does not exist." });
            return;
        }
        
        bookToUpdate.title = title || bookToUpdate.title;
        bookToUpdate.author = author || bookToUpdate.author;
        bookToUpdate.genre = genre || bookToUpdate.genre;
        
        await bookToUpdate.save();
        
        logger.info("END: Update Book Service");
        successResponse(res, StatusCodes.OK, { message: "Book updated successfully." })


    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export default updateBook;