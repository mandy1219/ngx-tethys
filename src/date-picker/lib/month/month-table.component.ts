import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges
} from '@angular/core';
import { TinyDate } from '../../../util';
import { DateHelperService } from '../../date-helper.service';

const MAX_ROW = 4;
const MAX_COL = 3;

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'month-table',
    exportAs: 'monthTable',
    templateUrl: 'month-table.component.html'
})
export class MonthTableComponent implements OnChanges {
    @Input() value: TinyDate = new TinyDate();
    @Input() prefixCls = 'thy-calendar';
    @Output() readonly valueChange = new EventEmitter<TinyDate>();

    @Input() disabledDate: (date: Date) => boolean;

    panelMonths: PanelMonthData[][];

    constructor(private dateHelper: DateHelperService) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.value || changes.disabledDate) {
            this.render();
        }
    }

    trackYear(_index: number): number {
        return this.value ? this.value.getYear() : _index;
    }

    trackPanelMonth(_index: number, monthData: PanelMonthData): string {
        return monthData.content;
    }

    private render(): void {
        if (this.value) {
            this.panelMonths = this.makePanelMonths();
        }
    }

    private makePanelMonths(): PanelMonthData[][] {
        const months: PanelMonthData[][] = [];
        const currentMonth = this.value.getMonth();
        const today = new TinyDate();

        let monthValue = 0;
        for (let rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            months[rowIndex] = [];
            for (let colIndex = 0; colIndex < MAX_COL; colIndex++) {
                const month = this.value.setMonth(monthValue);
                const disabled = this.disabledDate
                    ? this.disabledDate(this.value.setMonth(monthValue).nativeDate)
                    : false;
                const content = this.dateHelper.format(month.nativeDate, 'MMMM');

                const cell: PanelMonthData = (months[rowIndex][colIndex] = {
                    value: month.nativeDate,
                    disabled,
                    content,
                    month: monthValue,
                    title: content,
                    classMap: null,
                    onClick: () => this.chooseMonth(cell.month) // don't use monthValue here
                });

                cell.classMap = {
                    [`${this.prefixCls}-month-panel-cell`]: true,
                    [`${this.prefixCls}-month-panel-cell-disabled`]: disabled,
                    [`${this.prefixCls}-month-panel-selected-cell`]: monthValue === currentMonth,
                    [`${this.prefixCls}-month-panel-current-cell`]:
                        today.getYear() === this.value.getYear() && monthValue === today.getMonth()
                };

                monthValue++;
            }
        }
        return months;
    }

    private chooseMonth(month: number): void {
        this.value = this.value.setMonth(month);
        this.valueChange.emit(this.value);
        this.render();
    }
}

export interface PanelMonthData {
    disabled: boolean;
    content: string;
    month: number;
    title: string;
    classMap: object | null;
    onClick: VoidFunction | null;
    value: Date;
}
