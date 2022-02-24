import { baseService } from "./baseService";

class UserServices extends baseService {
  login = (user) => this.post("/auth/login", user);
}
export const userService = new UserServices();
