let option = 0;
let items = [];

/*do {
  if (option == 1) {
   let item = prompt("Digite o nome do item");
    items.push(item);
  } else if (option == 2) {
    if (items.length == 0) {
      alert("Não existem itens cadastrados");
    } else {
      alert(items);
    }
  } else {
    alert("Tchau");
  }
  option = Number(
    prompt(`
  Olá usuario, favor escolhar uma opçao:
  1. Cadastrar um item
  2. Ver lista de itens
  3. Sair do programa
  `)
  );
} while (option != 3);
*/

while (option != 3) {
  option = Number(
    prompt(`
  Olá usuario, favor escolhar uma opçao:
  1. Cadastrar um item
  2. Ver lista de itens
  3. Sair do programa
  `)
  );
  switch (option) {
    case 1:
      let item = prompt("Digite o nome do item");
      items.push(item);
      break;

    case 2:
      if (items.length == 0) {
        alert("Não existem itens cadastrados");
      } else {
        alert(items);
      }
      break;

    case 3:
      alert("Tchau");
      break;

    default:
      alert("Opção invalida");
      break;
  }
}
