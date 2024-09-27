import Candidato from "./elementos/Candidato";

export default function GridCandidatos({ listaCandidatos, onProposta, onLike, onDislike }) {
    if (listaCandidatos) {
        return (
            <div style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                margin: '10px',
                padding: '10px',
                gap: '20px'
            }}>
                {listaCandidatos.map((candidato) => (
                    <Candidato 
                        key={candidato.id} 
                        candidato={candidato} 
                        onProposta={onProposta} 
                        onLike={onLike} 
                        onDislike={onDislike} 
                    />
                ))}
            </div>
        );
    } else {
        return (<h1>Carregando...</h1>);
    }
}
