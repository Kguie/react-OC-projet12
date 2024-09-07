import DashboardAside from "../../components/dashboardAside/DashboardAside";

export default function Dashboard() {
  return (
    <main className="dashboard">
      <DashboardAside />
      <div className="dashboard__main-wrapper">
        <p>Hello world</p>
      </div>
    </main>
  );
}
