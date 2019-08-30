import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class APIService {
  apiKEY: string = "a66928af7ebb110e34970c3f668558b5";
  movieID: number = 555;
  apiURL: string = `https://api.themoviedb.org/3/movie/${this.movieID}?api_key=${this.apiKEY}`;

  constructor(private http: HttpClient) {}
}
