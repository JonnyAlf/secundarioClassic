import james from "../../assets/images/carrossel/james.jpg";
import ella from "../../assets/images/carrossel/ella.jpg";
import lucas from "../../assets/images/carrossel/lucas.jpg";
import sofia from "../../assets/images/carrossel/sofia.png";
import rick from "../../assets/images/carrossel/rick.jpg";

import Star from "../../assets/images/carrossel/star.png";
import StarOuter from "../../assets/images/carrossel/star_outer.png";
import "./testimonialCard.css";

interface Carrossel {
    image: string;
    name: string;
    description: string;
}

export default function TestimonialCard() {
    const testimonials: Carrossel[] = [
        {
            image: james,
            name: "James Martini",
            description: "O ‘Classic Bartender’ elevou o meu conceito de drinks. O martini especial foi o mais equilibrado que já experimentei!"
        },
        {
            image: ella,
            name: "Ella Collins",
            description: "Simplesmente adorei a experiência! Os drinks são preparados com uma técnica impecável. Definitivamente voltarei!"
        },
        {
            image: lucas,
            name: "Lucas Costa",
            description: "Eu pedi o clássico ‘Old Fashioned’ e nunca provei algo igual. Um toque moderno em um sabor atemporal."
        },
        {
            image: sofia,
            name: "Sofia Moreira",
            description: "Os coquetéis têm sabores únicos e surpreendentes. O atendimento e a qualidade do ‘Classic Bartender’ são incomparáveis!"
        },
        {
            image: rick,
            name: "Rick Delgado",
            description: "O ‘Classic Bartender’ sabe como criar uma experiência de alto nível. O gin tônica com toques cítricos foi uma obra de arte!"
        }
    ];

    return (
        <section id="testimonials">
            <header>
                <span>
                    <p className="desktop-only">Conselho de quem conhece</p>
                    <h2>Cada cliente importa!</h2>
                </span>
                <p>
                    Descubra a opinião dos nossos clientes que viveram a experiência única do Classic Bartender. 
                    Veja o que os amantes de drinks têm a dizer!
                </p>
            </header>

            <section className="carousel">
                <div className="carousel-content">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="carousel-card">
                            <img src={testimonial.image} alt={`Imagem perfil de ${testimonial.name}`} />
                            <span className="testimony">
                                <p>{testimonial.description}</p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>{testimonial.name}</p>
                                <p>Amante de Drinks</p>
                            </span>
                        </div>
                    ))}
                </div>
                <div className="carousel-content">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="carousel-card">
                            <img src={testimonial.image} alt={`Imagem perfil de ${testimonial.name}`} />
                            <span className="testimony">
                                <p>{testimonial.description}</p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>{testimonial.name}</p>
                                <p>Amante de Drinks</p>
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}
