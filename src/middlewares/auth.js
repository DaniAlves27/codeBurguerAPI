import jwt from "jsonwebtoken";
import authConfig from "../config/auth";


function authMiddlewares(request, response, next) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ error: "Token não encontrado!" });
  }

  const token = authToken.split(" ").at(1);

  try {
    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) {
        throw new Error();
      }
      console.log(decoded);

      request.UserId = decoded.id;

    });
  } catch (err) {
    return response.status(401).json({ error: "Token is invaled" });
  }
  return next();
}

export default authMiddlewares;
