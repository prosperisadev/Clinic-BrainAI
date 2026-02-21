import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Stethoscope, Users, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<"chew" | "doctor" | "patient" | null>(null);
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const [patientToken, setPatientToken] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === "chew") navigate("/chew/dashboard");
    else if (role === "doctor") navigate("/doctor/patient/1");
    else if (role === "patient") navigate("/patient/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
      <div className="w-full max-w-sm animate-fade-in">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl hero-gradient mb-4">
            <Heart className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">CHEWLink</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Connecting communities to better healthcare
          </p>
        </div>

        {/* Role Selection */}
        <div className="mb-6">
          <p className="text-sm font-medium text-foreground mb-3 text-center">
            Who are you?
          </p>
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setRole("chew")}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                role === "chew"
                  ? "border-primary bg-primary/5 card-shadow-hover"
                  : "border-border bg-card card-shadow hover:border-primary/40"
              }`}
            >
              <Users className={`w-7 h-7 ${role === "chew" ? "text-primary" : "text-muted-foreground"}`} />
              <span className={`text-sm font-semibold ${role === "chew" ? "text-primary" : "text-foreground"}`}>
                Health Worker
              </span>
              <span className="text-xs text-muted-foreground">CHEW</span>
            </button>
            <button
              type="button"
              onClick={() => setRole("doctor")}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                role === "doctor"
                  ? "border-primary bg-primary/5 card-shadow-hover"
                  : "border-border bg-card card-shadow hover:border-primary/40"
              }`}
            >
              <Stethoscope className={`w-7 h-7 ${role === "doctor" ? "text-primary" : "text-muted-foreground"}`} />
              <span className={`text-sm font-semibold ${role === "doctor" ? "text-primary" : "text-foreground"}`}>
                Doctor
              </span>
              <span className="text-xs text-muted-foreground">Physician</span>
            </button>
            <button
              type="button"
              onClick={() => setRole("patient")}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                role === "patient"
                  ? "border-primary bg-primary/5 card-shadow-hover"
                  : "border-border bg-card card-shadow hover:border-primary/40"
              }`}
            >
              <UserCircle className={`w-7 h-7 ${role === "patient" ? "text-primary" : "text-muted-foreground"}`} />
              <span className={`text-sm font-semibold ${role === "patient" ? "text-primary" : "text-foreground"}`}>
                Patient
              </span>
              <span className="text-xs text-muted-foreground">My Health</span>
            </button>
          </div>
        </div>

        {/* Login Form */}
        {role && role !== "patient" && (
          <form onSubmit={handleLogin} className="space-y-4 animate-fade-in">
            <div className="bg-card rounded-xl p-5 card-shadow space-y-4">
              <div>
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="080XXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1.5 h-12 text-base"
                />
              </div>
              <div>
                <Label htmlFor="pin" className="text-sm font-medium">
                  PIN
                </Label>
                <Input
                  id="pin"
                  type="password"
                  placeholder="Enter your 4-digit PIN"
                  maxLength={4}
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className="mt-1.5 h-12 text-base"
                />
              </div>
            </div>
            <Button type="submit" className="w-full h-12 text-base font-semibold rounded-xl">
              Sign In
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Don't have an account? Contact your supervisor
            </p>
          </form>
        )}

        {/* Patient Access Form */}
        {role === "patient" && (
          <form onSubmit={handleLogin} className="space-y-4 animate-fade-in">
            <div className="bg-card rounded-xl p-5 card-shadow space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                Enter your Health ID or phone number to see your health record
              </p>
              <div>
                <Label htmlFor="patientToken" className="text-sm font-medium">
                  Health ID or Phone Number
                </Label>
                <Input
                  id="patientToken"
                  type="text"
                  placeholder="e.g. NG-CHW-2024-00048 or 080..."
                  value={patientToken}
                  onChange={(e) => setPatientToken(e.target.value)}
                  className="mt-1.5 h-12 text-base"
                />
              </div>
            </div>
            <Button type="submit" className="w-full h-12 text-base font-semibold rounded-xl">
              View My Health
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Ask your health worker for your Health ID
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
