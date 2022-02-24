import { http } from "../setting/setting";
export class baseService {
  post = (url, data) => http.post(url, data);
}
