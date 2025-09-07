import posthog from 'posthog-js'
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
            <Button variant="outline" size="icon" className="lg:hidden" onClick={() => posthog.capture('mobile-nav-opened')}>
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="/" className="mb-6 flex items-center gap-2" prefetch={false} onClick={() => posthog.capture('nav-link-clicked', { destination: '/', location: 'mobile-header' })}>
              <Avatar>
                <AvatarImage src="#" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <span className="font-semibold">Portfolio</span>
            </Link>
            <div className="grid gap-2 py-6">
              <Link href="/" className="flex w-full items-center py-3 px-4 text-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all rounded-md" prefetch={false} onClick={() => posthog.capture('nav-link-clicked', { destination: '/', location: 'mobile' })}>
                Home
              </Link>
              <Link href="/about" className="flex w-full items-center py-3 px-4 text-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all rounded-md" prefetch={false} onClick={() => posthog.capture('nav-link-clicked', { destination: '/about', location: 'mobile' })}>
                About
              </Link>
              <Link href="/projects" className="flex w-full items-center py-3 px-4 text-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all rounded-md" prefetch={false} onClick={() => posthog.capture('nav-link-clicked', { destination: '/projects', location: 'mobile' })}>
                Projects
              </Link>
              <Link href="/skills" className="flex w-full items-center py-3 px-4 text-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all rounded-md" prefetch={false} onClick={() => posthog.capture('nav-link-clicked', { destination: '/skills', location: 'mobile' })}>
                Skills
              </Link>
              <Link href="/blogs" className="flex w-full items-center py-3 px-4 text-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all rounded-md" prefetch={false} onClick={() => posthog.capture('nav-link-clicked', { destination: '/blogs', location: 'mobile' })}>
                Blogs
              </Link>
              <Link href="/favorities" className="flex w-full items-center py-3 px-4 text-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all rounded-md" prefetch={false} onClick={() => posthog.capture('nav-link-clicked', { destination: '/favorities', location: 'mobile' })}>
                Favorites
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop navigation - using NavigationMenu like before */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" onClick={() => posthog.capture('nav-link-clicked', { destination: '/', location: 'desktop' })}>
                <Avatar>
                  <AvatarImage src="#" />
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" onClick={() => posthog.capture('nav-link-clicked', { destination: '/about', location: 'desktop' })}>About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/skills" onClick={() => posthog.capture('nav-link-clicked', { destination: '/skills', location: 'desktop' })}>Skills</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/projects" onClick={() => posthog.capture('nav-link-clicked', { destination: '/projects', location: 'desktop' })}>Projects</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/blogs" onClick={() => posthog.capture('nav-link-clicked', { destination: '/blogs', location: 'desktop' })}>Blogs</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/favorities" onClick={() => posthog.capture('nav-link-clicked', { destination: '/favorities', location: 'desktop' })}>Favorities</NavigationMenuLink>
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

