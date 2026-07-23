let cargo = "gerente"

switch (cargo) {
  case "estagiario":
    console.log("Salário: R$ 1500")
    break
  case "analista":
    console.log("Salário: R$ 4000")
    break
  case "gerente":
    console.log("Salário: R$ 8000")
    break
  case "diretor":
    console.log("Salário: R$ 15000")
    break
  default:
    console.log("Cargo não encontrado")
}