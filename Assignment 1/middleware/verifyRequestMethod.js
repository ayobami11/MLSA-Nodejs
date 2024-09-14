export const verifyRequestMethod = (req, res, next) => {
    const allowedMethods = new Set(["OPTIONS", "HEAD", "CONNECT", "GET", "POST", "PUT", "DELETE", "PATCH"]);

    if (!allowedMethods.has(req.method)) {
        return res.status(405).json({message: `${req.method} not allowed.`});
    }

    return next();
}