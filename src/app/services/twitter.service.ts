import { Injectable } from '@angular/core';
import { Twit } from '../twitter-clone/model/twit.model';
import { SentimentPrediction } from '../twitter-clone/model/sentiment-prediction.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  twits: Twit[] = [
    {
      id: '0',
      user: 'Paulo1661',
      date: new Date(),
      text: 'Bad guy',
      nbrlikes: 0,
      sentiment: 'NEGATIVE'
    },
    {
      id: '1',
      user: 'Toyoyo',
      date: new Date(),
      text: 'Very good day, today',
      nbrlikes: 0,
      sentiment: 'POSITIVE'
    }
  ];

  readonly host = 'http://996f9b3e6f1a.ngrok.io/predict';

  subscription = new Subscription();

  constructor(private http: HttpClient) { }

  getTwits(): Twit[] {
    return [...this.twits];
  }

  sentimentAnalysis(twit: Twit): Observable<any> {
    console.log('request send');
    return this.http.post<any>(this.host, twit);
  }

  createTwit(twit: Twit) {
    return this.subscription = this.sentimentAnalysis(twit).subscribe(sentiment => {
      twit.sentiment = sentiment.label;
      console.log('sentiment : '+sentiment);
      this.twits.push(twit);
    });
  }

}
