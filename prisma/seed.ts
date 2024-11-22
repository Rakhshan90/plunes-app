import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const david = await prisma.applicant.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            name: 'David',
            gender: 'MALE',
            state: 'Uttar Pradesh',
            district: 'Ayodhya',
            pincode: 224120,
            governmentIdType: 'ADHAAR',
            governmentId: '1234567890',

        },
    })
    const alice = await prisma.applicant.upsert({
        where: { id: 2 },
        update: {},
        create: {
            id: 2,
            name: 'Alice',
            gender: 'MALE',
            state: 'North',
            district: 'Delhi',
            pincode: 212321,
            governmentIdType: 'PAN',
            governmentId: 'ADCO4567890',
        },
    })
    const bob = await prisma.applicant.upsert({
        where: { id: 3 },
        update: {},
        create: {
            id: 3,
            name: 'Alice',
            gender: 'MALE',
            state: 'North',
            district: 'Delhi',
            pincode: 212321,
            governmentIdType: 'PASSPORT',
            governmentId: '12345678MZ2',
        },
    })
    const julie = await prisma.applicant.upsert({
        where: { id: 4 },
        update: {},
        create: {
            id: 4,
            name: 'Julie',
            gender: 'FEMALE',
            state: 'North',
            district: 'Delhi',
            pincode: 212321,
            governmentIdType: 'ADHAAR',
            governmentId: '1234987890',
        },
    })
    const michael = await prisma.applicant.upsert({
        where: { id: 5 },
        update: {},
        create: {
            id: 5,
            name: 'Michael',
            gender: 'MALE',
            state: 'Uttar Pradesh',
            district: 'Ayodhya',
            pincode: 224120,
            governmentIdType: 'ADHAAR',
            governmentId: '1234567855',
        },
    })
    const john = await prisma.applicant.upsert({
        where: { id: 6 },
        update: {},
        create: {
            id: 6,
            name: 'John',
            gender: 'MALE',
            state: 'Uttar Pradesh',
            district: 'Ayodhya',
            pincode: 224120,
            governmentIdType: 'VOTER_ID',
            governmentId: '1234FJAL192',
        },
    })
    const lisa = await prisma.applicant.upsert({
        where: { id: 7 },
        update: {},
        create: {
            id: 7,
            name: 'Lisa',
            gender: 'FEMALE',
            state: 'Uttar Pradesh',
            district: 'Ayodhya',
            pincode: 224120,
            governmentIdType: 'VOTER_ID',
            governmentId: '1234FJZL892',
        },
    })
    const mike = await prisma.applicant.upsert({
        where: { id: 8 },
        update: {},
        create: {
            id: 8,
            name: 'Mike',
            gender: 'MALE',
            state: 'Uttar Pradesh',
            district: 'Ayodhya',
            pincode: 224120,
            governmentIdType: 'VOTER_ID',
            governmentId: '123Z0JAL192',
        },
    })
    const anthony = await prisma.applicant.upsert({
        where: { id: 9 },
        update: {},
        create: {
            id: 9,
            name: 'Anthony',
            gender: 'MALE',
            state: 'Uttar Pradesh',
            district: 'Ayodhya',
            pincode: 224120,
            governmentIdType: 'PASSPORT',
            governmentId: '1234FJAL1L0',
        },
    })
    const james = await prisma.applicant.upsert({
        where: { id: 10 },
        update: {},
        create: {
            id: 10,
            name: 'James',
            gender: 'MALE',
            state: 'North',
            district: 'Delhi',
            pincode: 212321,
            governmentIdType: 'VOTER_ID',
            governmentId: '1234FJAA192',
        },
    })
    console.log({ david, alice, bob, julie, michael, john, lisa, mike, anthony, james })

    
    const rajesh = await prisma.reviewer.upsert({
        where: {id: 1},
        update: {},
        create: {
            id: 1,
            name: 'Rajesh',
        }
    })
    const aman = await prisma.reviewer.upsert({
        where: {id: 2},
        update: {},
        create: {
            id: 2,
            name: 'Aman',
        }
    })
    const rahul = await prisma.reviewer.upsert({
        where: {id: 3},
        update: {},
        create: {
            id: 3,
            name: 'Rahul',
        }
    })
    const manoj = await prisma.reviewer.upsert({
        where: {id: 4},
        update: {},
        create: {
            id: 4,
            name: 'Manoj',
        }
    })

    console.log({ rajesh, aman, rahul, manoj});
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })