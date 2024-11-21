"use client"

import { Category, Ownership, Status } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ConnectionReqDetails = {
    id: number;
    ownership: Ownership;
    category: Category;
    status: Status;
    load: number;
    applicationDate: String;
    approvalDate: String | undefined,
    modifiedDate: String | undefined,
    applicants: number;
}

export const columns: ColumnDef<ConnectionReqDetails>[] = [
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "ownership",
        header: "Ownership",
    },
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "load",
        header: "Load",
    },
    {
        accessorKey: "applicationDate",
        header: "Application Date",
    },
    {
        accessorKey: "approvalDate",
        header: "Approval Date",
    },
    {
        accessorKey: "modifiedDate",
        header: "Modified Date",
    },
    {
        id: "applicants",
        header: "Applicants",
        cell: ({ row }) => {
            const router = useRouter(); // Access the Next.js router
            return (
                <Button
                    onClick={() => router.push(`/records/${row.original.id}/applicants`)}
                    variant="secondary"
                >
                    View
                </Button>
            );
        },
    },
    {
        id: "reviewStatus",
        header: "Review Status",
        cell: ({ row }) => {
            const router = useRouter(); // Access the Next.js router
            return (
                <Button
                    onClick={() => router.push(`/records/${row.original.id}/review-status`)}
                    variant="secondary"
                >
                    View
                </Button>
            );
        },
    },
    {
        id: "updateConnectionReq",
        header: "Update",
        cell: ({ row }) => {
            const router = useRouter(); // Access the Next.js router
            return (
                <Button
                    onClick={() => router.push(`/records/${row.original.id}/update-connection-req`)}
                    variant="secondary"
                >
                    Edit
                </Button>
            );
        },
    },
]
