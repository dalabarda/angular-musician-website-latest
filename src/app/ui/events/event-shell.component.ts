import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { EventService } from './event.service';


// Component not in USE

@Component({
    templateUrl: './event-shell.component.html'
})
export class EventShellComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Products';
    monthCount: number;
    sub: Subscription;

    constructor(private productService: EventService) { }

    ngOnInit() {
        this.sub = this.productService.selectedProductChanges$.subscribe(selectedProduct => {
            if (selectedProduct) {
                const start = new Date(selectedProduct.date);
                const now = new Date();
                this.monthCount = now.getMonth() - start.getMonth()
                    + (12 * (now.getFullYear() - start.getFullYear()));
            } else {
                this.monthCount = 0;
            }
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}