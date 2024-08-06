---
title: "Resumo de Docker"
date: 2024-08-05
subtitle: "Anotações e resumo sobe uso basico de Docker para desenvolvedores"
slug: "docker_for_devs"
---

## CONTAINERS

<br>
* Ambientes isolados em onde se pode executar código

<br>

## CONTAINER X VM

<br>
* o container não usa o hypervisor no lugar, usa o Docker pra gerenciar toda a estrutura do sistema, abstraindo a instalação do S.O, configurações, libs etc

<br>

## DOCKER

<br>
* É uma ferramenta que gerencia containers.

- `YAML` (yet another markup language) - uma linguagem de marcação e serialização de dados (json do docker)

<br>

## IMAGENS:

<br>
 - Modelos usados na construção de containers.

Importante saber que o docker é um sistema baseado em camadas

<br>

## COMANDOS

<br>

```bash

docker --version   # Mostra a versão do docker

docker --help # Lista os comando q podem ser utilizados pelo docker

docker container ls  # Exibe a lista de containers

docker ps # Exibe a lista de containers em execução

docker ps -a # Exibe a lista de containers em execução e parados

docker start <container id> # Inicia um container com seu id (acho q pelas inicias ele tbm identifica)

docker run < container name > # cria  e executa um novo container a partir de uma imagem

docker pull < image name > # baixa uma imagem do docker hub em sua ultima versão

docker pull < image name > [version] #baixa uma imagem do docker hub a partir da versão fornecida

docker image rm < container id > # remove o container com id selecionado

docker image rm < container id > -f # remove o container com id selecionado recursivamente ( para o container, remove a imagem )

docker run -d < container id > # roda um container em background

docker run < container id > -p < porta > # expõe uma porta para q possamos ter acesso ao container da nossa máquina
# sintaxe:  docker run -p [porta desejada no sistema ]: [porta do container ] [nome do container]

# exemplo:  docker run -d -p 8080:80 nginx:1.19.4-alpine

docker run --name < container alias > #cria um container com um alias

docker exec -it < alias do container > < recurso > # interage com o container abrindo o shell

 # exemplo: [docker exec -it <- base comand] [id: 254f4cabdfb9] [sh <- shell do container]

#obs: Para encerrar a interação pressionar CTRL + D
```

<br>

## VOLUMES

<br>

Antes de mais nada: CONTAINER NÃO PERSISTE DADOS POR PADRÃO

Volumes são arquivos e diretórios que ficam expostos para o container, com isso qualquer arquivo fica preservado independente do container estar ou não funcionando.

A ideia é bindar uma pasta padrão no container com a tag -v e persistir ela usando um diretório na própria máquina.

<br>

```bash
-v: cria o volume a ser persistido '[caminho na máquina : caminho no container]'

# sintaxe: ' docker run --name 'servidor_web' -d -p 8080:80 -e NGINX_ENTRYPOINT_QUIET_LOGS=1 -v  "c:\users\jr\desktop\docker:/usr/share/nginx/html" nginx:1.19.4-alpine'

```

<br>

```bash
# Usando o comando
docker inspect < container id >
# é possível verificar os arquivos, ao usar procurar por 'Mounts'
```

<br>

## DOCKER FILE

<br>
<li>**Docker file** é um arquivo que monta um container a partir de um arquivo de texto, no formato yaml.</li>
<br>
<li> Útil quando existem muitos comandos a serem passados via terminal.</li>
<br>
<li>Há a possibilidade de criar tanto local quanto no docker hub, caso seja local a imagemd eve ser criada onde os arquivos serão alocados e para imagem remoa não há essa necessidade.</li>
<br>
<li>Ainda pra uso do remoto temos q loga rno docker com docker login passando login e senha e depois disso fazer o push com a imagem criada.</li>
<br>
<li>A idéia é fazer a pull de uma imagem existente no hub ou na máquina e a partir dela buildar uma com as especificações do arquivo.</li>
<br>


<br>

## DOCKER COMPOSE

<br>
   Um Arquivo YAML que concentra todos os comandos e configs pra q os containers sejam criados.
