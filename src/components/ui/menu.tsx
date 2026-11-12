import * as React from 'react';
import { Menu as BaseMenu } from '@base-ui/react/menu';
import { cn } from '@/lib/utils';

const Menu = BaseMenu.Root;
const MenuTrigger = BaseMenu.Trigger;
const MenuPortal = BaseMenu.Portal;

const MenuPopup = React.forwardRef<
  React.ElementRef<typeof BaseMenu.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Positioner> & {
    popupClassName?: string;
    sideOffset?: number;
  }
>(({ className, popupClassName, sideOffset = 8, align = 'start', children, ...props }, ref) => (
  <BaseMenu.Portal>
    <BaseMenu.Positioner
      className="z-50 outline-none"
      sideOffset={sideOffset}
      align={align}
      {...props}
    >
      <BaseMenu.Popup
        ref={ref}
        className={cn(
          'border-ink bg-paper text-ink min-w-56 origin-(--transform-origin) border p-1 shadow-[6px_6px_0_0_var(--color-ink)]',
          'transition-[transform,opacity] data-ending-style:opacity-0 data-starting-style:-translate-y-1 data-starting-style:opacity-0',
          popupClassName,
          className,
        )}
      >
        {children}
      </BaseMenu.Popup>
    </BaseMenu.Positioner>
  </BaseMenu.Portal>
));
MenuPopup.displayName = 'MenuPopup';

const MenuItem = React.forwardRef<
  React.ElementRef<typeof BaseMenu.Item>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Item>
>(({ className, ...props }, ref) => (
  <BaseMenu.Item
    ref={ref}
    className={cn(
      'flex cursor-pointer flex-col gap-0.5 px-3 py-2 text-sm transition-colors outline-none select-none',
      'data-highlighted:bg-ink data-highlighted:text-primary-foreground',
      className,
    )}
    {...props}
  />
));
MenuItem.displayName = 'MenuItem';

export { Menu, MenuTrigger, MenuPortal, MenuPopup, MenuItem };
