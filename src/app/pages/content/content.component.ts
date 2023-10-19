import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  photoCover:String = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEVfh_Y44gXK0v87nHKqBSrRNBF7pkrXT917hp7ev44LuKxDZmRi5KDWpMBGgZ3mJXA41X3fAnw2DZIJXWhcfG9kKvSGBnZa0-KKo3iamCbqj8Z2iaC_Beh5gerLPEkNvfuwyD2yAleR1qebgFic2tIjA3MWSMy8e6g5dH8SvejdDLUg/s1600/Koyoi,%20Kimi%20to%20Kiss%20no%20Chigiri%20wo%20The%20Fox's%20Kiss%20by%20Saki%20Aikawa.png"
  photoAlt:String = ""
  postTitle:String = ""
  postDescription:String = ""

  private id:any = "0"

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id"))
    
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string){
    const result = dataFake.filter(article => article.id == id)[0]

    console.log(result.id)

    this.postTitle = result.title
    this.postDescription = result.description
    this.photoCover = result.photo
    /* if(!result) {
      this.postTitle = result.title
    } */
  }
}
