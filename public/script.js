document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/professor')
      .then(response => response.json())
      .then(data => {
        const professoresList = document.getElementById('professores-list');
        data.data.forEach(professor => {
          const li = document.createElement('li');
          li.textContent = professor.nome;
          professoresList.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Erro ao buscar professores:', error);
      });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/aluno')
      .then(response => response.json())
      .then(data => {
        const alunosList = document.getElementById('alunos-list');
        data.data.forEach(aluno => {
          const li = document.createElement('li');
          li.textContent = aluno.nome;
          alunosList.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Erro ao buscar alunos:', error);
      });
  });