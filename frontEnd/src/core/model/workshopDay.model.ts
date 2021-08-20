import { WeekDay, WorkShopDayMode } from './../utils/enums';
import { BaseEntity } from "./base.model";
import { WorkShop } from './workshop.model';

export class WorkshopDay extends BaseEntity {
    day: WeekDay = WeekDay.MONDAY;
    mode: WorkShopDayMode = WorkShopDayMode.ON_SITE;
    modeLocation: string = "";
    startHour?:  Date | null = null;
    endHour?:  Date | null = null;
    workShopId?: number | null;
    workShop?: WorkShop;
}

