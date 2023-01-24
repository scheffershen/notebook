"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4789],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(t),m=s,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(h,a(a({ref:n},p),{},{components:t})):r.createElement(h,a({ref:n},p))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,a=new Array(i);a[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[d]="string"==typeof e?e:s,a[1]=o;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2034:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(7462),s=(t(7294),t(3905));const i={},a=void 0,o={unversionedId:"Python/Elasticsearch-backup/restore",id:"Python/Elasticsearch-backup/restore",title:"restore",description:"",source:"@site/docs/Python/Elasticsearch-backup/restore.md",sourceDirName:"Python/Elasticsearch-backup",slug:"/Python/Elasticsearch-backup/restore",permalink:"/notebook/docs/Python/Elasticsearch-backup/restore",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Python/Elasticsearch-backup/restore.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"inteldata_db_restore",permalink:"/notebook/docs/Python/Elasticsearch-backup/inteldata_db_restore"},next:{title:"Jina AI",permalink:"/notebook/docs/category/jina-ai"}},c={},l=[],p={toc:l};function d(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/python\n\n# Dependencies\nimport sys\nimport os\nimport time\nimport json\nimport tarfile\nimport shutil\nimport requests\n\n# Help text\nif len(sys.argv) < 2:\n    print "Usage:"\n    print " python restore.py (indexname)"\n    print " python restore.py (indexname) (elasticsearch host)"\n    print " python restore.py (indexname) (elasticsearch host) (elasticsearch port)"\n    exit(0)\n\n# Get the elasticsearch server\nif len(sys.argv) > 2:\n    host = sys.argv[2]\n    if len(sys.argv) > 3:\n        port = sys.argv[3]\n    else:\n        port = "9200"\nelse:\n    host = "localhost"\n    port = "9200"\nurl = "http://%s:%s" % (host, port)\nprint "Using ElasticSearch at %s" % url\n\ntry:\n    r = requests.get(url)\n    if r.status_code is not 200:\n        print "Error hitting ElasticSearch on %s, response code was %i" % (url, r.status_code)\n        exit(1)\n    else:\n        print "Verified ElasticSearch server"\nexcept:\n    print "Unable to hit ElasticSearch on %s" % url\n    exit(1)\n\n# Check with the user\nindex = sys.argv[1]\nprint "Restoring index \'%s\'" % index\nprint "Ctrl+C now to abort..."\n\ntime.sleep(3)\n\n# Check the index doesnt already exist\nr = requests.get("%s/%s/_mapping" % (url, index))\nif r.status_code != 404:\n    print "The index already exists. Please ensure it does not exist first."\n    print "This command can be executed to do this:"\n    print "curl -XDELETE %s/%s" % (url, index)\n        exit(1)\n\n\n# Unzip the backup file\nfilename = "%s.esbackup" % index\ntar = tarfile.open(filename)\ntar.extractall()\ntar.close()\n\n# Read the settings\nsettings_file = open("%s/settings" % index, "r")\nsettings = json.loads(settings_file.read())\nsettings_file.close()\n\nmain_index = settings.keys()[0]\nsettings = settings[main_index]\nif \'settings\' in settings:\n    settings = settings["settings"]\n\n# Read the schema\nschema_file = open("%s/schema" % index, "r")\nschema = json.loads(schema_file.read())\nschema_file.close()\n\nschema = schema[main_index]\nif \'mappings\' in schema:\n    schema = schema[\'mappings\']\n\n# Create the index on the server\ndata={}\ndata["mappings"] = schema\ndata["settings"] = settings\nr = requests.put("%s/%s" % (url, main_index), data=json.dumps(data))\nif r.status_code != 200:\n    print "Unable to put the index to the server (%i), aborting" % r.status_code\n    print r.content\n    exit(1)\n\n# Load up the data files and put them all in\ndata_files = os.listdir("%s/data" % index)\nfor dfile in data_files:\n    data_file = open("%s/data/%s" % (index, dfile))\n    items = json.loads(data_file.read())\n    data_file.close()\n    bulk = ""\n    for item in items:\n        source = item["_source"]\n        del item["_source"]\n        command = {}\n        command["index"] = item\n        bulk = bulk + json.dumps(command) + "\\n" + json.dumps(source) + "\\n"\n    print "Putting %i items" % len(items)\n    r = requests.post("%s/_bulk" % url, data=bulk)\n    if r.status_code != 200:\n        print "Failed with code %i" % r.status_code\n        exit(1)\n\n# Create index alias if needed\nif main_index != index:\n    alias = {}\n    alias["actions"] = [{"add": {"index": main_index, "alias": index}}]\n    r = requests.post("%s/_aliases" % url, data = json.dumps(alias))\n    if r.status_code != 200:\n        print "Unable to create the alias of the index (%s), aborting" % main_index\n        print r.content\n        exit(1)\n\n# Clean up the directory\nshutil.rmtree(index)\n\nprint "Finished"\n')))}d.isMDXComponent=!0}}]);