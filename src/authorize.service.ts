import {Request} from 'express';
import {UserModel} from './user.model';

export class AuthorizeService {

  public static getRequestUser(req: Request) {
    let auth = req.header('Authorization');

    // Check if user is authorized.
    // Return user object
    // Otherwise, return null

    if(auth === 'my authorization method') {
      return new UserModel();
    }

    return null;
  }

}
