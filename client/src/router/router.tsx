import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { Layout } from "../layouts/Layout";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { MedicalReport } from "../pages/medicalReport/MedicalReport";
import { Timeline } from "../pages/timeline/Timeline";
import { Medication } from "../pages/medication/Medication";
import { AiAssistant } from "../pages/aiAssistant/AiAssistant";

import { ProtectedRoute } from "./ProtectedRoutes";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/",
    element:
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "medical-report",
        element: <MedicalReport />
      },
      {
        path: "timeline",
        element: <Timeline />
      },
      {
        path: "Medications",
        element: <Medication />
      },
      {
        path: "AI-Assistant",
        element: <AiAssistant />
      }
    ],
  }
]);