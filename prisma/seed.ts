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
        },
    })
    const alice = await prisma.applicant.upsert({
        where: { id: 2 },
        update: {},
        create: {
            id: 2,
            name: 'Alice',
            gender: 'MALE',
        },
    })
    const bob = await prisma.applicant.upsert({
        where: { id: 3 },
        update: {},
        create: {
            id: 3,
            name: 'Alice',
            gender: 'MALE',
        },
    })
    const julie = await prisma.applicant.upsert({
        where: { id: 4 },
        update: {},
        create: {
            id: 4,
            name: 'Julie',
            gender: 'FEMALE',
        },
    })
    const michael = await prisma.applicant.upsert({
        where: { id: 5 },
        update: {},
        create: {
            id: 5,
            name: 'Michael',
            gender: 'MALE',
        },
    })
    const john = await prisma.applicant.upsert({
        where: { id: 6 },
        update: {},
        create: {
            id: 6,
            name: 'John',
            gender: 'MALE',
        },
    })
    const lisa = await prisma.applicant.upsert({
        where: { id: 7 },
        update: {},
        create: {
            id: 7,
            name: 'Lisa',
            gender: 'FEMALE',
        },
    })
    const mike = await prisma.applicant.upsert({
        where: { id: 8 },
        update: {},
        create: {
            id: 8,
            name: 'Mike',
            gender: 'MALE',
        },
    })
    const anthony = await prisma.applicant.upsert({
        where: { id: 9 },
        update: {},
        create: {
            id: 9,
            name: 'Anthony',
            gender: 'MALE',
        },
    })
    const james = await prisma.applicant.upsert({
        where: { id: 10 },
        update: {},
        create: {
            id: 10,
            name: 'James',
            gender: 'MALE',
        },
    })
    console.log({ david, alice, bob, julie, michael, john, lisa, mike, anthony, james })


    const davidAddress = await prisma.address.upsert({
        where: {id: 1},
        update: {},
        create: {
            id: 1,
            state: 'Uttar Pradesh',
            district: 'Ayodhya',
            pincode: 224120,
            applicantId: 1,
        }
    })
    const aliceAddress = await prisma.address.upsert({
        where: {id: 2},
        update: {},
        create: {
            id: 2,
            state: 'Uttar Pradesh',
            district: 'Ayodhya',
            pincode: 224120,
            applicantId: 2,
        }
    })
    const bobAddress = await prisma.address.upsert({
        where: {id: 3},
        update: {},
        create: {
            id: 3,
            state: 'Uttar Pradesh',
            district: 'Ayodhya',
            pincode: 224120,
            applicantId: 3,
        }
    })
    const julieAddress = await prisma.address.upsert({
        where: {id: 4},
        update: {},
        create: {
            id: 4,
            state: 'Uttar Pradesh',
            district: 'Ayodhya',
            pincode: 224120,
            applicantId: 4,
        }
    })
    const michaelAddress = await prisma.address.upsert({
        where: {id: 5},
        update: {},
        create: {
            id: 5,
            state: 'Uttar Pradesh',
            district: 'Ayodhya',
            pincode: 224120,
            applicantId: 5,
        }
    })
    const johnAddress = await prisma.address.upsert({
        where: {id: 6},
        update: {},
        create: {
            id: 6,
            state: 'Uttar Pradesh',
            district: 'Ayodhya',
            pincode: 224120,
            applicantId: 6,
        }
    })
    const lisaAddress = await prisma.address.upsert({
        where: {id: 7},
        update: {},
        create: {
            id: 7,
            state: 'Uttar Pradesh',
            district: 'Ayodhya',
            pincode: 224120,
            applicantId: 7,
        }
    })
    const mikeAddress = await prisma.address.upsert({
        where: {id: 8},
        update: {},
        create: {
            id: 8,
            state: 'Uttar Pradesh',
            district: 'Ayodhya',
            pincode: 224120,
            applicantId: 8,
        }
    })
    const anthonyAddress = await prisma.address.upsert({
        where: {id: 9},
        update: {},
        create: {
            id: 9,
            state: 'Uttar Pradesh',
            district: 'Ayodhya',
            pincode: 224120,
            applicantId: 9,
        }
    })
    const jamesAddress = await prisma.address.upsert({
        where: {id: 10},
        update: {},
        create: {
            id: 10,
            state: 'Uttar Pradesh',
            district: 'Ayodhya',
            pincode: 224120,
            applicantId: 10,
        }
    })

    console.log({ davidAddress, aliceAddress, bobAddress, julieAddress, michaelAddress, johnAddress, lisaAddress, mikeAddress, anthonyAddress, jamesAddress})

    const davidIdentity = await prisma.identity.upsert({
        where: {id: 1},
        update: {},
        create: {
            id: 1,
            governmentIdType: 'ADHAAR',
            governmentId: '1234567890',
            applicantId: 1,
        }
    })
    const aliceIdentity = await prisma.identity.upsert({
        where: {id: 2},
        update: {},
        create: {
            id: 2,
            governmentIdType: 'ADHAAR',
            governmentId: '12345678901',
            applicantId: 2,
        }
    })
    const bobIdentity = await prisma.identity.upsert({
        where: {id: 3},
        update: {},
        create: {
            id: 3,
            governmentIdType: 'PAN',
            governmentId: 'ADE45678901',
            applicantId: 3,
        }
    })
    const julieIdentity = await prisma.identity.upsert({
        where: {id: 4},
        update: {},
        create: {
            id: 4,
            governmentIdType: 'PAN',
            governmentId: 'ADEI4567890',
            applicantId: 4,
        }
    })
    const michaelIdentity = await prisma.identity.upsert({
        where: {id: 5},
        update: {},
        create: {
            id: 5,
            governmentIdType: 'PAN',
            governmentId: 'JIX4567890',
            applicantId: 5,
        }
    })
    const johnIdentity = await prisma.identity.upsert({
        where: {id: 6},
        update: {},
        create: {
            id: 6,
            governmentIdType: 'VOTER_ID',
            governmentId: 'JIX45678987',
            applicantId: 6,
        }
    })
    const lisaIdentity = await prisma.identity.upsert({
        where: {id: 7},
        update: {},
        create: {
            id: 7,
            governmentIdType: 'VOTER_ID',
            governmentId: 'JAX45678982',
            applicantId: 7,
        }
    })
    const mikeIdentity = await prisma.identity.upsert({
        where: {id: 8},
        update: {},
        create: {
            id: 8,
            governmentIdType: 'PASSPORT',
            governmentId: 'JEIO478982',
            applicantId: 8,
        }
    })
    const anthonyIdentity = await prisma.identity.upsert({
        where: {id: 9},
        update: {},
        create: {
            id: 9,
            governmentIdType: 'PASSPORT',
            governmentId: 'IO4789821BL',
            applicantId: 9,
        }
    })
    const jamesIdentity = await prisma.identity.upsert({
        where: {id: 10},
        update: {},
        create: {
            id: 10,
            governmentIdType: 'PAN',
            governmentId: '4789821ZUMG',
            applicantId: 10,
        }
    })

    console.log({ davidIdentity, aliceIdentity, bobIdentity, julieAddress, michaelIdentity, johnIdentity, lisaIdentity, mikeIdentity, anthonyIdentity, jamesIdentity})

    
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