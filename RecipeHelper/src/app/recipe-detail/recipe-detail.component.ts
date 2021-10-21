import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.getRecipeDetails(this.route.snapshot.params['id']);
  }

  getRecipeDetails(id) {
    this.api.getRecipe(id)
      .subscribe(data => {
        console.log(data);
        this.recipe = recipe;
      });
  }

  deleteRecipe(id) {
    this.api.deleteRecipe(id)
      .subscribe(res => {
          this.router.navigate(['/recipes']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}