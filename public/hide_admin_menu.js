import chrome from 'ui/chrome';
import { uiModules } from 'ui/modules';

if ( sessionStorage.getItem("sg_user") ) {
	if (!JSON.parse(sessionStorage.getItem("sg_user")).tenants.admin_tenant) {
		chrome.getNavLinkById("kibana:discover").hidden = true;
		chrome.getNavLinkById("kibana:visualize").hidden = true;
		chrome.getNavLinkById("kibana:dev_tools").hidden = true;
		chrome.getNavLinkById("kibana:management").hidden = true;
		chrome.getNavLinkById("own_home").hidden = true;

		uiModules.get('kibana')
			.config(dashboardConfigProvider => dashboardConfigProvider.turnHideWriteControlsOn());
	}
}

