import api from "./api";

export const login = async (email, password) => {
    const res = await api.post("/login", {
        email,
        password,
    });
    return res.data;
};

export const register = async (data) => {
    const res = await api.post("/register", data);
    return res.data;
};

export const logout = async () => {
    return api.post("/logout");
};

export const getMe = async () => {
    return api.get("/me");
};
