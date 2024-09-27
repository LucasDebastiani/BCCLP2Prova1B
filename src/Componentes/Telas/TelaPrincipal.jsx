import { useState } from "react";
import { listaCandidatos } from "../../dados/candidatos";
import GridCandidatos from "./GridCandidatos";
import DetalhesCandidato from "./DetalhesCandidato";
import Pagina from ".././layouts/Pagina";

export default function TelaPrincipal() {
    const [candidatos, setCandidatos] = useState(listaCandidatos);
    const [detalharCandidato, setDetalharCandidato] = useState(false);
    const [candidatoSelecionado, setCandidatoSelecionado] = useState(null);
    const [verPropostas, setVerPropostas] = useState(false);

    const voltar = () => {
        setDetalharCandidato(false);
        setCandidatoSelecionado(null);
        setVerPropostas(false);
    };

    const controlarLike = (id) => {
        setCandidatos(prevCandidatos =>
            prevCandidatos.map(candidato =>
                candidato.id === id ? { ...candidato, curtidas: candidato.curtidas + 1 } : candidato
            )
        );
    };

    const controlarDislike = (id) => {
        setCandidatos(prevCandidatos =>
            prevCandidatos.map(candidato =>
                candidato.id === id ? { ...candidato, descurtidas: (candidato.descurtidas || 0) + 1 } : candidato
            )
        );
    };

    const controlarProposta = (id) => {
        const candidato = candidatos.find(candidato => candidato.id === id);
        if (candidato) {
            setCandidatoSelecionado(candidato);
            setVerPropostas(true);
        }
    };

    return (
        <Pagina>
            <div>
                {verPropostas ? (
                    candidatoSelecionado && (
                        <DetalhesCandidato candidato={candidatoSelecionado} onVoltar={voltar} />
                    )
                ) : detalharCandidato ? (
                    candidatoSelecionado && (
                        <DetalhesCandidato candidato={candidatoSelecionado} onBack={voltar} />
                    )
                ) : (
                    <GridCandidatos
                        listaCandidatos={candidatos}
                        onLike={controlarLike}
                        onDislike={controlarDislike}
                        onProposta={controlarProposta}
                    />
                )}
            </div>
        </Pagina>

    );
}
