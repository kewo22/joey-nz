// type TTypography = {
//   children: React.ReactNode;
//   size?: "LG" | "MD" | "SM";
// };
// export function Typography(props: TTypography) {
//   const { size = "SM", children } = props;

//   switch (size) {
//     case "SM":

//       break;

//     default:
//       break;
//   }

//   return (
//     <h1 className="text-[min(7vw,2rem)] font-extrabold tracking-tight">
//       {children}
//     </h1>
//   );
// }

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// bg-primary text-primary-foreground hover:bg-primary/90
const typographyVariants = cva(
  "block subpixel-antialiased primary-foreground",
  {
    variants: {
      variant: {
        default: "",
        // destructive:
        //   "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // outline:
        //   "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        // secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline",
        banner: "font-bold text-primary",
        banner_sub: "",
        primary: "text-primary",
      },
      size: {
        body: "text-[min(4.5vw,1rem)]",
        h1: "text-[min(8vw,2.5rem)] font-bold",
        h2: "text-[min(7vw,1.8rem)] font-bold",
        h3: "text-[min(6.5vw,1.5rem)] font-bold",
        h4: "text-[min(6vw,1.2rem)] font-bold",
        banner: "text-[min(12vw,3rem)] leading-10 sm:leading-[3rem]",
        banner_sub: "text-[min(6vw,1.35rem)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "body",
    },
  }
);

export interface ButtonProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

const Typography = React.forwardRef<HTMLElement, ButtonProps>(
  ({ className, variant, size = "body", asChild = false, ...props }, ref) => {
    let Comp = asChild ? Slot : "p";

    if (size === "h1") Comp = "h1";
    if (size === "h2") Comp = "h2";
    if (size === "h3") Comp = "h3";

    return (
      <Comp
        className={cn(typographyVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Typography.displayName = "Typography";

export { Typography, typographyVariants };
