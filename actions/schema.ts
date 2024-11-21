import {z} from 'zod';


export const formSchema = z.object({
    ownership: z.enum(['JOINT', 'INDIVIDUAL']),
    category: z.enum(['RESIDENTIAL', 'COMMERCIAL']),
    load: z.number(),
    approvalDate: z.date(),
    status: z.enum(['PENDING', 'APPROVED', 'REJECTED', 'CONNECTION_RELEASED']),
    reviewerId: z.number(),
    reviewer_name: z.string(),
    reviewer_comments: z.string(),
});