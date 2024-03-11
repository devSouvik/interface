"use server";

import { currentUser } from "@clerk/nextjs";
import prisma from "@/lib/prisma";
import { formSchema, formSchemaType } from "@/schemas/form";

class UserNotFoundErr extends Error {}

export async function GetFormStats() {
    //
    const user = await currentUser();
    if (!user) {
        throw new UserNotFoundErr();
    }

    const stats = await prisma.form.aggregate({
        where: {
            userId: user.id,
        },
        _sum: {
            visits: true,
            sumissions: true,
        },
    });

    const visits = stats._sum.visits || 0;
    const sumissions = stats._sum.sumissions || 0;

    let submissionRate = 0;

    if (visits > 0) {
        submissionRate = (sumissions / visits) * 100;
    }

    const bounceRate = 100 - submissionRate;

    return { visits, submissionRate, bounceRate, sumissions };
}

export async function CreateForm(data: formSchemaType) {
    const validation = formSchema.safeParse(data);
    if (!validation.success) {
        throw new Error("form not valid");
    }
    // console.log("Name on server", data.name);
    const user = await currentUser();
    if (!user) {
        throw new UserNotFoundErr();
    }

    const { name, description } = data;

    const form = await prisma.form.create({
        data: {
            userId: user.id,
            name,
            description,
        },
    });

    if (!form) {
        throw new Error("Something went wrong");
    }

    return form.id;
}

export async function GetForms() {
    const user = await currentUser();

    if (!user) {
        throw new UserNotFoundErr();
    }

    return await prisma.form.findMany({
        where: {
            userId: user.id,
        },
        orderBy: { createdAt: "desc" },
    });
}

export async function GetFormById(id: number) {
    const user = await currentUser();

    if (!user) {
        throw new UserNotFoundErr();
    }

    return await prisma.form.findUnique({
        where: {
            userId: user.id,
            id,
        },
    });
}
