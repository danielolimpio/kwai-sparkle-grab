import { useState } from "react";
import { toast } from "sonner";
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";
import { MessageSquare, Mail, Clock, Send, Globe, HelpCircle } from "lucide-react";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.mensagem) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Mensagem enviada com sucesso! Responderemos em breve.");
      setForm({ nome: "", email: "", assunto: "", mensagem: "" });
    }, 1500);
  };

  return (
    <PageLayout>
      <SEOHead title="Contato" description="Entre em contato com a equipe do KwaiSave. Envie dúvidas, sugestões ou solicite suporte técnico." canonical="/contato" breadcrumbs={[{ name: "Início", url: "/" }, { name: "Contato", url: "/contato" }]} />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="gradient-kwai p-2.5 rounded-xl shadow-kwai">
            <MessageSquare className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="gradient-kwai text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Fale Conosco</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mt-4 mb-2">Contato</h1>
        <p className="text-muted-foreground mb-8">Tem alguma dúvida ou sugestão? Estamos aqui para ajudar!</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: Mail, title: "E-mail", desc: "contato@baixarvideoskwai.com", sub: "Resposta em até 24h" },
            { icon: Clock, title: "Horário", desc: "Segunda a Sexta", sub: "9h às 18h (BRT)" },
            { icon: Globe, title: "Online", desc: "Suporte via formulário", sub: "24 horas por dia" },
          ].map((c) => (
            <div key={c.title} className="bg-card border border-border rounded-2xl p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="gradient-kwai inline-flex p-2.5 rounded-xl mb-3 shadow-kwai">
                <c.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{c.title}</h3>
              <p className="text-sm text-primary font-medium mt-1">{c.desc}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{c.sub}</p>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="gradient-kwai p-2 rounded-lg">
              <Send className="h-5 w-5 text-primary-foreground" />
            </div>
            <h2 className="text-lg font-bold text-foreground">Envie sua mensagem</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Nome *</label>
                <input type="text" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} placeholder="Seu nome" className="w-full h-11 px-4 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">E-mail *</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="seu@email.com" className="w-full h-11 px-4 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Assunto</label>
              <input type="text" value={form.assunto} onChange={(e) => setForm({ ...form, assunto: e.target.value })} placeholder="Ex: Dúvida sobre download" className="w-full h-11 px-4 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Mensagem *</label>
              <textarea value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} rows={5} placeholder="Escreva sua mensagem aqui..." className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none" />
            </div>
            <button type="submit" disabled={sending} className="gradient-kwai text-primary-foreground font-bold text-sm px-8 py-3 rounded-xl shadow-kwai hover:shadow-kwai-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 flex items-center gap-2">
              <Send className="h-4 w-4" />
              {sending ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>
        </div>

        <div className="mt-10 bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="gradient-kwai p-2 rounded-lg">
              <HelpCircle className="h-5 w-5 text-primary-foreground" />
            </div>
            <h2 className="text-lg font-bold text-foreground">Perguntas Rápidas</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { q: "O serviço é gratuito?", a: "Sim, 100% grátis e sem limites." },
              { q: "Preciso me cadastrar?", a: "Não, basta colar o link e baixar." },
              { q: "Em quanto tempo respondem?", a: "Em até 24 horas úteis." },
              { q: "Posso sugerir melhorias?", a: "Claro! Use o formulário acima." },
            ].map((faq) => (
              <div key={faq.q} className="bg-muted rounded-xl p-4">
                <p className="text-sm font-semibold text-foreground">{faq.q}</p>
                <p className="text-xs text-muted-foreground mt-1">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
