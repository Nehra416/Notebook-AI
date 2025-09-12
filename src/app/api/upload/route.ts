import { NextRequest, NextResponse } from "next/server";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { QdrantVectorStore } from "@langchain/qdrant";
import fs from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        // Save file temporarily
        const tempDir = path.join(process.cwd(), "tmp");
        await fs.mkdir(tempDir, { recursive: true });
        const filePath = path.join(tempDir, file.name);
        const buffer = Buffer.from(await file.arrayBuffer());
        await fs.writeFile(filePath, buffer);

        // Load PDF dynamically
        const loader = new PDFLoader(filePath);
        const docs = await loader.load();
        console.log("docs", docs);
        console.log("docs", docs.length);

        // Create embeddings
        const embeddings = new GoogleGenerativeAIEmbeddings({
            model: "text-embedding-004",
        });

        // Store in Qdrant
        await QdrantVectorStore.fromDocuments(docs, embeddings, {
            url: process.env.QDRANT_URL,
            collectionName: "testing-collection",
        });

        console.log("QDRANT_URL", process.env.QDRANT_URL);

        // Cleanup temp file
        await fs.unlink(filePath);

        return NextResponse.json({ message: "Indexing done" });
    } catch (err: unknown) {
        console.error(err);
        return NextResponse.json({ error: err instanceof Error ? err.message : "Unknown error" }, { status: 500 });
    }
}
