import Pusher from "pusher-js";
import { baseUrl } from "../utils/config";

Pusher.logToConsole = false;

export default (token = null) => {
  let config = {
    cluster: "mt1",
    encrypted: true,
  };

  if (token) {
    config = {
      ...config,
      auth: {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
      authEndpoint: `${baseUrl}/en/broadcasting/auth`,
    };
  }
  return new Pusher("264659ba8048411fa7d4", config);
};
