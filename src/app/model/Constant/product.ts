export interface Product {
    id:string; // generate as name_unique
    name:string;
    nameAr:string;
    image:string; // empty
    imagesUrl:string[]; // empty array
    headerText:string;  //
    headerTextAr:string;  //
    description:string[];
    descriptionAr:string[];
    specification:Specification;

}

export interface Specification {
type:string,
material_name:string,
material_nameAr:string,
Color:string,
country:string,
Quarry_location:string,
Availability:string[],
Thickness:number[],
Applications:string[],
}
export interface Packing {
  heading:string;
  headingAr:string;
  description:string;
  descriptionAr:string;
  image:string;
  imagesUrl:string[];
  details:string[];
  detailsAr:string[];

}
