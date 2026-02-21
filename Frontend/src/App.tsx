import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import CHEWDashboard from "./pages/CHEWDashboard";
import NewPatient from "./pages/NewPatient";
import PatientResult from "./pages/PatientResult";
import DoctorPatientView from "./pages/DoctorPatientView";
import Leaderboard from "./pages/Leaderboard";
import PatientDashboard from "./pages/PatientDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chew/dashboard" element={<CHEWDashboard />} />
          <Route path="/chew/new-patient" element={<NewPatient />} />
          <Route path="/chew/patient-result" element={<PatientResult />} />
          <Route path="/doctor/patient/:id" element={<DoctorPatientView />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/patient/dashboard" element={<PatientDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
