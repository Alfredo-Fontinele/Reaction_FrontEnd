import { EditProfile } from "./../pages/dashboard/edit-profile/";
import { NotFound } from "../pages/not-found-page";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Register } from "../pages/register";
import { Login } from "../pages/login";
import { Home } from "../pages/home";

export const RoutesGlobal = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path={"login"} element={<Login />} />
            <Route path={"register"} element={<Register />} />
            <Route path="dashboard" element={<Dashboard />}>
                <Route path={"profile"} element={<EditProfile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
