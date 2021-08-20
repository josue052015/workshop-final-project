
import settings from "@/core/utils/app-settings"
import axios from "axios";
import { WorkShopMember } from './../model/workshopMember.model';
import { BaseService, IBaseService } from './base.service';

export class WorkShopMemberService extends BaseService<WorkShopMember> {

    constructor(controller: string) {
        super(controller)
        this.apiUrl = settings.API_URL + "api/" + controller + "/";
    }
   public async getFilteredWorkShops(workshopId: number , action = "getFilteredWorkShop"){
       const url = `${this.apiUrl}${action}/${workshopId}`
       return await axios.get(url);
   }
}