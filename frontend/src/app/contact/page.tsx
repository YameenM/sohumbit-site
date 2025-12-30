import { Container } from "@/components/layout/Container";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <Container>
      <div className="py-20 max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          Contact
        </h1>

        <p className="mt-4 text-slate-600">
          We’re open to conversations around our products, engineering services,
          and long-term partnerships. If you’re building something serious,
          we’d be glad to hear from you.
        </p>

        <div className="mt-8 text-slate-600">
          <p className="font-medium">Good reasons to reach out:</p>
          <ul className="mt-3 space-y-1 text-sm">
            <li>• Product inquiries (QAYAM, QAYAM HMS, HisabKitab)</li>
            <li>• Custom software or systems work</li>
            <li>• Partnerships or collaborations</li>
          </ul>
        </div>

        <div className="mt-10 space-y-6">
          <div>
            <p className="text-sm text-slate-500">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="text-lg font-medium text-emerald-600 hover:underline"
            >
              {site.email}
            </a>
          </div>

          <div>
            <p className="text-sm text-slate-500">Location</p>
            <p className="text-lg">{site.location}</p>
          </div>
        </div>

        <div className="mt-12 text-sm text-slate-500">
          We typically respond within one business day.  
          Please note that we don’t provide general tech support via this channel.
        </div>
      </div>
    </Container>
  );
}
