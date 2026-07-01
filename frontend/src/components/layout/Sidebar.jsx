import { NavLink } from "react-router-dom";
import { BarChart2, ClipboardCheck, FileSpreadsheet, LayoutDashboard, Package, Settings } from "lucide-react";
import { useAuth } from "../../context/AuthContext.jsx";
import { roleLabel } from "../../data/taskConfig.js";

const navItems = [
  { label: "Dashboard", to: "/app", icon: LayoutDashboard, end: true },
  { label: "Products", to: "/app/products", icon: Package },
  { label: "Tasks & Notes", to: "/app/tasks", icon: ClipboardCheck },
  { label: "Analytics", to: "/app/analytics", icon: BarChart2 },
  { label: "Records", to: "/app/records", icon: FileSpreadsheet },
  { label: "Settings", to: "/app/settings", icon: Settings }
];

export default function Sidebar({ isOpen, onClose }) {
  const { account } = useAuth();

  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-slate-950/40 transition md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-slate-200 bg-white transition-transform md:static md:z-auto md:w-64 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center gap-3 border-b border-slate-200 px-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-sm font-extrabold text-white">
            NF
          </div>
          <div>
            <p className="text-sm font-extrabold text-slate-950">Ninja Inventory</p>
            <p className="text-xs font-medium text-slate-500">Inventory Management</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  }`
                }
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="border-t border-slate-200 p-4">
          <div className="rounded-lg bg-soft p-3">
            <p className="text-sm font-bold text-slate-950">{account?.name}</p>
            <p className="mt-1 text-xs text-slate-500">{roleLabel(account?.role)} account signed in.</p>
          </div>
        </div>
      </aside>
    </>
  );
}
