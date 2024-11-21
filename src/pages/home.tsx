import { useEffect, useState } from "react";
import Menu from "../assets/images/header/hamburguer.svg";
import Close from "../assets/images/header/close.svg";
import Logo from "../assets/images/header/logo.svg";
import Button from "../components/Button";
import Aniversario from "../assets/images/solution/aniversario-icon.svg";
import Casamento from "../assets/images/solution/casamento-icon.svg";
import Festa from "../assets/images/solution/festa-icon.svg";
import Check from "../assets/images//header/check.svg";
import "../styles/hero.css";

import "../styles/header.css";
import "../styles/utility.css";
import "../styles/buttons.css";
import "../styles/section.css";
import "../styles/solution.css";
import "../styles/planos.css";

import TestimonialCard from "../components/carrossel/testimonialCard";
import Contato from "../components/contato/contato";


export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showMobileMenu]);

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo Quintalhação" width={220} height={80} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li><a href="#">Home</a></li>
                            <li><a href="#solution">Soluções</a></li>
                            <li><a href="#testimonials">Depoimentos</a></li>
                            <li><a href="#pricing">Preços</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ? (
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#solution">Soluções</a></li>
                                        <li><a href="#testimonials">Depoimentos</a></li>
                                        <li><a href="#pricing">Preços</a></li>
                                        <li><a href="#cta-final">Contato</a></li>
                                        <li><a className="reverse-color" href="#">Login</a></li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(false)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <span onClick={() => setShowMobileMenu(true)} className="btn-wrapper">
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        )}
                    </div>
                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                </span>
                <div className="container content">
                    <p>Serviço de Bar para Festas & Eventos</p>
                    <h1>Transforme seu evento com a magia dos drinks!</h1>
                    <p>Com mais de 10 anos de experiência e mais de 6.000 eventos realizados, nossos mixologistas estão prontos para proporcionar momentos inesquecíveis!</p>
                    <div>
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Saiba Mais..." secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>Sob medida para você</h2>
                        </span>
                    </span>
                    <p>
                        Inovação é com a gente! A <strong>Classic Bartender</strong> já conquistou diversos clientes, seja você mais um deles. Veja como podemos transformar seu evento com nosso serviço de open bar.
                    </p>
                </header>
                <section className="even-columns">
                    <div className="card">
                        <span>
                            <img src={Casamento} alt="Ícone de Casamento" width={64} height={64} />
                        </span>
                        <div>
                            <h3>Casamentos Memoráveis</h3>
                            <p>
                                Tornamos o seu grande dia ainda mais especial! Oferecemos um open bar personalizado, com drinks exclusivos e atendimento impecável para garantir que cada momento seja inesquecível.
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="card">
                        <span>
                            <img src={Aniversario} alt="Ícone de Aniversário" width={64} height={64} />
                        </span>
                        <div>
                            <h3>Aniversários Incríveis</h3>
                            <p>
                                Celebre com estilo! Nosso serviço de open bar para aniversários oferece opções de bebidas diversificadas e personalizadas para todos os gostos, incluindo drinks sem álcool, criando uma festa animada e cheia de energia.
                            </p>
                            <hr />
                        </div>
                    </div>

                    <div className="card">
                        <span>
                            <img src={Festa} alt="Ícone de Evento" width={64} height={64} />
                        </span>
                        <div>
                            <h3>Eventos Corporativos e Outros</h3>
                            <p>
                                Seja um evento corporativo ou qualquer outra celebração, o nosso open bar se adapta às necessidades do seu evento. Oferecemos desde coquetéis sofisticados até drinks mais descontraídos, tudo para agradar aos seus convidados.
                            </p>
                            <hr />
                        </div>
                    </div>
                </section>
            </section>

            <section id="testimonials">
                <TestimonialCard />
            </section>

            <section id="pricing" className="container">
    <header>
        <p className="desktop-only">Planos e preços</p>
        <h2>Nossos planos</h2>
    </header>
    <section className="even-columns gap-1.5">

        <div className="pricing-card basico">
            <span className="plan">
                <h3>Básico</h3>
                <p>Ideal para eventos pequenos, com drinks simples e atendimento básico.</p>
            </span>
            <h2>Faça o seu orçamento</h2>
            <Button text="Contratar agora" secondary key="free" />
            <span className="hr" />
            <div className="features">
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Até 30 pessoas</p>
            </div>
            <div className="features">
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>1 tipo de drink</p>
            </div>
        </div>

        <div className="pricing-card premium">
            <span className="bonus">
                <p>1º MÊS COM DESCONTO</p>
            </span>
            <span className="plan">
                <h3>Premium</h3>
                <p>Para eventos maiores com mais variedade de drinks e serviços exclusivos.</p>
            </span>
            <span className="price">
                <h2>R$ 25,00</h2>
                <p>/pessoa</p>
            </span>
            <Button text="Contratar agora" key="premium" />
            <span className="hr" />
            <div className="features">
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Até 100 pessoas</p>
            </div>
            <div className="features">
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Até 5 tipos de drinks</p>
            </div>
            <div className="features">
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Serviço completo (montagem e bartender)</p>
            </div>
        </div>

        <div className="pricing-card vip">
            <span className="bonus">
                <p>Atendimento personalizado</p>
            </span>
            <span className="plan">
                <h3>VIP</h3>
                <p>Para eventos exclusivos com consultoria personalizada e drinks especiais.</p>
            </span>
            <span className="price">
                <h2>R$ 30,90</h2>
                <p>/pessoa</p>
            </span>
            <Button text="Contratar agora" key="vip" />
            <span className="hr" />
            <div className="features">
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Consultoria de drinks</p>
            </div>
            <div className="features">
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Drinks exclusivos e personalizados</p>
            </div>
        </div>
    </section>
</section>


            <section id="contact" className="container">
                <Contato />
            </section>

        </>
    );
}
