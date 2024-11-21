"use client"

import { Category, Gender, Ownership, Status } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ReviewDetails = {
    id?: number | undefined;
    connectionReqId?: number | undefined;
    reviewerId?: number | undefined;
    reviewer_comments?: string | undefined;
    name?: string | undefined;
}

export const ReviewColumns: ColumnDef<ReviewDetails>[] = [
    {
        accessorKey: "connectionReqId",
        header: "Connection Request Id",
    },
    {
        accessorKey: "reviewerId",
        header: "Reviewer Id",
    },
    {
        accessorKey: "reviewerName",
        header: "Reviewer Name",
    },
    {
        accessorKey: "reviewer_comments",
        header: "Reviewer Comment",
    },
]
