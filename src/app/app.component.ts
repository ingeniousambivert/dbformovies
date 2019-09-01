import { Component, OnInit } from "@angular/core";
import { Movie } from "./movie.model";
import { APIService } from "./api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "dbforMovies";
  movies$: Movie[];
  constructor(private APIService: APIService) {}
  ngOnInit() {
    return this.APIService.getMovie().subscribe(
      movie => (this.movies$ = movie)
    );
  }
}
