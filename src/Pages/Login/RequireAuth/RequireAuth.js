import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Spinner from "../../SmallComponents/Spinner/Spinner";

const RequireAuth = ({ children }) => {
	const [user, loadding] = useAuthState(auth);
	const location = useLocation();
	if (loadding) {
		return (
			<div
				className="flex justify-center items-center"
				style={{ minHeight: "50vh" }}
			>
				<Spinner />
			</div>
		);
	}
	if (!user) {
		return <Navigate to={"/login"} state={{ from: location }} replace />;
	}
	return children;
};

export default RequireAuth;
