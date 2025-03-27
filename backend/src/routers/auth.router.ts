import { Router } from 'express';
const router = Router();

import { CheckLoginBody, VerifyJWT } from '../middlewares/auth.middleware';
import { GenJWT, CheckCredentials, GetUser } from '../controllers/auth.controller';

const ThrowInternalServerError = async (res: any) => {
    return res.status(500).json({message: 'Internal server error', code: 500});
}

router.route('/login')
.post([CheckLoginBody], async (req: any, res: any) => {
    const { username, password }: { username: string, password: string } = req.body;

    const validCredentials: boolean = await CheckCredentials(username, password);

    if(!validCredentials)
        return res.status(401).json({message: 'Unauthorized', code: 401});

    const jwtPayload: Object | undefined = await GetUser(username);

    if(!jwtPayload) return ThrowInternalServerError(res);

    const token: string | undefined = await GenJWT(jwtPayload);

    if(!token) return ThrowInternalServerError(res);

    return res.status(200).json({message: 'OK', code: 200, token});
})

export default router;