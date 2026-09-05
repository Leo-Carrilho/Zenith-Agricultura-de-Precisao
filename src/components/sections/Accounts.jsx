import { useState } from "react";
import { Check, Settings2, UserCog, UserRoundCheck } from "lucide-react";

const profiles = {
  admin: {
    Icon: UserCog,
    label: "Administrador",
    eyebrow: "Controle avançado",
    title: "Proprietário ou gestor",
    summary: "Perfil voltado para gestão da propriedade, acompanhamento da equipe e revisão das atividades.",
    permissions: [
      "Administra a propriedade",
      "Cadastra e acompanha a equipe",
      "Atribui tarefas e atividades",
      "Acompanha os módulos permitidos",
      "Revisa a conclusão das atividades"
    ]
  },
  employee: {
    Icon: UserRoundCheck,
    label: "Funcionário",
    eyebrow: "Operação em campo",
    title: "Funcionário",
    summary: "Perfil focado na rotina operacional, tarefas atribuídas e visualização dos dados autorizados.",
    permissions: [
      "Registra entrada e saída",
      "Consulta tarefas atribuídas",
      "Altera o status das próprias atividades",
      "Acessa apenas os módulos autorizados",
      "Visualiza dados da propriedade vinculada"
    ]
  }
};

export function Accounts() {
  const [active, setActive] = useState("admin");
  const profile = profiles[active];
  const Icon = profile.Icon;

  return (
    <section className="section accounts" id="contas">
      <div className="container section-head reveal">
        <span className="eyebrow">Contas e permissões</span>
        <h2>Cada pessoa acessa o que precisa.</h2>
      </div>
      <div className="container account-console reveal">
        <div className="account-tabs" role="tablist" aria-label="Tipos de conta">
          {Object.entries(profiles).map(([key, item]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={active === key}
              id={`account-tab-${key}`}
              aria-controls="account-panel"
              tabIndex={active === key ? 0 : -1}
              className={active === key ? "is-active" : ""}
              onClick={() => setActive(key)}
              onKeyDown={(event) => {
                if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
                event.preventDefault();
                const next = event.key === "Home" ? "admin" : event.key === "End" ? "employee" : active === "admin" ? "employee" : "admin";
                setActive(next);
                document.getElementById(`account-tab-${next}`)?.focus();
              }}
            >
              <item.Icon size={18} aria-hidden="true" />
              {item.label}
            </button>
          ))}
        </div>
        <div className={`account-detail ${active}`} id="account-panel" role="tabpanel" aria-labelledby={`account-tab-${active}`} tabIndex={0}>
          <div>
            <Icon size={34} aria-hidden="true" />
            <span className="permission-label">{profile.eyebrow}</span>
            <h3>{profile.title}</h3>
            <p>{profile.summary}</p>
          </div>
          <ul>
            {profile.permissions.map((item) => (
              <li key={item}><Check size={17} aria-hidden="true" />{item}</li>
            ))}
          </ul>
          <div className="permission-mock" aria-hidden="true">
            <Settings2 size={22} />
            <span>{active === "admin" ? "Módulos e equipe" : "Tarefas atribuídas"}</span>
            <strong>{active === "admin" ? "Acesso amplo" : "Acesso autorizado"}</strong>
          </div>
        </div>
      </div>
      <div className="container status-line reveal" aria-label="Fluxo de status de atividades">
        {["Pendente", "Em andamento", "Concluído", "Confirmado"].map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>
  );
}
