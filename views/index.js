import { VIEWS } from "../env";
import Home from "./Home";
import Loading from "./Loading";
import Register from "./Register";
import Users from "./Users";

export default {
    [VIEWS.HOME]: <Home />,
    [VIEWS.LOADING]: <Loading />,
    [VIEWS.REGISTER]: <Register />,
    [VIEWS.USERS]: <Users />
}