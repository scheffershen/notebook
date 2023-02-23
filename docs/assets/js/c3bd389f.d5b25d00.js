"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[24587],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),c=a,m=p["".concat(l,".").concat(c)]||p[c]||h[c]||i;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},61031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const i={},r="How to Easily Summarize Audio and Video Files in Python",s={unversionedId:"Python/How to Easily Summarize Audio and Video Files in Python",id:"Python/How to Easily Summarize Audio and Video Files in Python",title:"How to Easily Summarize Audio and Video Files in Python",description:"- https://towardsdatascience.com/how-to-easily-summarize-audio-and-video-files-in-python-13f42be00bf2",source:"@site/docs/Python/How to Easily Summarize Audio and Video Files in Python.md",sourceDirName:"Python",slug:"/Python/How to Easily Summarize Audio and Video Files in Python",permalink:"/notebook/docs/Python/How to Easily Summarize Audio and Video Files in Python",draft:!1,editUrl:"https://github.com/scheffershen/notebook/tree/main/docs/Python/How to Easily Summarize Audio and Video Files in Python.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google Trends with Python",permalink:"/notebook/docs/Python/Google Trends with Python"},next:{title:"Work with multiple python versions on Windows 10",permalink:"/notebook/docs/Python/How to Install and Manage Multiple Python Versions on Windows 10"}},l={},u=[{value:"How to Summarize Audio and Video Files in Python",id:"how-to-summarize-audio-and-video-files-in-python",level:2},{value:"Step 1: Upload Your Audio File and Get The URL",id:"step-1-upload-your-audio-file-and-get-the-url",level:2},{value:"Step 2: Submit The Transcript Request",id:"step-2-submit-the-transcript-request",level:2},{value:"Step 3: Save the Transcript and Summary",id:"step-3-save-the-transcript-and-summary",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-easily-summarize-audio-and-video-files-in-python"},"How to Easily Summarize Audio and Video Files in Python"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://towardsdatascience.com/how-to-easily-summarize-audio-and-video-files-in-python-13f42be00bf2"},"https://towardsdatascience.com/how-to-easily-summarize-audio-and-video-files-in-python-13f42be00bf2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.assemblyai.com/blog/kaldi-speech-recognition-for-beginners-a-simple-tutorial/"},"https://www.assemblyai.com/blog/kaldi-speech-recognition-for-beginners-a-simple-tutorial/"))),(0,a.kt)("p",null,"27-01-2022"),(0,a.kt)("p",null,"Use Auto Chapters to summarize audio and video files in Python"),(0,a.kt)("p",null,"Auto chapters is a powerful feature that allows us to break audio/video files into \u201cchapters\u201d and then automatically generates a summary for each chapter created."),(0,a.kt)("p",null,"In this article, I\u2019ll show you how we can use this feature in Python using ",(0,a.kt)("inlineCode",{parentName:"p"},"AssemblyAI")," API. This API will perform speech-to-text and then automatically generate chapters with data such as summary, headline, and gist."),(0,a.kt)("h2",{id:"how-to-summarize-audio-and-video-files-in-python"},"How to Summarize Audio and Video Files in Python"),(0,a.kt)("p",null,"In addition to that, we need to create a free AssemblyAI account in order to obtain an API key."),(0,a.kt)("h2",{id:"step-1-upload-your-audio-file-and-get-the-url"},"Step 1: Upload Your Audio File and Get The URL"),(0,a.kt)("h2",{id:"step-2-submit-the-transcript-request"},"Step 2: Submit The Transcript Request"),(0,a.kt)("h2",{id:"step-3-save-the-transcript-and-summary"},"Step 3: Save the Transcript and Summary"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ifrankandrade/api"},"https://github.com/ifrankandrade/api")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# STEP 1: UPLOAD YOUR AUDIO FILE AND GET URL\nimport requests\n\nfilename = '/Users/frankandrade/Desktop/Steve Jobs.mp3'  # Your path goes here\napi_key =  # Your API key goes here\nupload_endpoint = 'https://api.assemblyai.com/v2/upload'\n\ndef read_file(filename, chunk_size=5242880):\n    with open(filename, 'rb') as f:\n        while True:\n            data = f.read(chunk_size)\n            if not data:\n                break\n            yield data\n\n\nheaders = {'authorization': api_key,\n           'content-type': 'application/json'}\nresponse = requests.post(upload_endpoint,\n                         headers=headers,\n                         data=read_file(filename))\n\naudio_url = response.json()['upload_url']\n\n# Step 2: Submit The Transcript Request\ntranscript_endpoint = \"https://api.assemblyai.com/v2/transcript\"\n\nresponse = requests.post(transcript_endpoint,\n                         headers=headers,\n                         json={\n                             \"audio_url\": audio_url,\n                             \"auto_chapters\": True\n                         })\ntranscript_id = response.json()['id']\n\n# Step 3: Save the Transcript and Summary\n# STEP 3: SAVE THE TRANSCRIPT AND SUMMARY\nimport os\nimport sys\nimport time\nimport json\n\npolling_endpoint =  os.path.join(transcript_endpoint, transcript_id)\n\nstatus = ''\nwhile status != 'completed':\n    response_result = requests.get(\n        polling_endpoint,\n        headers=headers\n    )\n    status = response_result.json()['status']\n    print(f'Status: {status}')\n\n    if status == 'error':\n        sys.exit('Audio file failed to process.')\n    elif status != 'completed':\n        time.sleep(10)\n\n\nif status == 'completed':\n    filename = transcript_id + '.txt'\n    with open(filename, 'w') as f:\n        f.write(response_result.json()['text'])\n\n    filename = transcript_id + '_chapters.json'\n    with open(filename, 'w') as f:\n        chapters = response_result.json()['chapters']\n        json.dump(chapters, f, indent=4)\n\n    print('Transcript Saved')\n\n")),(0,a.kt)("p",null,"Here\u2019s the summary, headline and gist of one of the sections of the video:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "summary": "You have to trust that the dots will somehow connect in your future. You have to trust in something your gut, destiny, life, karma, whatever. Because believing that the dots will connect down the road will give you the confidence to follow your heart, even when it leads you off the well worn path.",\n    "headline": "Because believing that the dots will connect down the road will give you the confidence to follow your heart, even when it leads you off the well worn path.",\n    "start": 312538,\n    "end": 342070,\n    "gist": "the dots will somehow connect"\n},\n')))}p.isMDXComponent=!0}}]);