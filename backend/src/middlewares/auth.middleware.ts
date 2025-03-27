import jwt from 'jsonwebtoken';
import { CheckCredentials } from '../controllers/auth.controller';
import { IUser } from '../types/User';

const ThrowInternalServerError = async (res: any) => {
    return res.status(500).json({message: 'Internal server error', code: 500});
}

const CheckLoginBody = async (req: any, res: any, next: any) => {
    const { username, password }: { username: string, password: string } = req.body;
    
    if(!username || !password)  return res.status(400).json({message: 'Bad request', code: 400});

    if(username.length < 5 || password.length < 5) return res.status(411).json({message: 'Length required', code: 411});

    return next();
}

const VerifyJWT = async (req: any, res: any, next: any) => {
    const authorization: string | undefined = req.headers['authorization'];

    if(authorization && authorization.toLowerCase().startsWith("bearer")) {
        const token: string = authorization.split(" ")[1];

        if(process.env.JWT_SECRET) {
            const jwtSecret: string = process.env.JWT_SECRET;

            try {
                const decodedToken: string | jwt.JwtPayload | undefined = jwt.verify(token, jwtSecret);
                if(!decodedToken)
                    return res.status(401).json({message: 'Unauthorized', code: 401});
    
                const userData: IUser =  decodedToken as IUser;
                
                if(!CheckCredentials(userData.username, userData.password)) return res.status(401).json({message: 'Unauthorized', code: 401});
                res.locals.userData = userData;
                next();

            } catch(e) {
                return res.status(401).json({message: 'Unauthorized', code: 401});
            }

        } else
            return ThrowInternalServerError(res);
    } else {
        return res.status(400).json({message: 'Bad request', code: 400});
    }

}

export {
    CheckLoginBody,
    VerifyJWT
}