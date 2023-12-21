import axios from "axios";
import {
  getSessionStorage,
  setSessionStorage,
  unsetSessionStorage,
} from "./SessionConfig";
import {SESSION} from "./Global";

export const refetchToken = async () => {
  axios({
    url: process.env.REACT_APP_BASE_API + "admin/refresh",
    method: "POST",
    headers: {
      Authorization:
        "Bearer " + getSessionStorage(SESSION.PROJECT_NAME_REFRESH_TOKEN),
    },
  })
    .then((response) => {
      setSessionStorage(
        SESSION.PROJECT_NAME_TOKEN,
        response.data.authorisation.token
      );
      setSessionStorage(SESSION.PROJECT_NAME_EMPLOYEEID, response.data.user.id);
      setSessionStorage(
        SESSION.PROJECT_NAME_REFRESH_TOKEN,
        response.data.refreshtoken.refresh_token
      );
      window.location.href = window.location.pathname;
    })
    .catch(() => {
      unsetSessionStorage();
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    });
};
