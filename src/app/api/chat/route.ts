import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai';
import { QdrantVectorStore } from '@langchain/qdrant';
import OpenAI from 'openai';
import 'dotenv/config';

const openai = new OpenAI({
    apiKey: process.env.GOOGLE_API_KEY,
    baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai/',
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const userQuery = body.userQuery?.trim();

        if (!userQuery) {
            return NextResponse.json({ error: 'Missing userQuery' }, { status: 400 });
        }

        const embeddings = new GoogleGenerativeAIEmbeddings({
            model: 'text-embedding-004',
        });

        const vectorStore = await QdrantVectorStore.fromExistingCollection(embeddings, {
            url: process.env.QDRANT_URL,
            collectionName: 'testing-collection',
        });

        const retriever = vectorStore.asRetriever({ k: 3 });
        const relevantChunks = await retriever.invoke(userQuery);

        const SYSTEM_PROMPT = `
            You are an AI assistant helping users based on a PDF document.
            Only answer using the context below (text and page numbers).
            If the answer isn't in the context, respond with "I couldn't find that in the document."

            Context:
            ${JSON.stringify(relevantChunks, null, 2)}
            `;

        const completion = await openai.chat.completions.create({
            model: 'gemini-2.0-flash',
            messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                { role: 'user', content: userQuery },
            ],
        });

        const answer = completion.choices[0]?.message?.content;

        return NextResponse.json({ answer: answer || 'No response from model.' });
    } catch (err: unknown) {
        console.error('Chat route error:', err);
        return NextResponse.json({ error: err instanceof Error ? err.message : 'Internal server error' }, { status: 500 });
    }
}
