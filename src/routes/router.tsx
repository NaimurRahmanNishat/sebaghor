import App from "@/App";
import ShebaBlog from "@/pages/blog/ShebaBlog";
import Doctor from "@/pages/doctor/Doctor";
import Home from "@/pages/home/Home";
import Hospital from "@/pages/hospital/Hospital";
import HospitalRegistration from "@/pages/registration/hospital/Hospital";
import DoctorRegistration from "@/pages/registration/doctor/Doctor";
import { createBrowserRouter } from "react-router";
import Agent from "@/pages/registration/agent/Agent";
import Diagnostic from "@/pages/registration/diagnostic/Diagnostic";
import Insurance from "@/pages/registration/insurance/Insurance";
import Nurse from "@/pages/registration/nurse/Nurse";
import Login from "@/components/shared/Login";
import About from "@/pages/about/About";
import Contact from "@/pages/contact/Contact";
import Privacy from "@/pages/privacy/Privacy";
import Terms from "@/pages/terms/Terms";
import Refund from "@/pages/refund/Refund";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/doctor",
        element: <Doctor/>,
      },
      {
        path: "/hospital",
        element: <Hospital/>,
      },
      {
        path: "/blog",
        element: <ShebaBlog/>,
      },
      {
        path: "/registration/hospital",
        element: <HospitalRegistration/>,
      },
      {
        path: "/registration/doctor",
        element: <DoctorRegistration/>,
      },
      {
        path: "/registration/agent",
        element: <Agent/>,
      },
      {
        path: "/registration/diagnostic",
        element:<Diagnostic/>
      },
      {
        path: "/registration/insurance",
        element:<Insurance/>
      },
      {
        path: "/registration/nurse",
        element:<Nurse/>
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/privacy",
        element: <Privacy/>
      },
      {
        path: "/terms",
        element: <Terms/>
      },
      {
        path: "/refund",
        element: <Refund/>
      }
    ],
  },
  {
    path: "/login",
    element: <Login/>
  },
]);

export default router;
