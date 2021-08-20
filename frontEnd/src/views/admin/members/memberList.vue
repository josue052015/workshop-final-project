<template>
  <div>
      <sx-buefy-table :config="tableConfig">
     

      <template v-slot:role="{ row }">
        <div>
          <p>
            {{ row.role }}
          </p>
        </div>
      </template>
      <template v-slot:workShop="{ row }">
        <div>
          <p>
            {{ row.workShopId}}
          </p>
        </div>
      </template>
      <template v-slot:user="{ row }">
        <div>
          <p>
            {{ row.userId }}
          </p>
        </div>
      </template>
      
    </sx-buefy-table>
  </div>
</template>
<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { SxBuefyTableMixin } from "@/mixins";
import { BTableColumn } from "@/components/sx/sx-buefy-table/config";
import { WorkShopMember } from "@/core/model";
import { BTableColumnType, WorkShopMemberRole } from "@/core/utils/enums";
import Helpers from "@/core/utils/helpers";
import axios from "axios";
@Component
export default class WorkShopMemberListComponent extends Mixins<
  SxBuefyTableMixin<WorkShopMember>
>(SxBuefyTableMixin) {
  elements = [];
  
  created() {
    this.setTableConfig();
    this.formatColumns();
    
  }
  
  setTableConfig() {
    this.tableConfig.controller = "WorkShopMember";
    this.tableConfig.aggregatable = true;
    this.tableConfig.aggregating.title = "Listado de miembros";
  }
  formatColumns() {
    let role = new BTableColumn("role", "Rol");
   role.type = BTableColumnType.Custom;
    role.customFilter = (value: WorkShopMemberRole) => Helpers.Filters.WorkShopMemberRole(value);

    let workShop = new BTableColumn("workShop", "workShop");
    workShop.sortable = false;
    workShop.customTemplate = true;

    let user = new BTableColumn("user", "usuario");
    user.sortable = false;
    user.customTemplate = true;

    
    this.tableConfig.insertColumns(role, workShop, user);
  }
}
</script>

