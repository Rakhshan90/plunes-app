'use client';

import { formSchema } from '@/actions/schema'
import { zodResolver } from "@hookform/resolvers/zod"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { useToast } from '@/hooks/use-toast';
import { updateConnectionDetails } from '@/actions';
import { useRouter } from 'next/navigation';

const UpdateConnection = ({slug}: {slug: number}) => {

    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            ownership: undefined,
            category: undefined,
            load: undefined,
            approvalDate: undefined,
            status: undefined,
            reviewerId: undefined,
            reviewer_comments: undefined,
            reviewer_name: undefined,
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)

        const updatedValues = {...values, connectionReqId: slug}
        
        try {
            const res = await updateConnectionDetails(updatedValues);
            setIsLoading(false);
            toast({
                title: "Response",
                description: res.message,
            })
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to create project, try again",
            })
        }

        setTimeout(() => {
            setIsLoading(false)
            router.push("/records")
        }, 2000)
    }

    return (
        <div className='h-full flex items-center justify-center px-4 sm:px-6 lg:px-8'>
            <Card className="w-full max-w-md bg-slate-900 border-none text-white">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center text-blue-600">
                        Update Connection
                    </CardTitle>
                    <CardDescription className="text-center text-slate-200">
                        Update the details of the connection request
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="load"
                                render={({ field }) => (
                                    <FormItem >
                                        <FormControl>
                                            <Input type='number' className="bg-slate-800 border-none placeholder:text-slate-200" placeholder="Load" 
                                            {...field}
                                            onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : undefined)} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="reviewerId"
                                render={({ field }) => (
                                    <FormItem >
                                        <FormControl>
                                            <Input type='number' className="bg-slate-800 border-none placeholder:text-slate-200" placeholder="Reviewer Id" 
                                            {...field}
                                            onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : undefined)} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="reviewer_name"
                                render={({ field }) => (
                                    <FormItem >
                                        <FormControl>
                                            <Input className="bg-slate-800 border-none placeholder:text-slate-200" placeholder="Reviewer Name" 
                                            {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="reviewer_comments"
                                render={({ field }) => (
                                    <FormItem >
                                        <FormControl>
                                            <Input className="bg-slate-800 border-none placeholder:text-slate-200" 
                                            placeholder="reviewer_comments" 
                                            {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="status"
                                render={({ field }) => (
                                    <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl className="bg-slate-800 border-none placeholder:text-slate-200">
                                                <SelectTrigger className="bg-slate-800 border-none text-slate-200 placeholder:text-slate-200">
                                                    <SelectValue placeholder="Select Status" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="bg-slate-800 text-white border-none">
                                                <SelectItem
                                                    className="focus:bg-slate-900 focus:text-white"
                                                    value="PENDING">
                                                    PENDING
                                                </SelectItem>
                                                <SelectItem
                                                    className="focus:bg-slate-900 focus:text-white"
                                                    value="APPROVED">
                                                    APPROVED
                                                </SelectItem>
                                                <SelectItem
                                                    className="focus:bg-slate-900 focus:text-white"
                                                    value="REJECTED">
                                                    REJECTED
                                                </SelectItem>
                                                <SelectItem
                                                    className="focus:bg-slate-900 focus:text-white"
                                                    value="CONNECTION_RELEASED">
                                                    CONNECTION_RELEASED
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="ownership"
                                render={({ field }) => (
                                    <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl className="bg-slate-800 border-none placeholder:text-slate-200">
                                                <SelectTrigger className="bg-slate-800 border-none text-slate-200 placeholder:text-slate-200">
                                                    <SelectValue placeholder="Select Ownership" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="bg-slate-800 text-white border-none">
                                                <SelectItem
                                                    className="focus:bg-slate-900 focus:text-white"
                                                    value="JOINT">
                                                    JOINT
                                                </SelectItem>
                                                <SelectItem
                                                    className="focus:bg-slate-900 focus:text-white"
                                                    value="INDIVIDUAL">
                                                    INDIVIDUAL
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl className="bg-slate-800 border-none placeholder:text-slate-200">
                                                <SelectTrigger className="bg-slate-800 border-none text-slate-200 placeholder:text-slate-200">
                                                    <SelectValue placeholder="Select Category" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="bg-slate-800 text-white border-none">
                                                <SelectItem
                                                    className="focus:bg-slate-900 focus:text-white"
                                                    value="RESIDENTIAL">
                                                    RESIDENTIAL
                                                </SelectItem>
                                                <SelectItem
                                                    className="focus:bg-slate-900 focus:text-white"
                                                    value="COMMERCIAL">
                                                    COMMERCIAL
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="approvalDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={`w-full pl-3 text-left font-normal bg-slate-800 border-none text-slate-200 ${!field.value && "text-muted-foreground"}`}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Approval Date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date < new Date("1900-01-01")
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full bg-blue-600 hover:bg-slate-800" disabled={isLoading}>
                                {isLoading ? "Creating..." : "Create"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default UpdateConnection