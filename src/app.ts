import express from "express";
import prisma from "./prisma";


const app = express()

app.use(express.json())

async function createContact() {
  await prisma.$connect()

  await prisma.contacts.create({
    data: {
      email: 'hello@prisma.com',
      tags: {
        create: {
          title: '1dom',
        },
      },
    },
  })

  const createWithSuccess = await prisma.contacts.findFirst({
    include: {
      tags: true,
    },
  })
  console.log(createWithSuccess, { depth: null })
}

createContact()

export default app
