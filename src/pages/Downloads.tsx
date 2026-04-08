import { useEffect, useState } from "react";
import { Download, Trash2, Play, Calendar } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

interface DownloadItem {
  title: string;
  author: string;
  thumbnail: string;
  downloadedAt: string;
}

export function getDownloadHistory(): DownloadItem[] {
  try {
    return JSON.parse(localStorage.getItem("kwai-downloads") || "[]");
  } catch {
    return [];
  }
}

export function addToDownloadHistory(item: Omit<DownloadItem, "downloadedAt">) {
  const history = getDownloadHistory();
  history.unshift({ ...item, downloadedAt: new Date().toISOString() });
  // Keep max 50 items
  localStorage.setItem("kwai-downloads", JSON.stringify(history.slice(0, 50)));
}

export default function Downloads() {
  const [items, setItems] = useState<DownloadItem[]>([]);

  useEffect(() => {
    setItems(getDownloadHistory());
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("kwai-downloads");
    setItems([]);
  };

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="gradient-kwai p-2.5 rounded-xl shadow-kwai">
            <Download className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="gradient-kwai text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Histórico</span>
        </div>
        <div className="flex items-center justify-between mt-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground">Downloads</h1>
            <p className="text-muted-foreground text-sm mt-1">Vídeos baixados neste dispositivo ({items.length})</p>
          </div>
          {items.length > 0 && (
            <button
              onClick={clearHistory}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30 transition-colors"
            >
              <Trash2 className="h-4 w-4" />
              Limpar
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="bg-card border border-border rounded-2xl p-12 text-center">
            <div className="gradient-kwai inline-flex p-4 rounded-2xl mb-4 shadow-kwai">
              <Download className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-lg font-bold text-foreground mb-2">Nenhum download ainda</h2>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Quando você baixar vídeos do Kwai, as miniaturas aparecerão aqui para fácil acesso. Os dados são armazenados apenas no seu navegador.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {items.map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="relative aspect-video bg-muted">
                  {item.thumbnail ? (
                    <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(8, 100%, 50%), hsl(27, 100%, 60%))" }}>
                      <Play className="h-8 w-8 text-primary-foreground/80 fill-current" />
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="text-xs font-semibold text-foreground line-clamp-2 mb-1">{item.title}</h3>
                  <p className="text-xs text-primary font-medium truncate">{item.author}</p>
                  <p className="text-[10px] text-muted-foreground mt-1 flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(item.downloadedAt).toLocaleDateString("pt-BR")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
}
