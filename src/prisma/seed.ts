import { Prisma, PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
// @ts-ignore
import * as fakerBr from 'faker-br'


const prisma = new PrismaClient()



const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max) || 1
}



const getCliente = () => {
  const cpf = fakerBr.br.cpf()
  return {
      where: { cpf },
      update: {},
      create: {
        email: faker.internet.email(),
        cpf,
        nome: faker.person.fullName()
      }
    }
}

/*
const getCategoria = (): number => {
  return Math.floor(Math.random() * Object.keys(ECategoria).length - 1)
}

const productIds = Object.keys(new Array(500).fill(null))

const getProductId = (): number => {
  return parseInt(productIds.splice(getRandomNumber(productIds.length), 1)[0], 10)
}

const getProduto = () => {
  faker.seed(getRandomNumber(100))
  return {
    nome: faker.commerce.productName(),
    valor: parseFloat(faker.commerce.price({min: 10, max: 100 })),
    descricao: faker.commerce.productDescription(),
    categoria_codigo: getCategoria()
  }
} */



export const main = async (): Promise<void> => {

  

  for  (let i = 0; i < 10; i++) {
    const cliente = getCliente()
    await prisma.cliente.upsert(cliente)

  }
}

// main()
//   .then(() => {
//     console.log('Seed concluido')
//   })
//   .catch(err => {
//     console.error(err)
//     process.exit(1)
//   })
