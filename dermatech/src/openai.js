
const API_KEY = ''; 

const getCompletion = async (prompt, retryCount = 3) => {
    console.log('Enviando solicitud a OpenAI con el siguiente prompt:', prompt);

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