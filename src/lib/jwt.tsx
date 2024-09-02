import jwt from "jsonwebtoken";

export const jwtSignIn = async (id: string) => {
  const secret = process.env.JWT_SECRET as string;
  const token = jwt.sign(id, secret, { expiresIn: "6d" });
  return token;
};

export const jwtVerify = (token: any) => {
  try {
    const secret = process.env.JWT_SECRET as string;
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
};
