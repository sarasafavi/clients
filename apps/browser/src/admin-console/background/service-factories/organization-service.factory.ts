import { OrganizationService as AbstractOrganizationService } from "@bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction";

import {
  FactoryOptions,
  CachedServices,
  factory,
} from "../../../background/service_factories/factory-options";
import {
  stateServiceFactory,
  StateServiceInitOptions,
} from "../../../background/service_factories/state-service.factory";
import { BrowserOrganizationService } from "../../../services/browser-organization.service";

type OrganizationServiceFactoryOptions = FactoryOptions;

export type OrganizationServiceInitOptions = OrganizationServiceFactoryOptions &
  StateServiceInitOptions;

export function organizationServiceFactory(
  cache: { organizationService?: AbstractOrganizationService } & CachedServices,
  opts: OrganizationServiceInitOptions
): Promise<AbstractOrganizationService> {
  return factory(
    cache,
    "organizationService",
    opts,
    async () => new BrowserOrganizationService(await stateServiceFactory(cache, opts))
  );
}
