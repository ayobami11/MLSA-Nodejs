import { StatusCodes } from "http-status-codes";

const verifyRequestMethod = (req, res, next) => {
    const allowedMethods = new Set([
        'OPTIONS',
        'HEAD',
        'CONNECT',
        'GET',
        'POST',
        'PUT',
        'DELETE',
        'PATCH'
    ]);

    if (!allowedMethods.has(req.method)) {
        return res.status(StatusCodes.METHOD_NOT_ALLOWED).json({ message: `${req.method} not allowed.` });
    }

    return next();
};

export default verifyRequestMethod;
