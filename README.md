# Gerador de Senhas

Este projeto é um gerador de senhas seguras e personalizadas, desenvolvido com HTML, Tailwind CSS e JavaScript puro.

## Funcionalidades

- **Geração de senha personalizada:**  
  Escolha o comprimento da senha (6 a 32 caracteres) e quais tipos de caracteres incluir:
  - Letras maiúsculas (A-Z)
  - Letras minúsculas (a-z)
  - Números (0-9)
  - Símbolos (!@#$%&*)

- **Cópia rápida:**  
  Clique no ícone de copiar para enviar a senha gerada para a área de transferência.

- **Feedback visual:**  
  Alertas dinâmicos para sucesso e erro, com ícones e cores diferentes.

## Como usar

1. Marque os tipos de caracteres que deseja incluir na senha.
2. Ajuste o comprimento usando o controle deslizante.
3. Clique em **Gerar Senha**.
4. Para copiar, clique no ícone de copiar ao lado do campo da senha.

## Estrutura dos arquivos

- `index.html`  
  Estrutura da interface, campos de seleção, botão de gerar senha e área de alerta.

- `src/js/script.js`  
  Lógica de geração, cópia e exibição dos alertas.

- `src/image/`  
  Ícones utilizados na interface e nos alertas.

## Alertas

- **Sucesso:**  
  Mostra um ícone de sucesso e borda verde ao copiar a senha.

- **Erro:**  
  Mostra um ícone de erro e borda vermelha ao tentar copiar sem senha ou gerar senha sem selecionar opções.
