import { jwtVerify } from 'jose';

export default async function verifyToken(token: string): Promise<{ valid: boolean, decoded?: any }> {
  try {
    const actualToken = token.startsWith('Bearer ') ? token.slice(7) : token;
    
    const secret = new TextEncoder().encode("0123456789-0123456789-0123456789");
    const { payload } = await jwtVerify(actualToken, secret, {
      algorithms: ["HS256"]
    });
    
    return { valid: true, decoded: payload };
  } catch (err) {
    console.error("Token verification failed:", err);
    return { valid: false };
  }
}