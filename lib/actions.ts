/*

"use server";

import { z } from "zod"; // https://www.npmjs.com/package/zod
import { prisma } from "@/utils/db";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { File } from "buffer";

const UploadSchema = z.object({
  title: z.string().min(1),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: "Image is required" })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Only images are allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "Image must be less than 4MB",
    }),
});

export const CreateData = async (prevState: unknown, formData: FormData) => {
  const validatedFields = UploadSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const file = formData.get("image");
  const { title } = validatedFields.data;

  if (!file || !(file instanceof File)) {
    return { error: { image: ["Image is required"] } };
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replaceAll(" ", "_");
    const uploadDir = path.join(process.cwd(), "public/assets");

    // Ensure the upload directory exists
    await mkdir(uploadDir, { recursive: true });

    await writeFile(
      path.join(uploadDir, filename),
      buffer
    );

    await prisma.post.create({
      data: {
        title,
        image: filename,
      },
    });

    revalidatePath("/post");
    redirect("/post");
  } catch (error) {
    console.error("Error occurred:", error);
    return { message: "Failed to create post" };
  }
};   */