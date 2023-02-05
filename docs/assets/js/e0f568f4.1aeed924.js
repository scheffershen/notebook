"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[72606],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(t),h=i,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||s;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=h;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<s;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},42761:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const s={},o=void 0,a={unversionedId:"Python/Elasticsearch-backup/inteldata_db_export",id:"Python/Elasticsearch-backup/inteldata_db_export",title:"inteldata_db_export",description:"",source:"@site/docs/Python/Elasticsearch-backup/inteldata_db_export.md",sourceDirName:"Python/Elasticsearch-backup",slug:"/Python/Elasticsearch-backup/inteldata_db_export",permalink:"/notebook/docs/Python/Elasticsearch-backup/inteldata_db_export",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Python/Elasticsearch-backup/inteldata_db_export.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"import_elasticsearch",permalink:"/notebook/docs/Python/Elasticsearch-backup/import_elasticsearch"},next:{title:"inteldata_db_restore",permalink:"/notebook/docs/Python/Elasticsearch-backup/inteldata_db_restore"}},c={},l=[],d={toc:l};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/python\n\n# Dependencies\nimport sys\nimport os\nimport time\nimport json\nimport tarfile\nimport shutil\nimport requests\n\nurl = "http://es_admin:3i8ph9@151.80.217.138:9200/"\nprint "Using ElasticSearch at %s" % url\n\ntry:\n    r = requests.get(url)\n    if r.status_code != 200:\n        print "Error hitting ElasticSearch on %s, response code was %i" % (url, r.status_code)\n        exit(1)\n    else:\n        print "Verified ElasticSearch server"\nexcept:\n    print "Unable to hit ElasticSearch on %s" % url\n    exit(1)\n\n# Check with the user\nindex = "inteldata_db"\nprint "Backing up index \'%s\'" % index\nprint "Ctrl+C now to abort..."\n\ntime.sleep(3)\n\n# Make the directories we need\nprint "Checking write permission to current directory"\ntry:\n    os.mkdir(index)\n    os.mkdir("%s/data" % index)\nexcept:\n    print "Unable to write to the current directory, please resolve this and try again"\n    exit(1)\n\n# Download and save the settings\nprint "Downloading \'%s\' settings" % index\n\nr = requests.get("%s/%s/_settings" % (url, index))\nif r.status_code != 200:\n        print "Unable to get settings for index \'%s\', error code: %i" % (index, r.status_code)\n        exit(1)\n\nsettings_file = open("%s/settings" % index, "w")\nsettings_file.write(r.content)\nsettings_file.close()\n\n# Download and save the schema\nprint "Downloading \'%s\' schema" % index\n\nr = requests.get("%s/%s/_mapping" % (url, index))\nif r.status_code != 200:\n    print "Unable to get schema for index \'%s\', error code: %i" % (index, r.status_code)\n    exit(1)\n\nschema_file = open("%s/schema" % index, "w")\nschema_file.write(r.content)\nschema_file.close()\n\n# Download the data\nquery = {}\nquery["query"] = {}\nquery["query"]["indices"] = {}\nquery["query"]["indices"]["indices"] = [index]\nquery["query"]["indices"]["query"] = {}\nquery["query"]["indices"]["query"]["match_all"] = {}\nquery = json.dumps(query)\n\nr = requests.get("%s/_search?search_type=scan&scroll=10m&size=100" % url, data=query)\ndata = json.loads(r.content)\nscroll_id = data["_scroll_id"]\n\nfinished = False\ncount = 0\n\nwhile not finished:\n\n    count = count + 1\n    r = requests.get("%s/_search/scroll?scroll=10m" % url, data=scroll_id)\n    content = json.loads(r.content)\n    scroll_id = content["_scroll_id"]\n    number = len(content["hits"]["hits"])\n    print "Pass %i: Got %i results" % (count, number)\n    \n    if number < 1:\n        finished = True\n    else:\n        data_file = open("%s/data/%i" % (index, count), "w")\n        data_file.write(json.dumps(content["hits"]["hits"]))\n        data_file.close()\n\n# Zip up the data\nfilename = "%s.esbackup" % index\ntar = tarfile.open(filename, "w:gz")\ntar.add(index)\ntar.close()\n\n# Delete the directory\nshutil.rmtree(index)\n\nprint "Complete. Your file is:"\nprint filename\nexit(0)\n')))}p.isMDXComponent=!0}}]);