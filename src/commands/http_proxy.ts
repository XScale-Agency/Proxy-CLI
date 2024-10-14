import getPort from 'get-port'
import httpProxy from 'http-proxy'
import http from 'node:http'
import { args, BaseCommand, flags } from '@adonisjs/ace'

export class HTTPProxy extends BaseCommand {
  static commandName: string = 'http'
  static description: string = 'Starts an http reverse proxy'

  @args.string({ description: 'URL of the server', required: true })
  url!: string

  @flags.number({
    description: 'Custom port, if not specified it will use a random port',
    default: await getPort({ port: 3333 }),
  })
  port!: number

  #proxy = httpProxy.createProxyServer()

  async run() {
    const url = new URL(this.url)

    this.#proxy.on('error', (err) => {
      this.logger.error(err)
    })

    const server = http.createServer((req, res) => {
      res.setHeader('Access-Control-Allow-Origin', '*')

      this.#proxy.web(req, res, { target: url.origin, changeOrigin: true })
    })

    this.ui
      .sticker()
      .heading('Started HTTP reverse proxy')
      .add(`Local address:    ${this.colors.cyan(`http://localhost:${this.port}`)}`)
      .add(`Target address:   ${this.colors.cyan(url.origin)}`)
      .render()

    server.listen(this.port)
  }
}
