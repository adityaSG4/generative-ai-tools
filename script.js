const templates = [{
        id: 'Language_Translator',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/1380/1380817.png",
        alt: "Language Translator",
        title: "Language Translator",
        description: "An AI tool that translates text from one language to another.",
        inputCheck: true,
        npInputLabel: 'Enter source language and target language',
        textareaCheck: true,
        nptextareaLabel: 'Enter text to translate',
        generatePrompt: function(input, textarea) {
            return `Translate the following text from ${input} to ${textarea}.`;
        }
    }, {
        id: 'Essay_Topic_Suggester',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/3064/3064188.png",
        alt: "Essay Topic Suggester",
        title: "Essay Topic Suggester",
        description: "An AI tool that suggests essay topics based on your subject or area of interest.",
        inputCheck: true,
        npInputLabel: 'Enter your subject or area of interest',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `Suggest essay topics for the subject or area of interest: ${input}.`;
        }
    },
    {
        id: 'Essay_Outline_Generator',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/2958/2958782.png",
        alt: "Essay Outline Generator",
        title: "Essay Outline Generator",
        description: "An AI tool that generates a detailed essay outline based on your essay topic.",
        inputCheck: true,
        npInputLabel: 'Enter your essay topic',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `Generate a detailed essay outline for the topic: ${input}.`;
        }
    },
    {
        id: 'Research_Paper_Ideas',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/2462/2462719.png",
        alt: "Research Paper Ideas",
        title: "Research Paper Ideas",
        description: "An AI tool that generates research paper ideas based on your field of study.",
        inputCheck: true,
        npInputLabel: 'Enter your field of study',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `Generate research paper ideas for the field of study: ${input}.`;
        }
    },
    {
        id: 'Thesis_Statement_Generator',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/4569/4569476.png",
        alt: "Thesis Statement Generator",
        title: "Thesis Statement Generator",
        description: "An AI tool that generates thesis statements based on your essay or research paper topic.",
        inputCheck: true,
        npInputLabel: 'Enter your essay or research paper topic',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `Generate a thesis statement for the topic: ${input}.`;
        }
    },
    {
        id: 'Study_Plan_Generator',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/3644/3644036.png",
        alt: "Study Plan Generator",
        title: "Study Plan Generator",
        description: "An AI tool that creates a personalized study plan based on your subjects and study goals.",
        inputCheck: true,
        npInputLabel: 'Enter your subjects and study goals',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `Create a personalized study plan for the subjects and goals: ${input}.`;
        }
    },
    {
        id: 'Exam_Question_Generator',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/2620/2620855.png",
        alt: "Exam Question Generator",
        title: "Exam Question Generator",
        description: "An AI tool that generates exam questions based on your topic or subject.",
        inputCheck: true,
        npInputLabel: 'Enter your topic or subject',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `Generate exam questions for the topic or subject: ${input}.`;
        }
    },
    {
        id: 'Lesson_Plan_Generator',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/3176/3176343.png",
        alt: "Lesson Plan Generator",
        title: "Lesson Plan Generator",
        description: "An AI tool that creates lesson plans based on your subject and class level.",
        inputCheck: true,
        npInputLabel: 'Enter your subject and class level',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `Create a lesson plan for the subject and class level: ${input}.`;
        }
    },
    {
        id: 'Presentation_Slide_Ideas',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
        alt: "Presentation Slide Ideas",
        title: "Presentation Slide Ideas",
        description: "An AI tool that suggests ideas for your presentation slides based on your topic.",
        inputCheck: true,
        npInputLabel: 'Enter your presentation topic',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `Suggest ideas for presentation slides for the topic: ${input}.`;
        }
    },
    {
        id: 'Paragraph_Summarizer',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/2921/2921825.png",
        alt: "Paragraph Summarizer",
        title: "Paragraph Summarizer",
        description: "An AI tool that summarizes paragraphs into concise points.",
        inputCheck: false,
        npInputLabel: '',
        textareaCheck: true,
        nptextareaLabel: 'Enter text to summarize',
        generatePrompt: function(textarea) {
            return `Summarize the following text into concise points: ${textarea}.`;
        }
    }, {
        id: 'Blog_Title',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
        alt: "Blog Title",
        title: "Blog Title",
        description: "An AI tool that generates blog titles based on your blog information.",
        inputCheck: true,
        npInputLabel: 'Enter your blog niche',
        textareaCheck: true,
        nptextareaLabel: 'Enter blog outline',
        generatePrompt: function(input, textarea) {
            return `Generate a blog title for the niche: ${input}. Blog outline: ${textarea}.`;
        }
    },
    {
        id: 'Blog_Content',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
        alt: "Blog Content",
        title: "Blog Content",
        description: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
        inputCheck: true,
        npInputLabel: 'Enter your blog title',
        textareaCheck: true,
        nptextareaLabel: 'Enter blog outline',
        generatePrompt: function(input, textarea) {
            return `Generate blog content for the title: ${input}. Blog outline: ${textarea}.`;
        }
    },
    {
        id: 'Blog_Topic_Ideas',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
        alt: "Blog Topic Ideas",
        title: "Blog Topic Ideas",
        description: "An AI tool that generates blog topic ideas for your chosen niche.",
        inputCheck: true,
        npInputLabel: 'Enter your niche',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `Generate blog topic ideas for the niche: ${input}.`;
        }
    },
    {
        id: 'Youtube_SEO_Title',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
        alt: "Youtube SEO Title",
        title: "Youtube SEO Title",
        description: "An AI tool that generates SEO-friendly YouTube video titles based on your keywords and description outline.",
        inputCheck: true,
        npInputLabel: 'Enter your YouTube video topic keywords',
        textareaCheck: true,
        nptextareaLabel: 'Enter YouTube description outline here',
        generatePrompt: function(input, textarea) {
            return `Generate an SEO-friendly YouTube video title for the keywords: ${input}. Description outline: ${textarea}.`;
        }
    },
    {
        id: 'Youtube_Description',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
        alt: "Youtube Description",
        title: "Youtube Description",
        description: "An AI tool that generates YouTube video descriptions based on your topic or title.",
        inputCheck: true,
        npInputLabel: 'Enter your video topic/title',
        textareaCheck: true,
        nptextareaLabel: 'Enter YouTube outline here',
        generatePrompt: function(input, textarea) {
            return `Generate a YouTube video description for the topic/title: ${input}. Outline: ${textarea}.`;
        }
    },
    {
        id: 'Youtube_Tags',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
        alt: "Youtube Tags",
        title: "Youtube Tags",
        description: "An AI tool that generates YouTube tags based on your video topic or title and description outline.",
        inputCheck: true,
        npInputLabel: 'Enter your video topic/title',
        textareaCheck: true,
        nptextareaLabel: 'Enter YouTube outline here (optional)',
        generatePrompt: function(input, textarea) {
            return `Generate YouTube tags for the topic/title: ${input}. Outline: ${textarea}.`;
        }
    },
    {
        id: 'Rewrite_Article',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
        alt: "Rewrite Article",
        title: "Rewrite Article (Plagiarism Free)",
        description: "Use this tool to rewrite an existing article or blog post to bypass AI detectors and make it plagiarism free.",
        inputCheck: false,
        npInputLabel: '',
        textareaCheck: true,
        nptextareaLabel: 'Provide your article/blog post or any other content to rewrite.',
        generatePrompt: function(textarea) {
            return `Rewrite the following article to make it plagiarism-free and bypass AI detectors: ${textarea}.`;
        }
    },
    {
        id: 'Text_Improver',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
        alt: "Text Improver",
        title: "Text Improver",
        description: "This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.",
        inputCheck: false,
        npInputLabel: '',
        textareaCheck: true,
        nptextareaLabel: 'Enter text that you want to re-write or improve',
        generatePrompt: function(textarea) {
            return `Improve the following text, eliminating errors and redundancies: ${textarea}.`;
        }
    }, {
        id: 'Project_Proposal_Generator',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/3295/3295625.png",
        alt: "Project Proposal Generator",
        title: "Project Proposal Generator",
        description: "An AI tool that generates project proposals based on your project idea and objectives.",
        inputCheck: true,
        npInputLabel: 'Enter your project idea',
        textareaCheck: true,
        nptextareaLabel: 'Enter your project objectives',
        generatePrompt: function(input, textarea) {
            return `Generate a project proposal for the project idea: ${input}. Project objectives: ${textarea}.`;
        }
    },
    {
        id: 'Lab_Report_Generator',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/4536/4536726.png",
        alt: "Lab Report Generator",
        title: "Lab Report Generator",
        description: "An AI tool that generates lab reports based on your experiment details.",
        inputCheck: true,
        npInputLabel: 'Enter your experiment title',
        textareaCheck: true,
        nptextareaLabel: 'Enter your experiment details',
        generatePrompt: function(input, textarea) {
            return `Generate a lab report for the experiment titled: ${input}. Experiment details: ${textarea}.`;
        }
    },
    {
        id: 'Math_Problem_Solver',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/2131/2131704.png",
        alt: "Math Problem Solver",
        title: "Math Problem Solver",
        description: "An AI tool that solves math problems step-by-step.",
        inputCheck: false,
        npInputLabel: '',
        textareaCheck: true,
        nptextareaLabel: 'Enter your math problem',
        generatePrompt: function(textarea) {
            return `Solve the following math problem step-by-step: ${textarea}.`;
        }
    },
    {
        id: 'Science_Experiment_Ideas',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/3500/3500730.png",
        alt: "Science Experiment Ideas",
        title: "Science Experiment Ideas",
        description: "An AI tool that suggests science experiment ideas based on your chosen topic.",
        inputCheck: true,
        npInputLabel: 'Enter your science topic',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `Suggest science experiment ideas for the topic: ${input}.`;
        }
    },
    {
        id: 'Book_Recommendation',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/1346/1346871.png",
        alt: "Book Recommendation",
        title: "Book Recommendation",
        description: "An AI tool that recommends books based on your interests and reading history.",
        inputCheck: true,
        npInputLabel: 'Enter your interests or favorite genres',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `Recommend books based on the interests or genres: ${input}.`;
        }
    },

    {
        id: 'Coding_Tutor',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/2019/2019595.png",
        alt: "Coding Tutor",
        title: "Coding Tutor",
        description: "An AI tool that provides coding help and explanations for programming concepts.",
        inputCheck: true,
        npInputLabel: 'Enter your programming language',
        textareaCheck: true,
        nptextareaLabel: 'Enter your coding question or issue',
        generatePrompt: function(input, textarea) {
            return `Provide coding help and explanations for the following issue in ${input}: ${textarea}.`;
        }
    },
    {
        id: 'Resume_Builder',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/3135/3135706.png",
        alt: "Resume Builder",
        title: "Resume Builder",
        description: "An AI tool that generates a professional resume based on your details and job target.",
        inputCheck: true,
        npInputLabel: 'Enter your job target',
        textareaCheck: true,
        nptextareaLabel: 'Enter your personal and work details',
        generatePrompt: function(input, textarea) {
            return `Generate a professional resume for the job target: ${input}. Personal and work details: ${textarea}.`;
        }
    },
    {
        id: 'Cover_Letter_Generator',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/3585/3585591.png",
        alt: "Cover Letter Generator",
        title: "Cover Letter Generator",
        description: "An AI tool that generates a cover letter based on your job application details.",
        inputCheck: true,
        npInputLabel: 'Enter the job title and company',
        textareaCheck: true,
        nptextareaLabel: 'Enter your qualifications and experience',
        generatePrompt: function(input, textarea) {
            return `Generate a cover letter for the job title: ${input} at ${textarea}.`;
        }
    },
    {
        id: 'Quiz_Question_Generator',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/1716/1716228.png",
        alt: "Quiz Question Generator",
        title: "Quiz Question Generator",
        description: "An AI tool that generates quiz questions based on your topic or subject.",
        inputCheck: true,
        npInputLabel: 'Enter your topic or subject',
        textareaCheck: false,
        nptextareaLabel: '',
        generatePrompt: function(input) {
            return `Generate quiz questions for the topic or subject: ${input}.`;
        }
    }, {
        id: 'YouTube_Thumbnail_Generator_tips',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/2919/2919562.png",
        alt: "YouTube Thumbnail Generator Idea",
        title: "YouTube Thumbnail Generator Idea",
        description: "An AI tool that give you idea to creates eye-catching thumbnails for your YouTube videos.",
        inputCheck: true,
        npInputLabel: 'Enter your video title',
        textareaCheck: true,
        nptextareaLabel: 'Enter specific thumbnail details or themes',
        generatePrompt: function(input, textarea) {
            return `Create a YouTube thumbnail for the video titled "${input}" with the following details or themes: ${textarea}.`;
        }
    },
    {
        id: 'YouTube_Title_Optimizer',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/2920/2920775.png",
        alt: "YouTube Title Optimizer",
        title: "YouTube Title Optimizer",
        description: "An AI tool that helps optimize your YouTube video titles for better visibility.",
        inputCheck: true,
        npInputLabel: 'Enter your current video title',
        textareaCheck: true,
        nptextareaLabel: 'Enter keywords or phrases you want to include',
        generatePrompt: function(input, textarea) {
            return `Optimize the YouTube video title "${input}" by including the following keywords or phrases: ${textarea}.`;
        }
    },
    {
        id: 'YouTube_Script_Assistant',
        imgSrc: "https://cdn-icons-png.flaticon.com/128/2922/2922565.png",
        alt: "YouTube Script Assistant",
        title: "YouTube Script Assistant",
        description: "An AI tool that helps you write scripts for your YouTube videos.",
        inputCheck: true,
        npInputLabel: 'Enter your video topic',
        textareaCheck: true,
        nptextareaLabel: 'Enter key points or segments to cover',
        generatePrompt: function(input, textarea) {
            return `Write a script for a YouTube video on the topic "${input}" covering the following key points or segments: ${textarea}.`;
        }
    }
];
let mainSectionHpEl = document.getElementById('templates');

function createCard(each) {
    let mainContHpEl = document.createElement('div');
    mainContHpEl.classList.add('template-card');
    mainContHpEl.setAttribute('id', each.id);
    mainContHpEl.setAttribute('onclick', `callNextPage('${each.id}')`);
    let imgHpEl = document.createElement('img');
    imgHpEl.classList.add('template-icon');
    imgHpEl.setAttribute('src', each.imgSrc);
    imgHpEl.setAttribute('alt', each.alt);
    mainContHpEl.appendChild(imgHpEl);
    let headingHpEl = document.createElement('h3');
    headingHpEl.textContent = each.title;
    mainContHpEl.appendChild(headingHpEl);
    let paraHpEl = document.createElement('p');
    paraHpEl.textContent = each.description;
    mainContHpEl.appendChild(paraHpEl);
    mainSectionHpEl.appendChild(mainContHpEl);
}
let spinnerEl = document.getElementById('spinner');

function renderAllCards() {
    mainSectionHpEl.innerHTML = '';
    spinnerEl.classList.toggle('d-none');
    for (let each of templates) {

        createCard(each);
    }
    spinnerEl.classList.toggle('d-none');
}


function findCard(query) {
    mainSectionHpEl.innerHTML = ''; // Clear the main section
    spinnerEl.classList.toggle("d-none");

    let found = false;
    for (let each of templates) {
        if (each.title.toLowerCase().includes(query.toLowerCase())) {
            createCard(each); // Function to create and append card elements
            found = true;
        }
    }

    if (!found) {
        let notFound = {
            imgSrc: "https://cdn.iconscout.com/icon/free/png-256/free-data-not-found-1965034-1662569.png",
            alt: "No Tool Found!",
            title: "Tool Not Found",
            description: "Sorry, no tools match your search"
        };
        createCard(notFound); // Create and append the "not found" card
    }
}

let searchCardFormEl = document.getElementById('searchCardForm');
let searchInputEl = document.getElementById('search');

searchInputEl.addEventListener('keyup', function(event) {
    if (event.target.value === '') {
        renderAllCards();
    } else {
        findCard(searchInputEl.value.toLowerCase());
    }
});

searchCardFormEl.addEventListener('submit', function(event) {
    event.preventDefault();
    if (searchInputEl.value !== '') {
        findCard(searchInputEl.value.toLowerCase());
    }
});
searchInputEl.addEventListener('click', function() {
    searchInputEl.value = '';
    renderAllCards();
});
// Initial render of all cards
renderAllCards();

function callNextPage(idx) {
    for (let each of templates) {
        if (each.id === idx) {
            document.getElementById('mainHomePage').classList.add('d-none');
            const nextPageSection = document.getElementById('nextPage');
            const containerFluidDiv = document.createElement("div");
            containerFluidDiv.className = "container-fluid";
            const rowDiv1 = document.createElement("div");
            rowDiv1.className = "maindownCont";
            const backButton1 = document.createElement("button");
            backButton1.type = "button";
            backButton1.className = "back-button ml-2 mr-2";
            backButton1.innerHTML = '<i class="fa-solid fa-house"></i>Home';
            backButton1.onclick = function() {
                document.getElementById('mainHomePage').classList.remove('d-none');
                nextPageSection.innerHTML = '';
                navFixed.classList.add("d-none");
                window.scrollTo(0, 1);
                window.scrollTo(0, 0);
            };
            const backButton2 = document.createElement("button");
            backButton2.type = "button";
            backButton2.className = "linkedin-button";
            backButton2.innerHTML = '<i class="fa-brands fa-linkedin"></i>Linkedin';
            backButton2.addEventListener('click', () => {
                window.open('https://in.linkedin.com/in/adityagupta-profile', '_blank');
            });

            rowDiv1.appendChild(backButton1);

            rowDiv1.appendChild(backButton2);

            const contentDiv = document.createElement("div");
            contentDiv.className = "content";

            const rowDiv2 = document.createElement("div");
            rowDiv2.className = "row";

            const sidebarDiv = document.createElement("div");
            sidebarDiv.className = "col-md-3 sidebar2";

            const img = document.createElement("img");
            img.src = each.imgSrc;
            img.alt = each.alt;

            const h2 = document.createElement("h2");
            h2.textContent = DOMPurify.sanitize(each.title); // Sanitize title

            const p1 = document.createElement("p");
            p1.textContent = DOMPurify.sanitize(each.description); // Sanitize description

            sidebarDiv.appendChild(img);
            sidebarDiv.appendChild(h2);
            sidebarDiv.appendChild(p1);

            let input, label1, textarea, label2;

            if (each.inputCheck) {
                label1 = document.createElement("label");
                label1.htmlFor = "blog-topic";
                label1.textContent = DOMPurify.sanitize(each.npInputLabel);

                input = document.createElement("input");
                input.type = "text";
                input.id = "blog-topic";
                input.placeholder = DOMPurify.sanitize(each.npInputLabel);
            }
            if (each.textareaCheck) {
                label2 = document.createElement("label");
                label2.htmlFor = "blog-outline";
                label2.textContent = DOMPurify.sanitize(each.nptextareaLabel);

                textarea = document.createElement("textarea");
                textarea.id = "blog-outline";
                textarea.placeholder = DOMPurify.sanitize(each.nptextareaLabel);
            }
            if (each.inputCheck) {
                sidebarDiv.appendChild(label1);
                sidebarDiv.appendChild(input);
            }
            if (each.textareaCheck) {
                sidebarDiv.appendChild(label2);
                sidebarDiv.appendChild(textarea);
            }
            const generateButton = document.createElement("button");
            generateButton.className = "btn btn-primary generate-button";
            generateButton.textContent = "Generate Content";
            sidebarDiv.appendChild(generateButton);
            const mainContentDiv = document.createElement("div");
            mainContentDiv.className = "col-md-9 main-content2";
            const p3 = document.createElement('p');
            p3.className = "d-md-none";
            p3.style.color = "#1fc440";
            p3.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
            p3.style.border = "3px solid #51388c";
            p3.style.width = "100%";
            p3.style.textAlign = "center";
            p3.textContent = "SCROLL DOWN";

            const editorDiv = document.createElement("div");
            editorDiv.id = "editor";


            const mainDownContentDiv = document.createElement('div');
            mainDownContentDiv.classList.add('maindownCont');

            const copyButton = document.createElement("button");
            copyButton.className = "copy-button";
            copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';

            const downloadButton = document.createElement("button");
            downloadButton.className = "download-button";
            downloadButton.innerHTML = '<i class="fas fa-download"></i> Download';

            mainContentDiv.appendChild(p3);
            mainContentDiv.appendChild(editorDiv);

            mainDownContentDiv.appendChild(downloadButton);
            mainDownContentDiv.appendChild(copyButton);

            mainContentDiv.appendChild(mainDownContentDiv);

            rowDiv2.appendChild(sidebarDiv);
            rowDiv2.appendChild(mainContentDiv);

            contentDiv.appendChild(rowDiv2);

            containerFluidDiv.appendChild(rowDiv1);
            containerFluidDiv.appendChild(contentDiv);

            nextPageSection.appendChild(containerFluidDiv);

            // Quill editor initialization
            var quill = new Quill('#editor', {
                theme: 'snow',
                modules: {
                    toolbar: [
                        [{
                            'header': [1, 2, 3, 4, 5, 6, false]
                        }],
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{
                            'list': 'ordered'
                        }, {
                            'list': 'bullet'
                        }],
                        [{
                            'script': 'sub'
                        }, {
                            'script': 'super'
                        }],
                        [{
                            'indent': '-1'
                        }, {
                            'indent': '+1'
                        }],
                        [{
                            'direction': 'rtl'
                        }],
                        [{
                            'size': ['small', false, 'large', 'huge']
                        }],
                        [{
                            'color': []
                        }, {
                            'background': []
                        }],
                        [{
                            'font': []
                        }],
                        [{
                            'align': []
                        }],
                        ['link', 'image', 'video'],
                        ['clean']
                    ]
                }
            });

            generateButton.onclick = async function() {
                let userInput, textareaValue;
                if (each.inputCheck) {
                    userInput = DOMPurify.sanitize(document.getElementById('blog-topic').value); // Sanitize user input
                }
                if (each.textareaCheck) {
                    textareaValue = DOMPurify.sanitize(document.getElementById('blog-outline').value); // Sanitize textarea value
                }
                const template = templates.find((template) => template.id === idx);
                let prompt;
                if (each.inputCheck && each.textareaCheck) {
                    prompt = template.generatePrompt(userInput, textareaValue);
                } else if (each.inputCheck) {
                    prompt = template.generatePrompt(userInput);
                } else {
                    prompt = template.generatePrompt(textareaValue);
                }

                try {
                    //------------------------------------------------------
                    //------------------------------------------------------
                    //------------------------------------------------------
                    //------------------------------------------------------
                    //------------------------------------------------------
                    //------------------------------------------------------
                    //------------------------------------------------------
                    //------------------------------------------------------
                    //------------------------------------------------------
                    //------------------------------------------------------
                    const apiKey = 'Give API KEY HERE';
                    //------------------------------------------------------
                    //------------------------------------------------------
                    //------------------------------------------------------
                    //------------------------------------------------------
                    //------------------------------------------------------
                    //------------------------------------------------------
                    //------------------------------------------------------
                    //------------------------------------------------------
                    //------------------------------------------------------
                    //------------------------------------------------------
                    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            contents: [{
                                parts: [{
                                    text: prompt,
                                }],
                            }],
                        }),
                    });
                    if (!response.ok) {
                        throw new Error(`Gemini API request failed with status ${response.status}`);
                    }
                    const data = await response.json();
                    const generatedContent = data.candidates[0].content.parts[0].text;
                    const asd = marked.parse(generatedContent);
                    // Set the sanitized HTML content into the Quill editor
                    const asms = DOMPurify.sanitize(asd);
                    console.log(asms);
                    quill.clipboard.dangerouslyPasteHTML(asms);
                } catch (error) {
                    console.error('Error communicating with Gemini API:', error);
                    const editorDiv = document.getElementById('editor');
                    editorDiv.textContent = 'Sorry, there was an error processing your request.';
                }
            };
            quill.on('text-change', function(delta, oldDelta, source) {
                if (source === 'user') {
                    // Update the copy button's behavior to copy the latest editor content
                    copyButton.removeEventListener('click', copyHandler);
                    copyHandler = function() {
                        let content = quill.root.innerText;
                        navigator.clipboard.writeText(content).then(function() {
                            alert('Content copied to clipboard!');
                        }, function(err) {
                            console.error('Could not copy text: ', err);
                        });
                    };
                    copyButton.addEventListener('click', copyHandler);
                }
            });
            copyButton.addEventListener('click', function() {
                let content = quill.getText();
                navigator.clipboard.writeText(content).then(function() {
                    alert('Content copied to clipboard!');
                }, function(err) {
                    console.error('Could not copy text: ', err);
                });
            });
            downloadButton.addEventListener('click', function() {
                const quillContent = quill.root.innerHTML;
                const blob = new Blob([quillContent], {
                    type: 'text/html'
                });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'edited_content.html';
                a.click();
                URL.revokeObjectURL(url);
            });
        }
    }
}


const bars = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const closingButton = document.querySelector(".fa-times");
const toggleInput = document.getElementById("mode-toggle");


bars.addEventListener("click", () => {
    sidebar.classList.remove("d-none");
    sidebar.classList.add("show-sidebar");

});

closingButton.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
    sidebar.classList.add("d-none");
});

document.addEventListener("DOMContentLoaded", function() {
    toggleInput.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");
    });
});



const faBars = document.getElementById("faBarsId");
const header = document.querySelector(".templates");
const navFixed = document.querySelector(".nav-fixed");

function checkHeaderPosition() {
    if (window.matchMedia("(max-width: 768px)").matches) { // mobile
        if (header.getBoundingClientRect().top > 50) {
            faBars.classList.remove("d-none");
            navFixed.classList.add("d-none");
        } else {
            faBars.classList.add("d-none");
            navFixed.classList.remove("d-none");
        }
    } else if (window.matchMedia("(min-width: 769px) and (max-width: 1024px)").matches) { // tablet
        if (header.getBoundingClientRect().top > 60) {
            faBars.classList.remove("d-none");
            navFixed.classList.add("d-none");
        } else {
            faBars.classList.add("d-none");
            navFixed.classList.remove("d-none");
        }
    } else { // desktop
        if (header.getBoundingClientRect().top > 60) {
            faBars.classList.remove("d-none");
            navFixed.classList.add("d-none");
        } else {
            faBars.classList.add("d-none");
            navFixed.classList.remove("d-none");
        }
    }
}
window.addEventListener("scroll", checkHeaderPosition);
window.addEventListener("resize", checkHeaderPosition);
// Scroll to top on page load
window.addEventListener('load', function() {
    setTimeout(function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 100);
});

const menuItems = document.querySelectorAll('.menu li');

menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (event) => {
        const target = event.target;
        const href = target.getAttribute('href');
        switch (href) {
            case '#mainHomePage':
                sidebar.classList.remove("show-sidebar");
                sidebar.classList.add("d-none");
                break;
            case '#':
                // Do something when the "Todolist" menu item is clicked
                break;
            case '#':
                // Do something when the "Games" menu item is clicked
                break;
                // Add more cases for each menu item
            default:
                // Do something when any other menu item is clicked
        }
    });
});