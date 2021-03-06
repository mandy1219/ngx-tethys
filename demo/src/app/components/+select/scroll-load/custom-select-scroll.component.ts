import {
    Component,
    ViewEncapsulation,
    OnInit,
    Input,
    ViewChild,
    ElementRef,
    Renderer2,
    Output,
    EventEmitter,
    TemplateRef
} from '@angular/core';
import { timer } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'custom-select-scroll',
    templateUrl: './custom-select-scroll.component.html'
})
export class CustomSelectScrollComponent implements OnInit {
    loadMoreData = [];

    selectedTaskType: string;

    loading = false;

    haveMore = true;

    page = 0;

    onScrollToBottom() {
        if (!this.loading && this.haveMore) {
            this.page++;
            this.fetchOptions().subscribe(() => {
                this.loading = false;
            });
        }
    }

    fetchOptions() {
        this.loading = true;
        return timer(1000).pipe(
            tap(() => {
                for (let index = 0; index < 10; index++) {
                    this.loadMoreData.push({ thyLabelText: `第${this.page + 1}页`, _id: `${this.page}` });
                }

                this.loadMoreData.forEach((item, index: number) => {
                    item._id = item._id + index;
                });

                if (this.page > 3) {
                    this.haveMore = false;
                }
            })
        );
    }

    ngOnInit() {
        this.fetchOptions().subscribe(() => {
            this.loading = false;
        });
    }
}
