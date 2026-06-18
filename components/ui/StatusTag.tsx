import { cn } from "@/lib/utils";

export type StatusType = "DEPLOYED" | "ACTIVE" | "RESEARCH" | "INTERNSHIP" | "IN PROGRESS" | "ARCHIVED" | "COMPLETED";

const statusStyles: Record<StatusType, string> = {
  "DEPLOYED": "text-status-deployed border-status-deployed/30 bg-status-deployed/10",
  "ACTIVE": "text-status-deployed border-status-deployed/30 bg-status-deployed/10",
  "RESEARCH": "text-status-research border-status-research/30 bg-status-research/10",
  "INTERNSHIP": "text-primary border-primary/30 bg-primary/10",
  "IN PROGRESS": "text-status-research border-status-research/30 bg-status-research/10",
  "ARCHIVED": "text-status-archived border-status-archived/30 bg-status-archived/10",
  "COMPLETED": "text-status-deployed border-status-deployed/30 bg-status-deployed/10",
};

export function StatusTag({ status, className }: { status: StatusType; className?: string }) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-mono border",
      statusStyles[status],
      className
    )}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
