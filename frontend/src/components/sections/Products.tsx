export function ProductsSection() {
    return (
      <section className="py-20">
        <h2 className="text-2xl font-semibold mb-6">Products</h2>
  
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border p-6">
            <h3 className="text-lg font-semibold">QAYAM</h3>
            <p className="mt-2 text-sm text-slate-600">
              A booking marketplace for stays across Pakistan, built for local
              travelers and property owners.
            </p>
          </div>
  
          <div className="rounded-xl border p-6">
            <h3 className="text-lg font-semibold">QAYAM HMS</h3>
            <p className="mt-2 text-sm text-slate-600">
              A modern hotel management system for operations, bookings,
              accounting, and reporting.
            </p>
          </div>
        </div>
      </section>
    );
  }
  