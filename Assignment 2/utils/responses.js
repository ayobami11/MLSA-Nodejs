export const errorResponse = (res, statusCode, error) => {
    res.status(statusCode).json({ status: "error", error });
}

export const successResponse = (res, statusCode, message, data = null) => {
    res.status(statusCode).json({
        status: "success",
        message,
        data
    })
}