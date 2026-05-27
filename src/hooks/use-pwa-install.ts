import { useEffect } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

/**
 * Captura o evento nativo `beforeinstallprompt` e, no primeiro clique
 * do usuário, dispara o banner nativo de instalação do navegador.
 *
 * - Android/Chrome/Edge: prompt nativo "Adicionar à tela inicial".
 * - Desktop Chrome/Edge: prompt nativo de instalação.
 * - iOS Safari: usa o `alert()` nativo com a instrução
 *   "Compartilhar → Adicionar à Tela de Início" (única opção, já que
 *   o iOS não expõe uma API programática).
 * - Não roda dentro de iframes (ex.: preview do editor).
 */
export function usePwaInstall() {
  useEffect(() => {
    // Evita execução em iframes (preview) e em apps já instalados.
    try {
      if (window.self !== window.top) return;
    } catch {
      return;
    }
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      // @ts-expect-error iOS Safari
      window.navigator.standalone === true;
    if (isStandalone) return;

    let deferredPrompt: BeforeInstallPromptEvent | null = null;
    let triggered = false;

    const onBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      deferredPrompt = e as BeforeInstallPromptEvent;
    };

    const ua = window.navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(ua) && !("MSStream" in window);
    const isSafari = /^((?!chrome|android|crios|fxios).)*safari/i.test(ua);

    const STORAGE_KEY = "pwa-install-prompted";
    const alreadyPrompted = (() => {
      try {
        return localStorage.getItem(STORAGE_KEY) === "1";
      } catch {
        return false;
      }
    })();

    const markPrompted = () => {
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* noop */
      }
    };

    const onFirstClick = async () => {
      if (triggered) return;
      triggered = true;

      if (deferredPrompt) {
        try {
          await deferredPrompt.prompt();
          await deferredPrompt.userChoice;
        } catch {
          /* noop */
        }
        deferredPrompt = null;
        markPrompted();
        cleanup();
        return;
      }

      if (isIOS && isSafari && !alreadyPrompted) {
        // iOS não tem API programática; usamos o diálogo nativo do navegador.
        window.alert(
          "Para instalar o KwaiSave: toque em Compartilhar e depois em \"Adicionar à Tela de Início\"."
        );
        markPrompted();
        cleanup();
      }
    };

    const onAppInstalled = () => {
      deferredPrompt = null;
      markPrompted();
      cleanup();
    };

    function cleanup() {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("click", onFirstClick, true);
      window.removeEventListener("appinstalled", onAppInstalled);
    }

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onAppInstalled);
    if (!alreadyPrompted) {
      window.addEventListener("click", onFirstClick, true);
    }

    return cleanup;
  }, []);
}