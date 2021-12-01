import { AccountModel } from '../models/account-model'

type AuthenticationParams = {
  email: string
  password: string
}
/**
 * * Authentication Protocol layer
 */
export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AccountModel>
}
