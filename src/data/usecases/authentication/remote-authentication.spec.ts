/**
 * ? Interface segregation principle
 * * Melhor ter várias interfaces pequenas, com um método e mais específico
 */
export interface HttpPostClient {
  post: (url: string) => Promise<void>
}

class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(): Promise<void> {
    await this.httpPostClient.post(this.url)
    return Promise.resolve()
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    /**
     * * Classe mockada como duble de teste, um tipo de mock pra colocar valor
     * * fake nas respostas do métodos e cria variáveis auxiliares para capturar valores
     * * para poder comparar os valores
     * ? Principio do SOLID -> interface segregation principle
     */
    class HttpPostClientSpy implements HttpPostClient {
      url?: string
      async post(url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }

    const url = 'any_url'
    const httpPostClient = new HttpPostClientSpy()
    // * sut -> System under Test (obj que iremos testar da vez)
    const sut = new RemoteAuthentication(url, httpPostClient)
    await sut.auth()
    expect(httpPostClient.url).toBe(url)
  })
})
