import { PolicyType } from "../../enums/policy-type";
import { PolicyResponse } from "../response/policy.response";

export class PolicyData {
  id: string;
  organizationId: string;
  type: PolicyType;
  data: any;
  enabled: boolean;

  constructor(response: PolicyResponse) {
    this.id = response.id;
    this.organizationId = response.organizationId;
    this.type = response.type;
    this.data = response.data;
    this.enabled = response.enabled;
  }
}
