import { Switch, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard.jsx";

import CoursesList from "../components/courses/CoursesList.jsx";
import EnquiryList from "../components/enquiries/EnquiryList.jsx";
import TrainersList from "../components/trainers/TrainersList.jsx";
import AdmissionList from "../components/admission/AdmissionList.jsx";

const Routers = () => {
  return (
    <>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        {/* <Route path="/enquiries" component={Enquires1} /> */}
        <Route path="/enquires" component={EnquiryList} />
        <Route path="/courses" component={CoursesList} />
        <Route path="/trainers" component={TrainersList} />
        <Route path="/admissions" component={AdmissionList} />
      </Switch>
    </>
  );
};

export default Routers;
