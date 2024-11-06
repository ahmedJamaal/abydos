import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  servicesList:any[]=[
    {

      heading: "service_head1",
      subHeading:"service_sub1",
      description: "service_text1",
      image: "assets/images/bg/service(1).jpg"
    },
    {
      heading: "service_head2",
      subHeading:"service_sub2",
      description: "service_text2",
      image: "assets/images/bg/service(6).jpg"
    },
    {
      heading: "service_head3",
      subHeading:"service_sub3",
      description: "service_text3",
      image: "assets/images/bg/service(0).jpg"
    },
    {
      heading: "service_head4",
      subHeading:"service_sub4",
      description: "service_text4",
      image: "assets/images/bg/service(5).jpg"
    },



  ]
}
