import { Switch, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard.jsx";
import Enquires from "../components/Enquires.jsx";
import CourseForm from "../courseComponents/CourseForm.jsx";
import Courses from "../components/Courses.jsx";

const Routers = () => {
  return (
    <>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/enquires" component={Enquires} />
        <Route path="/courses" component={Courses} />
        <Route path="/addCourses" component={CourseForm} />
      </Switch>
    </>
  );
};

export default Routers;
