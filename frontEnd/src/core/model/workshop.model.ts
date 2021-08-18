import { IWorkShopMember } from './workshopMember.model';
import { BaseEntity } from '@/core/model/base.model';
import { IWorkshopDay } from './workshopDay.model';
export class WorkShop extends BaseEntity{
    name: string = "";
    description: string = "";
    startDate: Date| null | string = null; 
    endDate?:  Date| null | string = null; 
    contentSupport: string = "";
}