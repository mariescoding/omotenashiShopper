
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
    try {
        const { prompt } = await request.json();
        const response = await openai.images.generate({
            model: "dall-e-2",
            prompt: prompt,
            n: 6,
            size: "512x512",
        });

        const image_urls = response.data.map(image => ({ url: image.url }));
        if (image_urls.length === 0) throw new Error("No image URLs found");

        // generate a summary for each image description
        const summaries = await Promise.all(
            response.data.map(async (image) => {
                const summaryResponse = await openai.chat.completions.create({
                    model: "gpt-3.5-turbo",
                    messages: [
                        { role: "system", content: "Write a short product title describing the anime body pillow in the image the same way an ecommerce site would." },
                        { role: "user", content: image.url }
                    ]
                });
                return summaryResponse.choices[0].message.content.trim();
            })
        );

        // combine image URLs and summaries into a single response
        const result = image_urls.map((image, index) => ({
            url: image.url,
            summary: summaries[index],
        }));

        return new Response(JSON.stringify({ result }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

