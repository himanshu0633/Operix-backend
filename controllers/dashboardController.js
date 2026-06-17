export function getDashboardOverview(_req, res) {
  res.json({
    metrics: {
      totalTenants: 248,
      activeUsers: 18420,
      monthlyRevenue: 92700,
      uptime: 99.98,
    },
    tenants: [
      { id: "ten_nexora", name: "Nexora Retail", plan: "Enterprise", users: 1240, status: "Active" },
      { id: "ten_finlane", name: "Finlane Ops", plan: "Business", users: 860, status: "Review" },
      { id: "ten_atlas", name: "Atlas Clinics", plan: "Enterprise", users: 2150, status: "Active" },
    ],
    auditLog: [
      { id: "aud_001", event: "Billing webhook retried", severity: "info" },
      { id: "aud_002", event: "New admin role created", severity: "notice" },
      { id: "aud_003", event: "Tenant usage spike", severity: "warning" },
    ],
  });
}
