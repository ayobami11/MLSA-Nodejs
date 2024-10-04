import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const hashPassword = (password) => {
    const saltRounds = bcrypt.genSaltSync(10);

    return bcrypt.hashSync(password, saltRounds);
}

export const isPasswordValid = (plainPassword, hashedPassword) => {
    return bcrypt.compareSync(plainPassword, hashedPassword);
}

export const createAccessToken = (userId) => {
    const accessToken = jwt.sign({ userId }, process.env.JWT_SECRET_2, {
        expiresIn: process.env.JWT_LIFETIME_2
    });

    return accessToken;
}

export const isAccessTokenValid = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET_2);
}