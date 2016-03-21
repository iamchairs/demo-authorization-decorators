import {Request, Response} from 'express';
import {AuthorizeService} from './authorize.service';
import {UserModel} from './user.model';

export function Authorize() {

  return function(target, property) {

    let originalFunction = target[property];

    return function(...args) {
      let req: Request = args[0];
      let res: Response = args[1];
      let user = AuthorizeService.getRequestUser(req);

      if(user) {
        args.push(user);
        originalFunction.apply(target, args)
      } else {
        res.status(401).send('You are not authorized');
      }
    }

  }

}
