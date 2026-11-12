import * as React from 'react';
import { ChevronDown, Menu as MenuIcon, X } from 'lucide-react';
import { navLinks, site } from '@/data/site';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogBackdrop,
  DialogPopup,
  DialogClose,
  DialogTitle,
} from '@/components/ui/dialog';

interface NavbarProps {
  /** Current pathname, used to mark the active persona link. */
  pathname?: string;
}

export default function Navbar({ pathname = '/' }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleBrandClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== '/') return;
    // Already home: smooth-scroll to top and clear the fragment instead of
    // relying on the browser's instant jump.
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', '/');
  };

  return (
    <header className="bg-background fixed inset-x-0 top-0 z-40 border-transparent shadow-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-12 lg:px-10"
      >
        <a
          href="/"
          onClick={handleBrandClick}
          className="text-ink text-lg font-bold tracking-tight transition-opacity hover:opacity-70"
        >
          {site.brand}
        </a>

        {/* Desktop navigation */}
        <NavigationMenu render={<div />} className="hidden items-center md:flex">
          <NavigationMenuList className="flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <NavigationMenuItem key={link.label} className="flex items-center">
                  <NavigationMenuTrigger
                    aria-label={`Show ${link.label} menu`}
                    className="group text-ink flex items-center transition-opacity outline-none hover:opacity-60 data-popup-open:opacity-60"
                  >
                    <a href={link.href} className="text-ink text-sm font-medium">
                      {link.label}
                    </a>

                    <ChevronDown className="size-4 transition-transform duration-300 group-data-popup-open:rotate-180" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {link.children.map((child) => (
                      <NavigationMenuLink
                        key={child.href}
                        href={child.href}
                        className="hover:bg-ink hover:text-primary-foreground flex cursor-pointer flex-col gap-0.5 px-3 py-2 text-sm font-medium transition-colors outline-none select-none"
                      >
                        {child.label}
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink
                    href={link.href}
                    className="text-ink px-3 py-2 text-sm font-medium transition-opacity hover:opacity-60"
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
          <NavigationMenuViewport className="bg-background border-none shadow-md" />
        </NavigationMenu>

        {/* Mobile navigation */}
        <div className="md:hidden">
          <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
            <DialogTrigger
              aria-label="Open menu"
              className={buttonVariants({ variant: 'ghost', size: 'icon' })}
            >
              <MenuIcon className="size-5" aria-hidden="true" />
            </DialogTrigger>
            <DialogPortal>
              <DialogBackdrop />
              <DialogPopup className="border-none">
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-ink text-lg font-bold tracking-tight">
                    {site.brand}
                  </DialogTitle>
                  <DialogClose
                    aria-label="Close menu"
                    className={buttonVariants({ variant: 'ghost', size: 'icon' })}
                  >
                    <X className="size-5" aria-hidden="true" />
                  </DialogClose>
                </div>

                <ul className="mt-10 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      {link.children ? (
                        <div>
                          <a
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-ink block py-3 text-2xl font-bold tracking-tight uppercase"
                          >
                            {link.label}
                          </a>
                          <ul className="mb-2 flex flex-col pl-4">
                            {link.children.map((child) => (
                              <li key={child.href}>
                                <a
                                  href={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className={cn(
                                    'text-ink-soft hover:text-ink block py-2 text-base transition-colors',
                                    pathname === child.href && 'text-ink font-semibold',
                                  )}
                                >
                                  {child.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <a
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            'text-ink block py-3 text-2xl font-bold tracking-tight uppercase',
                          )}
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </DialogPopup>
            </DialogPortal>
          </Dialog>
        </div>
      </nav>
    </header>
  );
}
