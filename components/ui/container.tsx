import { cn } from "@/lib/utils";

export const Container = ({ children, className, ...rest }: any) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-10 lg:px-20", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

Container.displayName = "Container";
