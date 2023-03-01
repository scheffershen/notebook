Master Reverse Prompt Engineering
=================================

2023-01

#### Example:

=> Reverse engineer the following {code} in to a prompt:

code = 


#### Step 1:

=> Can we talk about Reverse Prompt Engineering? By Reverse Prompt Engineering, I mean creating a prompt from a given text.

#### Step 2:

=> Great. Can you give me a simple example of Reverse Prompt Engineering?

*Reverse prompt*: "Write a sentence about going to the store and buying something." 

#### Step 3:

=> Good. Write a short explaination on how dog training works, and Reverse Prompt Engineer the explaination

#### Step 4:

=> Great. Can you create a very technical reverse prompt engineering template ?

#### Step 5: example 1 = "text" reverse engineer

=> Reverse Prompt Engineer the following {text}, capture the TONE and WRITING STYLE of the {text} to include in the prompt: 

text = I stand here today humbled by the task before us, grateful for the trust you have bestowed, mindful of the sacrifices borne by our ancestors. I thank President Bush for his service to our nation, as well as the generosity and cooperation he has shown throughout this transition. 

Forty-four Americans have now taken the presidential oath. The words have been spoken during rising tides of prosperity and the still waters of peace. Yet, every so often the oath is taken amidst gathering clouds 
...

*Reverse prompt*: "Write a speech reflecting on the challenges facing the country, acknowledging the sacrifices of past generations, and calling for a renewal of the ideals and spirit of the nation. The tone should be humble, grateful, and mindful of the responsibilities of leadership in times of crisis, and the writing style should be formal and elevated."

#### Step 5: example 2  = "product description" reverse engineer

=> Can you reverse engineer the following {product description}, capture the writing style and the length of the text:

product description = ...

*Reverse prompt*: "Describe the features and benefits of a product with Personalized Spatial Audio and dynamic head tracking, including details on the fit, controls, charging options, battery life, and compatibility with Siri and other Apple devices." 

=> Rewrite the reverse prompt into a prompt that can be used for any product describtion with a user 
input feature in the prompt that uses {}: 

*Reverse prompt*: "Describe the features and benefits pf a {product name} product, including details on the fit, controls, charging options, battery life, and compatibility with any relevant voice assistants or other devices." 

=> Describe the features and benefits of a {product name} product, including details on the fit, controls, charging options, battery life, and compatibility with any relevant voice assistants or other devices 

product name = Iphone 12 

#### Step 5: example 3 = "execel formula" reverse engineer

=> Can you reverse engineer this execel formula: "=AVERAGE(C2, C3, C4)"

*Reverse prompt*: "Write a formula in Microsoft Excel that calculates the average of the values in cells C2, C3, and C4." 

=> Rewrite the prompt into a more general prompt for any formula in excel with a user input in {}:

*Reverse prompt*: "Write a formula in Microsoft Excel that calculates {the desired outcome} using the values in cells {cell range or individual cell references}." 

For example, using the previous formula:

*Reverse prompt*: "Write a formula in Microsoft Excel that calculates the average of the values in cells {cell range or individual cell references}." 

=> Write a formula in Microsoft Excel that calculates {the desired outcome} using the values in cells {cell range or individual cell references}.

the desired outcome = median number

cell range or individual cell references = B2, B3, B4

#### Step 5: example 4 = "job posting" reverse engineer

=> Can you reverse engineer the following {job posting}, capture the writing style, details and the length of the text and include it in the prompt: 

job posting = ...

*Reverse prompt*: "Write a job description for a Teller position at Community Bank, including details on the company culture, a day in the life as a Teller, and the qualifications required to be a Teller. Use a conversational and informative tone, and aim for a length of approximately 150-200 words. "

=> Rewrite the prompt into a prompt that can be used for any job posting:

*Reverse prompt*: "Write a job description for a {job title} position at {company name}, including details on the company culture, a day in the life as a {job title}, and the qualifications required to be a {job title}. Use a {tone} and {writing style}, and aim for a length of approximately {word count} words. "

*Reverse prompt*: "Write a job description for a [Job Title] position at [Company Name], including details on the company culture, a day in the life in the role, and the qualifications required for the position. Use a conversational and informative tone, and aim for a length of approximately 150-200 words. "

=> Write a job description for a [Job Title] position at [Company Name], including details on the company culture, a day in the life in the role, and the qualifications required for the position. Use a conversational and informative tone, and aim for a length of approximately 150-200 words.

Company name = Apple

Job title = CEO

#### Step 5: example 5 = "html code" reverse engineer

=> Reverse engineer the following {html-code} in to a prompt: 

html-code = 

<div class="header"> 
    <a href="#default" class="logo">CompanyLogo</a> 
    <div class="header-right"> 
        <a class="active" href="#home">Home</a> 
        <a href="#contact">Contact</a> 
        <a href="#about">About</a> 
    </div> 
</div>

*Reverse prompt*: "Write the HTML code for a header with a logo, a navigation menu, and a link to the home page. The navigation menu should include links to the contact page, the about page, and the home page. The home page link should be active by default. "

*Reverse prompt*: "Create an HTML code for a header section of a website that includes a logo and links to the home, contact, and about pages." 

#### Step 5: example 6 = "code" reverse engineer

=> Reverse engineer the following {code} in to a prompt:

code = ...

*Reverse prompt*: "Write a program in JavaScript that shuffles a deck of cards and displays the first five cards after shuffling."

=> rewrite this into HTML: