import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
              <Link href="/" className="flex w-full items-center py-2 text-lg font-semibold hover:text-primary" prefetch={false}>
                Home
              </Link>
              <Link href="/about" className="flex w-full items-center py-2 text-lg font-semibold hover:text-primary" prefetch={false}>
                About
              </Link>
              <Link href="/projects" className="flex w-full items-center py-2 text-lg font-semibold hover:text-primary" prefetch={false}>
                Projects
              </Link>
              <Link href="/skills" className="flex w-full items-center py-2 text-lg font-semibold hover:text-primary" prefetch={false}>
                Skills
              </Link>
              <Link href="/blogs" className="flex w-full items-center py-2 text-lg font-semibold hover:text-primary" prefetch={false}>
                Blogs
              </Link>
              <Link href="/favorities" className="flex w-full items-center py-2 text-lg font-semibold hover:text-primary" prefetch={false}>
                Favorites
              </Link>
              <Link href="/roadmap" className="flex w-full items-center py-2 text-lg font-semibold hover:text-primary" prefetch={false}>
                Roadmap
              </Link>
              <Link href="/contact" className="flex w-full items-center py-2 text-lg font-semibold hover:text-primary" prefetch={false}>
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop logo */}
        <Link href="/" className="hidden lg:flex items-center gap-2" prefetch={false}>
          <Avatar>
            <AvatarImage src="#" />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          <span className="sr-only">Portfolio</span>
        </Link>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden lg:flex items-center gap-6">
        <Link href="/" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
          Home
        </Link>
        <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
          About
        </Link>
        <Link href="/projects" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
          Projects
        </Link>
        <Link href="/skills" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
          Skills
        </Link>
        <Link href="/blogs" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
          Blogs
        </Link>
        <Link href="/favorities" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
          Favorites
        </Link>
        <Link href="/roadmap" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
          Roadmap
        </Link>
        <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
          Contact
        </Link>
      </nav>
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

