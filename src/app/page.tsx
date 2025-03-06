import NavBar from "./ui/components/navBarComponent";

export default function Home() {
  return (
    <div className="grid grid-rows-[0px_1fr_10px] items-center justify-items-center min-h-screen pb-20 sm:p-5 font-[family-name:var(--font-geist-sans)]">
     
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <header>
          <NavBar/>
        </header>
      </main>
    </div>
  );
}
