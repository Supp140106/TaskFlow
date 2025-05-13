
import { cn } from "@/lib/utils"; // Replace or remove if not using this utility
import { AnimatedList } from "./magicui/animated-list"; // Adjust import as needed

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

const notifications: Item[] = Array.from({ length: 10 }, () => [
  {
    name: "Task Created",
    description: "You added 'Design landing page'",
    time: "20m ago",
    icon: "📝",
    color: "#3B82F6", // Blue
  },
  {
    name: "Task Completed",
    description: "You completed 'Fix login bug'",
    time: "15m ago",
    icon: "✅",
    color: "#10B981", // Green
  },
  {
    name: "New Assignment",
    description: "You were assigned 'Write project report'",
    time: "10m ago",
    icon: "👤",
    color: "#F59E0B", // Amber
  },
  {
    name: "Deadline Approaching",
    description: "'Submit invoice' is due in 1 hour",
    time: "5m ago",
    icon: "⏰",
    color: "#EF4444", // Red
  },
]).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4 transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white shadow-md dark:bg-neutral-900 dark:text-white"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-gray-600 dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white dark:from-neutral-900"></div>
    </div>
  );
}
