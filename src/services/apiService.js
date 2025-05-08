export async function buscarDadosDaAPI(endpoint) {
  try {
    const resposta = await fetch(
      `https://temporario-production.up.railway.app/${endpoint}`
    );

    if (!resposta.ok) {
      throw new Error(`Erro ao buscar dados: ${resposta.status}`);
    }

    return await resposta.json();
  } catch (erro) {
    console.error("Erro no serviço:", erro);
    return null;
  }
}
