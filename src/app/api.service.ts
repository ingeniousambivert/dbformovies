import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movie } from "./movie.model";
@Injectable({
  providedIn: "root"
})
export class APIService {
  private apiKEY: string = "a66928af7ebb110e34970c3f668558b5";
  movie: string = "Jack Reacher";
  private apiURL: string = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKEY}&query=${this.movie}`;

  constructor(private http: HttpClient) {}
  getMovie() {
    return this.http.get<Movie[]>(this.apiURL);
  }
}
