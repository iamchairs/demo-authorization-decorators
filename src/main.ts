import {Request, Response, Application} from 'express';
import {UserRoute} from './user.route';

let express = require('express');

export class MyServer {
  private App: Application;

  constructor() {
      this.App = new express();

      this.App.get('/user/:id', UserRoute.getUser);
      this.App.put('/user', MyServer.handleRequest(UserRoute.updateUser));

      this.App.listen(3000, () => {
        console.log('server started on port 3000');
      });
  }

  public static handleRequest(fn: Function): (req: Request, res: Response) => void {
    return (req: Request, res: Response) => {
      fn.apply(null, arguments);
    }
  }
}
