import * as React from 'react';
import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { cn } from '@/lib/utils';

const Dialog = BaseDialog.Root;
const DialogTrigger = BaseDialog.Trigger;
const DialogPortal = BaseDialog.Portal;
const DialogClose = BaseDialog.Close;
const DialogTitle = BaseDialog.Title;
const DialogDescription = BaseDialog.Description;

const DialogBackdrop = React.forwardRef<
  React.ElementRef<typeof BaseDialog.Backdrop>,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Backdrop>
>(({ className, ...props }, ref) => (
  <BaseDialog.Backdrop
    ref={ref}
    className={cn(
      'bg-ink/40 fixed inset-0 z-40 backdrop-blur-[1px] transition-opacity duration-200',
      'data-ending-style:opacity-0 data-starting-style:opacity-0',
      className,
    )}
    {...props}
  />
));
DialogBackdrop.displayName = 'DialogBackdrop';

/**
 * Popup styled as a right-side drawer/sheet.
 */
const DialogPopup = React.forwardRef<
  React.ElementRef<typeof BaseDialog.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Popup>
>(({ className, children, ...props }, ref) => (
  <BaseDialog.Popup
    ref={ref}
    className={cn(
      'border-ink bg-canvas fixed inset-y-0 right-0 z-50 flex h-full w-[86%] max-w-sm flex-col border-l p-6 outline-none',
      'transition-transform duration-300 ease-out',
      'data-ending-style:translate-x-full data-starting-style:translate-x-full',
      className,
    )}
    {...props}
  >
    {children}
  </BaseDialog.Popup>
));
DialogPopup.displayName = 'DialogPopup';

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogClose,
  DialogTitle,
  DialogDescription,
  DialogBackdrop,
  DialogPopup,
};
