import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  activeTab = 0;

  servicesList:any[]=[
    {

      heading: "service_head1",
      subHeading:"service_sub1",
      description: "service_text1",
      image: "assets/images/bg/2b59e6fe-5e6f-4532-8154-b59e82916c17.jfif"
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
      image: "assets/images/bg/service(7).jpg"
    },
    {
      heading: "service_head4",
      subHeading:"service_sub4",
      description: "service_text4",
      image: "assets/images/bg/service(2).jpg"
    },



  ]
}
