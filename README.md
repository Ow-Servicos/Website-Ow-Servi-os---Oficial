# OW-SERVIÇOS — Manual do Website Institucional & Guia de Publicação

Website institucional de alto padrão, desenvolvido para a **OW-Serviços**, empresa moçambicana especializada em protocolo, coordenação e gestão operacional de eventos sediada em Maputo.

Desenvolvido estritamente com **HTML5 semântico, CSS3 moderno e JavaScript puro (Vanilla)**, sem recurso a frameworks ou dependências externas, garantindo tempos de carregamento ultrarrápidos, total independência técnica e máxima conversão para pedidos de proposta via WhatsApp.

---

## 1. Estrutura de Ficheiros

```text
Site- Ow Services/
│
├── index.html                   # Estrutura semântica completa e de alta conversão
├── README.md                    # Este manual de edição e publicação
│
├── css/
│   └── styles.css               # Design tokens, tipografia, secções e responsividade
│
├── js/
│   └── main.js                  # Lógica de portefólio, lightbox, FAQ, filtros e WhatsApp
│
└── assets/
    ├── logo.png                 # Logótipo oficial em formato medalhão
    ├── placeholder-hero.svg     # Placeholder do ecrã inicial (Hero)
    ├── placeholder-team.svg     # Placeholder da secção Sobre a OW (Equipa)
    ├── placeholder-event-1.svg  # Casamento Iracema & Matheus (Real)
    ├── placeholder-event-2.svg  # 17ª Conferência da GRAF (Real)
    ├── placeholder-event-3.svg  # Placeholder Corporativo (SUBSTITUIR)
    └── placeholder-event-4.svg  # Placeholder Institucional (SUBSTITUIR)
```

---

## 2. Direção Visual & Sistema de Cores

O site foi desenhado com base numa paleta de prestígio e luxo sóbrio:
- **Azul-Noite Profundo (`#0B1220` / `#070B14`)**: Confere autoridade institucional, elegância executiva e solenidade de Estado.
- **Dourado Champanhe (`#C9A961`, com gradiente `#E3CC94` a `#A8873F`)**: Utilizado em filetes de luxo, números de processo, ícones lineares e destaques itálicos em palavras-chave.
- **Marfim Nobre (`#FAF7F0`) & Areia Quente (`#EFE8DA`)**: Fundos claros suaves que alternam ritmicamente com as secções escuras, eliminando qualquer encandeamento visual.
- **Verde WhatsApp (`#25D366`)**: **Utilizado exclusivamente nos botões de conversão e contacto**, garantindo máximo destaque visual e indução ao clique sem descaracterizar a identidade da marca.

---

## 3. O Que Mudou Nesta Versão

1. **Arquitetura Orientada à Conversão**:
   - Botão de WhatsApp em destaque no cabeçalho.
   - Chamada à ação (CTA) visível **acima da dobra em todos os ecrãs**, com texto: *"Pedir proposta pelo WhatsApp"*.
   - **Faixas de Conversão Rápida** inseridas estrategicamente: após as *Soluções*, após o *Portefólio* e antes do *Contacto*.
   - **Barra Fixa Inferior Mobile** (`WhatsApp` + `Ligar`) para conversão imediata num só toque no telemóvel.
   - **Botão Flutuante** com etiqueta *"Falar connosco"* no desktop e animação suave de pulso.
2. **Novas Secções Criadas**:
   - **Sobre a OW-Serviços (`#sobre`)**: Posicionamento claro (não é empresa de decoração/festas; é a ponte operacional no terreno), 3 pilares de valor (*Rigor*, *Discrição*, *Confiança*) e moldura para foto da equipa.
   - **Testemunhos de Clientes (`#testemunhos`)**: Espaço editorial com aspas douradas e marcadores claros `<!-- SUBSTITUIR -->` sem dados inventados.
   - **Perguntas Frequentes / FAQ (`#faq`)**: Acordeão interativo e acessível com 8 respostas fundamentadas para as dúvidas mais comuns dos clientes.
3. **Eventos que Acompanhamos**:
   - As etiquetas simples foram transformadas numa **grelha visual de 8 cartões de luxo** com ícones temáticos e descrições claras.
4. **Porquê OW & Compromissos**:
   - Apresenta 3 declarações sólidas de compromisso (*Ordem Absoluta*, *Discrição e Ética*, *Harmonia no Terreno*).
   - O bloco de contadores foi mantido comentado caso no futuro existam números reais confirmados para exibir.

---

## 4. Onde Estão os Conteúdos Marcados "SUBSTITUIR"

Todos os pontos que requerem dados reais foram claramente assinalados no código com comentários no formato `<!-- SUBSTITUIR: ... -->`:

| Secção | Ficheiro | Linha Aprox. | Descrição do Conteúdo a Substituir |
| :--- | :--- | :--- | :--- |
| **Hero (Fundo)** | `index.html` | ~98 | Substituir `assets/placeholder-hero.svg` pela fotografia real de destaque. |
| **Sobre a OW** | `index.html` | ~387 | Substituir `assets/placeholder-team.svg` por foto real da equipa em ação. |
| **Portefólio (Eventos 3 e 4)** | `js/main.js` | ~45-56 | Adicionar o nome, data e fotos reais dos eventos corporativos e cerimoniais futuros. |
| **Testemunhos** | `index.html` | ~455-500 | Substituir os 3 cartões por citações reais de clientes com nomes e tipo de evento. |
| **Contadores (Opcional)** | `index.html` | ~340 | Descomentar o elemento `#counters` caso queira ativar números estatísticos. |
| **Morada / Sede** | `index.html` | ~680 | Atualizar morada exata do escritório em Maputo, caso pretenda detalhar rua/número. |

---

## 5. Fotografias Reais Necessárias

Para deixar o website 100% pronto com imagens reais da OW-Serviços, providencie os seguintes ficheiros para a pasta `assets/`:

1. **Fotografia Principal do Hero** (`assets/hero.webp` ou `.jpg`):
   - **Dimensão recomendada**: 1920 × 1080 px (horizontal).
   - **Conteúdo ideal**: Fotografia ampla de um evento de prestígio (ex.: mesa de honra, sala pronta com protocolo, receção solene de convidados).
2. **Fotografia da Equipa OW-Serviços** (`assets/equipa-ow.webp` ou `.jpg`):
   - **Dimensão recomendada**: 1200 × 900 px (proporção 4:3).
   - **Conteúdo ideal**: Membros da equipa fardados com elegância e postura profissional durante o acompanhamento de um evento.
3. **Fotografias dos Eventos do Portefólio** (`assets/evento-1.webp`, `evento-2.webp`, etc.):
   - **Dimensão recomendada**: 800 × 600 px (proporção 4:3).
   - **Conteúdo ideal**: Momentos reais do Casamento Iracema & Matheus, Conferência da GRAF e outros eventos futuros.

> **Dica de Performance**: Converta as fotos para formato `.webp` ou use ferramentas como o TinyPNG para manter cada imagem abaixo de 250 KB.

---

## 6. Como Publicar o Website

Por ser um projecto estático puro (sem servidor nem compilação prévia necessária), pode ser publicado instantaneamente em qualquer plataforma moderna:

1. **Netlify**:
   - Aceda a [app.netlify.com/drop](https://app.netlify.com/drop) e arraste esta pasta diretamente para o browser. Fica online em 10 segundos com certificado SSL gratuito.
2. **Vercel**:
   - Conecte o repositório GitHub ou execute `vercel` no terminal.
3. **Hospedagem Tradicional / cPanel**:
   - Carregue todos os ficheiros (`index.html`, `css/`, `js/`, `assets/`) diretamente para a pasta `public_html/`.

---

## 7. Contactos Configurados

- **WhatsApp Principal**: `https://wa.me/258846161126` (+258 84 616 1126)
- **Linha Telefónica**: `tel:+258820890320` (+258 82 089 0320)
- **E-mail Institucional**: `mailto:info@ow-servicos.co.mz`
- **Redes Sociais**: Instagram e Facebook `@ow_servicos`
