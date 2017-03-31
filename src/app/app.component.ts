import { Component, HostListener, ElementRef, Renderer, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/merge';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private globalClickCallbackFn: Function;
    private loginSuccessCallbackFn: Function;

    constructor(
        public elementRef: ElementRef,
        public renderer: Renderer,
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public vcr: ViewContainerRef
    ) {
    }

    ngOnInit() {
        this.globalClickCallbackFn = this.renderer.listen(this.elementRef.nativeElement, 'click', (event: any) => {
            console.log("全局监听点击事件>" + event);
        });
    }

    ngOnDestroy() {
        if (this.globalClickCallbackFn) {
            this.globalClickCallbackFn();
        }
    }
}
