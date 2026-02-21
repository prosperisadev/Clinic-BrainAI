import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  TrendingUp,
  TrendingDown,
  Minus,
  Sparkles,
  Shield,
  Phone,
  HeartPulse,
  Thermometer,
  Droplets,
  Activity,
  CalendarDays,
  UserCheck,
  AlertCircle,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const bpData = [
  { date: "Jan", systolic: 125, diastolic: 82 },
  { date: "Feb", systolic: 130, diastolic: 85 },
  { date: "Mar", systolic: 128, diastolic: 80 },
  { date: "Apr", systolic: 135, diastolic: 88 },
  { date: "May", systolic: 132, diastolic: 86 },
];

const hrData = [
  { date: "Jan", hr: 72 },
  { date: "Feb", hr: 78 },
  { date: "Mar", hr: 70 },
  { date: "Apr", hr: 85 },
  { date: "May", hr: 76 },
];

const tempData = [
  { date: "Jan", temp: 36.8 },
  { date: "Feb", temp: 37.0 },
  { date: "Mar", temp: 36.9 },
  { date: "Apr", temp: 38.5 },
  { date: "May", temp: 37.1 },
];

const TrendArrow = ({ trend }: { trend: "up" | "down" | "stable" }) => {
  if (trend === "up") return <TrendingUp className="w-4 h-4 text-danger" />;
  if (trend === "down") return <TrendingDown className="w-4 h-4 text-success" />;
  return <Minus className="w-4 h-4 text-muted-foreground" />;
};

const preventiveTips = [
  {
    icon: "🚶",
    tip: "Try walking for 20 minutes daily to improve your heart health.",
  },
  {
    icon: "💧",
    tip: "Drink more water during the day — at least 6 cups.",
  },
  {
    icon: "🧂",
    tip: "Reduce salty foods to help your blood pressure stay normal.",
  },
  {
    icon: "🛏️",
    tip: "Try to sleep for at least 7 hours every night.",
  },
  {
    icon: "🏥",
    tip: "If you feel severe pain or difficulty breathing, visit a clinic early.",
  },
];

const PatientDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="hero-gradient px-4 pt-6 pb-10 rounded-b-3xl">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <button onClick={() => navigate("/")}>
              <ArrowLeft className="w-5 h-5 text-primary-foreground" />
            </button>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary-foreground" />
              <span className="font-bold text-primary-foreground">CHEWLink</span>
            </div>
          </div>
          <h1 className="text-xl font-bold text-primary-foreground">
            Hello, Bola 👋
          </h1>
          <p className="text-primary-foreground/80 text-sm mt-1">
            Your health data is helping you prevent future illness.
          </p>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 -mt-6 pb-8 space-y-5">
        {/* Section 1: My Health Snapshot */}
        <div className="bg-card rounded-xl p-5 card-shadow animate-scale-in">
          <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" /> My Health Snapshot
          </h2>

          {/* Risk Explanation */}
          <div className="bg-warning/10 border border-warning/30 rounded-xl p-4 mb-4">
            <p className="text-sm font-semibold text-warning-foreground mb-1">Medium Risk</p>
            <p className="text-sm text-foreground leading-relaxed">
              Your last check showed high temperature and fast heartbeat. This means you should rest and visit a clinic if it continues.
            </p>
          </div>

          {/* Vitals Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { label: "Blood Pressure", value: "135/88", icon: HeartPulse, color: "text-danger" },
              { label: "Heart Rate", value: "85 bpm", icon: Activity, color: "text-primary" },
              { label: "Temperature", value: "37.1°C", icon: Thermometer, color: "text-accent" },
              { label: "Oxygen", value: "97%", icon: Droplets, color: "text-primary" },
            ].map((v) => (
              <div key={v.label} className="bg-secondary/50 rounded-xl p-3 text-center">
                <v.icon className={`w-5 h-5 mx-auto mb-1 ${v.color}`} />
                <p className="text-lg font-bold text-foreground">{v.value}</p>
                <p className="text-xs text-muted-foreground">{v.label}</p>
              </div>
            ))}
          </div>

          {/* Last Visit Info */}
          <div className="flex items-center gap-3 bg-secondary/30 rounded-xl p-3">
            <CalendarDays className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <div className="text-sm">
              <p className="text-foreground">
                <span className="font-medium">Last visit:</span> May 2024
              </p>
              <p className="text-muted-foreground flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5" /> Checked by Amina B.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: My Health Trends */}
        <div className="bg-card rounded-xl p-5 card-shadow animate-fade-in">
          <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" /> My Health Trends
          </h2>

          {/* Simple trend indicators */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-secondary/50 rounded-xl p-3 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <TrendArrow trend="up" />
                <span className="text-xs font-medium text-danger">Going Up</span>
              </div>
              <p className="text-xs text-muted-foreground">Blood Pressure</p>
            </div>
            <div className="bg-secondary/50 rounded-xl p-3 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <TrendArrow trend="stable" />
                <span className="text-xs font-medium text-muted-foreground">Stable</span>
              </div>
              <p className="text-xs text-muted-foreground">Heart Rate</p>
            </div>
            <div className="bg-secondary/50 rounded-xl p-3 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <TrendArrow trend="down" />
                <span className="text-xs font-medium text-success">Going Down</span>
              </div>
              <p className="text-xs text-muted-foreground">Temperature</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            Your blood pressure has been increasing slowly. Try to reduce salt and rest more.
          </p>

          {/* BP Chart */}
          <div className="mb-4">
            <h3 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
              Blood Pressure Over Time
            </h3>
            <ResponsiveContainer width="100%" height={140}>
              <LineChart data={bpData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(40, 15%, 88%)" />
                <XAxis dataKey="date" tick={{ fontSize: 11 }} stroke="hsl(150,10%,45%)" />
                <YAxis tick={{ fontSize: 11 }} stroke="hsl(150,10%,45%)" />
                <Tooltip />
                <Line type="monotone" dataKey="systolic" stroke="hsl(0,72%,51%)" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="diastolic" stroke="hsl(155,100%,27%)" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* HR Chart */}
          <div className="mb-4">
            <h3 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
              Heart Rate Over Time
            </h3>
            <ResponsiveContainer width="100%" height={140}>
              <LineChart data={hrData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(40, 15%, 88%)" />
                <XAxis dataKey="date" tick={{ fontSize: 11 }} stroke="hsl(150,10%,45%)" />
                <YAxis tick={{ fontSize: 11 }} stroke="hsl(150,10%,45%)" />
                <Tooltip />
                <Line type="monotone" dataKey="hr" stroke="hsl(155,100%,27%)" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Temp Chart */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
              Temperature Over Time
            </h3>
            <ResponsiveContainer width="100%" height={140}>
              <LineChart data={tempData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(40, 15%, 88%)" />
                <XAxis dataKey="date" tick={{ fontSize: 11 }} stroke="hsl(150,10%,45%)" />
                <YAxis domain={[36, 40]} tick={{ fontSize: 11 }} stroke="hsl(150,10%,45%)" />
                <Tooltip />
                <Line type="monotone" dataKey="temp" stroke="hsl(35,90%,55%)" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Section 3: AI Preventive Advice */}
        <div className="bg-card rounded-xl p-5 card-shadow animate-fade-in">
          <h2 className="font-semibold text-foreground mb-1 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" /> Daily Health Tips for You
          </h2>
          <p className="text-xs text-muted-foreground mb-4">
            Based on your health data, here are simple things you can do
          </p>

          <div className="space-y-3">
            {preventiveTips.map((t, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-secondary/30 rounded-xl p-3"
              >
                <span className="text-2xl flex-shrink-0">{t.icon}</span>
                <p className="text-sm text-foreground leading-relaxed">{t.tip}</p>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-4 bg-muted/50 rounded-xl p-3 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              This advice is not a diagnosis. Always see a doctor if you feel unwell. These tips are to help you stay healthy.
            </p>
          </div>
        </div>

        {/* Section 4: Emergency & Coverage */}
        <div className="bg-card rounded-xl p-5 card-shadow animate-fade-in">
          <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" /> Emergency & Coverage
          </h2>

          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-secondary/30 rounded-xl p-3">
              <Phone className="w-5 h-5 text-danger flex-shrink-0" />
              <div className="text-sm">
                <p className="text-muted-foreground">Emergency Contact</p>
                <p className="font-medium text-foreground">Mama Bola — 0803-456-7890</p>
                <p className="text-xs text-muted-foreground">Mother</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-secondary/30 rounded-xl p-3">
              <UserCheck className="w-5 h-5 text-primary flex-shrink-0" />
              <div className="text-sm">
                <p className="text-muted-foreground">Guarantor</p>
                <p className="font-medium text-foreground">Alhaji Yusuf — 0802-345-6789</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-secondary/30 rounded-xl p-3">
              <Shield className="w-5 h-5 text-success flex-shrink-0" />
              <div className="text-sm">
                <p className="text-muted-foreground">Insurance</p>
                <p className="font-medium text-foreground">NHIS (Government Insurance)</p>
                <p className="text-xs text-muted-foreground">NHF-340291</p>
              </div>
            </div>
          </div>

          {/* Show to Hospital Button */}
          <Button
            className="w-full h-12 text-base font-semibold rounded-xl mt-4"
            variant="outline"
          >
            <Building2 className="w-5 h-5 mr-2" />
            Show This Page to a Hospital
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;