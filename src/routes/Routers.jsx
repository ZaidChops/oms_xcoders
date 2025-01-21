import { Switch, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard.jsx";
import Enquires from "../components/Enquires.jsx";
import AddEnquiry from "../components/AddEnquiry.jsx";
import CourseForm from "../courseComponents/CourseForm.jsx";
import Courses from "../components/Courses.jsx";
import PreviewEnquiry from "../components/previewEnquiry.jsx";

const Routers = () => {
  return (
    <>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/enquires" component={Enquires} />
        <Route path="/addEnquires" component={AddEnquiry} />
        <Route path="/courses" component={Courses} />
        <Route path="/addCourses" component={CourseForm} />
        <Route path="/previewEnquires" component={PreviewEnquiry} />
      </Switch>
    </>
  );
};

export default Routers;
