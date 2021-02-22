import { Component, OnInit } from '@angular/core';
import { Twit } from './model/twit.model';
import { TwitterService } from '../services/twitter.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-twitter-clone',
  templateUrl: './twitter-clone.component.html',
  styleUrls: ['./twitter-clone.component.css']
})
export class TwitterCloneComponent implements OnInit {

  twits: Twit[] = [];
  subs = new Subscription();
  value: string = 'Clear me';

  constructor(private twitterService: TwitterService, private router: Router) { }

  ngOnInit(): void {
    this.twits = this.twitterService.getTwits();
  }

  twit(text: string) {
    if(text) {
      console.log(text);
      var twit: Twit = {
      id: ''+this.twits.length +1,
      user: 'Paulo1001',
      date: new Date(),
      text: text
    };
    this.subs=this.twitterService.createTwit(twit);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/twit']);
        });
    }
  }

  likeTwit(twit: Twit) {
    var likes=twit.nbrlikes;
    if(likes)
      twit.nbrlikes=likes+1;
    else
      twit.nbrlikes=1;
    console.log(twit.nbrlikes);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
