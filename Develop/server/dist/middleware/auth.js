import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access token is missing or invalid' });
    }
    try {
        const secretKey = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, secretKey);
        req.user = { username: decoded.username };
        return next();
    }
    catch (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};
