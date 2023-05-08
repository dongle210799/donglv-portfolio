
import Header from "../components/header";
import About from "../modules/about";

export default function Home() {
  return (
    <main className="bg-slate-500 min-h-screen">
      <Header />
      <div className="h-[300px]"></div>
      <About />
    </main>
  );
}
