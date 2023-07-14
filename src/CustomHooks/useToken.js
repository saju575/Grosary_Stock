import { useEffect, useState } from "react";
import axios from "../Function/url";

const useToken = (user) => {
  const [token, setToken] = useState("");
  // const [load, setLoad] = useState(false);
  useEffect(() => {
    const getToken = async () => {
      //setLoad(true);
      const email = user?.user?.email;
      try {
        if (email) {
          const { data } = await axios.post("/login", {
            email: email,
          });
          setToken(data.accessToken);
          localStorage.setItem("accessToken", data.accessToken);
          // if (data?.accessToken) {
          // 	setLoad(false);
          // }
        }
      } catch (error) {}
    };
    getToken();
  }, [user]);
  return [token];
};

export default useToken;
