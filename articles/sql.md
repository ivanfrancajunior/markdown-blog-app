---
title: "Resumo de SQL"
date: 2024-08-05
subtitle: "Anotações e resumo sobe uso de queries SQL"
slug: "sql_for_devs"
tags: ["sql", "backend"]
---

## SQL
<br/>
SQL é uma linguagem de banco de dados, um acrônimo de _Structured Query Linguagem_ (linguagem estruturada de consulta) que nos possibilita criar e manipular Bases de dados.

Trabalhamos com ela criando Queries (INSERT, UPDATE, SELECT) e existem pequenas variações na sintaxe de acordo com a ferramenta que gerencia o banco (MySQL, PostgreSQL, SQL Server), também chamados de `SGBD's`(Sistema gerenciador de bancos de dados).

---
<br/>
## Banco de Dados
<br/>
E onde armazenamos os dados no nosso sistema.

Vamos criar os bancos de dados através da SQL e o SGBD vai ajudar-nos a gerenciar o banco e os dados;

O banco de dados possui algumas entidades fundamentais para o seu correto funcionamento, como tabelas e elas que armazenam as informações.

---
<br/>
## Principais estruturas de banco de dados
<br/>

##### Diagrama do Banco:

<br/>
É o projeto do banco, parte fundamental e mais avançada, que define o sucesso do projeto;

<br/>

##### Banco de dados:
<br/>

A entidade que vai guardar todos os elementos do banco;

<br/>

##### Tabelas:
<br/>

A categoria dos dados;

<br/>

##### Colunas:

<br/>
Tipos de informações que precisamos salvar;

<br/>

##### Dados:
<br/>
O dado final entregue pelo usuário;

---

<br/>

## CRIANDO UM BANCO DE DADOS

<br/>
para iniciar uma base de dados, na aplicação 'visual', inserimos a query:

```sql
CREATE DATABASE <database_name> ;
```
<br/>

### A SINTAXE DO SQL

<br/>
Em SQL, por convenção, todas as instruções são em maiúsculos e os nomes são em minúsculo (banco, tabela, coluna).

Toda instrução deve ser finalizada com um ponto e vírgula;

Alguns SGBD's não exigem ponto e vírgula, porém inserir eles em todas as instruções é uma maneira de garantir a execução;

<br/>

### IMPORTAÇÃO DE BANCOS DE DADOS
<br/>

Importação de banco é quando temos um arquivo pronto de banco com tabelas e dados e inserimos ele no nosso SGBD, geralmente originado de uma exportação.

Se trata de ação simples para obter todos os dados já cadastrados em um sistema. Após a importação podemos utilizar como se o banco houvesse sido
criado na nossa máquina É uma prática comum no dia a dia em uma empresa.

Vamos primeiramente acessar o MySQL pelo terminal no diretório onde o arquivo a ser importado está:

<br/>

```shell
mysql -u root
```
<br/>

Agora devemos criar um banco, como exemplo o banco vai se chamar empresa:

<br/>

<br/>

```sql
CREATE DATABASE empresa;
```
<br/>

Verificamos a criação:

<br/>

```sql
SHOW DATABASES;
```

Verificada a criação, selecionamos o banco usando `USE <nome>`:

<br/>

```sql
USE empresa;
```

E depois utilizar o comando`source empresa` para que o banco reexecute as queries antes utilizadas para criação do banco de dados:

<br/>

```sql
source empresa.sql;
```

---

## QUERIES:
<br/>
#### GERENCIANDO BANCOS DE DADOS:
<br/>
A partir daqui vamos focar em manipular diretamente os bancos de dados via comandos:

- Criação de bancos de dados:

<br/>

```sql
CREATE DATABASE <db_name>;
```

- Exclusão de banco de dados:

<br/>

```sql
DROP DATABASE <db_name>
```

- Fazendo a checagem das bases de dados:

<br/>
```sql
SHOW DATABASES;
```

- Selecionando um banco:

<br/>
```sql
USE <db_name>
```

- Importar um banco de dados (OBS: Estar com terminal no local do arquivo)

<br/>
```sql
source <db_name.sql>
```

- Assim como importamos, podemos gerar um arquivo .sql e o exportar(OBS: star com terminal no local do arquivo )

```shell
mysqldump -u <user> <db_name> > <file_name>.sql
```

#### GERENCIANDO TABELAS:
<br/>
##### TABELAS:
<br/>
É a entidade responsável por guardar nossos dados Uma tabela é formada por colunas.

##### COLUNAS:
<br/>
As colunas são como categorias dos nossos dados: nome, profissão, idade, etc.

As colunas possuem tipos de dados determinados, como: textos, números, datas e atributos: não nulo, chave primária, auto incremento;

- Para criar tabelas utilizamos o comando `CREATE TABLE` seguido pelo nome da tabela e entre parênteses as colunas referentes àquela tabela, caso a tabela possua mais de 1 coluna elas devem ser separadas por vírgulas.

- As colunas devem possuir o nome e o tipo de dado que ela vai representar(int, float, datas, varchar, etc.) e seu limite máximo de caracteres.

<br/>
```sql
CREATE TABLE users(id number (5) , nome varcar (255))
```

##### TIPOS DE DADOS:
<br/>
Os tipos de dados classificam um dado e os inserimos em uma coluna (texto, data, número e outros).

É uma parte extremamente importante da criação do nosso projeto e do
banco de dados uma vez que, uma boa estruturação dos dados no banco impacta na performance das buscas.

Alguns dados também permitem limites serem definidos, como quantidade máxima de caracteres;

###### DADOS DO TIPO TEXTO:
<br/>
- **CHAR(x)**: aceita de formato de texto de 0 a 255 onde x representa a quantidade;

- **VARCHAR(x)**: aceita de formato de texto de 0 a 65535 onde x representa a quantidade

- **TYNETEXT**: Aceita apenas textos com até 255 caracteres;

- **MEDIUMTEXT**: Aceita apenas textos com até 16777215 caracteres;

_Exemplo:_

<br/>

```sql

USE test_data_types;

CREATE TABLE cadastro (nome VARCHAR(100), sobrenome VARCHAR (100), telefone CHAR(13), bio MEDIUMTEXT;
```

---

###### Tipos de Dados Numéricos
<br/>
- **TINYINT(x)**: armazena números inteiros de 0 a 255.

- **INT**: armazena números inteiros de -2147483648 a 2147483647 ou 0 a 4294967295.

- **BIT(x)**: armazena números com de 1 a 64 caracteres.

- **BOOLEAN**: armazena valores verdadeiros ou falsos (1 ou 0).

- **BIGINT**: armazena números inteiros de -9223372036854775808 a 9223372036854775807 ou 0 a 18446744073709551615 se unsigned.

- **FLOAT(x,y)**: armazena números de ponto flutuante com precisão de 32 bits. `x` representa o total de dígitos e `y` a quantidade de dígitos após o ponto decimal.

<br/>

```sql
CREATE TABLE servidores ( nome  VARCHAR(100), espaco_disco INT(10), ligado BOOL);

INSERT INTO servidores (nome,espaco_disco, ligado) VALUES ( 'Dell 003', 48000, 1);
```

---

<br/>

###### Tipos de Dados de Data e Hora

<br/>
- **DATE**: armazena uma data no formato 'YYYY-MM-DD'.

- **DATETIME**: armazena uma data e hora no formato 'YYYY-MM-DD HH:MM'.

- **TIMESTAMP**: armazena um carimbo de data/hora no formato 'YYYY-MM-DD-HH:MM', geralmente usado para registrar a última modificação.

<br/>

```sql
CREATE TABLE aniversarios ( nome VARCHAR(155), aniversario DATE);

 INSERT INTO aniversarios(nome,aniversario) VALUES ('Marcelo Marte
lo', '2016-07-17');
```

---
<br/>

###### Outros Tipos de Dados

<br/>
- **BOOLEAN**: armazena valores verdadeiros ou falsos (1 ou 0).

- **ENUM**: armazena um valor de uma lista de valores predefinidos.

- **SET**: armazena zero ou mais valores de uma lista de valores predefinidos.

- **BINARY(x)**: armazena dados binários de comprimento fixo de até 255 bytes.

- **VARBINARY(x)**: armazena dados binários de comprimento variável de até 65535 bytes.

- **BLOB**: armazena grandes quantidades de dados binários (Binary Large Objects). Existem diferentes tipos de BLOB:
  - **TINYBLOB**: armazena até 255 bytes de dados binários.
  - **BLOB**: armazena até 65535 bytes de dados binários.
  - **MEDIUMBLOB**: armazena até 16777215 bytes de dados binários.
  - **LONGBLOB**: armazena até 4294967295 bytes de dados binários.

---
<br/>

##### INSERINDO DADOS NA TABELA:

<br/>

Uma das operações mais comuns é inserir dados, utilizamos o comando:
`INSERT INTO <tabela> (<colunas...>) VALUES (<valores...>)`

Precisamos inserir o nome das colunas e também os valores para cada
uma, separados por vírgula.

Os valores precisam corresponder a ordem das colunas;

<br/>

```sql
INSERT INTO funcionarions(nome, profissao) VALUES ('Jhon do', 'Example man');
```

---
<br/>

##### ALTERANDO DADOS DA TABELA:
<br/>
Há três tipos de alterações em SQL e todas elas tem em comum o comando `ALTER TABLE <table_name> <alteracao>` :

- Adição de colunas (ADD COLUMN)

<br/>

```sql

CREATE TABLE funcionarios (nome varchar(100));

ALTER TABLE funcionarios ADD COLUMN profissao;

INSERT INTO funcionarions(nome, profissao) VALUES ('Jhon do', 'Example man');
```

- Remoção de colunas (DROP COLUM):

<br/>

```sql

CREATE TABLE funcionarios (nome varchar(100), dummy_data VARCHAR(50));

ALTER TABLE funcionarios DROP COLUMN dummy_data;

```

- Modificar tipo da coluna (MODIFY COLUMN):

<br/>

```sql

CREATE TABLE funcionarios (nome varchar(100), dummy_data VARCHAR(50));

ALTER TABLE funcionarios MODIFY COLUMN dummy_data char(50);

```

---
<br/>

##### QUERIES (SIMPLES)
<br/>
CRUD um acrônimo para _CREATE, READ , UPDATE, DELETE_, constituem as ações mais utilizadas para a manipulação de dados nas tabelas.

Toda aplicação web com banco de dados tem pelo menos uma destas operações e possivelmente todas.

- **`INSERT (CREATE)`**:
  Utilizada para inserir dados em uma coluna ou colunas. Os valores e as colunas devem ser separados por vírgula. Caso a inserção for utilizar todos os campos da tabela não é necessário a sua escrita desde que estejam na ordem da tabela

<br/>

```sql
INSERT INTO <table> (<columns_name>) VALUES (<columns_values>);

INSERT INTO users (name VARCHAR(150), age CHAR(3), job VARCHAR(150)) VALUES ('JHON DOE', '40', 'DBA');

INSERT INTO users VALUES ('JANE DOE', '35', 'SOFTWARE DEVELOPER')
```

- **`SELECT (READ)`**:
  Utilizado para leitura dos dados de determinada coluna, para selecionar as colunas, depois da query, especificar a/as colunas separadas por vírgula e caso a intenção seja recuperar uma tabela por inteiro utiliza-se o \* .

<br/>

```sql
SELECT <column_table query> FROM <table_name>;

SELECT * FROM users -- seleciona todas as colunas da tabela de usuarios
```

- **`UPDATE`**:
  Para atualizar dados vamos utilizar a instrução **UPDATE** e para especificar o registro da tabela utiliza-se o operador **WHERE**.

  Podemos inserir mais colunas, separando elas por vírgula;

<br/>

```sql
UPDATE <tabela> SET <column = value > WHERE <condition (specify query)>;

UPDATE users SET national_id = '01987654321' WHERE nome = 'jannet' ;
```

- **`DELETE`**:
  Para deletar dados vamos utilizar a instrução DELETE.

  Lembrar sempre de utilizar o **WHERE** caso contrario, deletaremos todos os dados da coluna. A quantidade de dados removidos depende do **WHERE**;

```sql
DELETE FROM <table_name> WHERE <query>;

DELETE FROM users WHERE nome = 'JHON DOE';
```

---
<br/>

##### QUERIES COM OPERADORES:
<br/>
A maioria das queries em um banco de dados são de consulta e as consultas é o a operação com mais variações.

Para receber detalhados resultados, precisamos aprender todo o poder do
**SELECT** em conjunto de operadores, desta maneira criaremos filtros avançados e conseguiremos atingir o resultado desejado de uma consulta facilmente.

Estes são os operadores mais comuns:

- **OPERADORES DE COMPRAÇÃO** (>, <, >=, <=, =): estes operadores vão filtrar dados baseados nas comparações.

<br/>

```sql
SELECT * FROM employees.titles WHERE emp_np >= 11500;
```

- **OPERADORES LÓGICOS** (AND, OR NOT): Combinados com a cláusula WHERE estes operadores exercem condições para especificar uma busca:

<br/>

```sql
SELECT * FROM employees.salaries WHERE salary BETWEEN 150000 AND 160000 AND from_date < '2000-01-01';
```

- **BETWEEN**: Seleção entre um intervalo.

<br/>

```sql

-- SELECT * FROM <table_name> WHERE <column_name> BETWEEN <query>;

SELECT * FROM employees.salaries WHERE salary BETWEEN 150000 AND 160000;
```

- **LIKE**: Seleção por meio de algum padrão. Necessário utilizar `%` para delimitar a sub-string desejada;

<br/>

```sql
SELECT * FROM employees.employees WHERE first_name LIKE '%Par%' AND gender = 'M';
```

- **IN**: Utilizado para especificar múltiplos valores em um intervalo selecionado (restrição de valores) na condição da busca.

<br/>

```sql
-- SELECT * FROM <table_name> WHERE <column_name> IN (<query_interval>)

SELECT * FROM employees.dept_emp WHERE dept_no IN ("d005", "d006", "d007") LIMIT 100;
```

- **DISTINCT**: Seleciona e retorna apenas as variações de valores entre uma busca.

<br/>

```sql
SELECT DISTINCT title FROM employees.titles;
```

- **ORDER BY**: ordena o resultado de uma query de forma crescente(ASC) ou decrescente(DESC) o [padrão para o retorno de uma consulta é ASC]:

<br/>

```SQL
SELECT * FROM employees.salaries WHERE salary BETWEEN 150000 AND 160000 AND from_date < '2000-01-01' ORDER BY salary ASC;
```

- **LIMIT**: Limita o retorno das consultas otimizando o tempo desta busca.

<br/>

```SQL
SELECT * FROM employees.salaries WHERE salary BETWEEN 140000 AND 160000 ORDER BY salary ASC LIMIT 100;
```

---

<br/>

##### QUERIES COM FUNÇÕES:
<br/>

Funções são blocos de códigos reaproveitáveis e assim como no código podemos utilizar funções nas buscas em SQL para extrair resultados que demandam muita especificações com operadores.

Temos diversas no SQL variando entre **`strings`**, **`numericas`** e **`datas`**, que vão nos ajudar muito nas nossas consultas e aqui estão as mais comuns:

- **MAX**: Retorna o maior valor de uma coluna selecionada;

<br/>

```sql
-- SELECT MAX (<column_name>) FROM <table_name>;

-- SELECT * FROM employees.salaries ORDER BY salary DESC LIMIT 1; ;

SELECT MAX(salary) as max_salary FROM employees.salaries ;
```

- **MIN**: Retorna o menor valor de uma coluna selecionada;

<br/>

```sql
-- SELECT MIN (<column_name>) FROM <table_name>;

--SELECT * FROM employees.salaries ORDER BY salary ASC LIMIT 1;

SELECT MIN (salary) as minimal_salary FROM employees.salaries ;
```

- **COUNT**: Retorna o numero de valores que combinam com uma query;

<br/>

```sql

-- SELECT COUNT(<column_name>) FROM <table_name> WHERE <query>;

SELECT COUNT (*) as total_persons FROM employees.salaries WHERE salary >= 145000;

SELECT COUNT(*) AS register_total_number FROM employees.departments;
```

- **AVG**: Retorna a média entre os valores de uma determinada coluna;

<br/>

```sql

-- SELECT AVG(<Ccolumn_name>) FROM <table_name>;

SELECT AVG (salary) as media_salario FROM employees.salaries;

```

- **SUM**: Retorna a soma de todos os valores de uma coluna;

<br/>

```sql
-- SELECT SUM(<column_name>) FROM <table_name> <query>

SELECT SUM(salary) AS sum_of_salaries FROM employees.salaries WHERE salary > 100000;

```

---
<br/>

#### CONSTRAINS
<br/>
São regras que determinam como os campos serão preenchidos.

As constraints são adicionadas na criação da tabela geralmente, porém podemos alterar tabelas para adicioná-las nos ajudando a organizar e padronizar nosso projeto.

- **NOT NULL**: A constraint **NOT NULL** força um valor de uma coluna específica a não ser nulo;

<br/>

```sql
CREATE TABLE pessoas (nome VARCHAR(100) NOT NULL);
```

- **UNIQUE**: A constraint **UNIQUE** garante que todos os valores de uma coluna não serão repetidos.

<br/>

```sql
ALTER TABLE pessoas ADD COLUMN(email VARCHAR(100) UNIQUE);
```

- **PRIMARY KEY**: A constraint **PRIMARY KEY** só pode ser adicionada em uma única coluna da tabela e serve como identificador único do registro na tabela, geralmente é o **`ID`**.

<br/>

```sql
CREATE TABLE products (id INT NOT NULL, nome VARCHAR(150),sku VARCHAR(50),PRIMARY KEY (id));
```

- **AUTO INCREMENT**: A constraint **AUTO_INCREMENT** serve para adicionar a quantidade de um em todo registro adicionado é muito utilizada na coluna id, já que ela é única e também chave primária.

<br/>

```sql
ALTER TABLE constraints.products MODIFY id INT NOT NULL AUTO_INCREMENT;
```

- **FOREGN KEY**: A **FOREIGN KEY** indica uma ligação de uma tabela a outra a partir de seu identificador. Na tabela que recebe a foregn key este identificado indica a ligação entre as tabelas.

<br/>

```sql

CREATE TABLE constraints.pessoas (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL ,
nome VARCHAR(150) NOT NULL,
idade INT);

CREATE TABLE constraints.enderecos (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  rua VARCHAR(150) NOT NULL,
  numero CHAR (10),
  pessoa_id INT NOT NULL,
  FOREIGN KEY (pessoa_id) REFERENCES pessoas(id)
);


INSERT INTO constraints.pessoas (nome, idade) VALUES ('JOAOZAINHO', 30);

INSERT INTO constraints.enderecos (rua, numero, pessoa_id) VALUES ('Rua dos bobos', '0', 1);

```

- **INDEX**: Adicionar um índice a uma coluna faz a consulta que envolva a mesma
  se tornar mais rápida. Sem o índice a consulta começa da primeira a última coluna até encontrar que você precisa, com o índice as demais serão ignoradas.

Para a remoção do index o processo é semelhante bastando referenciar o nome do index criado e a respectiva tabela.

<br/>

```sql

-- CREATE INDEX <index_name> ON <table_name> (<table_column>);

SELECT * FROM employees.employees WHERE first_name = 'John'; -- 4.096ms

CREATE INDEX employee_first_name ON employees.employees (first_name);

SELECT * FROM employees.employees WHERE first_name = 'John'; -- 0.071ms

-- DROP INDEX <index_name> ON <table_name> (<table_column>);

DROP INDEX employee_first_name ON employees.employees (first_name);
```

---
<br/>

#### JOINS (junção)

<br/>
São consultas que envolvem duas ou mais tabelas que geralmente possuem relação entre si

Temos então uma consulta mais complexa e com mais dados e os `JOINS` são divididos entre eles 3 são os mais comuns:

**LEFT JOIN, RIGHT JOIN e INNER JOIN**

_OBS¹:
No caso do **left join** e **rigth join**, se atentar com a ordem da query pois o retorno fica em torno desta ordenação_

OBS²:
Caso queira unir mais de duas tabela, basta continuar utilizando **joins**, de maneira a complementar a primeira junção.

OBS³:
É possivel utilizar filtros normalmente.

- **INNER JOIN (Intercessão)**: Retorna registros que possuem valores correspondentes em ambas as tabelas.


<br/>

```sql

-- SELECT (alias)<table_name><table_column_name>, (alias)<table_name><table_column_name>
-- FROM <table_name one>
-- INNER JOIN <table two>
-- ON <table_column one> = <table_column two>

select p.id_pedido, c.nome_cliente -- selecione destas colunas
FROM tb_pedidos as p               -- a partir desta tabela
inner join tb_clientes as c        -- junte com esta
ON p.id_cliente = c.id_cliente;      -- dessa maneira

---

select distinct e.first_name,e.last_name, s.salary, s.from_date
from employees as e
inner join salaries as s
on e.emp_no = s.emp_no
order by e.first_name;


select e.first_name, e.gender, t.title, s.salary
from employees as e
inner join titles as t
on e.emp_no = t.emp_no
inner join salaries as s
on e.emp_no = s.emp_no
order by e.first_name
where s.salary >= 100000
limit 150;

```

- **LEFT JOIN (Valores da primeiro tabela + intercessão)**: Retorna todos os registros da tabela da esquerda e os registros correspondentes da tabela da direita mesmo que com dados nulos.

<br/>

```sql

-- SELECT (alias)<table_name><table_column_name>, (alias)<table_name><table_column_name>
-- FROM <table_name one>
-- LEFT JOIN <table two>
-- ON <table_column one> = <table_column two>;

----

SELECT e.first_name,e.last_name, s.salary
from employees as e
LEFT JOIN salaries as s
on e.emp_no = s.emp_no
order by e.first_name;

```

- **RIGHT JOIN (Valores da intercessão + segunda tabela) **: Retorna todos os registros da tabela da direita e os registros correspondentes da tabela da esquerda.

<br/>

```sql

-- SELECT (alias)<table_name><table_column_name>, (alias)<table_name><table_column_name>
-- FROM <table_name one>
-- RIGTH JOIN <table two>
-- ON <table_column one> = <table_column two>;

----

SELECT e.first_name,e.last_name, s.salary
from employees as e
RIGTH JOIN salaries as s
on e.emp_no = s.emp_no
order by e.first_name;

```

---

<br/>

#### AGRUPAMENTO E SUBQUERY:
<br/>
Agrupamentos em SQL permitem organizar dados em grupos baseados em um ou mais atributos. Isso é particularmente útil para realizar cálculos agregados, como somas, médias, contagens, mínimas e máximas, em subconjuntos de dados.

Principais cláusulas:

- **UNION**: É utilizado para combinar o resultado de dois ou mais **SELECTS**. As colunas **precisam ter o mesmo nome** e os resultados serão agregados em uma coluna só **sem resultados duplicados**.

  Podemos selecionar mais de uma coluna por vez.

<br/>

```sql
-- SELECT <column_name> FROM <table_A> UNION SELECT <column_name> FROM <table_B>;

SELECT dept_no AS departments FROM departments UNION SELECT dept_no FROM departments; --10 results

```

- **UNION ALL**: É utilizado para combinar o resultado entre dois ou mais **SELECTS** com a diferença de trazer itens duplicados.

<br/>

```sql
-- SELECT <column_name> FROM <table_A> UNION SELECT <column_name> FROM <table_B>;

SELECT dept_no AS departments FROM departments
UNION ALL
SELECT dept_no FROM dept_emp; --10k + results

```

- **GROUP BY**: Serve para agruparmos colunas e checarmos quantidades de determinados elementos.
  O intuito é agrupar em colunas um somatório de resultados do agrupamento.

<br/>

```sql
-- SELECT <table_name A> COUNT(<table_column>) <alias>
-- FROM <table_name B>
-- GROUP BY <table_query>

SELECT gender,
COUNT(gender) AS 'employees_by_gender'
FROM employees
GROUP BY gender;


SELECT title, COUNT (title) as 'employees_by_role'
FROM titles
GROUP BY titles.title;
```

- **HAVING**: O HAVING é semelhante ao WHERE e é utilizado para fazer filtragens porém em conjunto de **aggregate functions(SUM, AVG, GROUP BY)** pois o WHERE não pode ser usado nestes casos.

<br/>

```sql
-- SELECT <table_name A> COUNT(<table_column>) <alias>
-- FROM <table_name B>
-- AGREGATE FN <table_query>
-- HAVING <query>

SELECT hire_date, COUNT (hire_date) as 'employees_by_hire_date'
FROM employees
GROUP BY employees.hire_date
HAVING COUNT(hire_date) > 50;

```

Já as subquery são consultas aninhadas dentro de outra consulta. Elas podem ser usadas para diversos propósitos, como filtrar resultados, calcular valores intermediários, ou criar conjuntos de dados temporários para serem usados na consulta externa.

<br/>

```sql
SELECT emp_no as id, first_name, last_name, (
SELECT SUM(salary)
FROM salaries
WHERE employees.emp_no = salaries.emp_no
) AS sum_of_salaries
FROM employees
ORDER BY emp_no DESC;

```

- exists : soon ... 

- any : soon ...

---

<br/>

#### RELACIONAMENTO DE TABELAS
<br/>
Em SQL as tabelas podem estabelecer relações entre si e estas relações servem para a separação de responsabilidades entre as tabelas.

Esta ligação entre as tabelas e são representadas pelas **Foreign Keys (FKs)** e as relações podem ser tipificadas: **Um para um(ONE TO ONE), um para muitos (ONE TO MANY) e muitos para muitos(MANY TO MANY)**

- **ONT TO ONE**: Quando uma tabela possui uma conexão com outra e vice-versa;

<br/>

```sql
CREATE DATABASE relacoes;

use relacoes;

CREATE TABLE estudantes (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nome VARCHAR(100),
turma VARCHAR(5)
) ;

CREATE TABLE contatos (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
telefone VARCHAR(20),
estudante_id int not null,
 foreign key (estudante_id) REFERENCES estudantes(id)
) ;

insert into estudantes (nome,turma) values('joao', '02501');
insert into contatos(telefone, estudante_id) values ("21 9999-9999", 1);

select e.id, e.nome, e.turma, c.telefone
FROM estudantes as e
JOIN contatos as c
ON e.id = c.estudante_id;
```

- **ONE TO MANY**: Quando uma tabela possui diversos registros em outra, porém a segunda só pode possuir uma conexão.

<br/>

```sql
CREATE DATABASE blog;

use blog;

create table usuario(
id int primary key auto_increment not null,
nome varchar(155) not null,
email varchar(155) not null,
descricao varchar (155) not null
);

create table post ( id int primary key auto_increment not null,
title varchar(155) not null,
descricao varchar (155) not null,
usuario_id int not null,
foreign key (usuario_id) references usuario(id)
);
```

- **MANY TO MANY**: Quando duas tabelas podem ter conexões com diversos registros entre elas.

  Esta relação normalmente faz uso de uma **pivot table**, uma tabela auxiliar que serve apenas para conter as relações entre tabelas.
<br/>

```SQL
CREATE DATABASE relacoes;

use relacoes;


CREATE TABLE estudantes (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nome VARCHAR(100),
turma VARCHAR(5)
) ;

create table materias(
id int primary key auto_increment not null,
nome varchar(150) not null
);


CREATE TABLE contatos (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
telefone VARCHAR(20),
estudante_id int not null,
 foreign key (estudante_id) REFERENCES estudantes(id)
# );


create table estudante_materia (
estudante_id int not null,
materia_id int not null,
foreign key (estudante_id) references estudantes(id),
foreign key (materia_id) references materias(id)
);

 select * from estudantes;

insert into materias (nome) values ('Quimica');
insert into materias (nome) values ('Fisica');
insert into materias (nome) values ('Português');
insert into materias (nome) values ('Matemática');

select * from estudantes;

use relacoes;

insert into estudantes(nome, turma) values ('Pedro Celso', '2350b');

insert into estudantes(nome, turma) values ('Amanda Silva', '2350b');

insert into estudantes(nome, turma) values ('Liliane Woosa', '2350b');

insert into estudantes(nome, turma) values ('Sammy Rose', '2350b');

insert into estudante_materia (estudante_id, materia_id)
values(1,1);

insert into estudante_materia (estudante_id, materia_id)
values(1,2);

insert into estudante_materia (estudante_id, materia_id)
values(1,3);

insert into estudante_materia (estudante_id, materia_id)
values(2,1);

insert into estudante_materia (estudante_id, materia_id)
values(2,2);

insert into estudante_materia (estudante_id, materia_id)
values(2,3);

 select * from estudante_materia ;

SELECT estudantes.*, materias.nome
FROM estudantes
JOIN estudante_materia ON estudante_materia.estudante_id = estudantes.id
JOIN materias ON materias.id = estudante_materia.materia_id;

```
