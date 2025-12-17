import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Terminal, Monitor, Shield, Cpu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "System_Status" },
    { href: "/services", label: "Modules" },
    { href: "/about", label: "Kernel" },
    { href: "/contact", label: "Connect" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Top Bar / Header */}
      <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-background">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="bg-primary text-primary-foreground p-1 border-2 border-black group-hover:translate-x-[1px] group-hover:translate-y-[1px] transition-transform">
                <Terminal className="h-6 w-6" />
              </div>
              <span className="font-mono font-bold text-xl tracking-tighter uppercase">
                CMS_CORE<span className="animate-pulse">_</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={cn(
                    "font-mono text-sm font-bold uppercase cursor-pointer hover:text-primary transition-colors",
                    location === item.href && "text-primary underline decoration-2 underline-offset-4"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="neo-button h-10">
                Init_Sequence
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 border-2 border-black hover:bg-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-background border-b-2 border-black p-4 animate-in slide-in-from-top-5">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className="block p-4 border-2 border-black font-mono font-bold uppercase hover:bg-accent cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-black bg-muted/30 py-12">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="h-6 w-6" />
              <span className="font-mono font-bold text-lg">CMS_CORE_SYSTEMS</span>
            </div>
            <p className="font-mono text-sm text-muted-foreground max-w-xs">
              Professional computer management protocols for optimal system performance and security integrity.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono font-bold mb-4 border-b-2 border-black inline-block">Protocols</h4>
            <ul className="space-y-2 font-mono text-sm">
              <li><Link href="/services"><span className="hover:text-primary cursor-pointer">&gt; Remote_Access</span></Link></li>
              <li><Link href="/services"><span className="hover:text-primary cursor-pointer">&gt; Sys_Maintenance</span></Link></li>
              <li><Link href="/services"><span className="hover:text-primary cursor-pointer">&gt; Security_Audit</span></Link></li>
              <li><Link href="/services"><span className="hover:text-primary cursor-pointer">&gt; Data_Recovery</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-bold mb-4 border-b-2 border-black inline-block">System</h4>
            <ul className="space-y-2 font-mono text-sm">
              <li><Link href="/about"><span className="hover:text-primary cursor-pointer">&gt; Kernel_Info</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-primary cursor-pointer">&gt; Connect_Port</span></Link></li>
              <li><span className="text-muted-foreground">&gt; Status: Online</span></li>
            </ul>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t-2 border-black/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} CMS_CORE. All systems operational.
          </p>
          <div className="flex gap-4">
            <Monitor className="h-4 w-4 text-muted-foreground" />
            <Shield className="h-4 w-4 text-muted-foreground" />
            <Cpu className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </footer>
    </div>
  );
}
