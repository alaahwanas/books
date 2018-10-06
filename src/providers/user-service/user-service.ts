import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { UserModel } from '../../model/userModel';


/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  private UserListRef = this.db.list<UserModel>('/Users')



  constructor(public db: AngularFireDatabase) {
    console.log('Hello UserServiceProvider Provider');
  }

  getUserList() {
    return this.UserListRef;
  }

  addUser(user: UserModel) {
    return this.UserListRef.push(user)
  }


  updateUser(user: UserModel) {
    return this.UserListRef.update(user.key, user)



  }
}
