import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
	const [token, setToken] = useState("");
	// const [load, setLoad] = useState(false);
	useEffect(() => {
		const getToken = async () => {
			//setLoad(true);
			const email = user?.user?.email;
			if (email) {
				const { data } = await axios.post(
					"https://intense-wave-00513.herokuapp.com/login",
					{
						email: email,
					}
				);
				setToken(data.accessToken);
				localStorage.setItem("accessToken", data.accessToken);
				// if (data?.accessToken) {
				// 	setLoad(false);
				// }
			}
		};
		getToken();
	}, [user]);
	return [token];
};

export default useToken;
