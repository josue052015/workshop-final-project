import { WorkShop } from './../model/workshop.model';
import { BaseService, IBaseService } from './base.service';
export interface IWorkShopService extends IBaseService<WorkShop> {}

export class WorkShopService extends BaseService<WorkShop> implements IWorkShopService {

    constructor(controller: string) {
        super(controller)
    }
   
}