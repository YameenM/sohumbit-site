import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section className="py-24 border-b">
      <Container>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl">
          Building modern software products for hospitality and business
          management in Pakistan.
        </h1>

        <p className="mt-6 text-lg text-slate-600 max-w-2xl">
          SOHUMBIT is a Karachi, Pakistan based software company behind QAYAM and
          QAYAM HMS, focused on scalable, reliable systems for real
          businesses.
        </p>
      </Container>
    </section>
  );
}
