import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('123456', 10);

  const tenant = await prisma.tenant.create({
    data: {
      name: 'Tech Solutions',
      users: {
        create: [
          {
            email: 'admin@techsolutions.com',
            name: 'Administrador',
            password: password,
            telephone: '88888888',
            role: Role.ADMIN,
          },
        ],
      },
    },
  });

  console.log('Datos insertados correctamente:', tenant);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });