import express, { Application } from "express";
import dotenv from "dotenv";
import userRoutes from "../routes/users";
import authRoutes from "../routes/auth";
// import upload from "../helpers/multer";
dotenv.config();

class Server {
  private app: Application;
  private port: string | undefined;
  private apiPaths = {
    auth: "/api/auth",
    users: "/api/usuarios",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    // this.app.use("/uploads", express.static("uploads"));
  }

  routes() {
    this.app.use(this.apiPaths.auth, authRoutes);
    this.app.use(this.apiPaths.users, userRoutes);
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Localhost: ${this.port}`);
    });
  }
}

export default Server;
