import { Switch, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard.jsx";
import Enquires from "../components/Enquires.jsx";
import AddEnquiry from "../components/AddEnquiry.jsx";
import CourseForm from "../courseComponents/CourseForm.jsx";
import Courses from "../components/Courses.jsx";
import showEnquiry from "../components/showEnquiry.jsx";

const Routers = () => {
  return (
    <>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/enquires" component={Enquires} />
        <Route path="/addEnquires" component={AddEnquiry} />
        <Route path="/courses" component={Courses} />
        <Route path="/addCourses" component={CourseForm} />
        <Route path="/showEnquires" component={showEnquiry} />
      </Switch>
    </>
  );
};

export default Routers;
