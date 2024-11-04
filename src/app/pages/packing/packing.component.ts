import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Packing } from '@model/Constant/product';
import { CurrentPacking } from '@model/Constant/productList';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from '@service/shared/loader.service';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-packing',
  templateUrl: './packing.component.html',
  styleUrls: ['./packing.component.scss']
})
export class PackingComponent {
  isLoading:boolean= true;
  packingId!:string;
  packing!:Packing;

  mediaUrl = 'assets/images';

  _albums: any[] = [];
  isEnglish:boolean=true;

  constructor(
    private route:ActivatedRoute,
    public _lightbox: Lightbox,
    public translateService:TranslateService,
    private spinner:LoaderService
      ){
        this.isEnglish = this.translateService.getBrowserLang() ==='en' ? true : false;

        this.route.queryParams
        .subscribe((params: any) => {
          this.spinner.setLoading(true);
          this.packingId = params.packing;
          this.packing = CurrentPacking(this.packingId);
          this.AddImageAlbum(this.packing);
          this.isLoading=false;
        });
      }
      open(index: number): void {

        this._lightbox.open(this._albums, index);

      }

      close(): void {
        // close lightbox programmatically
        this._lightbox.close();
      }

      AddImageAlbum(packing:Packing){
        this._albums = []
        packing.image ?
          this._albums.push({
            src: `${this.mediaUrl}/${this.packing.image}`,
            caption: this.packing.heading,
            id: 0,
            isActive: false
          })
        : null
        packing.imagesUrl.length !== 0 ?
        packing.imagesUrl.map((image: any, index: number) => {
          this._albums.push({
            src: `${this.mediaUrl}/${image}`,
            caption: packing.heading + index+1,
            id: index,
            isActive: false
          });

        })
        : null
        this.spinner.setLoading(false);
      }
}
