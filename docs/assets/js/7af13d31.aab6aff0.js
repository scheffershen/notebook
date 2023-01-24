"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9060],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||s;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const s={},a=void 0,o={unversionedId:"Python/Elasticsearch-backup/inteldata_db_restore",id:"Python/Elasticsearch-backup/inteldata_db_restore",title:"inteldata_db_restore",description:"",source:"@site/docs/Python/Elasticsearch-backup/inteldata_db_restore.md",sourceDirName:"Python/Elasticsearch-backup",slug:"/Python/Elasticsearch-backup/inteldata_db_restore",permalink:"/notebook/docs/Python/Elasticsearch-backup/inteldata_db_restore",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Python/Elasticsearch-backup/inteldata_db_restore.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"inteldata_db_export",permalink:"/notebook/docs/Python/Elasticsearch-backup/inteldata_db_export"},next:{title:"restore",permalink:"/notebook/docs/Python/Elasticsearch-backup/restore"}},c={},l=[],d={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/python\n\n# Dependencies\nimport sys\nimport os\nimport time\nimport json\nimport tarfile\nimport shutil\nimport requests\n\nhost = "localhost"\nport = "9200"\nurl = "http://%s:%s" % (host, port)\nprint "Using ElasticSearch at %s" % url\n\ntry:\n    r = requests.get(url)\n    if r.status_code is not 200:\n        print "Error hitting ElasticSearch on %s, response code was %i" % (url, r.status_code)\n        exit(1)\n    else:\n        print "Verified ElasticSearch server"\nexcept:\n    print "Unable to hit ElasticSearch on %s" % url\n    exit(1)\n\n# Check with the user\nindex = "inteldata_db"\nprint "Restoring index \'%s\'" % index\nprint "Ctrl+C now to abort..."\n\ntime.sleep(3)\n\n# Check the index doesnt already exist\nr = requests.get("%s/%s/_mapping" % (url, index))\nif r.status_code != 404:\n    print "The index already exists. Please ensure it does not exist first."\n    print "This command can be executed to do this:"\n    print "curl -XDELETE %s/%s" % (url, index)\n        exit(1)\n\n\n# Unzip the backup file\nfilename = "%s.esbackup" % index\ntar = tarfile.open(filename)\ntar.extractall()\ntar.close()\n\n# Read the settings\nsettings_file = open("%s/settings" % index, "r")\nsettings = json.loads(settings_file.read())\nsettings_file.close()\n\nmain_index = settings.keys()[0]\nsettings = settings[main_index]\nif \'settings\' in settings:\n    settings = settings["settings"]\n\n# Read the schema\nschema_file = open("%s/schema" % index, "r")\nschema = json.loads(schema_file.read())\nschema_file.close()\n\nschema = schema[main_index]\nif \'mappings\' in schema:\n    schema = schema[\'mappings\']\n\n# Create the index on the server\ndata={}\ndata["mappings"] = schema\ndata["settings"] = settings\nr = requests.put("%s/%s" % (url, main_index), data=json.dumps(data))\nif r.status_code != 200:\n    print "Unable to put the index to the server (%i), aborting" % r.status_code\n    print r.content\n    exit(1)\n\n# Load up the data files and put them all in\ndata_files = os.listdir("%s/data" % index)\nfor dfile in data_files:\n    data_file = open("%s/data/%s" % (index, dfile))\n    items = json.loads(data_file.read())\n    data_file.close()\n    bulk = ""\n    for item in items:\n        source = item["_source"]\n        del item["_source"]\n        command = {}\n        command["index"] = item\n        bulk = bulk + json.dumps(command) + "\\n" + json.dumps(source) + "\\n"\n    print "Putting %i items" % len(items)\n    r = requests.post("%s/_bulk" % url, data=bulk)\n    if r.status_code != 200:\n        print "Failed with code %i" % r.status_code\n        exit(1)\n\n# Create index alias if needed\nif main_index != index:\n    alias = {}\n    alias["actions"] = [{"add": {"index": main_index, "alias": index}}]\n    r = requests.post("%s/_aliases" % url, data = json.dumps(alias))\n    if r.status_code != 200:\n        print "Unable to create the alias of the index (%s), aborting" % main_index\n        print r.content\n        exit(1)\n\n# Clean up the directory\nshutil.rmtree(index)\n\nprint "Finished"\n')))}p.isMDXComponent=!0}}]);