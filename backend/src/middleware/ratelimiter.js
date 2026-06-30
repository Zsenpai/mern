import limiter from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await limiter.limit("my-limit-key");
    if (!success) {
      return res.status(429).json({ message: "To many request" });
    }
    next();
  } catch (error) {
    console.error("Error rate limiter", error);
    next(error);
  }
};

export default rateLimiter;
