import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const POST: APIRoute = async ({ request, redirect }) => {
    const formData = await request.json();
    const title = formData.title;
    const content = formData.content;

    console.log(`Posted:`, { title, content });

    if (!title || !content) {
        return new Response("Missing required fields", {
            status: 400,
        });
    }
    try {
        const db = getFirestore(app);
        const academyRef = db.collection("academy");
        const newDoc = await academyRef.add({
            title: title,
            slug: formData.slug || titleToSlug(title),
            content: content,
        });

        return new Response(JSON.stringify({
            id: newDoc.id,
            title: title,
            slug: formData.slug || titleToSlug(title),
            content: content,
        }), {
            status: 200
        })

    } catch (error) {
        console.log(error);
        return new Response("Something went wrong", {
            status: 500,
        });
    }
    return redirect("/");
};

function titleToSlug(title: string) {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')  // Remove non-alphanumeric characters except for spaces and hyphens
        .replace(/[\s_-]+/g, '-')  // Replace spaces, underscores, and consecutive hyphens with a single hyphen
        .replace(/^-+|-+$/g, '');  // Trim leading and trailing hyphens
}
