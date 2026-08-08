import dotenv from "dotenv";

dotenv.config();

export const adminOnly = (req, res, next) => {
  if (!req.user?.email) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (req.user.email !== process.env.ADMIN_EMAIL) {
    return res.status(403).json({ error: "Admin access required" });
  }

  next();
};
