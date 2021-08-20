import { WorkshopDay } from './../model/workshopDay.model';
import { BaseService } from './base.service';
import settings from "@/core/utils/app-settings"
import axios from 'axios';
export class WorkShopDayService extends BaseService<WorkshopDay>{
    constructor(controller: string){
        super(controller)
        this.apiUrl = settings.API_URL + "api/" + controller + "/";
    }
    public async getFilteredDays(workshopId: number, action = "getFilteredDay"){
        const url = `${this.apiUrl}${action}/${workshopId}`
        return await axios.get(url);
    }
}