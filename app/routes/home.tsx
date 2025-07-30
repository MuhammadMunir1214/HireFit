import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "HireFit" },
    { name: "description", content: "Know Your Fit. Get the Job That’s Lit." },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <section className={"main-section"}>
      <div className={"page-heading"}>
        <h1>Application Analytics That Work for You</h1>
        <h2>
          Track applications, get feedback, and apply with confidence.
        </h2>
      </div>
    </section>
  </main>
}
