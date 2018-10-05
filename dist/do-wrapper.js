"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}(),_requestHelper=require("./request-helper"),_requestHelper2=_interopRequireDefault(_requestHelper);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var DigitalOcean=function(){function n(e,t){_classCallCheck(this,n),this.perPage=t,this.requestHelper=new _requestHelper2.default(e)}return _createClass(n,[{key:"_handleRequest",value:function(e,t){return this.requestHelper.request(e,t)}},{key:"account",value:function(e){return this._handleRequest({actionPath:"account"},e)}},{key:"accountGetActions",value:function(e,t){var n={actionPath:"actions",key:"actions",qs:{tag_name:e&&e.tag_name||"",per_page:e&&e.per_page||this.perPage,page:e&&e.page||1},includeAll:e&&e.includeAll||!1};return this._handleRequest(n,t)}},{key:"accountGetAction",value:function(e,t){var n={actionPath:"actions/"+encodeURIComponent(e)};return this._handleRequest(n,t)}},{key:"accountGetKeys",value:function(e,t){var n={actionPath:"account/keys",key:"ssh_keys",qs:{tag_name:e&&e.tag_name||"",per_page:e&&e.per_page||this.perPage,page:e&&e.page||1},includeAll:e&&e.includeAll||!1};return this._handleRequest(n,t)}},{key:"accountAddKey",value:function(e,t){var n={actionPath:"account/keys",method:"POST",body:e};return this._handleRequest(n,t)}},{key:"accountGetKeyById",value:function(e,t){var n={actionPath:"account/keys/"+encodeURIComponent(e)};return this._handleRequest(n,t)}},{key:"accountGetKeyByFingerprint",value:function(e,t){var n={actionPath:"account/keys/"+encodeURIComponent(e)};return this._handleRequest(n,t)}},{key:"accountRenameKey",value:function(e,t,n){var a={actionPath:"account/keys/"+encodeURIComponent(e),method:"PUT",body:{name:t}};return this._handleRequest(a,n)}},{key:"accountDeleteKey",value:function(e,t){var n={actionPath:"account/keys/"+encodeURIComponent(e),method:"DELETE"};return this._handleRequest(n,t)}},{key:"cdnEndpointCreate",value:function(e,t,n){var a={actionPath:"cdn/endpoints",method:"POST",body:{origin:e,ttl:t}};return this._handleRequest(a,n)}},{key:"cdnEndpointGet",value:function(e,t){var n={actionPath:"cdn/endpoints/"+encodeURIComponent(e)};return this._handleRequest(n,t)}},{key:"cdnEndpointGetAll",value:function(e,t){var n={actionPath:"/cdn/endpoints",key:"endpoints",qs:{tag_name:e&&e.tag_name||"",per_page:e&&e.per_page||this.perPage,page:e&&e.page||1},includeAll:e&&e.includeAll||!1};return this._handleRequest(n,t)}},{key:"cdnEndpointUpdate",value:function(e,t,n){var a={actionPath:"cdn/endpoints/"+encodeURIComponent(e),method:"PUT",body:{ttl:t}};return this._handleRequest(a,n)}},{key:"cdnEndpointDelete",value:function(e,t){var n={actionPath:"cdn/endpoints/"+encodeURIComponent(e),method:"DELETE"};return this._handleRequest(n,t)}},{key:"cdnEndpointPurgeCache",value:function(e,t,n){var a={actionPath:"cdn/endpoints/"+encodeURIComponent(e),method:"DELETE",body:{files:t}};return this._handleRequest(a,n)}},{key:"dropletsGetAll",value:function(e,t){var n={actionPath:"droplets",key:"droplets",qs:{tag_name:e&&e.tag_name||"",per_page:e&&e.per_page||this.perPage,page:e&&e.page||1},includeAll:e&&e.includeAll||!1};return this._handleRequest(n,t)}},{key:"dropletsGetKernels",value:function(e,t,n){var a={actionPath:"droplets/"+encodeURIComponent(e)+"/kernels",key:"kernels",qs:{tag_name:t&&t.tag_name||"",per_page:t&&t.per_page||this.perPage,page:t&&t.page||1},includeAll:t&&t.includeAll||!1};return this._handleRequest(a,n)}},{key:"dropletsGetSnapshots",value:function(e,t,n){var a={actionPath:"droplets/"+encodeURIComponent(e)+"/snapshots",key:"snapshots",qs:{tag_name:t&&t.tag_name||"",per_page:t&&t.per_page||this.perPage,page:t&&t.page||1},includeAll:t&&t.includeAll||!1};return this._handleRequest(a,n)}},{key:"dropletsGetBackups",value:function(e,t,n){var a={actionPath:"droplets/"+encodeURIComponent(e)+"/backups",key:"backups",qs:{tag_name:t&&t.tag_name||"",per_page:t&&t.per_page||this.perPage,page:t&&t.page||1},includeAll:t&&t.includeAll||!1};return this._handleRequest(a,n)}},{key:"dropletsGetActions",value:function(e,t,n){var a={actionPath:"droplets/"+encodeURIComponent(e)+"/actions",key:"actions",qs:{tag_name:t&&t.tag_name||"",per_page:t&&t.per_page||this.perPage,page:t&&t.page||1},includeAll:t&&t.includeAll||!1};return this._handleRequest(a,n)}},{key:"dropletsCreate",value:function(e,t){var n={actionPath:"droplets",method:"POST",body:e};return this._handleRequest(n,t)}},{key:"dropletsGetById",value:function(e,t){var n={actionPath:"droplets/"+encodeURIComponent(e)};return this._handleRequest(n,t)}},{key:"dropletsDelete",value:function(e,t){var n={actionPath:"droplets/"+encodeURIComponent(e),method:"DELETE"};return this._handleRequest(n,t)}},{key:"dropletsGetNeighbors",value:function(e,t){var n={actionPath:"droplets/"+encodeURIComponent(e)+"/neighbors"};return this._handleRequest(n,t)}},{key:"dropletsGetNeighborsReport",value:function(e){return this._handleRequest({actionPath:"reports/droplet_neighbors"},e)}},{key:"dropletsGetUpgrades",value:function(e){return this._handleRequest({actionPath:"droplet_upgrades"},e)}},{key:"dropletsRequestAction",value:function(e,t,n){var a={actionPath:"droplets/"+encodeURIComponent(e)+"/actions",method:"POST",body:t};return this._handleRequest(a,n)}},{key:"dropletsGetAction",value:function(e,t,n){var a={actionPath:"droplets/"+encodeURIComponent(e)+"/actions/"+encodeURIComponent(t)};return this._handleRequest(a,n)}},{key:"domainsGetAll",value:function(e,t){var n={actionPath:"domains",key:"domains",qs:{tag_name:e&&e&&e.tag_name||"",per_page:e&&e.per_page||this.perPage,page:e&&e.page||1}};return this._handleRequest(n,t)}},{key:"domainsCreate",value:function(e,t,n){var a={actionPath:"domains",method:"POST",body:{name:e,ip_address:t}};return this._handleRequest(a,n)}},{key:"domainsGet",value:function(e,t){var n={actionPath:"domains/"+encodeURIComponent(e)};return this._handleRequest(n,t)}},{key:"domainsDelete",value:function(e,t){var n={actionPath:"domains/"+encodeURIComponent(e),method:"DELETE"};return this._handleRequest(n,t)}},{key:"domainRecordsGetAll",value:function(e,t,n){var a={actionPath:"domains/"+encodeURIComponent(e)+"/records",key:"domain_records",qs:{tag_name:t&&t.tag_name||"",per_page:t&&t.per_page||this.perPage,page:t&&t.page||1},includeAll:t&&t.includeAll||!1};return this._handleRequest(a,n)}},{key:"domainRecordsCreate",value:function(e,t,n){var a={actionPath:"domains/"+encodeURIComponent(e)+"/records",method:"POST",body:t};return this._handleRequest(a,n)}},{key:"domainRecordsGet",value:function(e,t,n){var a={actionPath:"domains/"+encodeURIComponent(e)+"/records/"+encodeURIComponent(t)};return this._handleRequest(a,n)}},{key:"domainRecordsUpdate",value:function(e,t,n,a){var o={actionPath:"domains/"+encodeURIComponent(e)+"/records/"+encodeURIComponent(t),method:"PUT",body:n};return this._handleRequest(o,a)}},{key:"domainRecordsDelete",value:function(e,t,n){var a={actionPath:"domains/"+encodeURIComponent(e)+"/records/"+encodeURIComponent(t),method:"DELETE"};return this._handleRequest(a,n)}},{key:"regionsGetAll",value:function(e,t){var n={actionPath:"regions",key:"regions",qs:{tag_name:e&&e.tag_name||"",per_page:e&&e.per_page||this.perPage,page:e&&e.page||1},includeAll:e&&e.includeAll||!1};return this._handleRequest(n,t)}},{key:"sizesGetAll",value:function(e,t){var n={actionPath:"sizes",key:"sizes",qs:{tag_name:e&&e.tag_name||"",per_page:e&&e.per_page||this.perPage,page:e&&e.page||1},includeAll:e&&e.includeAll||!1};return this._handleRequest(n,t)}},{key:"imagesGetAll",value:function(e,t){var n={actionPath:"images",key:"images",qs:{tag_name:e&&e.tag_name||"",per_page:e&&e.per_page||this.perPage,page:e&&e.page||1,private:e&&e.private||!1,type:e&&e.type||null},includeAll:e&&e.includeAll||!1};return this._handleRequest(n,t)}},{key:"imagesGetById",value:function(e,t){var n={actionPath:"images/"+encodeURIComponent(e)};return this._handleRequest(n,t)}},{key:"imagesGetBySlug",value:function(e,t){var n={actionPath:"images/"+encodeURIComponent(e)};return this._handleRequest(n,t)}},{key:"imagesGetActions",value:function(e,t,n){var a={actionPath:"images/"+encodeURIComponent(e)+"/actions",key:"actions",qs:{tag_name:t&&t.tag_name||"",per_page:t&&t.per_page||this.perPage,page:t&&t.page||1},includeAll:t&&t.includeAll||!1};return this._handleRequest(a,n)}},{key:"imagesUpdate",value:function(e,t,n){var a={actionPath:"images/"+encodeURIComponent(e),body:{name:t},method:"PUT"};return this._handleRequest(a,n)}},{key:"imagesDelete",value:function(e,t){var n={actionPath:"images/"+encodeURIComponent(e),method:"DELETE"};return this._handleRequest(n,t)}},{key:"imagesRequestAction",value:function(e,t,n){var a={actionPath:"images/"+encodeURIComponent(e)+"/actions",method:"POST",body:t};return this._handleRequest(a,n)}},{key:"imagesGetAction",value:function(e,t,n){var a={actionPath:"images/"+encodeURIComponent(e)+"/actions/"+encodeURIComponent(t)};return this._handleRequest(a,n)}},{key:"floatingIpsGetAll",value:function(e,t){var n={actionPath:"floating_ips",key:"floating_ips",qs:{tag_name:e&&e.tag_name||"",per_page:e&&e.per_page||this.perPage,page:e&&e.page||1},includeAll:e&&e.includeAll||!1};return this._handleRequest(n,t)}},{key:"floatingIpsAssignDroplet",value:function(e,t){var n={actionPath:"floating_ips",method:"POST",body:{droplet_id:e}};return this._handleRequest(n,t)}},{key:"floatingIpsAssignRegion",value:function(e,t){var n={actionPath:"floating_ips",method:"POST",body:{region:e}};return this._handleRequest(n,t)}},{key:"floatingIpsGet",value:function(e,t){var n={actionPath:"floating_ips/"+encodeURIComponent(e)};return this._handleRequest(n,t)}},{key:"floatingIpsDelete",value:function(e,t){var n={actionPath:"floating_ips/"+encodeURIComponent(e),method:"DELETE"};return this._handleRequest(n,t)}},{key:"floatingIpsRequestAction",value:function(e,t,n){var a={actionPath:"floating_ips/"+encodeURIComponent(e)+"/actions",method:"POST",body:t};return this._handleRequest(a,n)}},{key:"floatingIpsGetActions",value:function(e,t,n){var a={actionPath:"floating_ips/"+encodeURIComponent(e)+"/actions",key:"actions",qs:{tag_name:t&&t.tag_name||"",per_page:t&&t.per_page||this.perPage,page:t&&t.page||1},includeAll:t&&t.includeAll||!1};return this._handleRequest(a,n)}},{key:"floatingIpsGetAction",value:function(e,t,n){var a={actionPath:"floating_ips/"+encodeURIComponent(e)+"/actions/"+encodeURIComponent(t)};return this._handleRequest(a,n)}},{key:"tagsCreate",value:function(e,t){var n={actionPath:"tags",method:"POST",body:{name:e}};return this._handleRequest(n,t)}},{key:"tagsDelete",value:function(e,t){var n={actionPath:"tags/"+encodeURIComponent(e),method:"DELETE"};return this._handleRequest(n,t)}},{key:"tagsGet",value:function(e,t){var n={actionPath:"tags/"+encodeURIComponent(e)};return this._handleRequest(n,t)}},{key:"tagsGetAll",value:function(e,t){var n={actionPath:"tags",key:"tags",qs:{tag_name:e&&e.tag_name||"",per_page:e&&e.per_page||this.perPage,page:e&&e.page||1},includeAll:e&&e.includeAll||!1};return this._handleRequest(n,t)}},{key:"tagsAddResources",value:function(e,t,n){var a={actionPath:"tags/"+encodeURIComponent(e)+"/resources",method:"POST",body:t};return this._handleRequest(a,n)}},{key:"tagsDeleteResource",value:function(e,t,n){var a={actionPath:"tags/"+encodeURIComponent(e)+"/resources",method:"DELETE",body:t};return this._handleRequest(a,n)}},{key:"tagsGetDroplets",value:function(e,t,n){var a={actionPath:"droplets",key:"droplets",qs:{per_page:t&&t.per_page||this.perPage,page:t&&t.page||1,tag_name:e},includeAll:t&&t.includeAll||!1};return this._handleRequest(a,n)}},{key:"tagsDeleteDroplets",value:function(e,t){var n={actionPath:"droplets",method:"DELETE",qs:{tag_name:e}};return this._handleRequest(n,t)}},{key:"tagsRequestAction",value:function(e,t,n){var a={actionPath:"droplets/actions",method:"POST",qs:{tag_name:e},body:t};return this._handleRequest(a,n)}},{key:"volumes",value:function(e,t){var n={actionPath:"volumes",method:"GET",qs:{region:e||""}};return this._handleRequest(n,t)}},{key:"volumesCreate",value:function(e,t){var n={actionPath:"volumes",method:"POST",body:e};return this._handleRequest(n,t)}},{key:"volumesGetById",value:function(e,t){var n={actionPath:"volumes/"+e,method:"GET"};return this._handleRequest(n,t)}},{key:"volumesGetByName",value:function(e,t,n){var a={actionPath:"volumes",method:"GET",qs:{name:e,region:t}};return this._handleRequest(a,n)}},{key:"volumesDeleteById",value:function(e,t){var n={actionPath:"volumes/"+e,method:"DELETE"};return this._handleRequest(n,t)}},{key:"volumesDeleteByName",value:function(e,t,n){var a={actionPath:"volumes",method:"DELETE",qs:{name:e,region:t}};return this._handleRequest(a,n)}},{key:"volumesRequestAction",value:function(e,t,n){var a={actionPath:"volumes/"+encodeURIComponent(e)+"/actions",method:"POST",body:t};return this._handleRequest(a,n)}},{key:"loadBalancersCreate",value:function(e,t){var n={actionPath:"load_balancers",method:"POST",body:e};return this._handleRequest(n,t)}},{key:"loadBalancersGetById",value:function(e,t){var n={actionPath:"load_balancers/"+e};return this._handleRequest(n,t)}},{key:"loadBalancers",value:function(e){return this._handleRequest({actionPath:"load_balancers"},e)}},{key:"loadBalancersUpdateById",value:function(e,t,n){var a={actionPath:"load_balancers/"+e,method:"PUT",body:t};return this._handleRequest(a,n)}},{key:"loadBalancersDelete",value:function(e,t){var n={actionPath:"load_balancers/"+e,method:"DELETE"};return this._handleRequest(n,t)}},{key:"loadBalancersAddDroplets",value:function(e,t,n){var a={actionPath:"load_balancers/"+e+"/droplets",method:"POST",body:{droplet_ids:t}};return this._handleRequest(a,n)}},{key:"loadBalancersRemoveDroplets",value:function(e,t,n){var a={actionPath:"load_balancers/"+e+"/droplets",method:"DELETE",body:{droplet_ids:t}};return this._handleRequest(a,n)}},{key:"loadBalancersAddForwardingRule",value:function(e,t,n){var a={actionPath:"load_balancers/"+e+"/forwarding_rules",method:"POST",body:{forwarding_rules:t}};return this._handleRequest(a,n)}},{key:"loadBalancersRemoveForwardingRule",value:function(e,t,n){var a={actionPath:"load_balancers/"+e+"/forwarding_rules",method:"DELETE",body:{forwarding_rules:t}};return this._handleRequest(a,n)}},{key:"firewallsCreate",value:function(e,t){var n={actionPath:"firewalls",method:"POST",body:e};return this._handleRequest(n,t)}},{key:"firewallsGetById",value:function(e,t){var n={actionPath:"firewalls/"+e};return this._handleRequest(n,t)}},{key:"firewalls",value:function(e){return this._handleRequest({actionPath:"firewalls"},e)}},{key:"firewallsUpdateById",value:function(e,t,n){var a={actionPath:"firewalls/"+e,method:"PUT",body:t};return this._handleRequest(a,n)}},{key:"firewallsDeleteById",value:function(e,t){var n={actionPath:"firewalls/"+e,method:"DELETE"};return this._handleRequest(n,t)}},{key:"firewallsAddDroplets",value:function(e,t,n){var a={actionPath:"firewalls/"+e+"/droplets",method:"POST",body:{droplet_ids:t}};return this._handleRequest(a,n)}},{key:"firewallsRemoveDroplets",value:function(e,t,n){var a={actionPath:"firewalls/"+e+"/droplets",method:"DELETE",body:{droplet_ids:t}};return this._handleRequest(a,n)}},{key:"firewallsAddTags",value:function(e,t,n){var a={actionPath:"firewalls/"+e+"/tags",method:"POST",body:{tags:t}};return this._handleRequest(a,n)}},{key:"firewallsRemoveTags",value:function(e,t,n){var a={actionPath:"firewalls/"+e+"/tags",method:"DELETE",body:{tags:t}};return this._handleRequest(a,n)}},{key:"firewallsAddRules",value:function(e,t,n){var a={actionPath:"firewalls/"+e+"/rules",method:"POST",body:t};return this._handleRequest(a,n)}},{key:"firewallsRemoveRules",value:function(e,t,n){var a={actionPath:"firewalls/"+e+"/rules",method:"DELETE",body:t};return this._handleRequest(a,n)}},{key:"snapshots",value:function(e){return this._handleRequest({actionPath:"snapshots"},e)}},{key:"snapshotsDroplets",value:function(e){return this._handleRequest({actionPath:"snapshots",qs:{resource_type:"droplet"}},e)}},{key:"snapshotsVolumes",value:function(e){return this._handleRequest({actionPath:"snapshots",qs:{resource_type:"volume"}},e)}},{key:"snapshotsGetById",value:function(e,t){var n={actionPath:"snapshots/"+e};return this._handleRequest(n,t)}},{key:"snapshotsDeleteById",value:function(e,t){var n={actionPath:"snapshots/"+e,method:"DELETE"};return this._handleRequest(n,t)}}]),n}();exports.default=DigitalOcean;