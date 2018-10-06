import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { CommentsProvider } from '../../providers/comments/comments';
import { CommentModel } from '../../model/commentModel';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { AngularFireAuth } from '@angular/fire/auth';



/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  UserList: AngularFireList<any>

  comments:CommentModel = {
  userName:'',
  commentSubject:'',
  userComment:''
}

  email: string = '';
  uid: any;
  itemList: AngularFireList<any>

  constructor(public db: AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams,
    public commentsProvider: CommentsProvider,
    public alertCtrl: AlertController,
    public userServiceProvider: UserServiceProvider,
    public authServiceProvider: AuthServiceProvider,
    public afAuth: AngularFireAuth
) {

    //let comments = this.afAuth.auth.currentUser.email
    //this.email = comments
    //console.log(this.comments)
    //console.log(comments)
    this.email = localStorage.getItem('email')
    console.log('email', this.email)
    this.uid = localStorage.getItem('uid')
    console.log('uid', this.uid)
    //this.afAuth.authState.subscribe(auth => {
    //  if (auth) {
    //    this.uid = auth.uid;
    //    console.log('uid:' + this.uid)
    //    localStorage.setItem('uid', auth.uid)

    //  }
    //})

    this.itemList = this.db.list('UserComments')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');


  }


 

  sendComment(comments: CommentModel) {

   
      this.itemList.push({

        name: this.comments.userName,
        subject: this.comments.commentSubject,
        comment: this.comments.userComment,
        email: this.email,
        uid: this.uid

      }).
        then(() =>
          this.navCtrl.push(TabsPage));
      this.showAlert()

    
   
  }


  //this.commentsProvider.addComments(comments).then(ref => {
  //  this.showAlert()
  //  this.navCtrl.setRoot(TabsPage);


  //})




  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'تم الأرسال',
      subTitle: '!شكرا, لقد تم إرسال التعليق بنجاح',
      buttons: ['OK']
    });
    alert.present();
  }
}


  






