import { DatagridPlugin } from "../../types";
import { window } from "../../utils";
import type { Happy } from "../../integrations";

export class HappyPlugin implements DatagridPlugin {
	constructor(private happy?: Happy) {
	}

	onDatagridInit(): boolean {
		const happy = this.happy ?? window().happy ?? null;

		if (happy) {
			happy.init();
		}

		return true;
	}
}
