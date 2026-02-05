import Skeleton from "../../Skeleton";

function TechStackSkeleton() {
  return (
    <section
      className="flex py-16 flex-col border-b border-b-border"
    >
        <Skeleton className="h-8 w-40 mb-8" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="p-6 bg-slate-100 rounded-xl border border-border"
          >
            <Skeleton className="w-12 h-12 mb-4" />
            <Skeleton className="h-4 w-24 mb-2" />
            <Skeleton className="h-3 w-[70%]" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStackSkeleton;
