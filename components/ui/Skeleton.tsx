export default function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-zinc-800/50 rounded-md ${className}`} />
  );
}
