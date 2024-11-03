import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  activeTab = 0;
  packagesList:any[]=[
    {

      heading: "Boxes",
      description: "Boxes_text", // packing description
      image: "assets/images/package/boxe-(3).jpg",
      details:[""] // packing details
    },
    {
      heading: "Pallets",
      description: "Pallets_desc",
      image: "assets/images/package/pallets-(3).jpg  ",
      details:[""]
    },
    {
      heading: "Bundles",
      description: "Bundles_desc",
      image: "assets/images/package/pallets-(2).jpg",
      details:[""]
    },
    {
      heading: "Slabs",
      description: "Slabs_desc",
      image: "assets/images/package/slabs- (2).jpg",
      details:[""]
    }

  ]
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
