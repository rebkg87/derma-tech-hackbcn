
const API_KEY = ''; 

const getCompletion = async (input, retryCount = 3) => {
    console.log('Enviando solicitud a OpenAI con el siguiente prompt:', input);

    const prompt = `
Eres un experto en skincare. Ayuda a los usuarios a crear una rutina de cuidado de la piel basada en los productos que tienen en casa y sus necesidades específicas. Aquí hay algunos ejemplos de cómo responder:

Usuario: Tengo piel seca y tengo crema hidratante y aceite de jojoba.
Bot: Para piel seca, te recomiendo usar la crema hidratante por la mañana y el aceite de jojoba por la noche.

Usuario: Mi piel es grasa y tengo gel limpiador y tónico.
Bot: Para piel grasa, usa el gel limpiador dos veces al día y aplica el tónico después de limpiar tu rostro.

Usuario: Tengo piel mixta y tengo suero de vitamina C y protector solar.
Bot: Para piel mixta, aplica el suero de vitamina C por la mañana antes del protector solar y por la noche después de limpiar tu piel.

Usuario: Tengo piel sensible y tengo crema hidratante y agua micelar.
Bot: Para piel sensible, usa el agua micelar para limpiar tu rostro y la crema hidratante para mantener tu piel hidratada.

Usuario: ${input}
Bot:`;

    for (let attempt = 0; attempt < retryCount; attempt++) {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'user', content: prompt }
                ],
                max_tokens: 300,
                temperature: 0.9,
            }),
        });

        console.log('Respuesta de OpenAI:', res);

        if (res.ok) {
            const data = await res.json();
            console.log('Datos de OpenAI:', data);
            return data.choices[0].message.content;
        } else if (res.status === 429) {
            console.log(`Error 429: Intento ${attempt + 1} de ${retryCount}. Esperando antes de reintentar...`);
            await new Promise(resolve => setTimeout(resolve, 2000 * (attempt + 1))); // Aumentar el tiempo de espera
        } else {
            throw new Error(`Error: ${res.statusText}`);
        }
    }

    throw new Error('Demasiados intentos fallidos. Por favor, intenta nuevamente más tarde.');
};

export default getCompletion;