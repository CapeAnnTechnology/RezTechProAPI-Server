import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { BusinessModel } from './../../shared/_models';

import { BusinessService } from './../../shared/_services';

@Component({
  selector: 'rez-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss']
})
export class BusinessListComponent implements OnInit, OnDestroy {
  @Input() groups: any[] = [];
  businesses: BusinessModel[] = [];
  ids: string[] = [];
  businessesSub: Subscription;
  routeSub: Subscription;
  loading: boolean;
  error: boolean;

  constructor(
    private route: ActivatedRoute,
    private businessService: BusinessService,
    ) { }

  ngOnInit() {
    this._routeSubs();
  }

  private _routeSubs() {
    // Set room ID from route params and subscribe
    this.routeSub = this.route.params
      .subscribe(params => {
        this._getBusinesses();
      });
  }

  private _getBusinesses() {
    this.loading = true;
    // POST venues by IDs
    this.groups.forEach((id)=> {
      this.ids.push(id);
    });
    // console.log(this.ids);
    this.businessesSub = this.businessService
      .getBusinessesByIds$(this.ids)
      .subscribe(
        res => {
          console.log(res);
          this.businesses = res;
          this.loading = false;
        },
        err => {
          console.error(err);
          this.loading = false;
          this.error = true;
        }
      );
   }

   ngOnDestroy() {
    this.businessesSub.unsubscribe();
    this.routeSub.unsubscribe();
  }

}
