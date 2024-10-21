import { Route, Routes } from "react-router-dom";

import routes from "./config/routes";
import Login from "./components/Authentication/Login/Login";
import AuthLayout from "./layout/AuthLayout/AuthLayout";
import ThemeToggle from "./components/common/themeToggle/ThemeToggle";
import AuthRoute from "./privateRoutes/AuthRoute/AuthRoute";
import AdminRoute from "./privateRoutes/AdminRoute/AdminRoute";
import UserRoute from "./privateRoutes/UserRoute/UserRoute";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Dashboard from "./components/Portal/Dashboard/Dashboard";

const App = () => {

  return (
    <div>
      <ThemeToggle />
      <Routes>
        <Route exact path={routes.home} element={<Home />} />
        <Route exact path={routes.auth.login} element={<AuthRoute><AuthLayout><Login /></AuthLayout></AuthRoute>} />
        <Route exact path={routes.portal.admin.dashboard} element={<AdminRoute><Dashboard /></AdminRoute>} />
        <Route exact path={routes.portal.user.dashboard} element={<UserRoute><Dashboard /></UserRoute>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
