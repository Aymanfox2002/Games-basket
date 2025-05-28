import { cn } from "@/lib/utils";
import React from "react";

const MaxWidthWrapper = ({
  children,
  className,
  noPadding,
}: {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}) => {
  return (
    <section
      className={cn(
        "px-5",
        className || "",
        { "py-0": noPadding },
        { "py-8": !noPadding }
      )}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
