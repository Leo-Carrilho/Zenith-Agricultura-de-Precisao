import {
  Activity,
  BarChart3,
  BrainCircuit,
  CloudSun,
  Database,
  Drone,
  FileText,
  Map,
  Monitor,
  PackageCheck,
  Smartphone,
  Sprout,
  UsersRound
} from "lucide-react";

import { MOBILE_URL, PLATFORM_URL } from "../lib/device";
export const ZENITH_MOBILE_APP_URL = MOBILE_URL;
export const ZENITH_DESKTOP_APP_URL = PLATFORM_URL;
export const ZENITH_APP_URL = ZENITH_DESKTOP_APP_URL;

export const navItems = [
  ["Início", "#inicio"],
  ["Soluções", "#solucoes"],
  ["Tecnologia", "#tecnologia"],
  ["Sobre", "#sobre"],
  ["Contato", "#contato"]
];

export const operationFlow = [
  [Drone, "Drone", "Registro manual de imagens aéreas da lavoura."],
  [Smartphone, "Plataforma", "Envio e organização dos dados em uma interface responsiva."],
  [BrainCircuit, "Inteligência Artificial", "Processamento das imagens por visão computacional."],
  [Activity, "Acompanhamento", "Histórico, tarefas e informações para apoiar a rotina."]
];

export const operationFeatures = [
  [BrainCircuit, "Diagnóstico por IA", "Apoio à análise de imagens da soja com modelo em validação."],
  [Sprout, "Monitoramento visual", "Leitura visual do plantio, fileiras e regiões de atenção."],
  [CloudSun, "Clima", "Informações climáticas para contextualizar as decisões da propriedade."],
  [Map, "Mapa e talhões", "Organização da área produtiva por propriedade, mapa e talhões."],
  [PackageCheck, "Estoque", "Registro de insumos disponíveis, entradas e saídas da operação."],
  [FileText, "Diário de campo", "Histórico de observações, atividades e ocorrências da lavoura."],
  [UsersRound, "Equipe e atividades", "Atribuição de tarefas e acompanhamento por perfis de acesso."]
];

export const workflowSteps = [
  ["01", "Planejamento", "A equipe define a área, o objetivo da vistoria e as imagens necessárias para análise."],
  ["02", "Voo", "O drone sobrevoa o talhão com foco em cobertura, nitidez e sequência das capturas."],
  ["03", "Captura", "As imagens aéreas da lavoura são registradas para envio e organização na plataforma."],
  ["04", "Processamento", "A Inteligência Artificial e a visão computacional processam os arquivos enviados."],
  ["05", "Análise", "O sistema apresenta indicadores, resultados visuais e histórico para acompanhamento."]
];

export const managementModules = [
  [CloudSun, "Clima", "Condições recentes e alertas para planejamento."],
  [Map, "Mapa e talhões", "Áreas organizadas por propriedade e safra."],
  [PackageCheck, "Estoque", "Controle de insumos e movimentações."],
  [FileText, "Diário de campo", "Registros de observações e atividades."],
  [Database, "Histórico", "Diagnósticos anteriores para consulta."]
];

export const technologyStack = [
  ["React + PWA", "Organiza a interface responsiva para celular e computador."],
  ["Firebase", "Controla autenticação e dados compartilhados."],
  ["FastAPI", "Conecta o front-end aos serviços de análise."],
  ["TensorFlow + OpenCV", "Processa imagens agrícolas e visão computacional."],
  ["Fotogrametria", "Permite gerar modelos 3D a partir de imagens sequenciais."]
];

export const team = [
  ["Leonardo", "Front-end e experiência PWA", "Interface, responsividade, instalação como app e experiência visual do Zenith.", "LC", BarChart3],
  ["Octavio", "Inteligência Artificial, visão computacional e Aplicativo Desktop", "Modelos de análise, processamento de imagens e validação técnica dos resultados, estudando técnicas agrícolas.", "OR", BrainCircuit],
  ["Samuel", "Aplicativo mobile e integração", "Fluxos mobile, integração entre serviços, testes e suporte à experiência em campo.", "SR", Smartphone],
  ["Pietro Gimenez", "Auxiliar do Aplicativo Desktop", "Desenvolvimento da aplicação para computador, adaptação de fluxos e suporte ao uso em ambiente desktop.", "PG", Monitor]
];

export const faqs = [
  ["O drone realiza o voo sozinho?", "Não. O funcionamento atual considera captura manual das imagens. O Zenith organiza o envio, a análise e o acompanhamento dos registros."],
  ["A IA substitui um profissional agrícola?", "Não. A IA oferece apoio à inspeção da lavoura e os resultados devem ser interpretados por um responsável técnico."],
  ["O aplicativo funciona sem internet?", "O carregamento básico pode utilizar cache, mas análises, clima e sincronização dependem de conexão."],
  ["Quais imagens podem ser analisadas?", "As imagens precisam ser compatíveis, nítidas e adequadas para análise visual da lavoura de soja."],
  ["Quem pode acessar os dados da propriedade?", "O acesso depende do perfil do usuário e da propriedade vinculada, com permissões diferentes para gestor e funcionário."]
];
