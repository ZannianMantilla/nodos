export const usuarios =  async () => {
  const lista = await fetch("http://127.0.0.1:3000/users")
  console.log(lista);
  const usuarios = await lista.json();
  console.log(usuarios);
  return usuarios;
}