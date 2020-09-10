import * as chai from "chai"
import chaiAsPromised from "chai-as-promised"
import { } from 'mocha';
import { StaticKeyvault } from "./static.keyvault";

before(() => {
  chai.should()
  chai.use(chaiAsPromised)
})

describe('Static keyvault', function () {

  const keyvault = new StaticKeyvault()

  it('List pubkeys', () => {
    return chai.expect(keyvault.listPublicKeys()).to.become(
      [
        'a99a76ed7796f7be22d5b7e85deeb7c5677e88e511e0b337618f8c4eb61349b4bf2d153f649f7b53359fe8b94a38e44c',
        'b99a76ed7796f7be22d5b7e85deeb7c5677e88e511e0b337618f8c4eb61349b4bf2d153f649f7b53359fe8b94a38e44c'
      ])
  })

  it('Get secret', () => {
    return chai.expect(keyvault.getSecretKey('a99a76ed7796f7be22d5b7e85deeb7c5677e88e511e0b337618f8c4eb61349b4bf2d153f649f7b53359fe8b94a38e44c'))
      .to.become(
        '25295f0d1d592a90b333e26e85149708208e9f8e8bc18f6c77bd62f8ad7a6866'
      )
  })
})