import { useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Menu, X, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button"; // shadcn Button එක

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-primary/20">
            <Hotel className="w-6 h-6 text-primary" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight">ORRIO</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Desktop Links */}
        <div className="items-center hidden gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            to="/hotels"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Find Hotels
          </Link>
          <Link
            to="/offers"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Offers
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="items-center hidden gap-4 md:flex">
          <SignedOut>
            <SignInButton mode="modal">
              {/* shadcn Button එක පාවිච්චි කරන විදිය */}
              <Button variant="default" className="font-bold">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: { avatarBox: "w-9 h-9 border-2 border-primary" },
              }}
            />
          </SignedIn>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="p-4 space-y-4 border-b md:hidden bg-background border-border">
          <Link to="/" className="block text-sm font-medium">
            Home
          </Link>
          <Link to="/hotels" className="block text-sm font-medium">
            Find Hotels
          </Link>
          <div className="pt-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button className="w-full">Sign In</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
