import { UserCog, UserRoundCheck } from "lucide-react";

export function Accounts() {
  return (
    <section className="section accounts" id="contas">
      <div className="container section-head reveal">
        <span className="eyebrow">Contas e permissões</span>
        <h2>Cada pessoa acessa o que precisa.</h2>
      </div>
      <div className="container account-grid">
        <article className="account-card admin reveal">
          <UserCog size={32} aria-hidden="true" />
          <span className="permission-label">Controle avançado</span>
          <h3>Proprietário ou gestor</h3>
          <ul>
            <li>Administra a propriedade</li>
            <li>Cadastra e acompanha a equipe</li>
            <li>Atribui tarefas e atividades</li>
            <li>Acompanha os módulos permitidos</li>
            <li>Revisa a conclusão das atividades</li>
          </ul>
        </article>
        <article className="account-card employee reveal">
          <UserRoundCheck size={32} aria-hidden="true" />
          <span className="permission-label">Operação em campo</span>
          <h3>Funcionário</h3>
          <ul>
            <li>Registra entrada e saída</li>
            <li>Consulta tarefas atribuídas</li>
            <li>Altera o status das próprias atividades</li>
            <li>Acessa apenas os módulos autorizados</li>
            <li>Visualiza dados da propriedade vinculada</li>
          </ul>
        </article>
      </div>
      <div className="container status-line reveal" aria-label="Fluxo de status de atividades">
        {["Pendente", "Em andamento", "Concluído", "Confirmado"].map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>
  );
}
