import jwt from "jsonwebtoken";

import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import { Token } from "@typescript-eslint/types/dist/generated/ast-spec";

// export const isValidToken = (token: string): Promise<string> => {
//   if (!process.env.JWT_SECRET) {
//     throw new Error("No hay semilla de JWT - Revisar variables de entorno");
//   }

//   if (token.length <= 10) {
//     return Promise.reject("JWT no es válido");
//   }

//   return new Promise((resolve, reject) => {
//     try {
//       jwt.verify(
//         token,
//         process.env.JWT_SECRET || "",
//         (err: any, payload: any) => {
//           if (err) return reject("JWT no es válido");

//           const { _id } = payload as { _id: string };

//           resolve(_id);
//         }
//       );
//     } catch (error) {
//       reject("JWT no es válido");
//     }
//   });
// };

//

export async function sign(payload: string, secret: string): Promise<string> {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60; // one hour

  return new SignJWT({ payload })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(secret));
}

export async function isValidToken(token: string): Promise<JWTPayload> {
  const { payload } = await jwtVerify(
    token,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );
  // run some checks on the returned payload, perhaps you expect some specific values

  // if its all good, return it, or perhaps just return a boolean
  return payload;
}
