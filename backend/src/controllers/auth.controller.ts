import User from '../models/User';
import bcrypt from 'bcrypt';
import { IUser } from '../types/User';
import jwt from 'jsonwebtoken';

/**
 *  
 */
const CheckUserExists = async (username: string) => {
    let found: boolean = false;

    if(await User.exists({username})) {
        found = true;
    }

    return found;
}

/**
 *  We need to check if the sent credentials are valid 
 *  If they are not valid, we'll throw 401
 */
const CheckCredentials = async (username: string, password: string) => {
    if(!await CheckUserExists(username)) return false;

    const userData: IUser | null = await User.findOne({username});

    if(userData) {
        const validCredentials = await bcrypt.compare(password, userData.password.toString());
        if(!validCredentials) return false;
        return true;
    }

    return false;
}

/**
 *  We use this method for getting user data
 */
const GetUser = async (username: string) => {
    if(!await CheckUserExists(username)) return undefined;

    const userData: IUser | null = await User.findOne({username});
    if(userData) {
        const returnedUser: Object = { username: userData.username, password: userData.password };
        return returnedUser;
    } else
        return undefined;
}

/**
 *  Here we are signing a JSONWebToken (JWT) with a payload.
 *  The JWT is signed with a secret key that we specified at our .ENV file
 */
const GenJWT = async (payload: Object) => {
    if(process.env.JWT_SECRET) {
        const jwtSecret: string = process.env.JWT_SECRET;
        const token: string = await jwt.sign(payload, jwtSecret);
        return token;
    } else 
        return undefined;
}

export {
    CheckUserExists,
    CheckCredentials,
    GenJWT,
    GetUser
}