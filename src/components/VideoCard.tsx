import { Play, Eye, Heart, Download, Music, CheckCircle, ExternalLink } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  title: string;
  author: string;
  thumbnail?: string;
  likes: string;
  comments?: string;
  downloadUrl: string;
  type: "video" | "short" | "live" | "foto";
}

const typeLabels: Record<string, string> = {
  video: "Vídeo",
  short: "Short",
  live: "Live",
  foto: "Foto",
};

export function VideoCard({ title, author, thumbnail, likes, comments, downloadUrl, type }: VideoCardProps) {
  const [downloading, setDownloading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const isVertical = type === "short";

  const handleDownload = () => {
    setDownloading(true);
    // Open the download URL directly
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();

    setTimeout(() => {
      setDownloading(false);
      setCompleted(true);
    }, 2000);
  };

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
        >
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, hsl(20, 80%, 60%), hsl(10, 90%, 50%))`,
              }}
            >
              <Play className="h-10 w-10 text-primary-foreground/90 fill-current drop-shadow-lg" />
            </div>
          )}
          {type === "live" && (
            <span className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-xs px-2 py-0.5 rounded-md font-bold animate-pulse-live">
              LIVE
            </span>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-sm sm:text-base line-clamp-2 mb-1">{title}</h3>
          <p className="text-primary text-sm font-medium mb-2">{author}</p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
            {likes && likes !== "0" && (
              <span className="flex items-center gap-1"><Heart className="h-3.5 w-3.5" />{likes}</span>
            )}
            {comments && comments !== "0" && (
              <span className="flex items-center gap-1"><Eye className="h-3.5 w-3.5" />{comments} comentários</span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 flex-wrap">
            {completed ? (
              <span className="flex items-center gap-1 text-xs font-semibold text-success">
                <CheckCircle className="h-4 w-4" /> Concluído
              </span>
            ) : (
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="gradient-kwai text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-lg shadow-kwai hover:shadow-kwai-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-60 flex items-center gap-1.5"
              >
                <Download className="h-3.5 w-3.5" />
                {downloading ? "Baixando..." : "Download MP4"}
              </button>
            )}

            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border text-foreground text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-muted transition-colors flex items-center gap-1"
            >
              <ExternalLink className="h-3 w-3" />
              Abrir
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
