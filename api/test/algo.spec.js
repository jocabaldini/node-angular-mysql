const sinon = require("sinon")

/**
 * TEST
 */
describe("TESTE", () => {
  const sandbox = sinon.createSandbox()

  beforeEach(() => {
    // stub out the `hello` method
  })

  afterEach(() => {
    // completely restore all fakes created through the sandbox
    sandbox.restore()
  })

  /**
   * Test 1
   */
  it("Teste 1", () => {
    sandbox.assert.match(true, true)
  })
})
