import { Smartphone, ShieldCheck, AlertTriangle, Download, CheckCircle2, XCircle, Globe, Apple, Cpu, Award } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";

const safeSources = [
  { name: "Google Play Store", desc: "Fonte oficial recomendada para Android. Atualizações automáticas e máxima segurança." },
  { name: "App Store (iOS)", desc: "Versão oficial para iPhone e iPad, com verificação Apple." },
  { name: "Site oficial Kwai", desc: "Para baixar o Kwai original APK direto da Kuaishou Technology." },
];

const features = [
  "Editor de vídeos completo com filtros e efeitos",
  "Kwai Golds (programa de monetização para criadores)",
  "Kwai Live Partner (transmissões ao vivo)",
  "Comunidade Kwai short video maker",
  "Suporte a vídeos em 4K e 60fps (versão 2026)",
  "Modo offline para assistir favoritos sem internet",
];

const dontDo = [
  "Baixar Kwai mod APK ou versões hackeadas",
  "Instalar Kwai APK de fontes desconhecidas",
  "Confiar em links suspeitos prometendo 'Kwai Golds grátis'",
  "Compartilhar credenciais com sites de terceiros",
];

export default function KwaiAPK() {
  return (
    <PageLayout>
      <SEOHead
        title="Kwai APK Download 2026 | Versão Original e Segura para Android"
        description="Informações sobre Kwai APK download oficial 2026. Baixe o Kwai app original com segurança garantida — Android, iOS e novidades da versão mais recente."
        canonical="/kwai-apk"
        breadcrumbs={[{ name: "Início", url: "/" }, { name: "Kwai APK", url: "/kwai-apk" }]}
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="gradient-kwai p-2.5 rounded-xl shadow-kwai">
            <Smartphone className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="gradient-kwai text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Guia Completo 2026</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mt-4 mb-3">
          Baixar Kwai APK: App Oficial para Android com Segurança Garantida
        </h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Guia atualizado para 2026 sobre como fazer o <strong>Kwai APK download</strong> de forma segura. Aqui você encontra
          informações sobre a versão original do <strong>Kwai app</strong>, fontes confiáveis, recursos da última atualização
          e dicas para evitar versões maliciosas.
        </p>

        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 mb-8 flex gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">Importante</p>
            <p className="text-sm text-muted-foreground">
              Não distribuímos arquivos APK. Recomendamos sempre baixar o <strong>Kwai original APK</strong> de fontes oficiais
              como Google Play, App Store ou o site oficial da Kuaishou. Nunca instale <em>Kwai mod APK</em> — pode comprometer
              seus dados pessoais.
            </p>
          </div>
        </div>

        <section className="bg-card border border-border rounded-2xl p-7 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-primary" />
            Onde Baixar o Kwai App com Segurança
          </h2>
          <div className="space-y-3">
            {safeSources.map((s) => (
              <div key={s.name} className="flex items-start gap-3 p-4 rounded-xl bg-muted/40 border border-border">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">{s.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-card border border-border rounded-2xl p-7 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Novidades do Kwai APK 2026
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-2 p-3 rounded-xl bg-muted/40">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">{f}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-card border border-border rounded-2xl p-7 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
            <Cpu className="h-6 w-6 text-primary" />
            Compatibilidade do Kwai App Download
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-xl bg-muted/40 border border-border">
              <Smartphone className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground">Android</h3>
              <p className="text-xs text-muted-foreground mt-1">Versão 6.0+ (API 23)</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-muted/40 border border-border">
              <Apple className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground">iOS</h3>
              <p className="text-xs text-muted-foreground mt-1">iPhone com iOS 13+</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-muted/40 border border-border">
              <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground">Web</h3>
              <p className="text-xs text-muted-foreground mt-1">kwai.com no navegador</p>
            </div>
          </div>
        </section>

        <section className="bg-destructive/5 border border-destructive/20 rounded-2xl p-7 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
            <XCircle className="h-6 w-6 text-destructive" />
            O Que Você Nunca Deve Fazer
          </h2>
          <ul className="space-y-2">
            {dontDo.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <Download className="h-10 w-10 text-primary mx-auto mb-3" />
          <h2 className="text-xl font-bold text-foreground mb-2">Quer apenas baixar vídeos sem instalar nada?</h2>
          <p className="text-muted-foreground mb-4 text-sm">
            Use nosso <strong>baixador de vídeos do Kwai</strong> 100% online — sem APK, sem cadastro.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 gradient-kwai text-primary-foreground font-bold px-6 py-3 rounded-xl shadow-kwai hover:shadow-kwai-lg hover:scale-[1.02] transition-all">
            <Download className="h-5 w-5" />
            Baixar Vídeos Kwai
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
