# VIA · PWA 1

Uma companhia para registrar tratamento, alimentação, água, movimento e bem-estar. Primeiro protótipo PWA, com interface em português, temas claro e escuro, funcionamento local e materiais para uso offline.

## Publicar e instalar

1. Extraia o ZIP. Mantenha `index.html`, os arquivos JavaScript/CSS, `manifest.webmanifest`, `sw.js`, `offline-assets.json` e a pasta `assets` juntos, exatamente como estão.
2. Envie **todo o conteúdo extraído**, incluindo as subpastas de `assets`, a uma hospedagem estática HTTPS. O pacote usa caminhos relativos e funciona em subpastas, como no GitHub Pages.
3. No GitHub Pages: coloque os arquivos na raiz do repositório; em **Settings → Pages**, escolha a publicação pela branch e a pasta **/(root)**. Aguarde o endereço HTTPS ficar disponível. O README não deve substituir o index; os dois são arquivos diferentes.
4. Abra esse endereço no navegador. Na tela de boas-vindas, toque em **Instalar aplicativo**, quando oferecido. No Android/Chrome também pode aparecer no menu do navegador.
5. No iPhone/iPad, abra no Safari e use **Compartilhar → Adicionar à Tela de Início → Adicionar**. Pelo aplicativo já instalado, o convite inicial de instalação fica oculto.

**Não basta abrir o index diretamente como arquivo para instalar o PWA.** Para uma inspeção local, mantenha toda a pasta e abra `index.html`; para instalar e verificar o service worker, utilize HTTPS ou um servidor de desenvolvimento em localhost. O pacote não foi publicado em um servidor nesta entrega.

## Primeiro acesso

- Começar agora → cadastro local → apresentação pelo gato → explicação da caminhada e dos menus → dados iniciais.
- Peso, altura, objetivo, horários, refeições e medidas podem ser editados depois.
- O código de recuperação é mostrado após o cadastro; guarde-o fora do aplicativo. Ele permite redefinir a senha da conta local e é renovado após uso.
- Quem já tem conta entra no caminho com a animação da presença, e pode fechar para ir à visão geral.
- A navegação móvel segue: **Início, Tratamento, Alimentação, Exercícios e Bem-estar**. O botão de menu no cabeçalho reúne água, caminhada, exames, progresso e demais áreas. No computador, esses itens ficam na lateral.

## O que está integrado

- Mascote com descanso animado e guia dos menus; avatares individuais com fundo selecionável.
- Caminho de 366 pontos, 12 ambientes em pontilhado neon, com cenários progressivos, largada e transições. Explorar o mapa não concede progresso.
- Um passo no primeiro acesso de cada dia, conforme o fuso configurado. Cada sete dias completos entre visitas recuam um passo. O dia de retorno com recuo não adiciona outro avanço. O percurso desta versão termina no ponto 366.
- Dicas e comemoração semanal, sem brasão semanal. Doze brasões temáticos nos pontos 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330 e 366. Baús permanecem abertos após conquista e revelam a insígnia ao toque, mesmo depois de recuar. Insígnias antigas importadas permanecem no perfil.
- Decoração sazonal temporária perto do ponto atual, substituída conforme a época. Um álbum guarda as lembranças. As janelas de Páscoa, festas juninas, Halloween, Natal e ano-novo são aproximadas.
- Água com estimativa por peso e ajuste manual; não existe uma fórmula universal que exija altura. Orientações individuais prevalecem.
- Refeições montadas com ingredientes, porções e complementos, busca sem distinção de acentos ou maiúsculas, categorias, alimentos editáveis, receitas e rascunhos.
- Tratamento, histórico e mapa de aplicação com quatro pontos abdominais; calculadora usa medicamento e volume do rótulo para conferir a dose informada e a marcação U-100. Não há equivalência universal de mg para UI nem ajuste automático da prescrição.
- As 200 rotinas do PDF DAREBEE, com nomes/instruções em português e ilustrações originais. O PDF original mantém seu idioma e créditos.
- Exames em grupos, vários resultados, médicos, laboratório, datas e observações; diário, sintomas, sono e resumo para consulta.
- Meditação com posições ilustradas, roteiros, cores, voz local em português quando instalada, chuva/notas sintetizadas e três opções de lo-fi instrumental sintetizado. Esses sons são gerados no aparelho; não são faixas licenciadas de terceiros.
- Foto de progresso pela galeria, registro de medidas e uma silhueta simbólica da meta, sem previsão de aparência ou composição corporal.
- Sons curtos, confetes e vibração quando suportada, ajustáveis no perfil. Preferência do sistema por reduzir movimentos é respeitada.

## Offline e espaço

O service worker guarda a interface e os recursos essenciais após o primeiro acesso online. Imagens de treino e brasões consultados são armazenados conforme o uso. No perfil, **Materiais sem internet** permite baixar toda a biblioteca visual e o PDF. Aguarde a confirmação antes de desconectar. O material completo ocupa aproximadamente 72 MB; o download opcional é um pouco menor porque não repete a interface.

O navegador pode apagar caches se faltar espaço. Esses caches contêm materiais do aplicativo, não os registros do perfil. Mantenha também um backup dos registros. Atualizações do aplicativo ficam disponíveis após fechar todas as abas/janelas antigas e abrir novamente; o service worker não apaga os dados das contas.

## Contas, recuperação e backup

As contas e os registros ficam no armazenamento local da mesma origem/navegador. **Não há nuvem, Google/Facebook Login ou sincronização automática.** Abrir em outro aparelho não transfere os registros.

- Exporte pelo perfil: o arquivo contém somente a conta ativa, incluindo receitas, rascunhos, fotos, brasões e dados do tratamento.
- Novos backups usam AES-GCM com chave derivada da senha escolhida por PBKDF2. É preciso guardar a senha do backup.
- A restauração aceita esses arquivos e backups JSON das versões anteriores. Perfis com o mesmo e-mail são substituídos somente após confirmação; os demais são preservados.
- O código de recuperação não contém dados e não recupera registros apagados do navegador. Para isso, é necessário o backup.
- A conta local não equivale a autenticação de servidor. Os registros dentro do navegador não são criptografados nesta versão; use um aparelho protegido. Backups novos são criptografados. Não há envio de dados clínicos a serviços externos.

## Lembretes

Podem exibir uma notificação do sistema após permissão, enquanto o aplicativo estiver aberto e executando. O navegador pode suspender abas em segundo plano. **Não existe agendamento garantido com o app fechado**, push remoto ou alarme nativo nesta entrega. Para horários essenciais, mantenha o alarme habitual do aparelho.

## Verificação desta entrega

Verificados: sintaxe e referências dos arquivos; cadastro, recuperação com rotação de código, isolamento entre perfis, retorno após falha de armazenamento, exportação/importação criptografada, rejeição de senha errada, cálculo de dose, 200 rotinas/imagens, presença diária, recuos e baús. O service worker foi exercitado com cache/rede simulados para abertura offline, fallback de navegação, armazenamento de imagens e remoção apenas de caches próprios antigos.

Os testes de fluxos usaram um DOM simulado. **Instalação real em Android/iOS, áudio, vibração e layout no navegador ainda precisam de teste no endereço publicado.** A versão não foi implantada nem testada em aparelhos físicos nesta entrega.

## Fontes e autoria

Nutrição, medicamentos e exercícios preservam as referências do protótipo anterior, disponíveis nas respectivas telas e em Privacidade e fontes. O catálogo de medicamentos tem corte de setembro de 2026 e deve ser conferido nas fontes oficiais. Ilustrações de exercícios e PDF: DAREBEE, `200 Easy Workouts`; créditos e download ficam em Exercícios. Mascote, avatares e brasões foram produzidos para o VIA.

Referências técnicas: [MDN — PWAs instaláveis](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) e [OWASP — recuperação de senha](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html).
