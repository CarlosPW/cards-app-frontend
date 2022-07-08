import Cookies from "js-cookie";

export const configHeaders = {
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
};
