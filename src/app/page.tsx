import { ModeToggle } from "@/components/theme-toogle";
import {
    NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="flex h-16 items-center justify-between px-4 max-w-7xl mx-auto w-full">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#home">Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#about">About</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#contact">Contact</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#projects">Projects</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle/>
        </div>
      </header>
      <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        <div className="flex flex-col gap-2 items-center text-center">
          <h1 className="text-2xl font-bold">Manikandan Saminathan</h1>
          <h2 className="text-lg font-bold">Fungible developer</h2>
        </div>
      </main>
    </div>
  );
}
