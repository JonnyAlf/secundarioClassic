import { useState } from "react";
import Menu from "../assets/hamburguer.svg";
import Close from "../assets/close.svg";
import Logo from "../assets/logo.svg";
import Button from "../components/Button";

import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import joinha from "../assets/images/joinha.jpg";
import "../styles/hero.css";

import "../styles/header.css";
import "../styles/utility.css";
import "../styles/buttons.css";
import "../styles/section.css";
import Carrosel from "../components/carrossel/testimonialCard";
import NossosPlanos from "../components/planos/planos";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <>
            <header className="container py-sm">

                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo Quintalhação" width={220} height={80} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#random-solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#cta-final">Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#">Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>

                </nav>
            </header>
            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Esse é o quadrado bonitão pra desktop" />
                </span>
                <img src={HeroRectangleOne} alt="Outro quadrado, só que mais estiloso" />
                <div className="container content">
                    <p>Tá vendo esse retângulo? Só pra dar um charme.</p>
                    <h1>Bem-vindo ao futuro! Ou pelo menos, à nossa página inicial.</h1>
                    <p>Se você está no mobile, parabéns, chegou ao lugar certo.</p>
                    <div>
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Clique aqui e descubra o mistério" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section id="random-solution" className="container py-lg" style={{ backgroundColor: "var(--bg-color)", color: "var(--primary-color)" }}>
                <div className="text-center">
                    <h2>💡 A Solução Que Você Nem Sabia Que Precisava</h2>
                    <p className="mt-sm">Às vezes, a gente nem sabe o que tá faltando na vida, né? Deixa que o Quintalhação resolve pra você!</p>
                </div>

                <div className="even-columns items-center mt-lg">
                    <div className="flex-1 text-center">
                        <img src={joinha} alt="imagem do joinha bacana" />
                        <h3>Organizador de Tarefas que Faz Café!</h3>
                        <p>Gerencie suas tarefas enquanto o cheirinho de café invade sua tela (ainda estamos trabalhando na parte do café, mas as tarefas são organizadas de verdade).</p>
                    </div>
                </div>

                <div className="text-center mt-lg">
                    <button className="btn-primary">Quero Testar</button>
                </div>
            </section>

            <section id="testimonials">
                <Carrosel />
            </section>

            <section id="pricing" className="container">
                <NossosPlanos />
            </section>

            <section id="faq">
                <h2>Perguntas Frequentes</h2>
                <div className="faq-item">
                    <h3>Como posso adquirir o produto?</h3>
                    <p>Você pode adquirir através do nosso site ou em lojas parceiras.</p>
                </div>
                <div className="faq-item">
                    <h3>Qual é o prazo de entrega?</h3>
                    <p>O prazo de entrega é de 3 a 5 dias úteis para capitais.</p>
                </div>
            </section>

            <section id="cta-final">
                <h2>Pronto para começar?</h2>
                <p>Junte-se a centenas de clientes satisfeitos e adquira o nosso produto agora mesmo.</p>
                <button className="btn-primary">Compre Agora</button>
            </section>
            
            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <div className="pricing-card">
                    <div className="pricing-card basico">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Ideal para eventos pequenos, com drinks simples e atendimento básico.</p>
                        </span>
                        <h2>Grátis</h2>
                        <Button text="Contratar agora" secondary key="free" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Até 30 pessoas</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>1 tipo de drink</p>
                        </span>
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
                            <h2>R$ 89,90</h2>
                            <p>/evento</p>
                        </span>
                        <Button text="Contratar agora" key="premium" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Até 100 pessoas</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Até 5 tipos de drinks</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Serviço completo (montagem e bartender)</p>
                        </span>
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
                            <h2>R$ 299,90</h2>
                            <p>/evento</p>
                        </span>
                        <Button text="Contratar agora" key="vip" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Até 200 pessoas</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Consultoria de drinks</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Drinks exclusivos e personalizados</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Serviço premium e equipe dedicada</p>
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}
