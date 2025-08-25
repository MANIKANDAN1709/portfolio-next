import { ModeToggle } from "@/components/theme-toogle";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <nav className="absolute top-4 right-4">
          <ModeToggle/>
        </nav>
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Manikandan Saminathan</h1>
           <div className="flex justify-center">
           <h2 className="text-lg font-bold">Fungible developer</h2>
           </div>
        </div>
      </main>
    </div>
  );
}
