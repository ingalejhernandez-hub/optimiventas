import { useMemo, useState } from "react";
import Landing from "./components/Landing.jsx";
import Login from "./components/Login.jsx";
import AppNav from "./components/AppNav.jsx";
import Resumen from "./components/Resumen.jsx";
import Leads from "./components/Leads.jsx";
import Seguimiento from "./components/Seguimiento.jsx";
import Agenda from "./components/Agenda.jsx";
import CommissionViews from "./components/Commissions.jsx";
import Seguridad from "./components/Seguridad.jsx";
import Asignaciones from "./components/Asignaciones.jsx";
import { disbursements } from "./data/mockData.js";
import { getCommissionSummary } from "./utils.js";

function currentInitialRoute() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/admin") return { route: "app", role: "admin", view: "resumen" };
  if (path === "/asesor") return { route: "app", role: "employee", view: "resumen" };
  if (path === "/login") return { route: "login", role: null, view: "resumen" };
  return { route: "landing", role: null, view: "resumen" };
}

export default function App() {
  const initial = currentInitialRoute();
  const [route, setRoute] = useState(initial.route);
  const [role, setRole] = useState(initial.role);
  const [view, setView] = useState(initial.view);

  const commissionSummary = useMemo(() => getCommissionSummary(disbursements), []);

  function navigate(path, nextRoute, nextRole = null, nextView = "resumen") {
    window.history.pushState({}, "", path);
    setRoute(nextRoute);
    setRole(nextRole);
    setView(nextView);
  }

  if (route === "landing") {
    return <Landing goLogin={() => navigate("/login", "login")} />;
  }

  if (route === "login" || !role) {
    return (
      <Login
        onLogin={(nextRole) => {
          const path = nextRole === "admin" ? "/admin" : "/asesor";
          navigate(path, "app", nextRole, "resumen");
        }}
      />
    );
  }

  return (
    <div className="app">
      <AppNav
        role={role}
        view={view}
        setView={setView}
        onLogout={() => navigate("/login", "login")}
      />

      <main className="main">
        {view === "resumen" && <Resumen role={role} commissionSummary={commissionSummary} />}
        {view === "leads" && <Leads role={role} />}
        {view === "seguimiento" && <Seguimiento />}
        {view === "agenda" && <Agenda role={role} />}
        {view === "desembolsos" && <CommissionViews view="desembolsos" summary={commissionSummary} />}
        {view === "asignaciones" && role === "admin" && <Asignaciones />}
        {view === "comisiones" && role === "admin" && <CommissionViews view="comisiones" summary={commissionSummary} />}
        {view === "seguridad" && <Seguridad role={role} />}
      </main>
    </div>
  );
}
