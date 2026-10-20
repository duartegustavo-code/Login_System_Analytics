# Login System Analytics — Vigilância epidemiológica

Projeto Profissional de Análise de Dados · Curso Ciências de Dados (Escola do Futuro)

**Equipe:** Daniela Freitas, Eliane Pereira e Gustavo Duarte

---

## 1. Apresentação

Aplicação web que usa o **Login System** como porta de entrada e a página **Home** como Dashboard de análise de dados sobre **epizootias em primatas não humanos (PNH)**, registradas pelo Ministério da Saúde.

Fluxo da aplicação: `Login → Autenticação → Home → Dashboard (indicadores, gráficos, insights, Big Idea e conclusão)`.

## 2. Problema investigado

As epizootias em primatas são um alerta precoce da febre amarela, mas é difícil enxergar onde e quando elas se concentram ao longo dos anos.

**Pergunta principal:** como o número de epizootias em PNH mudou ao longo dos anos e quais regiões concentraram os picos?

**Público:** estudantes, profissionais e gestores de saúde e o público em geral.

## 3. Objetivos

**Objetivo geral:** analisar a evolução do número de epizootias em primatas não humanos ao longo dos anos e identificar as regiões que concentraram os picos de ocorrência.

**Objetivos específicos:**
- Quantificar as epizootias registradas por ano e por período de monitoramento.
- Identificar o ano de pico e compará-lo com os demais anos.
- Comparar o número de ocorrências entre as cinco macrorregiões e verificar quais concentraram os picos.
- Identificar os estados e municípios com maior número de registros.
- Verificar em quais meses do ano as epizootias são mais frequentes (sazonalidade).

## 4. Fonte dos dados

| Item | Descrição |
|---|---|
| Instituição | Ministério da Saúde |
| Base | `fa_epizpnh_1994-2026.csv` |
| Link | https://s3.sa-east-1.amazonaws.com/ckan.saude.gov.br/Febre+Amarela/fa_epizpnh_1994-2026.csv |
| Formato | CSV, separador `;`, codificação Latin-1 |
| Período | 2000 a 2026 (datas completas de 14/11/2002 a 13/05/2026) |
| Registros (base tratada) | 2.637 |
| Colunas utilizadas | `MACRORREG_OCOR`, `UF_OCOR`, `MUN_OCOR`, `DATA_OCOR`, `MES_OCOR`, `ANO_OCOR`, `MONITORAMENTO_OCOR` |

A base tratada é o arquivo `dados_tratados.csv`.

## 5. Tecnologias utilizadas

- Python, Pandas e Matplotlib
- Google Colab 
- HTML, CSS e JavaScript
- Backend

## 6. Etapas da análise

| Aula | Etapa | Produto |
|---|---|---|
| 1 | Problema e fonte | Ficha inicial |
| 2 | Perguntas e objetivos | Planejamento analítico |
| 3 | Conhecimento da base | Diagnóstico da base |
| 4 | Tratamento | Base tratada (`dados_tratados.csv`) |
| 5 | Análise exploratória | `analise_exploratoria.ipynb` |
| 6 | Interpretação | Matriz de insights (`matriz_insights.xlsx`) |
| 7 | Visualização | Indicadores e gráficos |
| 8 | Big Idea e storytelling | `big_idea.pdf`, `storyboard.pdf`, `narrativa_projeto.pdf` |
| 9 | Integração | Dashboard na Home do Login System |

## 7. Principais descobertas

**Indicadores**

| Indicador | Valor |
|---|---|
| Total de epizootias | 2.637 |
| Ano de pico | 2017 (869 registros) |
| Macrorregião líder | Sudeste, com 54,27% (1.431 registros) |
| Estado líder | SP, com 35,68% (941 registros) |
| Município líder | São Paulo (115 registros) |
| Mês mais frequente | Janeiro (562 registros) |
| Municípios com ocorrência | 633 (pelo código do município) |
| Estados com ocorrência | 17 (pelo código da UF) |

**Insights**

1. **Picos:** 2017 teve 869 registros, cerca de 108% acima do segundo maior ano (2020, com 418). Cinco anos (2017, 2020, 2018, 2021 e 2009) somam 2.128 registros, ou 80,70% da base. Os registros aparecem em picos, e não crescem de forma contínua.
2. **Regiões dos picos:** em cada ano de pico, uma macrorregião reúne de cerca de 89% a 99% dos registros: Sudeste em 2017 (781 de 869) e 2018 (400 de 405); Sul em 2009 (152 de 155), 2020 (385 de 418) e 2021 (249 de 281).
3. **Sazonalidade:** janeiro lidera (562), seguido de fevereiro (423). Junho, julho e agosto ficam abaixo de 50 registros cada. O padrão aparece também nos anos de pico.

Por macrorregião: SE = 1.431, SP = 961, CO = 148, N = 49 e NE = 48 (SE e SP somam cerca de 91% dos registros).

## 8. Big Idea

> As epizootias em primatas se concentram em poucos picos, cada um quase todo em uma única macrorregião (Sudeste ou Sul) e sobretudo entre outubro e abril. Esses padrões indicam onde e quando investigar, mas não explicam suas causas.

**Recomendação:** investigar os fatores que podem explicar os picos e a mudança de região, integrando outras fontes de informação (população e esforço de notificação), antes de propor ações.

## 9. Como executar

**(preencher conforme a estrutura real do projeto)**

1. Clonar ou baixar o repositório.
2. Garantir que o arquivo de dados analíticos (JSON ou endpoint) está disponível no caminho usado pelo `home.js`.
3. Executar o projeto por um servidor local ou pelo servidor da aplicação. Abrir o HTML diretamente com `file://` pode impedir a leitura do JSON pelo `fetch()`.
4. Acessar a tela de login, entrar com as credenciais de teste e abrir a Home.

**Para gerar o JSON de indicadores:** executar a análise em Python na pasta onde está `dados_tratados.csv` e salvar o resultado no caminho lido pela Home. O arquivo deve conter somente dados da análise, sem senhas, tokens ou outros dados de autenticação.

## 10. Limitações

- A base registra epizootias **notificadas**, não a ocorrência real. Poucos registros em N (49) e NE (48) podem refletir menos notificação, e os dados não permitem saber.
- Não há população, área nem esforço de vigilância, então não é possível calcular taxas por habitante.
- Não há fatores bióticos ou ambientais, então os dados não explicam as causas dos picos.
- Não há registros em 2004–2006 e 2010–2013, e 2026 vai só até 13/05/2026.
- 22 registros não têm data e 13 não têm mês, e ficam fora das análises de tempo.
- `UF_OCOR` tem 1 registro com "pr" em minúsculo, separado de "PR".

---

## Estrutura do repositório

```
LOGIN_SYSTEM_ANALYTICS/
├── frontend/                 # index.html, cadastro.html, home.html, css/, js/
├── backend/                  # (se houver)
├── data/                     # dados_original.csv e dados_tratados.csv
├── analysis/                 # notebooks (análise exploratória, insights, visualizações)
├── 01_ficha_inicia/          # notebooks (análise exploratória, insights, visualizações)
├── 02_planejamento_analitico # notebooks (análise exploratória, insights, visualizações)
├── 03_diagnostico_inicial    # notebooks (análise exploratória, insights, visualizações)
├── 04_tratamento             # notebooks (análise exploratória, insights, visualizações)
├── 06_Insights/              # matriz_insights.xlsx, insights_principais.pdf
├── 07_dashboards             # matriz_insights.xlsx, insights_principais.pdf
├── 08_Storytelling/          # big_idea.pdf, storyboard.pdf, narrativa_projeto.pdf
└── README.md
```

## Funcionalidades implementadas

- Login e acesso à Home
- Um gráfico exibido com os dados do projeto
- Big Idea e conclusão exibidas na Home
- Botão de saída funcionando