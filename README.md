Navegando na web, encontrei uma postagem no blog do Josh Comeau sobre Ligação de dados em React.

Em "entradas de texto" no campo input, é definido um value={state} e onChange que são os principais atributos.
value“bloqueia” a entrada, forçando-a a sempre exibir o valor atual da nossa variável de estado.
onChangeÉ disparado quando o usuário edita a entrada e atualiza o estado.

Mas, por que é necessário usar uma string vazia como estado inicial?

Quando você não especifica um valor inicial, ela é inicializada como undefined e isso é equivalente a omitir o value atributo completamente e isso é problema, pois eu quero uma entrada controlada e ao passar um valor indefinido estamos dizendo ao React para criar uma entrada não controlada.

Bem, sempre é bom aprender sobre esses assuntos.
