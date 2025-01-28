import { Switch, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard.jsx";
import Enquires from "../components/Enquiry/Enquires.jsx";

import Courses from "../components/courseComponents/Courses.jsx";
import Trainers from "../components/Trainers.jsx";

const Routers = () => {
  return (
    <>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/enquires" component={Enquires} />
        <Route path="/courses" component={Courses} />
        <Route path="/trainers" component={Trainers} />
      </Switch>
    </>
  );
};

export default Routers;
