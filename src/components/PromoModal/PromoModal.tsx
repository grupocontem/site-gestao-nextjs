"use client";

import React, { useEffect, useState } from "react";

import "./promomodal.css";

// Mesma chave usada pelo CookieConsent para saber se o usuário já decidiu sobre cookies
const COOKIE_STORAGE_KEY = "gc_cookie_consent_v1";
// Evento disparado pelo CookieConsent quando o usuário aceita ou recusa os cookies
const CONSENT_RESOLVED_EVENT = "gc:cookie-consent-resolved";
// Evita reexibir o anúncio na mesma sessão do navegador
const PROMO_SESSION_KEY = "gc_promo_negocia_seen";

export default function PromoModal() {
    const [open, setOpen] = useState(false);

    // Trava o scroll do body enquanto o modal está aberto
    useEffect(() => {
        if (open) document.body.classList.add("modal-open");
        else document.body.classList.remove("modal-open");
        return () => document.body.classList.remove("modal-open");
    }, [open]);

    // Fecha com a tecla Esc
    useEffect(() => {
        if (!open) return;
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    useEffect(() => {
        // Já exibido nesta sessão? Não mostra de novo.
        try {
            if (sessionStorage.getItem(PROMO_SESSION_KEY)) return;
        } catch {}

        function showPromo() {
            try { sessionStorage.setItem(PROMO_SESSION_KEY, "1"); } catch {}
            setOpen(true);
        }

        function cookieResolved(): boolean {
            try {
                const saved = localStorage.getItem(COOKIE_STORAGE_KEY);
                return saved === "accepted" || saved === "rejected";
            } catch {
                // Sem acesso ao storage, o modal de cookies não bloqueia
                return true;
            }
        }

        // Se o usuário já decidiu sobre cookies, o modal de cookies não vai aparecer:
        // pode exibir o anúncio imediatamente.
        if (cookieResolved()) {
            showPromo();
            return;
        }

        // Caso contrário, aguarda o modal de cookies ser resolvido para não sobrepor.
        function onResolved() {
            window.removeEventListener(CONSENT_RESOLVED_EVENT, onResolved);
            showPromo();
        }
        window.addEventListener(CONSENT_RESOLVED_EVENT, onResolved);
        return () => window.removeEventListener(CONSENT_RESOLVED_EVENT, onResolved);
    }, []);

    function close() {
        setOpen(false);
    }

    if (!open) return null;

    return (
        <>
            <div className="modal-backdrop show" onClick={close} />

            <div
                className="modal d-block"
                role="dialog"
                aria-modal="true"
                aria-label="Anúncio"
                onClick={close}
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div
                        className="modal-content border-0 bg-transparent gc-promo-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="btn-close gc-promo-close"
                            aria-label="Fechar"
                            onClick={close}
                        />
                        <img
                            src="/img/negocia-gestao.png"
                            alt="Negocie sua dívida com a Gestão Plano de Saúde"
                            className="gc-promo-img"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}