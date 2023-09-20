type Env = {
  TOKEN: string
  DB: D1Database
}

type Post = {
  title: string
  content: string
}

const handler: ExportedHandler<Env> = {
  async fetch(_req, env, ctx) {
    try {
      // Variables
      const token = env.TOKEN

      // D1 Bindings
      const { results } = await env.DB.prepare('SELECT * FROM posts').all<Post>()
      const posts = results

      // waitUntil()
      const log = async () => console.log('Hello!')
      ctx.waitUntil(log())

      return Response.json({
        token,
        posts
      })
    } catch (e: any) {
      return new Response(e)
    }
  }
}

export default handler
