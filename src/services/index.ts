import { Services } from "@/src/types/services";
import { serviceInjectionBuilder } from "@/src/services/builders";

let services = serviceInjectionBuilder();

export function getServices() {
  return services.build();
}

export function injectServices(
  serviceName: keyof Services,
  service: Services[keyof Services]
) {
  services = serviceInjectionBuilder()[serviceName](service);
}
