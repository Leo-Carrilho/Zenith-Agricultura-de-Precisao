import { Languages } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

const languages = [
  { code: "pt-BR", label: "Português", flag: "/assets/flags/br.svg" },
  { code: "en", label: "English", flag: "/assets/flags/us.svg" },
  { code: "es", label: "Español", flag: "/assets/flags/es.svg" }
];

const LANGUAGE_STORAGE_KEY = "zenith-language";
const supportedLanguages = new Set(languages.map(({ code }) => code));
const LanguageContext = createContext(null);

const translations = {
  "Início": ["Home", "Inicio"], "Soluções": ["Solutions", "Soluciones"], "Tecnologia": ["Technology", "Tecnología"], "Sobre": ["About", "Acerca de"], "Contato": ["Contact", "Contacto"],
  "Sua precisão": ["Your agricultural", "Tu precisión"], "agrícola": ["precision", "agrícola"], "no": ["at its", "en el"], "ponto mais alto.": ["highest point.", "punto más alto."],
  "Drones, inteligência artificial e dados em campo": ["Drones, artificial intelligence and field data", "Drones, inteligencia artificial y datos de campo"],
  "para uma lavoura mais produtiva, sustentável": ["for a more productive, sustainable", "para un cultivo más productivo y sostenible"],
  "e rentável.": ["and profitable crop.", "y rentable."],
  "Conhecer o projeto": ["Discover the project", "Conocer el proyecto"], "Acessar plataforma": ["Access platform", "Acceder a la plataforma"], "Acessar Zenith": ["Access Zenith", "Acceder a Zenith"], "Instalar app": ["Install app", "Instalar app"],
  "Plataforma de agricultura de precisão para monitoramento e gestão de lavouras de soja.": ["Precision agriculture platform for monitoring and managing soybean crops.", "Plataforma de agricultura de precisión para el monitoreo y la gestión de cultivos de soja."],
  "Explore": ["Explore", "Explora"], "Como instalar": ["How to install", "Cómo instalar"], "Perguntas frequentes": ["Frequently asked questions", "Preguntas frecuentes"], "O projeto": ["The project", "El proyecto"], "Nossa equipe": ["Our team", "Nuestro equipo"], "Como funciona": ["How it works", "Cómo funciona"],
  "Projeto acadêmico e tecnológico em agricultura de precisão.": ["Academic and technology project in precision agriculture.", "Proyecto académico y tecnológico de agricultura de precisión."],
  "Mais perspectiva sobre o campo.": ["More perspective on the field.", "Más perspectiva sobre el campo."], "Mais clareza para decidir.": ["More clarity to decide.", "Más claridad para decidir."],
  "Da primeira imagem ao acompanhamento da propriedade, informações conectadas para uma agricultura mais precisa.": ["From the first image to property monitoring, connected information for more precise agriculture.", "Desde la primera imagen hasta el seguimiento de la propiedad, información conectada para una agricultura más precisa."],
  "Explorar solução": ["Explore solution", "Explorar solución"], "Monitoramento agrícola": ["Agricultural monitoring", "Monitoreo agrícola"], "Diagnóstico por IA": ["AI diagnosis", "Diagnóstico por IA"], "Reconstrução 3D": ["3D reconstruction", "Reconstrucción 3D"], "Mapeamento de talhões": ["Field mapping", "Mapeo de parcelas"],
  "Imagens e dados para acompanhar o plantio e reconhecer regiões que precisam de atenção.": ["Images and data to track planting and identify areas that need attention.", "Imágenes y datos para acompañar la siembra e identificar regiones que necesitan atención."],
  "Modelo de inteligência artificial treinado com deep learning para reconhecer padrões em imagens da soja e apoiar o diagnóstico.": ["Artificial intelligence model trained with deep learning to recognize patterns in soybean images and support diagnosis.", "Modelo de inteligencia artificial entrenado con deep learning para reconocer patrones en imágenes de soja y apoyar el diagnóstico."],
  "Imagens sequenciais do voo transformadas em uma perspectiva tridimensional da área.": ["Sequential flight images transformed into a three-dimensional view of the area.", "Imágenes secuenciales del vuelo transformadas en una perspectiva tridimensional del área."],
  "Organização espacial da propriedade para acompanhar cada área e seu histórico.": ["Spatial organization of the property to track each area and its history.", "Organización espacial de la propiedad para acompañar cada área y su historial."],
  "Do voo ao acompanhamento.": ["From flight to monitoring.", "Del vuelo al seguimiento."], "Planejamento": ["Planning", "Planificación"], "Voo": ["Flight", "Vuelo"], "Captura": ["Capture", "Captura"], "Processamento": ["Processing", "Procesamiento"],
  "As análises funcionam como apoio e devem ser confirmadas por um responsável técnico.": ["Analyses support decisions and must be confirmed by a technical professional.", "Los análisis sirven de apoyo y deben ser confirmados por un responsable técnico."],
  "Análise multiespectral": ["Multispectral analysis", "Análisis multiespectral"], "Informações além do que o olho consegue ver.": ["Information beyond what the eye can see.", "Información más allá de lo que el ojo puede ver."],
  "O Zenith transforma registros multiespectrais em mapas que ajudam a encontrar regiões da lavoura que merecem uma inspeção mais próxima.": ["Zenith turns multispectral records into maps that help find crop areas that deserve closer inspection.", "Zenith transforma registros multiespectrales en mapas que ayudan a encontrar regiones del cultivo que merecen una inspección más cercana."],
  "Captura especializada": ["Specialized capture", "Captura especializada"], "Leitura das bandas": ["Band reading", "Lectura de bandas"], "Mapas para vistoria": ["Inspection maps", "Mapas para inspección"],
  "Visualização do levantamento": ["Survey visualization", "Visualización del levantamiento"], "Resultados possíveis da análise.": ["Possible analysis results.", "Resultados posibles del análisis."], "Entenda o fluxo do Zenith": ["Understand the Zenith flow", "Entienda el flujo de Zenith"],
  "Visão computacional": ["Computer vision", "Visión computacional"], "Monitoramento visual do plantio.": ["Visual monitoring of planting.", "Monitoreo visual de la siembra."], "Original": ["Original", "Original"],
  "Vegetação reconhecida": ["Recognized vegetation", "Vegetación reconocida"], "Atenção moderada": ["Moderate attention", "Atención moderada"], "Falha crítica": ["Critical failure", "Falla crítica"], "Caminho de leitura": ["Reading path", "Ruta de lectura"],
  "Análise do talhão": ["Field analysis", "Análisis de la parcela"], "Cobertura": ["Coverage", "Cobertura"], "Uniformidade": ["Uniformity", "Uniformidad"], "Falhas": ["Failures", "Fallos"], "Alta": ["High", "Alta"], "Boa": ["Good", "Buena"], "Baixas": ["Low", "Bajas"],
  "Reconstrução fotogramétrica 3D.": ["3D photogrammetric reconstruction.", "Reconstrucción fotogramétrica 3D."], "Abrir modelo em tela cheia": ["Open full-screen model", "Abrir modelo a pantalla completa"],
  "Gestão da propriedade": ["Property management", "Gestión de la propiedad"], "Análise e gestão em um só lugar.": ["Analysis and management in one place.", "Análisis y gestión en un solo lugar."], "Organização": ["Organization", "Organización"], "Por propriedade": ["By property", "Por propiedad"], "Por talhão": ["By field", "Por parcela"], "Tarefas e responsáveis": ["Tasks and assignees", "Tareas y responsables"], "Registros": ["Records", "Registros"], "Histórico de campo": ["Field history", "Historial de campo"],
  "Contas e permissões": ["Accounts and permissions", "Cuentas y permisos"], "Cada pessoa acessa o que precisa.": ["Each person accesses what they need.", "Cada persona accede a lo que necesita."], "Administrador": ["Administrator", "Administrador"], "Funcionário": ["Employee", "Empleado"], "Controle avançado": ["Advanced control", "Control avanzado"], "Operação em campo": ["Field operation", "Operación en campo"], "Proprietário ou gestor": ["Owner or manager", "Propietario o gerente"],
  "Pendente": ["Pending", "Pendiente"], "Em andamento": ["In progress", "En curso"], "Concluído": ["Completed", "Completado"], "Confirmado": ["Confirmed", "Confirmado"],
  "ACESSE O ECOSSISTEMA": ["ACCESS THE ECOSYSTEM", "ACCEDE AL ECOSISTEMA"], "No escritório ou em campo.": ["In the office or in the field.", "En la oficina o en el campo."], "A mesma Zenith.": ["The same Zenith.", "La misma Zenith."], "Zenith no celular": ["Zenith on mobile", "Zenith en el celular"], "Zenith no computador": ["Zenith on desktop", "Zenith en la computadora"], "Como instalar no celular": ["How to install on mobile", "Cómo instalar en el celular"],
  "Dúvidas importantes antes de usar.": ["Important questions before using.", "Preguntas importantes antes de usar."],
  "SEU PRÓXIMO PASSO": ["YOUR NEXT STEP", "TU PRÓXIMO PASO"], "Um olhar mais preciso.": ["A more precise view.", "Una mirada más precisa."], "Uma decisão mais segura.": ["A safer decision.", "Una decisión más segura."], "Conhecer a equipe": ["Meet the team", "Conocer al equipo"], "Tecnologia com os pés no campo.": ["Technology with its feet in the field.", "Tecnología con los pies en el campo."],
  "Sobre o projeto": ["About the project", "Sobre el proyecto"], "O campo produz dados. O Zenith transforma em informação.": ["The field produces data. Zenith turns it into information.", "El campo produce datos. Zenith los transforma en información."],
  "Registro manual de imagens aéreas da lavoura.": ["Manual recording of aerial crop images.", "Registro manual de imágenes aéreas del cultivo."], "Envio e organização dos dados em uma interface responsiva.": ["Data upload and organization in a responsive interface.", "Envío y organización de datos en una interfaz responsiva."], "Processamento das imagens por visão computacional.": ["Image processing through computer vision.", "Procesamiento de imágenes mediante visión computacional."], "Histórico, tarefas e informações para apoiar a rotina.": ["History, tasks and information to support daily work.", "Historial, tareas e información para apoyar la rutina."],
  "Apoio à análise de imagens da soja com modelo em validação.": ["Support for soybean image analysis with a model under validation.", "Apoyo al análisis de imágenes de soja con un modelo en validación."], "Monitoramento visual": ["Visual monitoring", "Monitoreo visual"], "Leitura visual do plantio, fileiras e regiões de atenção.": ["Visual reading of planting, rows and areas of attention.", "Lectura visual de la siembra, hileras y regiones de atención."], "Condições atuais, alertas e previsão para os próximos cinco dias, com temperatura, chuva, umidade, vento e rajadas, pressão, visibilidade, nuvens e horários do nascer e do pôr do sol.": ["Current conditions, alerts and a five-day forecast, including temperature, rainfall, humidity, wind and gusts, pressure, visibility, cloud cover, and sunrise and sunset times.", "Condiciones actuales, alertas y pronóstico para los próximos cinco días, con temperatura, lluvia, humedad, viento y ráfagas, presión, visibilidad, nubosidad y horarios de salida y puesta del sol."], "Mapa e talhões": ["Map and fields", "Mapa y parcelas"], "Estoque": ["Inventory", "Inventario"], "Diário de campo": ["Field diary", "Diario de campo"], "Equipe e atividades": ["Team and activities", "Equipo y actividades"],
  "A equipe define a área, o objetivo da vistoria e as imagens necessárias para análise.": ["The team defines the area, inspection goal and images needed for analysis.", "El equipo define el área, el objetivo de la inspección y las imágenes necesarias para el análisis."], "O drone sobrevoa o talhão com foco em cobertura, nitidez e sequência das capturas.": ["The drone flies over the field focusing on coverage, sharpness and capture sequence.", "El dron sobrevuela la parcela con foco en cobertura, nitidez y secuencia de capturas."], "As imagens aéreas da lavoura são registradas para envio e organização na plataforma.": ["Aerial crop images are recorded for upload and organization on the platform.", "Las imágenes aéreas del cultivo se registran para enviarlas y organizarlas en la plataforma."], "A Inteligência Artificial e a visão computacional processam os arquivos enviados.": ["Artificial Intelligence and computer vision process the uploaded files.", "La Inteligencia Artificial y la visión computacional procesan los archivos enviados."], "O sistema apresenta indicadores, resultados visuais e histórico para acompanhamento.": ["The system presents indicators, visual results and history for monitoring.", "El sistema presenta indicadores, resultados visuales e historial para el seguimiento."],
  "Organiza a interface responsiva para celular e computador.": ["Organizes the responsive interface for mobile and desktop.", "Organiza la interfaz responsiva para celular y computadora."], "Controla autenticação e dados compartilhados.": ["Manages authentication and shared data.", "Controla la autenticación y los datos compartidos."], "Conecta o front end aos serviços de análise.": ["Connects the front end to analysis services.", "Conecta el front end a los servicios de análisis."], "Processa imagens agrícolas e visão computacional.": ["Processes agricultural images and computer vision.", "Procesa imágenes agrícolas y visión computacional."],
  "O drone realiza o voo sozinho?": ["Does the drone fly by itself?", "¿El dron realiza el vuelo solo?"], "A IA substitui um profissional agrícola?": ["Does AI replace an agricultural professional?", "¿La IA reemplaza a un profesional agrícola?"], "O aplicativo funciona sem internet?": ["Does the app work without internet?", "¿La aplicación funciona sin internet?"], "Quais imagens podem ser analisadas?": ["Which images can be analyzed?", "¿Qué imágenes se pueden analizar?"], "Quem pode acessar os dados da propriedade?": ["Who can access the property data?", "¿Quién puede acceder a los datos de la propiedad?"],
  "Não. O funcionamento atual considera captura manual das imagens. O Zenith organiza o envio, a análise e o acompanhamento dos registros.": ["No. The current operation uses manual image capture. Zenith organizes uploads, analysis and monitoring of records.", "No. El funcionamiento actual considera la captura manual de imágenes. Zenith organiza el envío, el análisis y el seguimiento de los registros."], "Não. A IA oferece apoio à inspeção da lavoura e os resultados devem ser interpretados por um responsável técnico.": ["No. AI supports crop inspection and results must be interpreted by a technical professional.", "No. La IA apoya la inspección del cultivo y los resultados deben ser interpretados por un responsable técnico."],
  "Zenith AI / Modelo em validação": ["Zenith AI / Model under validation", "Zenith AI / Modelo en validación"], "Diagnóstico com Inteligência Artificial.": ["Diagnosis with Artificial Intelligence.", "Diagnóstico con Inteligencia Artificial."], "O resultado deve ser interpretado como apoio à inspeção da lavoura.": ["The result must be interpreted as support for crop inspection.", "El resultado debe interpretarse como apoyo a la inspección del cultivo."], "Modelo em validação": ["Model under validation", "Modelo en validación"], "Da imagem à interpretação.": ["From image to interpretation.", "De la imagen a la interpretación."], "Enviar imagem": ["Upload image", "Enviar imagen"], "Processando": ["Processing", "Procesando"], "Resultado": ["Result", "Resultado"], "Conferência técnica recomendada": ["Technical review recommended", "Se recomienda revisión técnica"],
  "Visão completa da sua lavoura.": ["A complete view of your crop.", "Una visión completa de tu cultivo."], "Interface clara e responsiva": ["Clear and responsive interface", "Interfaz clara y responsiva"], "Dados organizados por propriedade": ["Data organized by property", "Datos organizados por propiedad"], "Histórico por talhão": ["History by field", "Historial por parcela"], "Integração entre os módulos": ["Integration between modules", "Integración entre módulos"], "Apoio à rotina da equipe": ["Support for the team routine", "Apoyo a la rutina del equipo"],
  "Campo → decisão": ["Field → decision", "Campo → decisión"], "Da imagem até a decisão.": ["From image to decision.", "De la imagen a la decisión."], "O Zenith transforma imagens do campo em informações organizadas para apoiar decisões mais inteligentes na propriedade.": ["Zenith turns field images into organized information to support smarter property decisions.", "Zenith transforma imágenes del campo en información organizada para apoyar decisiones más inteligentes en la propiedad."],
  "Quatro frentes trabalhando no mesmo produto.": ["Four areas working on the same product.", "Cuatro frentes trabajando en el mismo producto."], "Equipe": ["Team", "Equipo"], "Arquitetura": ["Architecture", "Arquitectura"], "Tecnologia por trás do Zenith.": ["Technology behind Zenith.", "Tecnología detrás de Zenith."],
  "O monitoramento manual pode ser demorado e dificultar a identificação precoce de problemas na plantação.": ["Manual monitoring can be slow and make early identification of crop problems harder.", "El monitoreo manual puede ser lento y dificultar la identificación temprana de problemas en el cultivo."], "O Zenith centraliza imagens, análises e registros da propriedade em uma plataforma responsiva para celular e computador.": ["Zenith centralizes images, analyses and property records on a responsive platform for mobile and desktop.", "Zenith centraliza imágenes, análisis y registros de la propiedad en una plataforma responsiva para celular y computadora."],
  "Escolha a experiência para o seu dispositivo. Suas informações continuam conectadas à propriedade.": ["Choose the experience for your device. Your information stays connected to the property.", "Elige la experiencia para tu dispositivo. Tu información sigue conectada a la propiedad."], "Consulte informações e acompanhe a rotina em campo pela versão mobile oficial.": ["View information and follow field work through the official mobile version.", "Consulta información y sigue la rutina en campo mediante la versión móvil oficial."], "Instalar aplicativo": ["Install application", "Instalar aplicación"], "Análises detalhadas, gestão da equipe e visualização dos módulos em telas maiores. Acesse diretamente pelo navegador do seu computador ou notebook.": ["Detailed analyses, team management and module views on larger screens. Access directly in your computer or notebook browser.", "Análisis detallados, gestión del equipo y visualización de módulos en pantallas más grandes. Accede directamente desde el navegador de tu computadora o portátil."],
  "Conheça a Zenith e conecte imagens, análises e informações da sua propriedade.": ["Discover Zenith and connect images, analyses and information from your property.", "Conoce Zenith y conecta imágenes, análisis e información de tu propiedad."], "Zenith Agro é um projeto acadêmico e tecnológico em agricultura de precisão.": ["Zenith Agro is an academic and technology project in precision agriculture.", "Zenith Agro es un proyecto académico y tecnológico de agricultura de precisión."],
  "Plataforma": ["Platform", "Plataforma"], "Inteligência Artificial": ["Artificial Intelligence", "Inteligencia Artificial"], "Acompanhamento": ["Monitoring", "Seguimiento"], "Clima": ["Weather", "Clima"], "Histórico": ["History", "Historial"], "Análise": ["Analysis", "Análisis"], "Decisão": ["Decision", "Decisión"]
};
const originalText = new WeakMap();

Object.assign(translations, {
  "Pular para o conteúdo": ["Skip to content", "Saltar al contenido"], "Sua precisão agrícola no ponto mais alto.": ["Your agricultural precision at its highest point.", "Tu precisión agrícola en su punto más alto."],
  "Acompanhe dados da propriedade, registros técnicos, tarefas e histórico em uma interface que conecta as diferentes partes da operação.": ["Track property data, technical records, tasks and history in an interface that connects the different parts of the operation.", "Sigue los datos de la propiedad, registros técnicos, tareas e historial en una interfaz que conecta las diferentes partes de la operación."],
  "Prévia da interface": ["Interface preview", "Vista previa de la interfaz"], "Drone operations / Como funciona": ["Drone operations / How it works", "Operaciones con drones / Cómo funciona"], "CAPTURA AÉREA": ["AERIAL CAPTURE", "CAPTURA AÉREA"],
  "O levantamento é feito com drone e câmera multiespectral.": ["The survey is carried out with a drone and multispectral camera.", "El levantamiento se realiza con dron y cámara multiespectral."], "O equipamento registra, entre outras, as faixas Red Edge e infravermelho próximo.": ["The equipment records, among others, Red Edge and near-infrared bands.", "El equipo registra, entre otras, las bandas Red Edge e infrarrojo cercano."], "Os arquivos são combinados para sinalizar diferenças e orientar a ida ao campo.": ["Files are combined to flag differences and guide field visits.", "Los archivos se combinan para señalar diferencias y orientar la visita al campo."],
  "Cada mapa oferece uma leitura complementar para ajudar a definir onde olhar primeiro na lavoura.": ["Each map offers complementary information to help define where to look first in the crop.", "Cada mapa ofrece una lectura complementaria para ayudar a definir dónde mirar primero en el cultivo."], "Importante:": ["Important:", "Importante:"],
  "fotos de celular ou de drones com câmera RGB não são suficientes para essa análise. Os resultados apoiam a tomada de decisão e não substituem a avaliação de um profissional no campo.": ["mobile photos or drones with RGB cameras are not sufficient for this analysis. Results support decision-making and do not replace an on-field professional assessment.", "las fotos de celular o de drones con cámara RGB no son suficientes para este análisis. Los resultados apoyan la toma de decisiones y no sustituyen la evaluación de un profesional en el campo."],
  "Uma simulação de como o Zenith pode apresentar a leitura do talhão: imagem original, camada de análise, indicadores qualitativos e interpretação para apoiar a inspeção em campo.": ["A simulation of how Zenith can present field readings: original image, analysis layer, qualitative indicators and interpretation to support field inspection.", "Una simulación de cómo Zenith puede presentar la lectura de la parcela: imagen original, capa de análisis, indicadores cualitativos e interpretación para apoyar la inspección en campo."],
  "VEGETAÇÃO": ["VEGETATION", "VEGETACIÓN"], "ATENÇÃO": ["ATTENTION", "ATENCIÓN"], "CONFERIR": ["CHECK", "VERIFICAR"], "DEMONSTRAÇÃO VISUAL": ["VISUAL DEMONSTRATION", "DEMOSTRACIÓN VISUAL"], "Simulação Zenith": ["Zenith simulation", "Simulación Zenith"],
  "Fileiras": ["Rows", "Hileras"], "Alinhamento visível": ["Visible alignment", "Alineación visible"], "Imagem": ["Image", "Imagen"], "Condição adequada": ["Suitable condition", "Condición adecuada"], "Interpretação": ["Interpretation", "Interpretación"],
  "Boa presença visual de vegetação na maior parte da área analisada.": ["Good visual vegetation presence across most of the analyzed area.", "Buena presencia visual de vegetación en la mayor parte del área analizada."], "Pequenas regiões de atenção aparecem para conferência em campo.": ["Small areas of attention appear for field review.", "Pequeñas regiones de atención aparecen para revisión en campo."], "As linhas sugerem leitura de fileiras, sem substituir avaliação técnica.": ["The lines suggest row reading without replacing technical assessment.", "Las líneas sugieren lectura de hileras sin sustituir la evaluación técnica."],
  "Explore a área em três dimensões.": ["Explore the area in three dimensions.", "Explora el área en tres dimensiones."], "Abra a prévia interativa do protótipo Zenith.": ["Open the interactive preview of the Zenith prototype.", "Abre la vista previa interactiva del prototipo Zenith."], "Carregar modelo 3D": ["Load 3D model", "Cargar modelo 3D"], "Abrir em tela cheia": ["Open full screen", "Abrir a pantalla completa"], "Protótipo em integração controlada": ["Prototype in controlled integration", "Prototipo en integración controlada"],
  "O Zenith pode organizar imagens sequenciais do mesmo voo e encaminhá-las para a criação de um modelo tridimensional da área.": ["Zenith can organize sequential images from the same flight and send them for creating a three-dimensional model of the area.", "Zenith puede organizar imágenes secuenciales del mismo vuelo y enviarlas para crear un modelo tridimensional del área."], "Imagens sequenciais do mesmo voo": ["Sequential images from the same flight", "Imágenes secuenciales del mismo vuelo"], "Processamento fotogramétrico": ["Photogrammetric processing", "Procesamiento fotogramétrico"], "Modelo interativo para inspeção": ["Interactive model for inspection", "Modelo interactivo para inspección"],
  "Campo como entrada. Drone como sensor. Plataforma como centro de decisão.": ["Field as input. Drone as sensor. Platform as decision center.", "Campo como entrada. Dron como sensor. Plataforma como centro de decisión."],
  "captura aérea": ["aerial capture", "captura aérea"], "apoio diagnóstico": ["diagnostic support", "apoyo diagnóstico"], "campo e desktop": ["field and desktop", "campo y escritorio"],
  "O modelo utiliza a arquitetura EfficientNetB3, treinada com deep learning, e está em validação para classificar padrões em imagens da soja.": ["The model uses the EfficientNetB3 architecture, trained with deep learning, and is under validation to classify patterns in soybean images.", "El modelo utiliza la arquitectura EfficientNetB3, entrenada con deep learning, y está en validación para clasificar patrones en imágenes de soja."], "ANÁLISE ZENITH AI": ["ZENITH AI ANALYSIS", "ANÁLISIS ZENITH AI"], "DEEP LEARNING": ["DEEP LEARNING", "DEEP LEARNING"], "Da imagem ao diagnóstico.": ["From image to diagnosis.", "De la imagen al diagnóstico."], "Classificação de padrões aprendidos pelo modelo para apoiar a avaliação da soja.": ["Classification of patterns learned by the model to support soybean assessment.", "Clasificación de patrones aprendidos por el modelo para apoyar la evaluación de la soja."],
  "O carregamento básico pode utilizar cache, mas análises, clima e sincronização dependem de conexão.": ["Basic loading may use cache, but analysis, weather and synchronization depend on a connection.", "La carga básica puede utilizar caché, pero los análisis, el clima y la sincronización dependen de conexión."]
  ,"Cada mapa indica onde observar com mais atenção — a confirmação acontece na inspeção em campo.": ["Each map indicates where to look more closely — confirmation happens during field inspection.", "Cada mapa indica dónde observar con más atención; la confirmación ocurre durante la inspección en campo."],
  "Dados": ["Data", "Datos"], "Visão": ["Vision", "Visión"], "sensor": ["sensor", "sensor"], "imagem": ["image", "imagen"], "envio": ["upload", "envío"], "interpretação": ["interpretation", "interpretación"], "diagnóstico": ["diagnosis", "diagnóstico"], "gestão": ["management", "gestión"], "apoio": ["support", "apoyo"],
  "Propriedade": ["Property", "Propiedad"], "Talhão": ["Field", "Parcela"], "Resultado": ["Result", "Resultado"],
  "Ataque de lagarta": ["Caterpillar attack", "Ataque de oruga"], "Cercosporiose": ["Cercospora leaf spot", "Cercosporiosis"], "Ferrugem da soja": ["Soybean rust", "Roya de la soja"], "Soja saudável": ["Healthy soybean", "Soja saludable"],
  "Áreas organizadas por propriedade e safra.": ["Areas organized by property and season.", "Áreas organizadas por propiedad y temporada."], "Controle de insumos e movimentações.": ["Control of inputs and movements.", "Control de insumos y movimientos."], "Registros de observações e atividades.": ["Records of observations and activities.", "Registros de observaciones y actividades."], "Diagnósticos anteriores para consulta.": ["Previous diagnoses for reference.", "Diagnósticos anteriores para consulta."],
  "Perfil voltado para gestão da propriedade, acompanhamento da equipe e revisão das atividades.": ["Profile for property management, team monitoring and activity review.", "Perfil orientado a la gestión de la propiedad, seguimiento del equipo y revisión de actividades."], "Administra a propriedade": ["Manages the property", "Administra la propiedad"], "Cadastra e acompanha a equipe": ["Registers and monitors the team", "Registra y acompaña al equipo"], "Atribui tarefas e atividades": ["Assigns tasks and activities", "Asigna tareas y actividades"], "Acompanha os módulos permitidos": ["Monitors permitted modules", "Acompaña los módulos permitidos"], "Revisa a conclusão das atividades": ["Reviews activity completion", "Revisa la conclusión de las actividades"], "Módulos e equipe": ["Modules and team", "Módulos y equipo"], "Acesso amplo": ["Full access", "Acceso amplio"],
  "Perfil focado na rotina operacional, tarefas atribuídas e visualização dos dados autorizados.": ["Profile focused on operational routine, assigned tasks and viewing authorized data.", "Perfil enfocado en la rutina operativa, tareas asignadas y visualización de datos autorizados."], "Registra entrada e saída": ["Records check-in and check-out", "Registra entrada y salida"], "Consulta tarefas atribuídas": ["Views assigned tasks", "Consulta tareas asignadas"], "Altera o status das próprias atividades": ["Changes the status of own activities", "Cambia el estado de sus propias actividades"], "Acessa apenas os módulos autorizados": ["Accesses only authorized modules", "Accede solo a los módulos autorizados"], "Visualiza dados da propriedade vinculada": ["Views linked property data", "Visualiza datos de la propiedad vinculada"], "Tarefas atribuídas": ["Assigned tasks", "Tareas asignadas"], "Acesso autorizado": ["Authorized access", "Acceso autorizado"],
  "Escolha seu dispositivo": ["Choose your device", "Elige tu dispositivo"], "Abra a versão oficial": ["Open the official version", "Abre la versión oficial"], "Entre na sua conta": ["Sign in to your account", "Inicia sesión en tu cuenta"], "Acompanhe a lavoura": ["Monitor the crop", "Acompaña el cultivo"],
  "Front-end e experiência PWA": ["Front-end and PWA experience", "Front-end y experiencia PWA"], "Interface, responsividade, instalação como app e experiência visual do Zenith.": ["Interface, responsiveness, app installation and Zenith visual experience.", "Interfaz, responsividad, instalación como app y experiencia visual de Zenith."], "Inteligência Artificial, visão computacional e Aplicativo Desktop": ["Artificial Intelligence, computer vision and Desktop App", "Inteligencia Artificial, visión computacional y Aplicación de escritorio"], "Modelos de análise, processamento de imagens e validação técnica dos resultados, estudando técnicas agrícolas, desenvolvimento da aplicação para computador e integração dos fluxos desktop.": ["Analysis models, image processing, and technical validation of results; research into agricultural techniques; desktop application development; and integration of desktop workflows.", "Modelos de análisis, procesamiento de imágenes y validación técnica de resultados; estudio de técnicas agrícolas; desarrollo de la aplicación para computadora; e integración de los flujos de escritorio."], "Aplicativo mobile e integração": ["Mobile app and integration", "Aplicación móvil e integración"], "Fluxos mobile, integração entre serviços, testes e suporte à experiência em campo.": ["Mobile workflows, service integration, testing, and support for the in-field experience.", "Flujos móviles, integración entre servicios, pruebas y soporte para la experiencia en campo."], "Auxiliar do Aplicativo Desktop": ["Desktop App Assistant", "Auxiliar de la Aplicación de escritorio"], "Desenvolvimento da aplicação para computador, adaptação de fluxos e suporte ao uso em ambiente desktop.": ["Desktop application development, workflow adaptation, and support for desktop use.", "Desarrollo de la aplicación para computadora, adaptación de flujos y soporte para el uso en un entorno de escritorio."],
  "As imagens precisam ser compatíveis, nítidas e adequadas para análise visual da lavoura de soja.": ["Images must be compatible, clear and suitable for visual analysis of soybean crops.", "Las imágenes deben ser compatibles, nítidas y adecuadas para el análisis visual del cultivo de soja."], "O acesso depende do perfil do usuário e da propriedade vinculada, com permissões diferentes para gestor e funcionário.": ["Access depends on the user profile and linked property, with different permissions for manager and employee.", "El acceso depende del perfil de usuario y de la propiedad vinculada, con permisos diferentes para gerente y empleado."],
  "Conheça os responsáveis pelo projeto →": ["Meet the people responsible for the project →", "Conoce a los responsables del proyecto →"]
  ,"Leitura da lavoura": ["Crop reading", "Lectura del cultivo"], "Imagem → análise → contexto": ["Image → analysis → context", "Imagen → análisis → contexto"], "Uma nova dimensão do campo": ["A new dimension of the field", "Una nueva dimensión del campo"], "Propriedade → talhão → histórico": ["Property → field → history", "Propiedad → parcela → historial"],
  "Demarcação e visualização 2D": ["2D field mapping and view", "Demarcación y visualización 2D"], "Visualização do talhão em 3D": ["3D field visualization", "Visualización de la parcela en 3D"], "O mesmo talhão em duas perspectivas.": ["The same field from two perspectives.", "La misma parcela desde dos perspectivas."],
  "MAPEAMENTO DE TALHÕES": ["FIELD MAPPING", "MAPEO DE PARCELAS"], "Do desenho da área à leitura do terreno.": ["From drawing the area to reading the terrain.", "Del trazado del área a la lectura del terreno."], "Compare a demarcação em 2D com a visualização em 3D do mesmo talhão.": ["Compare the 2D boundary map with the 3D view of the same field.", "Compara la demarcación 2D con la visualización 3D de la misma parcela."],
  "Delimita a área produtiva e registra os limites do talhão sobre o mapa.": ["Defines the production area and records the field boundaries on the map.", "Delimita el área productiva y registra los límites de la parcela en el mapa."], "Apresenta o mesmo talhão em perspectiva para facilitar a leitura do terreno.": ["Shows the same field in perspective to make the terrain easier to understand.", "Presenta la misma parcela en perspectiva para facilitar la lectura del terreno."],
  "Delimite o talhão": ["Define the field", "Delimita la parcela"], "Marque os limites da área produtiva diretamente sobre o mapa.": ["Mark the production area boundaries directly on the map.", "Marca los límites del área productiva directamente en el mapa."],
  "Alterne a perspectiva": ["Switch perspectives", "Alterna la perspectiva"], "Compare a visão superior em 2D com a leitura espacial em 3D.": ["Compare the 2D top view with the 3D spatial view.", "Compara la vista superior 2D con la lectura espacial 3D."],
  "Acompanhe o histórico": ["Track the history", "Acompaña el historial"], "Mantenha área, registros e análises vinculados ao mesmo talhão.": ["Keep area data, records and analyses linked to the same field.", "Mantén el área, los registros y los análisis vinculados a la misma parcela."],
  "Desenho do perímetro": ["Boundary drawing", "Trazado del perímetro"], "Cálculo da área": ["Area calculation", "Cálculo del área"], "Organização dos talhões": ["Field organization", "Organización de parcelas"], "Perspectiva do terreno": ["Terrain perspective", "Perspectiva del terreno"], "Contexto espacial": ["Spatial context", "Contexto espacial"], "Inspeção visual da área": ["Visual area inspection", "Inspección visual del área"],
  "DECISÃO COM CONTEXTO": ["DECISIONS WITH CONTEXT", "DECISIONES CON CONTEXTO"], "2D para organizar. 3D para compreender.": ["2D to organize. 3D to understand.", "2D para organizar. 3D para comprender."], "As duas visualizações representam o mesmo talhão. A demarcação estrutura a propriedade; a perspectiva 3D amplia a leitura do terreno e prepara o acompanhamento ao longo do tempo.": ["Both views represent the same field. Boundary mapping structures the property; the 3D perspective expands terrain understanding and prepares long-term monitoring.", "Ambas visualizaciones representan la misma parcela. La demarcación estructura la propiedad; la perspectiva 3D amplía la lectura del terreno y prepara el seguimiento a lo largo del tiempo."], "Visualização": ["Visualization", "Visualización"]
  ,"01 / SOLUÇÕES ZENITH": ["01 / ZENITH SOLUTIONS", "01 / SOLUCIONES ZENITH"]
  ,"Visão geral": ["Overview", "Vista general"]
  ,"Mapa de possíveis alterações fisiológicas na lavoura.": ["Map of possible physiological changes in the crop.", "Mapa de posibles alteraciones fisiológicas en el cultivo."]
  ,"Resposta espectral": ["Spectral response", "Respuesta espectral"]
  ,"Mapa da intensidade relativa da diferença espectral identificada.": ["Map of the relative intensity of the identified spectral difference.", "Mapa de la intensidad relativa de la diferencia espectral identificada."]
  ,"Índice de vegetação calculado a partir das bandas vermelha e infravermelho próximo.": ["Vegetation index calculated from the red and near-infrared bands.", "Índice de vegetación calculado a partir de las bandas roja e infrarroja cercana."]
  ,"Índice sensível às bandas Red Edge e infravermelho próximo.": ["Index sensitive to the Red Edge and near-infrared bands.", "Índice sensible a las bandas Red Edge e infrarroja cercana."]
  ,"Prioridade": ["Priority", "Prioridad"]
  ,"Áreas indicadas para orientar a inspeção em campo.": ["Areas indicated to guide field inspection.", "Áreas indicadas para orientar la inspección en campo."]
  ,"CAPTURA": ["CAPTURE", "CAPTURA"]
  ,"Diagnóstico": ["Diagnosis", "Diagnóstico"]
  ,"Se a instalação não estiver disponível, abra o link no Safari ou Chrome atualizado. As opções dependem do navegador e do dispositivo.": ["If installation is not available, open the link in an up-to-date Safari or Chrome. Options depend on the browser and device.", "Si la instalación no está disponible, abre el enlace en Safari o Chrome actualizado. Las opciones dependen del navegador y del dispositivo."]
  ,"abra a instalação oficial no Safari e use Compartilhar → Adicionar à Tela de Início.": ["open the official installation in Safari and choose Share → Add to Home Screen.", "abre la instalación oficial en Safari y usa Compartir → Añadir a la pantalla de inicio."]
  ,"abra a instalação oficial no Chrome. Use a opção de instalação quando oferecida, ou procure Instalar aplicativo / Adicionar à tela inicial no menu.": ["open the official installation in Chrome. Use the install option when offered, or look for Install app / Add to Home screen in the menu.", "abre la instalación oficial en Chrome. Usa la opción de instalación cuando se ofrezca, o busca Instalar aplicación / Añadir a la pantalla de inicio en el menú."]
  ,"Conecta o front-end aos serviços de análise.": ["Connects the front end to analysis services.", "Conecta el front-end a los servicios de análisis."]
  ,"Organização da área produtiva por propriedade, mapa e talhões.": ["Organization of the production area by property, map and fields.", "Organización del área productiva por propiedad, mapa y parcelas."]
  ,"Registro de insumos disponíveis, entradas e saídas da operação.": ["Record of available inputs and operation inflows and outflows.", "Registro de insumos disponibles, entradas y salidas de la operación."]
  ,"Histórico de observações, atividades e ocorrências da lavoura.": ["History of crop observations, activities and occurrences.", "Historial de observaciones, actividades y ocurrencias del cultivo."]
  ,"Atribuição de tarefas e acompanhamento por perfis de acesso.": ["Task assignment and monitoring by access profile.", "Asignación de tareas y seguimiento por perfiles de acceso."]
  ,"Permite gerar modelos 3D a partir de imagens sequenciais.": ["Generates 3D models from sequential images.", "Permite generar modelos 3D a partir de imágenes secuenciales."]
  ,"Carregando a prévia interativa…": ["Loading the interactive preview…", "Cargando la vista previa interactiva…"]
  ,"A prévia está demorando para responder. Você também pode abrir o modelo em tela cheia.": ["The preview is taking longer to respond. You can also open the model full screen.", "La vista previa está tardando en responder. También puedes abrir el modelo en pantalla completa."]
  ,"Escolha como você quer usar a Zenith": ["Choose how you want to use Zenith", "Elige cómo quieres usar Zenith"]
  ,"A instalação mobile deve ser realizada pelo celular": ["Mobile installation must be completed on a phone", "La instalación móvil debe realizarse desde el celular"]
  ,"Esta versão foi desenvolvida para computadores": ["This version was designed for computers", "Esta versión fue diseñada para computadoras"]
  ,"A Zenith no dispositivo certo para você": ["Zenith on the right device for you", "Zenith en el dispositivo adecuado para ti"]
  ,"UMA ZENITH. CADA EXPERIÊNCIA NO SEU LUGAR.": ["ONE ZENITH. THE RIGHT EXPERIENCE FOR EVERY DEVICE.", "UNA ZENITH. CADA EXPERIENCIA EN SU LUGAR."]
  ,"Use a plataforma web em um computador. No celular ou tablet iOS/Android, acesse a instalação mobile.": ["Use the web platform on a computer. On an iOS/Android phone or tablet, open the mobile installation.", "Usa la plataforma web en una computadora. En un celular o tableta iOS/Android, accede a la instalación móvil."]
  ,"Acesse a instalação oficial pelo seu smartphone. No computador, você pode continuar na plataforma web Zenith.": ["Open the official installation on your smartphone. On a computer, you can continue on the Zenith web platform.", "Accede a la instalación oficial desde tu smartphone. En la computadora, puedes continuar en la plataforma web de Zenith."]
  ,"A plataforma web Zenith foi otimizada para computadores. Para utilizar a Zenith no celular ou tablet, instale nossa versão mobile.": ["The Zenith web platform is optimized for computers. To use Zenith on a phone or tablet, install our mobile version.", "La plataforma web de Zenith está optimizada para computadoras. Para usar Zenith en un celular o tableta, instala nuestra versión móvil."]
  ,"No computador, acesse a plataforma web para acompanhar sua lavoura, analisar imagens e organizar sua operação.": ["On a computer, access the web platform to monitor your crop, analyze images and organize your operation.", "En la computadora, accede a la plataforma web para acompañar tu cultivo, analizar imágenes y organizar tu operación."]
  ,"Leve a Zenith para o campo.": ["Take Zenith to the field.", "Lleva Zenith al campo."]
  ,"Escaneie com a câmera do celular para continuar.": ["Scan with your phone camera to continue.", "Escanea con la cámara de tu celular para continuar."]
  ,"Copiar link": ["Copy link", "Copiar enlace"]
  ,"LINK DE INSTALAÇÃO": ["INSTALLATION LINK", "ENLACE DE INSTALACIÓN"]
  ,"Selecione e copie o endereço abaixo para abrir no celular.": ["Select and copy the address below to open it on your phone.", "Selecciona y copia la dirección de abajo para abrirla en el celular."]
  ,"Link copiado. Abra no seu celular para continuar.": ["Link copied. Open it on your phone to continue.", "Enlace copiado. Ábrelo en tu celular para continuar."]
  ,"Estou no computador": ["I'm on a computer", "Estoy en la computadora"]
  ,"Estou no celular": ["I'm on a phone", "Estoy en el celular"]
  ,"Instalar Zenith no celular": ["Install Zenith on mobile", "Instalar Zenith en el celular"]
  ,"Acessar plataforma para desktop": ["Access desktop platform", "Acceder a la plataforma de escritorio"]
  ,"Continuar no site": ["Continue to site", "Continuar en el sitio"]
});

function translateTextNodes(language) {
  const languageIndex = language === "en" ? 0 : language === "es" ? 1 : -1;
  document.querySelectorAll("script, style, svg, .language-selector").forEach((element) => element.dataset.skipTranslation = "true");
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => node.parentElement?.closest("[data-skip-translation]") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const original = originalText.get(node) ?? node.nodeValue.trim();
    const translated = languageIndex < 0 ? original : translations[original]?.[languageIndex];
    if (!translated || node.nodeValue.trim() === translated) return;
    originalText.set(node, original);
    const leading = node.nodeValue.match(/^\s*/)?.[0] ?? "";
    const trailing = node.nodeValue.match(/\s*$/)?.[0] ?? "";
    node.nodeValue = `${leading}${translated}${trailing}`;
  });
}

function getSavedLanguage() {
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return supportedLanguages.has(saved) ? saved : "pt-BR";
  } catch {
    return "pt-BR";
  }
}

/** Mantém todos os seletores sincronizados e aplica a tradução sem recarregar a página. */
export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getSavedLanguage);

  const setLanguage = useCallback((code) => {
    const nextLanguage = supportedLanguages.has(code) ? code : "pt-BR";

    // A aplicação imediata evita depender do próximo ciclo de renderização em celulares.
    document.documentElement.lang = nextLanguage;
    translateTextNodes(nextLanguage);
    setLanguageState(nextLanguage);

    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    } catch {
      // O idioma continua funcionando quando o navegador bloqueia o armazenamento local.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    translateTextNodes(language);

    let frame;
    const observer = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => translateTextNodes(language));
    });
    observer.observe(document.body, { childList: true, characterData: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [language]);

  useEffect(() => {
    const syncBetweenTabs = (event) => {
      if (event.key === LANGUAGE_STORAGE_KEY && supportedLanguages.has(event.newValue)) {
        setLanguageState(event.newValue);
      }
    };
    window.addEventListener("storage", syncBetweenTabs);
    return () => window.removeEventListener("storage", syncBetweenTabs);
  }, []);

  const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/** Seletor visual e de preferência do Zenith, sem serviços de terceiros. */
export function LanguageSelector({ className = "" }) {
  const context = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  const selector = useRef(null);
  const language = context?.language ?? "pt-BR";

  useEffect(() => {
    if (!open) return;
    const closeOnOutsideClick = (event) => {
      if (!selector.current?.contains(event.target)) setOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const selectLanguage = (code) => {
    context?.setLanguage(code);
    setOpen(false);
  };

  const currentLanguage = languages.find(({ code }) => code === language) ?? languages[0];
  const ariaLabel = language === "en" ? "Select language" : language === "es" ? "Seleccionar idioma" : "Selecionar idioma";

  return <div ref={selector} className={`language-selector ${className}`.trim()}>
    <button className="language-button" type="button" aria-label={`${ariaLabel}: ${currentLanguage.label}`} aria-expanded={open} aria-haspopup="listbox" onClick={() => setOpen((current) => !current)}>
      <img className="language-flag" src={currentLanguage.flag} alt="" width="22" height="16" aria-hidden="true" />
      <span>{currentLanguage.label}</span>
      <Languages className="language-icon" aria-hidden="true" size={16} />
    </button>
    {open && <div className="language-menu" role="listbox" aria-label={ariaLabel}>
      {languages.map(({ code, label, flag }) => <button key={code} type="button" role="option" aria-selected={language === code} onClick={() => selectLanguage(code)}>
        <img className="language-flag" src={flag} alt="" width="22" height="16" aria-hidden="true" />
        <span>{label}</span>
      </button>)}
    </div>}
  </div>;
}
