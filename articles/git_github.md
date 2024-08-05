---
title: "Resumo Git e GitHub"
date: 2024-08-05
subtitle: "Resumo sobe uso de Git e Github"
slug: "git_github"
---

## GIT

- O Git é um software de controle de versão, nos permitindo ter versões de um arquivos e manipular as alterações sofridas no mesmo ao longo do desenvolvimento.

### Repositórios:

- É onde os arquivos do projeto ficam armazenados.
- Ao iniciarmos um projeto com `git init` estamos criando um repositório para aquele projeto.
- Além de padrão com um repositório local, podemos enviar nosso repositório para algum servidor onde ele será gerenciado como `Bitbucket` e o mais famoso `GitHub`.

```sh
git init
```

### Verificar status:

- Depois de realizar as alterações há a possibilidade de fazer uma checagem de arquivos, uma verificação dos arquivos que foram alterados no repositório criado, isso é possível através do comando `git status`, que listará os arquivos modificados dentro do repositório.

```sh
git status
```

### Adicionando alterações:

- Depois de feitas as alterações e verificado seu status, o próximo passo é adicionar essas alterações, para isso usamos o comando `git add <nome do arquivo>`, caso a intenção seja adicionar um arquivo em especifico ou `git add .` para adicionar todas as alterações.

```sh
git add teste.txt

git add .
```

### Salvando as alterações (commit):

- Depois de alterado o repositório e adicionado as mudanças no controle de versão, o próximo passo é salvar estas alterações para isso usamos o commit, que salva as alterações feitas aos arquivos do repositório e pode ser acessado posteriormente caso necessário.

- Para realizar um commit utilizamos o comando `git commit -m` , o `-m` se refere a uma mensagem associada aquela alteração e usada como descrição do commit.
- A mensagem deve ser passada entre aspas e ser breve, quanto menor e mais descritiva melhor

```sh
git commit -m 'adicionado arquivo teste.txt'
```

## GITHUB

### INTRODUÇÃO:

- O GitHub é um serviço online onde se torna possível hospedar e gerenciar repositórios de forma privada onde apenas o usuário tem acesso a ele e publica onde o acesso é feito por mais pessoas que estão ou não no projeto compartilhando o código ou o conteúdo do repositório.

### ADICIONANDO ARQUIVOS A UM REPOSITÓRIO REMOTO

- Depois de criado o repositório, adicionadas e commitadas as alterações e criado ou adicionado um repositório no Github, o próximo passo para seria enviar os arquivos ao repositório remoto.

- Para isso utilizamos o comando `git push <link do repositorio>` , porém no caso do repositório estar apenas criado no Github, é necessário configurar o mesmo.
- Então antes disso definimos a `branch main`, o que seria equivalente a linha padrão para conter as alterações do código realizadas.

```sh
  git init # iniciado repositório

  git add README.md #aldicionadas as alterações

  git commit -m "first commit" # comitadas as alterações

  git branch -M main # adicionada a branch main

  # adicionado alterações ao repositório criado no github através do link
  git remote add origin https://github.com/ivanfrancajunior/curso_git_github.git

  git push -u origin main # enviado arquivos ao repositório na branch escolida
```

**Complementando os comandos :**

- `git remote add origin https://github.com/usuario/curso_git_github.git`: Este comando adiciona um novo repositório remoto chamado `origin`. O `origin` geralmente aponta para o repositório no GitHub. O URL especificado é o caminho para o repositório remoto.

- `git push -u origin main`: Este comando envia (push) as alterações do repositório local para o repositório remoto (`origin`).

- O `-u` é utilizado para configurar a branch local (`main`) para rastrear a branch remota correspondente. Isso significa que, futuramente, você pode simplesmente usar `git push` e `git pull` sem especificar a branch e o repositório remoto.

```sh
git push
```

### RESGATANDO ALTERAÇÕES DE UM REPOSITÓRIO

- Como mencionando, o repositório pode não ser acessado apenas por uma pessoa e existirem alterações realizadas por pessoas diferentes com acesso ao repositório.
- Para acessar as alterações o comando utilizado é o `git pull`, que nos permite visualizar e e receber as alterações feitas no repositório não trackeadas localmente.

```sh
git pull
```

### CLONANDO UM REPOSITÓRIO

Existe também a possibilidade de criarmos o repositório direto no Github e fazermos uma cópia dele, para isso usamos o comando `git clone`, que faz uma copia local de um repositório versionado no Github.

```sh
git clone <link do repositorio>
```

### EXIBINDO DETALHES DE UM COMMIT

- Além do comando `git push`, outra ferramenta importante para entender o histórico de alterações em um repositório Git é o comando `git log`.

- Esse comando exibe uma lista detalhada dos commits realizados, incluindo informações como autor, data, e mensagem de commit. Isso é útil para rastrear o progresso do projeto e entender as modificações feitas ao longo do tempo.

```sh
git log
```

- Uma alternativa para visualizar commits é o `shortlog`, ele assim como o `git log`, exibe o histórico de alterações em um repositório mas com menos detalhes .

```sh
git shortlog
```

- Uma outra forma de também exibir logs de um repositório é usando o o `reflog`, este comando exibe as alterações de forma mais especifica, listando inclusive os comandos, alterações de branch, alteração de versão e etc utilizados no manuseio do repositório.

```sh
git reflog
```

### DESFAZENDO ALTERAÇÕES NÃO COMMITADAS

- Caso você tenha feito alterações em um arquivo e deseja desfazê-las, você pode usar o comando `git checkout`, Esse comando descarta as alterações não confirmadas no arquivo especificado, revertendo-o para o estado do último commit.

```sh
git checkout -- nome-do-arquivo
```

- Se você fez alterações em um arquivo e deseja desfazê-las, você pode usar o seguinte comando:

```sh
git checkout -- .
```

### DESFAZENDO ALTERAÇÕES COMMITADAS

Pode ocorrer também das alterações já estejam versionadas, logo o `git checkout` não funcionará, para estes casos usamos o `git revert`, ele desfaz as alterações de um commit especificado, adicionando uma mensagem, onde deve ser descrita a 'reversão' dos arquivos.

```sh
# Suponha que o commit que você quer reverter tem o hash abcdef123
git revert abcdef123

```

### RESETANDO ALTERAÇÕES

- O comando `git reset` é uma ferramenta poderosa no Git que é utilizada para desfazer alterações em commits, ramos (branches) e no índice (staging area). Dependendo dos parâmetros utilizados, o `git reset` pode ter diferentes efeitos vamos cobrir o caso mais básico
-
- .

**Resetar o Último Commit e Descartar Alterações (Hard Reset):**

```sh
# descarta todas as alterações, inclusive no diretório de trabalho voltando pro estado com base em seu ultimo commit

git reset --hard origin/main
```

### IGNORANDO ARQUIVOS

Para ignorar arquivos de um repositório remoto, cria-se um arquivo `.gitignore`, nele é passado o nome ou os nomes dos arquivos que não se quer versionar.

## TRABALHANDO COM BRANCHES

As branches são uma forma que o Git disponibiliza para separar o projeto em versões, isso possibilita que sem que seja alterado o repositório padrão, um projeto seja gerenciado por mais de uma pessoa adicionando ou removendo arquivos e código a um projeto, dando facilidade na manutenção ou criação de novas features sem que o repositório padrão seja inutilizado n ocaso de algum erro ou alguma alteração não esperada.

### VISUALIANDO BRANCHES EXISTESTES:

- Para visualizar as branches existentes, usamos o comando `git  branch` , no repositório em q se quer consultar essa informação, o output é uma lista com as branches existentes e um asterisco demarca a branch em que o repositório está.

```sh
git branch
```

### PESQUISANDO POR UMA BRANCH NO REP. REMOTO

- Vão existir situações que será interessante buscar por branches que são as nossas, e o Git fornece um comando para pesquisar por elas, o `git fetch -a` e ele retorna as branches encontradas no repositório.
- Para acessar as alterações dessa branch encontrada, usamos o `git checkout` e ele trará estas alterações.

```sh
git fetch -a
git checkout
```

### CRIANDO UMA NOVA BRANCH

- Para criar uma nova branch, usa-se o comando `git branch <nome do arquivo>`
- para o nome do arquivo, espaços não são permitidos e se aconselha a não utilizar acentuação.

```sh
git branch v1
```

Para criar e alterar de forma rápida uma branch, usamos os `git checjout -b <nome da branch>`, esse comando inicia e altera para a branch criada na criação da branch.

```sh
git checkout -b v2
```

### ALTERANDO ENTRE BRANCHS

- Como mencionando antes `git checkout` desfaz alterações não commitadas, mas uma outra usabilidade deste comando é alternar entre branches, para isso usa - se `git checkout <nome da branch>`, um output será emitindo sinalizando a alteração.

```sh
git checkout v1

# output: Switched to branch 'v1'
```

### EXCLUINDO UMA BRANCH:

- Não é uma pratica comum mas por algum motivo você pode querer excluir uma branch, para isso usamos os comando `git branch -d <nome da branch>`

- A flag `-d` é de delete, afirmando que a branch a seguir será deletada.

- Um output é recebido com a mensagem de exclusão e um código com id do processo.

```sh
git branch -d v3
#output: Deleted branch v3 (was ca60be9).
```

### UNINDO BRANCHES(merge):

- Depois de alterados os arquivos de um repositório em uma branch diferente da main, estas alterações podem ser adicionados a ela, usamos o comando `git merge <nome da branch>`, um output com a mensagem de atualização e os arquivos alterados é gerado.

- Após o processo as branches já são unidas sem a necessidade de um novo commit uma vez que as alterações feitas na branch já foram commitadas na branch mergeada, bastando apenas enviar essas alterações ao repositório remoto com o `git push`.

```sh
git merge v1

#output:
Updating ca60be9..d8b57c4
Fast-forward
teste.txt | 4 +++-
1 file changed, 3 insertions(+), 1 deletion(-)
```

### REVERTENDO ALTERAÇÕES NÃO MERGEADAS:

- Assim como o `checkout` reverte alterações não commitadas, ao lidar com branches temos um recurso semelhante, o `stash` que reverte as alterações realizadas ao estado do ultimo commit realizado naquela branch.
- Ele devolve uma mensagem informando o id da alteração.

```sh
git stash
#output: Saved working directory and index state WIP on v1: 4715efd adiciona funcao.js
```

- Uma vantagem sobre o `git checkout` é que caso eu queria manter essas alterações mesmo depois de reverter a um estado anterior, podemos desfazer a reversão, primeiro para consultar `stash` existentes usamos o comando `git stash list` que devolve uma lista com as stash geradas naquela branch;

```sh
git stash list
```

- Já para desfazer esse stash usamos o comando `git stash apply <id da alteracao>`

```sh
git stash apply 1
```

- Podemos conferir também o que foi alterado na stash, para isso usamos o comando `git stash show -p` e como resposta, um output vai ser mostrado com as diferenças entre a branch main e o trecho de código ou alteração feita na stash armazenada. com base no id da stash.

```sh
git stash show -p

# output
diff --git a/funcao.js b/funcao.js
index 3e4150b..e23c5bc 100644
--- a/funcao.js
+++ b/funcao.js
@@ -1,3 +1,3 @@
-function sayHi() {
-  return "Oi!";
+function sayHi(name) {
+  return `Oi, ${nome}`;
 }

```

### COMPARANDO REPOSITÓRIOS

Caso seja necessário saber se há diferenças entre arquivos de um repositório remoto e um repositório local, podemos utilizar o comando `diff` , ele exibe uma lista de diferenças entre estes repositórios e pode ser utilizado tanto para o repositório como um todo, quanto para um arquivo específico.

```sh
git diff
git diff HEAD: <nome do arquivo>
```

## TRABALAHNDO COM TAGS

As tags no Git são referências específicas a um ponto na história do seu repositório.

Elas são usadas para marcar versões específicas do seu código, facilitando a identificação e referência a pontos significativos de desenvolvimento, como releases ou versões estáveis.

### CRIANDO UMA TAG

- Para adicionar uma nova tag usamos o comando `git tag -a < nome da tag> -m`

* Depois do `-m` adicionamos uma descrição para a tag.

```sh
git tag -a v1.0.0 -m 'adicionada versao 1.0.0 do sistema'
```

### LISTANDO TAGS EXISTENTES

- Para listar as tags existentes usamos o comando `git tag`

```sh
git tag
```

### EXIBINDO DETALHES DE UMA TAG

- Além de listar tags existentes existe a possibilidade de exibir tudo relacionado a uma tag específica, o comando para isso é `git show <nome da tag>` e uma lista de commits e alterações vai ser mostrada.

```sh
❯ git show v1.0

#output
tag v1.0

Tagger: Ivan Franca de Oliveira Junior <contato.ivanfrancajr@gmail.com>
Date:   Mon Dec 4 17:21:43 2023 -0300

adicionada primeira versao do sistema

commit 8df17e643a6f393c66d6049a9aea11a8b7328e95 (tag: v1.0)
Author: Ivan Franca de Oliveira Junior <contato.ivanfrancajr@gmail.com>
Date:   Mon Dec 4 17:19:25 2023 -0300

    mend

diff --git a/funcao.js b/funcao.js
index a4916bd..5146f41 100644
--- a/funcao.js
+++ b/funcao.js
@@ -1,8 +1,5 @@
-<<<<<<< Updated upstream
-function sayHi(nome) {
-  return "Oi! "+ nome;
-=======
+
 function sayHi(name) {
   return `Oi, ${nome}`;
->>>>>>> Stashed changes
+
 }
```

### ALTERNANDO ENTRE TAGS:

- Para alternar entre as tag, assim como as branches é possível basta usar o comando `git checkout <tag>` e as modificações entre as branches vai ser mostrada.

```sh
 git checkout v1.0.1
```

### VERSIONANDO UMA TAG

- Podemos mais que só apelidar uma alteração com uma tag, mas versiona-la de fato no Github, para isso usamos o comando `git push origin <nome da tag>` que fará o envio ao repositório remoto da tag selecionada.

- No Github as alterações poderão ser visualizadas na aba de _Releases_, onde as descrições e as alterações de cada tag é exibida.

```sh
git push origin <nome da tag>
```

- Podemos enviar também todas as tags de uma só vez com o comando `git push origin --tags

```sh
git push origin --tags
```

## GITHUB PROFISSIONAL

### ISSUES

- As issues são utilizadas para rastrear tarefas, melhorias, bugs e discussões em um projeto. Elas oferecem um meio eficiente de colaboração e comunicação entre membros da equipe ou colaboradores externos.

### ABRINDO ISSUE:

```mardonw
Acesse o Repositório:

- Vá para a página do repositório no GitHub onde você deseja abrir a issue.

1. **Abra a Guia "Issues":**

    - Na parte superior do repositório, clique na guia "Issues".
2. **Crie uma Nova Issue:**

    - Clique no botão "New Issue".
3. **Preencha os Detalhes:**

    - Dê um título descritivo à issue.
    - Adicione um comentário detalhando o problema, a tarefa ou a discussão.
    - Utilize labels para categorizar a issue (por exemplo, "bug", "enhancement", "documentation", etc.).
    - Atribua a issue a um responsável, se aplicável.
4. **Crie a Issue:**

    - Clique no botão "Submit new issue" para criar a issue.
```

### FECHANDO ISSUE:

**Fechar Manualmente:**

- Se a issue foi resolvida ou concluída, você pode fechá-la manualmente.

- Vá até a página da issue.

- No canto inferior direito, clique em "Close issue".

**Fechar Automaticamente com Commits:**

- Pode-se associar commits aos números de issue para fechá-las automaticamente.

- Inclua palavras-chave como "**fixes**", "**closes**" ou "**resolves**" seguidas do número da issue no seu commit.

```sh
git commit -m "Fixes #42 - Corrigindo um bug."
git commit -m "closes #42 - Corrigindo um bug."
git commit -m "resolves #42 - Corrigindo um bug."
```

### PULL REQUEST

- Pull Requests (PRs) são uma parte essencial do fluxo de trabalho colaborativo no Git e GitHub. Eles fornecem uma maneira de propor alterações em um repositório e iniciar discussões em torno dessas alterações antes de serem mescladas na branch principal.

**Abra o Pull Request:**

- Vá para a página do repositório no GitHub.
- Clique no botão "New Pull Request".
- Selecione a branch que contém suas alterações.

**Remoção da Branch (Opcional):**

- Após a mesclagem, você pode excluir a branch se ela não for mais necessária.

**Referenciar Issues:**

- Ao criar um PR, você pode referenciar issues relacionadas, o que vincula automaticamente a issue ao PR.

### GITHUB WIKI

A **_Wiki do GitHub_** é uma ferramenta de colaboração que permite criar e editar conteúdo diretamente no repositório do GitHub. Ela serve como uma documentação integrada ao seu projeto. Principais características:

**Edição Colaborativa:**

- Vários colaboradores podem contribuir para a Wiki, criando e editando páginas diretamente no navegador.

**Formato Markdown:**

- A Wiki suporta Markdown, facilitando a formatação de texto, inserção de imagens e criação de links.

  **Documentação do Projeto:**

- É comumente usada para documentar aspectos importantes do projeto, como guias, tutoriais, boas práticas, etc.

  **Histórico de Revisão:**

- Cada edição na Wiki é registrada, permitindo rastrear alterações e revertê-las se necessário.

  **Integração com o Repositório:**

- A Wiki é parte integrante do repositório do GitHub, tornando-se facilmente acessível para colaboradores e usuários.

### GITHUB PROJECTS

A **aba de Projects (Projetos)** no GitHub é uma ferramenta de gerenciamento de trabalho que auxilia na organização de tarefas e no acompanhamento do progresso do projeto. Principais características:

**Kanban Boards:**

- Os projetos utilizam boards Kanban para visualizar e gerenciar tarefas em diferentes estágios, como "To do", "In progress" e "Done".

  **Criar Tarefas (Issues):**

- Cada tarefa em um projeto geralmente é representada por uma _issue_ que pode ser atribuída a membros da equipe, possui rótulos, etc.

  **Acompanhamento de Progresso:**

- Fornece uma visão clara do progresso do projeto, incluindo o status de cada tarefa e sua localização no fluxo de trabalho.

  **Priorização e Atribuições:**

- Permite definir prioridades para as tarefas e atribuir responsáveis para garantir uma distribuição clara de trabalho.

  **Integração com Pull Requests:**

- Os Projetos estão integrados ao ciclo de desenvolvimento, permitindo associar Pull Requests a tarefas específicas.

  **Notificações e Atualizações:**

- Colaboradores são notificados sobre mudanças em tarefas, atualizações de status e outras atividades relacionadas ao projeto.

**Customização:**

- É possível personalizar colunas, rótulos e outras configurações para atender às necessidades específicas do projeto.

### GIST

O **Gist no GitHub** é uma ferramenta versátil e conveniente que oferece uma maneira simples e eficaz de compartilhar trechos de código, notas ou até mesmo projetos inteiros.

**Compartilhamento Rápido:**

- Gists proporcionam uma maneira rápida de compartilhar e colaborar em pequenos pedaços de código ou informações.

  **Suporte a Múltiplos Arquivos:**

- É possível criar Gists com vários arquivos, facilitando a organização e compartilhamento de conteúdo mais complexo.

  **Facilidade de Colaboração:**

* Permite a colaboração instantânea, com outros usuários podendo fazer forks, clonar e sugerir alterações nos Gists.

  **Markdown e Renderização Gráfica:**

* Suporta a formatação Markdown, permitindo adicionar descrições, comentários e até mesmo renderizar visualmente imagens diretamente no Gist.

## GITHUB PAGES
