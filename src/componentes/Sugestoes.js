import React from 'react';
import Suggestion from './Sugestao';
import suggestionData from '../data/suggestions.json'; 

function Sugestoes() {
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {suggestionData.map(suggestion => (
        <Suggestion key={suggestion.user} user={suggestion.user} image={suggestion.image} />
      ))}
    </div>
  );
}

export default Sugestoes;
