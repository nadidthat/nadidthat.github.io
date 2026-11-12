import * as React from 'react';
import { NavigationMenu as BaseNavigationMenu } from '@base-ui/react/navigation-menu';
import { cn } from '@/lib/utils';

const NavigationMenu = BaseNavigationMenu.Root;
const NavigationMenuList = BaseNavigationMenu.List;
const NavigationMenuItem = BaseNavigationMenu.Item;
const NavigationMenuLink = BaseNavigationMenu.Link;

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Trigger>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Trigger>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Trigger ref={ref} className={cn('outline-none', className)} {...props} />
));
NavigationMenuTrigger.displayName = 'NavigationMenuTrigger';

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Content>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Content>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Content
    ref={ref}
    className={cn(
      'flex min-w-56 flex-col',
      'transition-opacity data-ending-style:opacity-0 data-starting-style:opacity-0',
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = 'NavigationMenuContent';

/**
 * Composes Portal > Positioner > Popup > Viewport, mirroring how MenuPopup
 * composes Portal > Positioner > Popup in ./menu.tsx. Render once per
 * NavigationMenu.Root; every item's Content shares this single viewport.
 */
const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof BaseNavigationMenu.Viewport>,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Positioner> & {
    viewportClassName?: string;
    sideOffset?: number;
  }
>(
  (
    {
      className,
      viewportClassName,
      sideOffset = 8,
      align = 'start',
      // The navbar is `position: fixed` (viewport coordinates). The default
      // `positionMethod="absolute"` places the popup in document coordinates,
      // so Base UI has to recompute its offset every scroll frame to keep it
      // under the fixed trigger — that per-frame chase is what shows up as
      // lag. `fixed` keeps the popup in viewport coordinates too, so its
      // position relative to the (also fixed) trigger never changes on
      // scroll and it stays pinned under the navbar with no recompute.
      positionMethod = 'fixed',
      ...props
    },
    ref,
  ) => (
    <BaseNavigationMenu.Portal>
      <BaseNavigationMenu.Positioner
        className="z-50 outline-none"
        sideOffset={sideOffset}
        align={align}
        positionMethod={positionMethod}
        {...props}
      >
        <BaseNavigationMenu.Popup
          className={cn(
            'border-ink bg-paper text-ink origin-(--transform-origin) border shadow-[6px_6px_0_0_var(--color-ink)]',
            'h-(--popup-height) w-(--popup-width) overflow-hidden',
            'transition-opacity data-ending-style:opacity-0 data-starting-style:opacity-0',
            className,
          )}
        >
          <BaseNavigationMenu.Viewport
            ref={ref}
            className={cn('relative h-full w-full', viewportClassName)}
          />
        </BaseNavigationMenu.Popup>
      </BaseNavigationMenu.Positioner>
    </BaseNavigationMenu.Portal>
  ),
);
NavigationMenuViewport.displayName = 'NavigationMenuViewport';

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
};
