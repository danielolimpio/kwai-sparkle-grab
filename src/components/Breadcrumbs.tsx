import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export interface Crumb {
  name: string;
  url: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (!items?.length) return null;
  return (
    <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 pt-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.url} className="flex items-center gap-1.5">
              {i === 0 && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
              {isLast ? (
                <span className="text-foreground font-medium" aria-current="page">{item.name}</span>
              ) : (
                <Link to={item.url} className="hover:text-primary transition-colors">{item.name}</Link>
              )}
              {!isLast && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
