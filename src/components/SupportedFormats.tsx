import { Video, Music, FileImage, Hash } from "lucide-react";

const formats = [
  { icon: Video, title: "Vídeos MP4", desc: "Baixar vídeo do Kwai sem marca d'água até 1080p" },
  { icon: Music, title: "Áudio/MP3", desc: "Extrair áudio ao baixar vídeos Kwai" },
  { icon: FileImage, title: "Capas", desc: "Thumbnails originais do Kwai download vídeo" },
  { icon: Hash, title: "Hashtags", desc: "Tags e descrições ao salvar vídeo do Kwai" },
];

export function SupportedFormats() {
  return (
    <section className="px-4 py-10 max-w-5xl mx-auto" aria-label="Formatos disponíveis para download de vídeos do Kwai">
      <h2 className="text-2xl font-bold text-foreground text-center mb-8">O Que Você Pode Baixar do Kwai</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {formats.map((f) => (
          <div key={f.title} className="bg-card border border-border rounded-2xl p-5 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <div className="gradient-kwai inline-flex p-3 rounded-xl mb-3">
              <f.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1">{f.title}</h3>
            <p className="text-xs text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}