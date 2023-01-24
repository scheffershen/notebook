"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8040],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>h});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return r?t.createElement(h,i(i({ref:n},p),{},{components:r})):t.createElement(h,i({ref:n},p))}));function h(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8456:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=r(7462),a=(r(7294),r(3905));const s={},i=void 0,o={unversionedId:"Python/Elasticsearch-backup/es-searchly-backup",id:"Python/Elasticsearch-backup/es-searchly-backup",title:"es-searchly-backup",description:"",source:"@site/docs/Python/Elasticsearch-backup/es-searchly-backup.md",sourceDirName:"Python/Elasticsearch-backup",slug:"/Python/Elasticsearch-backup/es-searchly-backup",permalink:"/notebook/docs/Python/Elasticsearch-backup/es-searchly-backup",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Python/Elasticsearch-backup/es-searchly-backup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"backup",permalink:"/notebook/docs/Python/Elasticsearch-backup/backup"},next:{title:"import_elasticsearch",permalink:"/notebook/docs/Python/Elasticsearch-backup/import_elasticsearch"}},c={},l=[],p={toc:l};function u(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/python\n\n# Dependencies\nimport os\nimport time\nimport json\nimport tarfile\nimport shutil\nimport requests\nimport argparse\n\nparser = argparse.ArgumentParser(description=\'will scan and backup all your data from a searchly index, into a file\')\nparser.add_argument(\'index_name\', metavar=\'index_name\', help=\'your index\\\'s name\')\nparser.add_argument(\'api_key\', metavar=\'api_key\', help=\'your searchly api key\')\nparser.add_argument(\'searchly_host\', metavar=\'searchly_host\', help=\'your searchly host, check in their console\')\nparser.add_argument(\'--scroll_minutes\', dest=\'scroll_minutes\', type=int, default=10, help=\'minutes to keep scroll open\')\nparser.add_argument(\'--scroll_size\', dest=\'scroll_size\', type=int, default=1000, help=\'records to get in each scroll query\')\nargs = parser.parse_args()\n\nurl = "https://site:{}@{}/{}".format(args.api_key, args.host, args.index_name)\nurl_without_index = "https://site:{}@{}/".format(args.api_key, args.host)\nprint "Using ElasticSearch at {}".format(url)\n\ntry:\n    r = requests.get("{}/_search".format(url))\n    if r.status_code != 200:\n        print "Error hitting ElasticSearch on %s, response code was %i" % (url, r.status_code)\n        exit(1)\n    else:\n        print "Verified ElasticSearch server"\nexcept:\n    print "Unable to hit ElasticSearch on %s" % url\n    exit(1)\n\n# ################\n# Main script\n#################\n\nif __name__ == \'__main__\':\n    print "starting...."\n\n\n    # Check with the user\n    print "Backing up index \'%s\'" % args.index_name\n    print "Ctrl+C now to abort..."\n\n    time.sleep(3)\n\n    # Make the directories we need\n    print "Checking write permission to current directory"\n    try:\n        # Delete the directory\n        shutil.rmtree(args.index_name, ignore_errors=True)\n        os.mkdir(args.index_name)\n        os.mkdir("%s/data" % args.index_name)\n    except:\n        print "Unable to write to the current directory, please resolve this and try again"\n        exit(1)\n\n    # Download the data\n    query = {\n        "query": {\n            "indices": {\n                "indices": [args.index_name],\n                "query": {\n                    "match_all": {}\n                }\n            }\n        }\n    }\n    query_str = json.dumps(query)\n\n    r = requests.get("{}/_search?search_type=scan&scroll={}m&size={}".format(url, args.scroll_minutes, args.scroll_size), data=query_str)\n    data = json.loads(r.content)\n    scroll_id = data["_scroll_id"]\n\n    finished = False\n    count = 0\n\n    while not finished:\n\n        count += 1\n        params = {"scroll_id": scroll_id, "scroll": "{}m".format(args.scroll_minutes)}\n        r = requests.get("%s/_search/scroll" % url_without_index, params=params)\n        content = json.loads(r.content)\n        scroll_id = content["_scroll_id"]\n        number = len(content["hits"]["hits"])\n        print "Pass %i: Got %i results" % (count, number)\n\n        if number < 1:\n            finished = True\n        else:\n            data_file = open("%s/data/%i" % (args.index_name, count), "w")\n            data_file.write(json.dumps(content["hits"]["hits"]))\n            data_file.close()\n\n    # Zip up the data\n    filename = "%s.esbackup" % args.index_name\n    tar = tarfile.open(filename, "w:gz")\n    tar.add(args.index_name)\n    tar.close()\n\n    # Delete the directory\n    shutil.rmtree(args.index_name)\n\n    print "Complete. Your file is:"\n    print filename\n    exit(0)\n')))}u.isMDXComponent=!0}}]);