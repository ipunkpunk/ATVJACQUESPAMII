interface CatFact {
  fact: string;
}

export async function fetchCatFact(): Promise<CatFact> {
  // 1. Fazer a requisição fetch para a URL da API
  const response = await fetch('https://catfact.ninja/fact');

  // 2. Verificar se a resposta foi bem sucedida
  if (!response.ok) {
    // lançar erro para ser tratado depois
    throw new Error('Erro ao buscar o fato do gato');
  }

  // 3. Converter resposta para JSON
  const data: CatFact = await response.json();

  // 4. Retornar o dado
  return data;
}
