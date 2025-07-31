import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HireFit" },
    { name: "description", content: "Know Your Fit. Get the Job That’s Lit." },
  ];
}

export default function Home() {
  return (
      <main className="bg-[url('/images/bg-main.svg')] bg-cover">
        <Navbar />

        <section className="main-section">
          <div className="page-heading">
            <h1>Application Analytics That Work for You</h1>
            <h2>Track applications, get feedback, and apply with confidence.</h2>
          </div>
        </section>

        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
                <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </main>
  );
}
