import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

export default function Navigation() {
  return (
    <div className="flex h-16 w-full items-center justify-between px-4">
      {/* Mobile menu */}
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="/" className="mb-6 flex items-center gap-2" prefetch={false}>
              <Avatar>
                <AvatarImage src="#" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <span className="font-semibold">Portfolio</span>
            </Link>
            <div className="grid gap-2 py-6">
              <Link href="/" className="flex w-full items-center py-3 px-4 text-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all rounded-md" prefetch={false}>
                Home
              </Link>
              <Link href="/about" className="flex w-full items-center py-3 px-4 text-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all rounded-md" prefetch={false}>
                About
              </Link>
              <Link href="/projects" className="flex w-full items-center py-3 px-4 text-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all rounded-md" prefetch={false}>
                Projects
              </Link>
              <Link href="/skills" className="flex w-full items-center py-3 px-4 text-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all rounded-md" prefetch={false}>
                Skills
              </Link>
              <Link href="/blogs" className="flex w-full items-center py-3 px-4 text-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all rounded-md" prefetch={false}>
                Blogs
              </Link>
              <Link href="/favorities" className="flex w-full items-center py-3 px-4 text-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all rounded-md" prefetch={false}>
                Favorites
              </Link>
              <Link href="/contact" className="flex w-full items-center py-3 px-4 text-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all rounded-md" prefetch={false}>
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop navigation - using NavigationMenu like before */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/">
                <Avatar>
                  <AvatarImage src="#" />
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/skills">Skills</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/projects">Projects</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/blogs">Blogs</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/favorities">Favorities</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

