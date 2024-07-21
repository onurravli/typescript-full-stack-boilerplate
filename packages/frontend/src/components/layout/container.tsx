import { cn } from "@/lib/utils";

export default function Container({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <main className={cn("flex min-h-screen flex-col items-center justify-center p-8", className)}>{children}</main>
  );
}
