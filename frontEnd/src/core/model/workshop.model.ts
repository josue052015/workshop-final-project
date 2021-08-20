
import { BaseEntity } from '@/core/model/base.model';
import { WorkshopDay } from './workshopDay.model';
export class WorkShop extends BaseEntity{
    name: string = "";
    description: string = "";
    startDate: Date| null | string = null; 
    endDate?:  Date| null | string = null; 
    contentSupport: string = "";
}