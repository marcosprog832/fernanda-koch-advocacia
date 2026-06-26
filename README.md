# Site — Escritório de Advocacia

Site institucional construído com **Next.js 14**, **TypeScript** e **Tailwind CSS**.
Tipografia: **Fraunces** (display) + **Inter** (corpo), carregadas via `next/font/google`.

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Estrutura

```
src/
  app/
    layout.tsx      → fontes, metadata, wrapper geral
    page.tsx        → monta todas as seções da home
    globals.css      → estilos globais e tokens visuais
  components/
    Header.tsx       → menu fixo com scroll effect
    Hero.tsx         → seção de abertura com imagem de fundo
    Sobre.tsx        → quem somos + números
    Areas.tsx        → áreas de atuação (grid "Art. 1" a "Art. 6")
    Equipe.tsx       → grid de sócios
    Contato.tsx      → formulário de contato (visual, ainda sem back-end)
    Footer.tsx       → rodapé
```

## Conteúdo de exemplo

Todo o texto (nome do escritório "Vasconcelos & Brito", sócios, áreas de
atuação, números, endereço) é **placeholder**. Troque pelo conteúdo real do
seu escritório nos arquivos dentro de `src/components/`.

As fotos atuais vêm do Unsplash (royalty-free) só para preencher o layout.
Troque pelas fotos reais do escritório/equipe — recomendo manter o filtro
preto e branco (`grayscale`) nas imagens da equipe e do hero para manter a
identidade visual.

## Deploy

### 1. GitHub
```bash
git init
git add .
git commit -m "site inicial"
git branch -M main
git remote add origin <url-do-seu-repositorio>
git push -u origin main
```

### 2. Vercel
- Entre em vercel.com, "Add New Project"
- Importe o repositório do GitHub
- Não precisa configurar nada — a Vercel detecta Next.js automaticamente
- Deploy automático a cada push na branch `main`

## Próximo passo: ligar o formulário de contato ao Supabase

O formulário em `Contato.tsx` ainda não envia dados para lugar nenhum.
Para salvar os leads no Supabase:

1. Crie um projeto em supabase.com
2. Crie uma tabela `contatos` com colunas: `nome`, `email`, `area`, `mensagem`, `created_at`
3. Instale o client: `npm install @supabase/supabase-js`
4. Crie `.env.local` com `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Transforme `Contato.tsx` em um formulário com `onSubmit` que chama
   `supabase.from('contatos').insert(...)`

Posso fazer essa parte também — só pedir.
