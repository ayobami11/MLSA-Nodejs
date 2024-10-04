import logger from "../../utils/logger.js";

import { StatusCodes } from "http-status-codes";
import { successResponse } from "../../utils/responses.js";


import Book from "../../models/book.js";

const addBook = async (req, res) => {
    try {
        logger.info("START: Add Book Service");
        
        const { title, author, genre } = req.body;
        const { userId } = req.user;
        
        await Book.create({
            title,
            author,
            genre,
            createdBy: userId
        });
        
        logger.info("END: Add Book Service");
        successResponse(res, StatusCodes.CREATED, { message: "New book created successfully." })

    } catch (error) {
        logger.error(error);
        next(error);
    }
}

export default addBook;