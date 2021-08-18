import { WeekDay, WorkShopDayMode } from './../utils/enums';
import { IBaseEntity } from "./base.model";
import { WorkShop } from './workshop.model';

export interface IWorkshopDay extends IBaseEntity {
    day: WeekDay;
    mode: WorkShopDayMode;
    modeLocation: string;
    startHour: string;
    endHour: string | null;
    workShopId: number;
    workShop: WorkShop;
}

