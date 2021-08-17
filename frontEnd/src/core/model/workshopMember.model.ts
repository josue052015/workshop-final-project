import { WorkShopMemberRole } from "../utils/enums";
import { IBaseEntity } from "./base.model";
import { User } from "./user.model";
import { WorkShop } from "./workshop.model";

export interface IWorkShopMember extends IBaseEntity {
    role: WorkShopMemberRole;
    workShopId: number;
    workShop: WorkShop;
    userId: number;
    user: User;
}