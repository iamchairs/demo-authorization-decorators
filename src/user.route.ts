import {Application, Request, Response} from 'express';
import {UserService} from './user.service';
import {UserModel} from './user.model';
import {Authorize} from './authorize.decorator';

export class UserRoute {

  public static getUser(req: Request, res: Response) {
    res.send(UserService.getUser(req.params['id']));
  }

  @Authorize()
  public static updateUser(req: Request, res: Response, user: UserModel) {
    UserService.updateUser(user, req.body);
    res.sendStatus(204);
  }

}
