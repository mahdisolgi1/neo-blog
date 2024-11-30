export default {
  async index(ctx: any) {
    try {
      ctx.body = {
        status: "ok",
        message: "The server is running!",
      };
      ctx.status = 200;
    } catch (error) {
      ctx.body = {
        status: "error",
        message: "Healthcheck failed",
        error: error.message,
      };
      ctx.status = 500;
    }
  },
};
