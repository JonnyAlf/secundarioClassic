import React, { useState } from 'react';
import "./contato.css";

const Contato: React.FC = () => {
    const [toMail, setToMail] = useState('');
    const [content, setContent] = useState('');

    function handleMail() { 

        fetch('/api', {
            method: 'POST',
            headers: {
                'Authorization': ` Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA5NzYyNDQ4MzkzODAxNTY3OTIwIiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJqYWxlaXRlQG1pbmhhLmZhZy5lZHUuYnIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6ImlkV29sb3hzeWl5bXd0aHRMUHpzSnciLCJuYmYiOjE3MzIyMzAzMDMsImlhdCI6MTczMjIzMDYwMywiZXhwIjoxNzMyMjM0MjAzLCJqdGkiOiI3MzFjYzRkODExMmYwY2Y1Y2ExNmFlNDc1NzU4Y2QzYzk3MDRiOTIzIn0.cbQAv2HimG4SjzaGievhlMapJF1D5_jaFw8XINOOGpRLajQlARdxfI7YCBZreSg6T1-0MgcKq0O28EtJ3t1QlnMa9V0cZ8v1OBElB2kxUTCHsl1txfDeK5BrDhmI2qvVcZtWdfV8Ia4h7gqPok_i5U2O19T5d7vTKWOfAmtmBcCyYWClD-6YJg_mZn1lA05MLlySwlkoKJwEsovxdSqgFl-8xMNNRUI7SDryKSMPipKDDedBAfBUQzgpra4nCU2QuHhajE0-Ii2Pn6-vTQ9ZN61f_K3FpayNLtpMz6_1u5E9vMQs-xF9NBJjvRiLiTaLCgdTlZyRSjxV0Bl3DWfdVQ`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                toMail: toMail,
                content: content
            })
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(err => { throw new Error(err.message); });
            }
            return res.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error('Erro ao enviar:', error));
    }

    return (
        <section className="contato">
            <header>
                <span>
                    <p className="desktop-only">Envie sua dúvida</p>
                    <h2>Entre em contato</h2>
                </span>
                <p>
                    Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento, uma dúvida técnica de algum de nossos produtos. Estamos à disposição para responder.
                </p>
            </header>
            <section className="contato-form">
                <div>
                    <input
                        type="email"
                        placeholder="Seu e-mail"
                        value={toMail}
                        onChange={(e) => setToMail(e.target.value)}
                    />
                    <textarea
                        placeholder="Motivo do contato"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <button onClick={handleMail}>Enviar</button>
                </div>
            </section>
        </section>
    );
};

export default Contato;
