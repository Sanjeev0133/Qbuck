import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Lock, Download, RefreshCw, Mail, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const STORAGE_KEY = "qb_admin_password";

function fmtDate(iso) {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default function AdminPage() {
  const [password, setPassword] = useState(() => {
    try { return sessionStorage.getItem(STORAGE_KEY) || ""; } catch { return ""; }
  });
  const [authed, setAuthed] = useState(false);
  const [stats, setStats] = useState(null);
  const [tab, setTab] = useState("waitlist");
  const [data, setData] = useState({ waitlist: null, contacts: null });
  const [loading, setLoading] = useState(false);

  const headers = { "X-Admin-Password": password };

  const login = async (e) => {
    e?.preventDefault?.();
    if (!password) {
      toast.error("Enter the admin password");
      return;
    }
    setLoading(true);
    try {
      const { data: s } = await axios.get(`${API}/admin/stats`, { headers });
      setStats(s);
      setAuthed(true);
      try { sessionStorage.setItem(STORAGE_KEY, password); } catch {}
      await Promise.all([fetchCollection("waitlist"), fetchCollection("contacts")]);
      toast.success("Authenticated.");
    } catch (err) {
      const status = err?.response?.status;
      if (status === 401) toast.error("Wrong password");
      else if (status === 503) toast.error("Admin password not configured on the server");
      else toast.error("Couldn't connect");
    } finally {
      setLoading(false);
    }
  };

  const fetchCollection = async (collection) => {
    try {
      const { data: r } = await axios.get(`${API}/admin/data`, { headers, params: { collection } });
      setData((d) => ({ ...d, [collection]: r.rows }));
    } catch {
      toast.error(`Couldn't load ${collection}`);
    }
  };

  const refresh = async () => {
    setLoading(true);
    try {
      const { data: s } = await axios.get(`${API}/admin/stats`, { headers });
      setStats(s);
      await Promise.all([fetchCollection("waitlist"), fetchCollection("contacts")]);
      toast.success("Refreshed");
    } finally {
      setLoading(false);
    }
  };

  const downloadCsv = (collection) => {
    const url = `${API}/admin/export.csv?collection=${collection}&password=${encodeURIComponent(password)}`;
    window.open(url, "_blank");
  };

  const logout = () => {
    setAuthed(false);
    setPassword("");
    setData({ waitlist: null, contacts: null });
    setStats(null);
    try { sessionStorage.removeItem(STORAGE_KEY); } catch {}
  };

  // ---------- Login screen ----------
  if (!authed) {
    return (
      <section className="min-h-screen bg-sand-light flex items-center justify-center px-6 pt-32 pb-20" data-testid="admin-login">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={login}
          className="w-full max-w-md bg-white border border-black/10 rounded-4xl p-8 md:p-10 shadow-sm"
        >
          <div className="w-12 h-12 rounded-2xl bg-olive/10 flex items-center justify-center mb-6">
            <Lock className="w-5 h-5 text-olive" />
          </div>
          <p className="text-xs uppercase tracking-[0.22em] text-olive font-semibold">QuickBuck</p>
          <h1 className="mt-2 font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight">
            Admin
          </h1>
          <p className="text-ink/60 mt-3 leading-relaxed">
            View waitlist signups and contact form submissions. Password is set in <code className="text-[12px] bg-sand px-1.5 py-0.5 rounded">backend/.env</code>.
          </p>

          <label className="block mt-7 text-xs uppercase tracking-[0.18em] text-ink/55 font-semibold">Admin password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            data-testid="admin-password-input"
            className="mt-2 w-full bg-sand-light border border-black/10 rounded-2xl px-4 py-3.5 outline-none focus:border-olive focus:bg-white transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            data-testid="admin-login-btn"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-ink text-sand-light rounded-full px-6 py-4 font-semibold hover:bg-olive transition-colors disabled:opacity-60"
          >
            {loading ? "Checking…" : "Sign in"}
          </button>
        </motion.form>
      </section>
    );
  }

  // ---------- Dashboard ----------
  const rows = data[tab] || [];

  return (
    <section className="min-h-screen bg-sand-light pt-32 md:pt-40 pb-32 px-6 md:px-10 lg:px-14" data-testid="admin-dashboard">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-olive font-semibold">QuickBuck Admin</p>
            <h1 className="mt-3 font-display font-bold leading-[0.95] tracking-[-0.035em]"
                style={{ fontSize: "clamp(36px, 5.5vw, 80px)" }}>
              Your data. <span className="text-olive">Live.</span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={refresh} disabled={loading} data-testid="admin-refresh-btn"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm font-medium hover:border-olive transition-colors disabled:opacity-50">
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} /> Refresh
            </button>
            <button onClick={logout} data-testid="admin-logout-btn"
              className="inline-flex items-center rounded-full bg-ink text-sand-light px-4 py-2.5 text-sm font-medium hover:bg-olive transition-colors">
              Sign out
            </button>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { id: "waitlist", label: "Waitlist signups", value: stats?.waitlist, icon: Mail },
            { id: "contacts", label: "Contact submissions", value: stats?.contacts, icon: MessageSquare },
          ].map((s) => (
            <button
              key={s.id}
              onClick={() => setTab(s.id)}
              data-testid={`admin-stat-${s.id}`}
              className={`text-left p-7 rounded-3xl border transition-all ${
                tab === s.id
                  ? "bg-ink text-sand-light border-ink"
                  : "bg-white border-black/10 hover:border-olive"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className={`text-xs uppercase tracking-[0.22em] font-semibold ${tab === s.id ? "text-olive-light" : "text-olive"}`}>{s.label}</p>
                  <p className="font-display font-bold text-5xl md:text-6xl tracking-[-0.04em] mt-3">{s.value ?? "—"}</p>
                </div>
                <s.icon className={`w-5 h-5 ${tab === s.id ? "text-olive-light" : "text-olive"}`} />
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); downloadCsv(s.id); }}
                data-testid={`admin-csv-${s.id}`}
                className={`mt-6 inline-flex items-center gap-2 text-sm font-medium rounded-full px-4 py-2 transition-colors ${
                  tab === s.id ? "bg-sand-light/15 hover:bg-olive text-sand-light" : "bg-sand hover:bg-olive hover:text-sand-light text-ink"
                }`}
              >
                <Download className="w-3.5 h-3.5" /> Download CSV
              </button>
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="mt-10 bg-white border border-black/10 rounded-4xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {tab === "waitlist" ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" data-testid="admin-waitlist-table">
                    <thead className="bg-sand-light/70 text-ink/55 uppercase text-[11px] tracking-[0.18em]">
                      <tr>
                        <th className="text-left px-6 py-4 font-semibold">When</th>
                        <th className="text-left px-6 py-4 font-semibold">Email</th>
                        <th className="text-left px-6 py-4 font-semibold">Role</th>
                        <th className="text-left px-6 py-4 font-semibold">Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(rows || []).map((r) => (
                        <tr key={r.id} className="border-t border-black/5 hover:bg-sand-light/40">
                          <td className="px-6 py-4 text-ink/65 whitespace-nowrap">{fmtDate(r.created_at)}</td>
                          <td className="px-6 py-4 font-medium">{r.email}</td>
                          <td className="px-6 py-4"><span className="inline-flex px-2.5 py-1 rounded-full bg-olive/10 text-olive text-[11px] font-semibold uppercase tracking-[0.14em]">{r.role}</span></td>
                          <td className="px-6 py-4 text-ink/60">{r.source}</td>
                        </tr>
                      ))}
                      {(rows || []).length === 0 && (
                        <tr><td colSpan={4} className="px-6 py-16 text-center text-ink/50">No signups yet.</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" data-testid="admin-contacts-table">
                    <thead className="bg-sand-light/70 text-ink/55 uppercase text-[11px] tracking-[0.18em]">
                      <tr>
                        <th className="text-left px-6 py-4 font-semibold">When</th>
                        <th className="text-left px-6 py-4 font-semibold">Name</th>
                        <th className="text-left px-6 py-4 font-semibold">Email</th>
                        <th className="text-left px-6 py-4 font-semibold">Subject</th>
                        <th className="text-left px-6 py-4 font-semibold">Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(rows || []).map((r) => (
                        <tr key={r.id} className="border-t border-black/5 hover:bg-sand-light/40 align-top">
                          <td className="px-6 py-4 text-ink/65 whitespace-nowrap">{fmtDate(r.created_at)}</td>
                          <td className="px-6 py-4 font-medium">{r.name}</td>
                          <td className="px-6 py-4">{r.email}</td>
                          <td className="px-6 py-4 text-ink/70">{r.subject}</td>
                          <td className="px-6 py-4 text-ink/65 max-w-md whitespace-pre-wrap">{r.message}</td>
                        </tr>
                      ))}
                      {(rows || []).length === 0 && (
                        <tr><td colSpan={5} className="px-6 py-16 text-center text-ink/50">No contact messages yet.</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-6 text-xs text-ink/45">
          Showing the latest {tab === "waitlist" ? data.waitlist?.length || 0 : data.contacts?.length || 0} entries.
          Data lives in the QuickBuck pod's MongoDB. For permanent storage that survives redeploys, migrate to MongoDB Atlas.
        </p>
      </div>
    </section>
  );
}
