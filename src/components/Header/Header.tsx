"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./header.module.css";

const navItems = [
    { href: "/", label: "HOME" },
    { href: "/institucional", label: "INSTITUCIONAL" },
    { href: "/entidades", label: "ENTIDADES" }, // dropdown especial
    { href: "/outros-produtos", label: "OUTROS PRODUTOS" },
    { href: "/contato", label: "CONTATO" },
    { href: "/faq", label: "FAQ" },
];

const entidades = [
    { href: "/entidades/abrae", label: "Abrae" },
    { href: "/entidades/amicoserv", label: "Amicoserv" },
    { href: "/entidades/aplb", label: "Aplb" },
    { href: "/entidades/assist", label: "Assist Baixada" },
    { href: "/entidades/prime", label: "Prime Leste" },
    { href: "/entidades/uned", label: "Uned" },
    { href: "/entidades/uniservip", label: "Uniservip" },
    { href: "/entidades/unpe", label: "Unpe" },
    { href: "/entidades/untetec", label: "Untetec" },
];

export default function Header() {
    const pathname = usePathname();

    const [menuOpen, setMenuOpen] = useState(false);
    const [isTouch, setIsTouch] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    const closeTimerRef = useRef<number | null>(null);
    const dropdownRef = useRef<HTMLLIElement | null>(null);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname?.startsWith(href);

    useEffect(() => {
        const mqHover = window.matchMedia?.("(hover: hover)")?.matches ?? false;
        const touch = (navigator?.maxTouchPoints ?? 0) > 0 || !mqHover;
        setIsTouch(touch);

        const update = () => setIsDesktop(window.innerWidth >= 992 && mqHover);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const openNow = () => {
        if (closeTimerRef.current) {
            window.clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
        setMenuOpen(true);
    };

    const closeWithDelay = (ms = 300) => {
        if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = window.setTimeout(() => {
            setMenuOpen(false);
            closeTimerRef.current = null;
        }, ms) as unknown as number;
    };

    const cancelClose = () => {
        if (closeTimerRef.current) {
            window.clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
    };

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const onDocClick = (e: MouseEvent) => {
            if (!dropdownRef.current) return;
            if (!dropdownRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("click", onDocClick);
        return () => document.removeEventListener("click", onDocClick);
    }, []);

    return (
        <header className={styles.header}>
            <div className="bg-white border-bottom">
                <div className="container d-none d-lg-flex justify-content-end gap-2 py-2">
                    <a
                        href="https://www.digitalsaude.com.br/portal/gestaosaude"
                        className="btn btn-sm btn-primary"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Área do Cliente
                    </a>
                    <a
                        href="/boleto"
                        className="btn btn-sm btn-success"
                        target="_blank"
                        rel="noreferrer"
                    >
                        2ª via de boleto
                    </a>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg bg-white navbar-light" data-bs-theme="light">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="/img/logo.png" alt="Grupo Contem" height={48} />
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Alternar navegação"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {navItems.map(({ href, label }) => {
                                if (href === "/entidades") {
                                    return (
                                        <li
                                            key={href}
                                            ref={dropdownRef}
                                            className={`nav-item ${styles.hoverDropdown} position-static`}
                                            onMouseEnter={() => isDesktop && openNow()}
                                            onMouseLeave={() => isDesktop && closeWithDelay(300)}
                                        >
                                            <button
                                                type="button"
                                                className={`nav-link ${styles.navLink} d-flex align-items-center gap-1`}
                                                aria-expanded={menuOpen}
                                                aria-haspopup="true"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    if (!isDesktop) {
                                                        menuOpen ? closeWithDelay(0) : openNow();
                                                    }
                                                }}
                                            >
                                                {label}
                                                <i
                                                    className={`fa fa-chevron-down small ${
                                                        menuOpen ? styles.chevronOpen : ""
                                                    }`}
                                                />
                                            </button>

                                            <div
                                                className={`${styles.dropdownMenu} ${
                                                    menuOpen && isDesktop ? styles.open : ""
                                                }`}
                                                role="menu"
                                                aria-label="Entidades"
                                                onMouseEnter={cancelClose}
                                                onMouseLeave={() => closeWithDelay(250)}
                                            >
                                                <div className="container py-3">
                                                    <div className="row">
                                                        {entidades.map((item) => (
                                                            <div key={item.href} className="col-12 col-sm-6 col-lg-4">
                                                                <Link href={item.href} className={styles.dropdownLink}>
                                                                    {item.label}
                                                                </Link>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                id="entidades-submenu"
                                                className={`d-lg-none ${styles.mobileSubmenu} ${
                                                    menuOpen && !isDesktop ? styles.open : ""
                                                }`}
                                            >
                                                {entidades.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        className={`${styles.dropdownLink} d-block`}
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#navbarSupportedContent"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </li>
                                    );
                                }

                                return (
                                    <li key={href} className="nav-item">
                                        <Link
                                            href={href}
                                            className={`nav-link ${styles.navLink} ${
                                                isActive(href) ? styles.navLinkActive : ""
                                            }`}
                                            aria-current={isActive(href) ? "page" : undefined}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="d-lg-none d-flex flex-column gap-2 mb-3">
                            <a
                                href="https://www.digitalsaude.com.br/portal/gestaosaude"
                                className="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Área do Cliente
                            </a>
                            <a
                                href="/boleto"
                                className="btn btn-success"
                                target="_blank"
                                rel="noreferrer"
                            >
                                2ª via de boleto
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
