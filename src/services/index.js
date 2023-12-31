import $api from "../http/$api";

export default class Service {
	static getProfiles =  (offset, count) => {
		return $api.get(`/users?offset=${offset}&count=${count}`);
	};
	static getPositions = () => {
		return $api.get("/positions");
	};
	static getToken = () => {
		return $api.get("/token");
	};
	static registerUser = (Token, data) => {
		return $api.post("/users", data, {headers:{Token,"content-type": "multipart/form-data"}});
	};
}
