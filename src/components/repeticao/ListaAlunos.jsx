import React from "react";
import alunos from "../../data/alunos";

export default (props) => {
  const lis = alunos.map((alunos) => {
    return (
      <li key={alunos.id}>
        {alunos.id}) {alunos.nome} -&gt; {alunos.nota}
      </li>
    );
  });

  return (
    <div>
      <ul style={{ listStyle: "none" }}>{lis}</ul>
    </div>
  );
};
