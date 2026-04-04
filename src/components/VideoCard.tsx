import { Play, Eye, Heart, Download, Music, CheckCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  title: string;
  author: string;
  views: string;
  likes: string;
  duration: string;
  type: "video" | "short" | "live" | "foto";
  thumbnailColor?: string;
}

const typeLabels: Record<string, string> = {
  video: "Vídeo",
  short: "Short",
  live: "Live",
  foto: "Foto",
};

const qualityOptions = ["1080p", "720p", "480p", "360p"];

export function VideoCard({ title, author, views, likes, duration, type }: VideoCardProps) {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [quality, setQuality] = useState("1080p");

  const handleDownload = () => {
    setDownloading(true);
    setProgress(0);
    setCompleted(false);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setDownloading(false);
          setCompleted(true);
          return 100;
        }
        return p + Math.random() * 15;
      });
    }, 200);
  };

  const isVertical = type === "short";

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in">
      {/* Type badge */}
      <div className="px-4 pt-3">
        <span className="gradient-kwai text-primary-foreground text-xs font-semibold px-3 py-1 rounded-lg">
          {typeLabels[type]}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row p-4 gap-4">
        {/* Thumbnail */}
        <div
          className={cn(
            "relative rounded-xl overflow-hidden bg-muted flex-shrink-0 flex items-center justify-center",
            isVertical ? "w-[120px] h-[213px]" : "w-[180px] h-[120px]"
          )}
          style={{
            background: `linear-gradient(135deg, hsl(${Math.random() * 30 + 10}, 80%, 60%), hsl(${Math.random() * 30}, 90%, 50%))`,
          }}
        >
          <Play className="h-10 w-10 text-primary-foreground/90 fill-current drop-shadow-lg" />
          <span className="absolute bottom-2 right-2 bg-foreground/80 text-card text-xs px-2 py-0.5 rounded-md font-medium">
            {duration}
          </span>
          {type === "live" && (
            <span className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-xs px-2 py-0.5 rounded-md font-bold animate-pulse-live">
              LIVE
            </span>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-sm sm:text-base truncate mb-1">{title}</h3>
          <p className="text-primary text-sm font-medium mb-2">{author}</p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
            <span className="flex items-center gap-1"><Eye className="h-3.5 w-3.5" />{views}</span>
            <span className="flex items-center gap-1"><Heart className="h-3.5 w-3.5" />{likes}</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 flex-wrap">
            <select
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              className="text-xs border border-border bg-card text-foreground rounded-lg px-2 py-1.5 focus:outline-none focus:border-primary"
            >
              {qualityOptions.map((q) => (
                <option key={q} value={q}>MP4 {q}</option>
              ))}
            </select>

            {completed ? (
              <span className="flex items-center gap-1 text-xs font-semibold text-success">
                <CheckCircle className="h-4 w-4" /> Concluído
              </span>
            ) : (
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="gradient-kwai text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-lg shadow-kwai hover:shadow-kwai-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-60"
              >
                {downloading ? `${Math.min(Math.round(progress), 100)}%` : "Download"}
              </button>
            )}

            <button className="border border-border text-foreground text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-muted transition-colors">
              MP3
            </button>
          </div>

          {/* Progress bar */}
          {downloading && (
            <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full gradient-kwai rounded-full transition-all duration-200"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
