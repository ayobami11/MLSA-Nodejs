import express from "express";

import verifyAccessToken from "../middleware/verifyAccessToken.js";

import getBook from "../controllers/book/getBook.js";
import getBooks from "../controllers/book/getBooks.js";
import addBook from "../controllers/book/addBook.js";
import updateBook from "../controllers/book/updateBook.js";
import deleteBook from "../controllers/book/deleteBook.js";

const bookRouter = express.Router();

bookRouter.get("/", verifyAccessToken, getBooks);
bookRouter.get("/:id", verifyAccessToken, getBook);

bookRouter.post("/", verifyAccessToken, addBook);

bookRouter.patch("/:id", verifyAccessToken, updateBook);

bookRouter.delete("/:id", verifyAccessToken, deleteBook);

export default bookRouter;