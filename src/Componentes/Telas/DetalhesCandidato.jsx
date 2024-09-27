import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

export default function DetalhesCandidato({ candidato, onVoltar }) {
    const [questionamento, setQuestionamento] = useState("");

    const controlarEnvio = (e) => {
        e.preventDefault();
        if (questionamento.trim()) {
            candidato.questionamentos.push(questionamento); {/* o questionamentos no mock é um array, entao da pra dar .push e inserir no array*/}
            setQuestionamento(""); 
        }
    };

    return (
        <div>
            <Button onClick={onVoltar} variant="secondary">Voltar</Button>
            <Card style={{ width: '500px', marginTop: '20px' }}>
                <Card.Img variant="top" src={candidato.avatar} />
                <Card.Body>
                    <Card.Title>{`Candidato: ${candidato.nome}`}</Card.Title>
                    <Card.Text>
                        <p>{`Email: ${candidato.email}`}</p>
                        <p>{`Curtidas: ${candidato.curtidas}`}</p>
                        <p>{`Descurtidas: ${candidato.descurtidas || 0}`}</p>
                        <h5>Propostas:</h5>
                        <ul>
                            {candidato.propostas.map((proposta, index) => (
                                <li key={index}>{proposta}</li>
                            ))}
                        </ul>
                        <h5>Questionamentos:</h5> 
                        <form onSubmit={controlarEnvio}>  {/*optei por fazer um "formulario" com uma linha, so pra ocorrer o input do questionamento*/}
                            <input 
                                type="text" 
                                value={questionamento} 
                                onChange={(e) => setQuestionamento(e.target.value)} 
                                placeholder="Digite seu questionamento"
                                required
                            />
                            <Button type="success" variant="primary">Questionar!</Button>
                        </form>
                        <ul>
                            {candidato.questionamentos.map((quest, index) => (
                                <li key={index}>{quest}</li>
                            ))}
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
