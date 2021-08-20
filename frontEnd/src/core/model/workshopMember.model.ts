import { WorkShopMemberRole } from "../utils/enums";
import { BaseEntity, IBaseEntity } from "./base.model";
import { User } from "./user.model";
import { WorkShop } from "./workshop.model";

export class WorkShopMember extends BaseEntity {
    role: WorkShopMemberRole = WorkShopMemberRole.TEACHER;
    workShopId?: number | null;
    workShop?: WorkShop;
    userId?: number | null;
    user?: User;
}