# Portfólio — Karolini R. Pedrozo

Site de portfólio profissional em página única (single-file), bilíngue (PT-BR / EN), construído para apresentar minha trajetória, projetos e stack técnica de forma direta e escaneável.

🔗 **Demo:** _adicione aqui o link depois do deploy (ex: GitHub Pages, Vercel ou Netlify)_

---

## ✨ Sobre o projeto

Identidade visual construída em torno do conceito de **tempo** — referência direta ao [ChronosBot](https://github.com/KaroliniRPedrozo/ChronosBot), meu projeto de TCC. O site é estruturado como um "dev log": seções numeradas, entradas datadas e um mostrador de relógio animado no hero.

**Principais recursos:**

- 🌓 Alternância de idioma **PT-BR / EN** sem reload de página
- ⏱️ Mostrador SVG animado com foto de perfil integrada
- 📊 Métricas em destaque com contadores animados no scroll
- 🕰️ Linha do tempo de formação e pesquisa
- 💼 Cards de projeto com destaques técnicos (bullets de implementação)
- 🎨 Reveal on scroll e microinterações em hover
- 📱 Totalmente responsivo (mobile-first nos breakpoints)
- ⚙️ Zero dependências externas de build — um único arquivo HTML

---

## 🗂️ Estrutura

```
portfolio.html   → site completo (HTML + CSS + JS inline)
```

Não há processo de build: é um arquivo HTML autocontido, pronto para publicar em qualquer hospedagem estática.

---

## 🚀 Como publicar

### GitHub Pages

1. Suba o arquivo `portfolio.html` renomeado para `index.html` na raiz do repositório (ou em uma branch `gh-pages`).
2. Em **Settings → Pages**, selecione a branch e a pasta.
3. O site fica disponível em `https://<seu-usuario>.github.io/<repositorio>`.

### Vercel / Netlify

1. Conecte o repositório.
2. Não é necessário configurar build command — é um site estático.
3. Defina `portfolio.html` (renomeado para `index.html`) como arquivo de entrada.

---

## 🛠️ Stack utilizada no site

| Camada | Tecnologia |
| --- | --- |
| Estrutura | HTML5 semântico |
| Estilo | CSS puro (custom properties, grid, flexbox) |
| Tipografia | Fraunces (display), Space Mono (labels), Inter (corpo) |
| Interatividade | JavaScript vanilla (IntersectionObserver, i18n via dicionário) |

---

## 📌 Seções

1. **Hero** — headline, CTA e mostrador animado
2. **Métricas** — repositórios, stacks de produção, laboratórios, formatura
3. **Sobre** — resumo profissional e dados rápidos
4. **Trajetória** — linha do tempo 2022–2026
5. **Projetos** — ChronosBot, Cypher's Analytics, GTA V Analytics, AgendaSaúde
6. **Pesquisa** — Labtec/UFSC e Rexlab/UFSC
7. **Stack técnica** — backend, frontend, dados & infra
8. **Contato** — e-mail e LinkedIn

---

## 👩‍💻 Sobre mim

**Karolini Ronzani Pedrozo**
Estudante de Tecnologias da Informação e Comunicação (TIC) — UFSC, campus Araranguá (conclusão prevista em 2026). Foco em desenvolvimento backend, engenharia de dados e sistemas de IA aplicada.

- 💼 [LinkedIn](https://www.linkedin.com/in/karolini-ronzani-pedrozo-48124b268/)
- 💻 [GitHub](https://github.com/KaroliniRPedrozo)
- 📧 <karolini188@gmail.com>

---

## 📄 Licença

Uso livre como referência de portfólio. Se reaproveitar a estrutura, considere adaptar conteúdo e identidade visual ao seu próprio contexto.
