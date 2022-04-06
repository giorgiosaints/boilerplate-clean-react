import { HttpPostClient } from '../../protocols/http/http-post-client'

/**
 * ? Interface segregation principle
 * * Melhor ter várias interfaces pequenas, com um método e mais específico
 */
export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(): Promise<void> {
    await this.httpPostClient.post(this.url)
    return Promise.resolve()
  }
}
