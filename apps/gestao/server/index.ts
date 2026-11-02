export default {
  async fetch(): Promise<Response> {
    return new Response('Não encontrado', { status: 404 });
  },
};
