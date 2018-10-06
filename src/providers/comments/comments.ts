import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { CommentModel } from '../../model/commentModel';
/*
  Generated class for the CommentsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommentsProvider {

  private commentsListRef = this.db.list<CommentModel>('UserComments')


  constructor(public db: AngularFireDatabase) {
    console.log('Hello CommentsProvider Provider');
  }


  addComments(comments:CommentModel) {
    return this.commentsListRef.push(comments)
  }



}
