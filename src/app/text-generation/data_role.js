export const dataRole = [
    {system: "Assistant", example : "Say this is a test", desc: "Let AI be an Assistant", content: "You are a helpful assistant", temperature: 0.7, max_tokens: 64, top_p: 1},
    {system: "Grammar Correction",example : "She no went to the market", desc: "Convert ungrammatical statements into standard English.", content: "You will be provided with statements, and your task is to convert them to standard English.", temperature: 0.7, max_tokens: 64, top_p: 1},
    {system: "Parse unstructured data",example : "There are many fruits that were found on the recently discovered planet Goocrux. There are neoskizzles that grow there, which are purple and taste like candy. There are also loheckles, which are a grayish blue fruit and are very tart, a little bit like a lemon. Pounits are a bright green color and are more savory than sweet. There are also plenty of loopnovas which are a neon pink flavor and taste like cotton candy. Finally, there are fruits called glowls, which have a very sour and bitter taste which is acidic and caustic, and a pale orange tinge to them.", desc:"Create tables from unstructured text.", content: "You will be provided with unstructured data, and your task is to parse it into CSV format.", temperature: 0.7, max_tokens: 64, top_p: 1},
    {system: "Calculate time complexity", example : 
    `def foo(n, k):
        accum = 0
        for i in range(n):
            for l in range(k):
                accum += i
        return accum`
    ,desc:"Find the time complexity of a function.", content: "You will be provided with Python code, and your task is to calculate its time complexity.", temperature: 0.7, max_tokens: 64, top_p: 1},
    {system: "Keywords", example : "Black-on-black ware is a 20th- and 21st-century pottery tradition developed by the Puebloan Native American ceramic artists in Northern New Mexico. Traditional reduction-fired blackware has been made for centuries by pueblo artists. Black-on-black ware of the past century is produced with a smooth surface, with the designs applied through selective burnishing or the application of refractory slip. Another style involves carving or incising designs and selectively polishing the raised areas. For generations several families from Kha'po Owingeh and P'ohwhóge Owingeh pueblos have been making black-on-black ware with the techniques passed down from matriarch potters. Artists from other pueblos have also produced black-on-black ware. Several contemporary artists have created works honoring the pottery of their ancestors.", desc: "Extract keywords from a block of text.", content: "You will be provided with a block of text, and your task is to extract a list of keywords from it.", temperature: 0.5, max_tokens: 64, top_p: 1},
    {system: "Python bug fixer",example: `
    import Random
        a = random.randint(1,12)
        b = random.randint(1,12)
        for i in range(10):
            question = "What is "+a+" x "+b+"? "
            answer = input(question)
            if answer = a*b
                print (Well done!)
            else:
                print("No.")`, 
    desc:"Find and fix bugs in source code.", content: "You will be provided with a piece of Python code, and your task is to find and fix bugs in it.", temperature: 0.7, max_tokens: 64, top_p: 1},
    {system: "Tweet classifier" ,example: " I loved the new Batman movie!", desc:"Detect sentiment in a tweet.", content: "You will be provided with a tweet, and your task is to classify its sentiment as positive, neutral, or negative.", temperature: 0.7, max_tokens: 64, top_p: 1},
    {system: "Mood to color",example: "Blue sky at dusk.", desc: "Turn a text description into a color.", content: "You will be provided with a description of a mood, and your task is to generate the CSS code for a color that matches it. Write your output in json with a single key called 'css_code'.", temperature: 0.7, max_tokens: 64, top_p: 1},
    {system: "Marv the sarcastic chat bot",example:"How many pounds are in a kilogram?", desc:"Marv is a factual chatbot that is also sarcastic.", content: "You are Marv, a chatbot that reluctantly answers questions with sarcastic responses.", temperature: 0.5, max_tokens: 64, top_p: 1},
    {system: "Interview questions",example: "Create a list of 8 questions for an interview with a science fiction author." ,desc:"Create interview questions.", content: "Create a list of 8 questions for an interview with a science fiction author.", temperature: 0.5, max_tokens: 64, top_p: 1},
    {system: "Improve code efficiency",example:`
    from typing import List
                    
                    
        def has_sum_k(nums: List[int], k: int) -> bool:
            """
            Returns True if there are two distinct elements in nums such that their sum 
            is equal to k, and otherwise returns False.
            """
            n = len(nums)
            for i in range(n):
                for j in range(i+1, n):
                    if nums[i] + nums[j] == k:
                        return True
            return False`, 
    desc: "Provide ideas for efficiency improvements to Python code.", content: "You will be provided with a block of text, and your task is to extract a list of keywords from itYou will be provided with a piece of Python code, and your task is to provide ideas for efficiency improvements.", temperature: 0.7, max_tokens: 64, top_p: 1},
    {system: "Rap battle writer", example:"Write a rap battle between Alan Turing and Claude Shannon.", desc:"Generate a rap battle between two characters.", content: "Write a rap battle between Alan Turing and Claude Shannon.", temperature: 0.8, max_tokens: 64, top_p: 1},
    {system: "Emoji chatbot" ,example:"How are you?" ,desc:"Generate conversational replies using emojis only.", content: "You will be provided with a message, and your task is to respond using emojis only.", temperature: 0.8, max_tokens: 64, top_p: 1},
    {system: "Socratic tutor",example: "Help me to understand the future of artificial intelligence.", desc: "Generate responses as a Socratic tutor.", content: "You are a Socratic tutor. Use the following principles in responding to students:", temperature: 0.8, max_tokens: 64, top_p: 1},
    {system: "Meeting notes summarizer", example:`Meeting Date: March 5th, 2050
    Meeting Time: 2:00 PM
    Location: Conference Room 3B, Intergalactic Headquarters
    
    Attendees:
    - Captain Stardust
    - Dr. Quasar
    - Lady Nebula
    - Sir Supernova
    - Ms. Comet
    
    Meeting called to order by Captain Stardust at 2:05 PM
    
    1. Introductions and welcome to our newest team member, Ms. Comet
    
    2. Discussion of our recent mission to Planet Zog
    - Captain Stardust: "Overall, a success, but communication with the Zogians was difficult. We need to improve our language skills."
    - Dr. Quasar: "Agreed. I'll start working on a Zogian-English dictionary right away."
    - Lady Nebula: "The Zogian food was out of this world, literally! We should consider having a Zogian food night on the ship."
    
    3. Addressing the space pirate issue in Sector 7
    - Sir Supernova: "We need a better strategy for dealing with these pirates. They've already plundered three cargo ships this month."
    - Captain Stardust: "I'll speak with Admiral Starbeam about increasing patrols in that area.
    - Dr. Quasar: "I've been working on a new cloaking technology that could help our ships avoid detection by the pirates. I'll need a few more weeks to finalize the prototype."
    
    4. Review of the annual Intergalactic Bake-Off
    - Lady Nebula: "I'm happy to report that our team placed second in the competition! Our Martian Mud Pie was a big hit!"
    - Ms. Comet: "Let's aim for first place next year. I have a secret recipe for Jupiter Jello that I think could be a winner."
    
    5. Planning for the upcoming charity fundraiser
    - Captain Stardust: "We need some creative ideas for our booth at the Intergalactic Charity Bazaar."
    - Sir Supernova: "How about a 'Dunk the Alien' game? We can have people throw water balloons at a volunteer dressed as an alien."
    - Dr. Quasar: "I can set up a 'Name That Star' trivia game with prizes for the winners."
    - Lady Nebula: "Great ideas, everyone. Let's start gathering the supplies and preparing the games."
    
    6. Upcoming team-building retreat
    - Ms. Comet: "I would like to propose a team-building retreat to the Moon Resort and Spa. It's a great opportunity to bond and relax after our recent missions."
    - Captain Stardust: "Sounds like a fantastic idea. I'll check the budget and see if we can make it happen."
    
    7. Next meeting agenda items
    - Update on the Zogian-English dictionary (Dr. Quasar)
    - Progress report on the cloaking technology (Dr. Quasar)
    - Results of increased patrols in Sector 7 (Captain Stardust)
    - Final preparations for the Intergalactic Charity Bazaar (All)
    
    Meeting adjourned at 3:15 PM. Next meeting scheduled for March 19th, 2050 at 2:00 PM in Conference Room 3B, Intergalactic Headquarters.
    `, desc:"Summarize meeting notes including overall discussion, action items, and future topics.", content: "You will be provided with meeting notes, and your task is to summarize the meeting as follows:", temperature: 0.7, max_tokens: 64, top_p: 1},
    {system: "Pro and con discusser",example:"Analyze the pros and cons of remote work vs. office work", desc:"Analyze the pros and cons of a given topic.", content: "Analyze the pros and cons of remote work vs. office work", temperature: 0.8, max_tokens: 64, top_p: 1},
    {system: "Summarize for a 2nd grader", example:"Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.", desc: "Simplify text to a level appropriate for a second-grade student.", content: "Summarize content you are provided with for a second-grade student.", temperature: 0.7, max_tokens: 64, top_p: 1},
    {system: "Emoji Translation", example:"Artificial intelligence is a technology with great promise.", desc:"Translate regular text into emoji text.", content: "You will be provided with text, and your task is to translate it into emojis. Do not use any regular text. Do your best with emojis only.", temperature: 0.8, max_tokens: 64, top_p: 1},
    {system: "Explain code" ,example:`class Log:
    def __init__(self, path):
        dirname = os.path.dirname(path)
        os.makedirs(dirname, exist_ok=True)
        f = open(path, "a+")

        # Check that the file is newline-terminated
        size = os.path.getsize(path)
        if size > 0:
            f.seek(size - 1)
            end = f.read(1)
            if end != "\n":
                f.write("\n")
        self.f = f
        self.path = path

    def log(self, event):
        event["_event_id"] = str(uuid.uuid4())
        json.dump(event, self.f)
        self.f.write("\n")

    def state(self):
        state = {"complete": set(), "last": None}
        for line in open(self.path):
            event = json.loads(line)
            if event["type"] == "submit" and event["success"]:
                state["complete"].add(event["id"])
                state["last"] = event
        return state`, 
    desc:"Explain a complicated piece of code.", content: "You will be provided with a piece of code, and your task is to explain it in a concise way.", temperature: 0.7, max_tokens: 64, top_p: 1},
    {system: "Product name generator",example:"Product description: A home milkshake maker Seed words: fast, healthy, compact.", desc: "Generate product names from a description and seed words.", content: "You will be provided with a product description and seed words, and your task is to generate product names.", temperature: 0.8, max_tokens: 64, top_p: 1},
    {system: "Spreadsheet creator", example:"Create a two-column CSV of top science fiction movies along with the year of release.", desc:"Create spreadsheets of various kinds of data.", content: "Create a two-column CSV of top science fiction movies along with the year of release.", temperature: 0.5, max_tokens: 64, top_p: 1},
    {system: "Airport code extractor",example:"I want to fly from Orlando to Boston", desc:"Extract airport codes from text.", content: "You will be provided with a text, and your task is to extract the airport codes from it.", temperature: 0.7, max_tokens: 64, top_p: 1},
    {system: "VR fitness idea generator",example:"Go south on 95 until you hit Sunrise boulevard then take it east to us 1 and head south. Tom Jenkins bbq will be on the left after several miles.", desc: "Generate ideas for fitness promoting virtual reality games.", content: "YBrainstorm some ideas combining VR and fitness.", temperature: 0.6, max_tokens: 64, top_p: 1},
    {system: "Turn by turn directions",example:"Go south on 95 until you hit Sunrise boulevard then take it east to us 1 and head south. Tom Jenkins bbq will be on the left after several miles.", desc:"Convert natural language to turn-by-turn directions.", content: "You will be provided with a text, and your task is to create a numbered list of turn-by-turn directions from it.", temperature: 0.3, max_tokens: 64, top_p: 1},
    {system: "Function from specification" ,example:"Write a Python function that takes as input a file path to an image, loads the image into memory as a numpy array, then crops the rows and columns around the perimeter if they are darker than a threshold value. Use the mean value of rows and columns to decide if they should be marked for deletion.", desc:"Create a Python function from a specification.", content: "Write a Python function that takes as input a file path to an image, loads the image into memory as a numpy array, then crops the rows and columns around the perimeter if they are darker than a threshold value. Use the mean value of rows and columns to decide if they should be marked for deletion.", temperature: 0.7, max_tokens: 64, top_p: 1},
    {system: "Single page website creator",example:"Make a single page website that shows off different neat javascript features for drop-downs and things to display information. The website should be an HTML file with embedded javascript and CSS.", desc: "Create a single page website.", content: "Make a single page website that shows off different neat javascript features for drop-downs and things to display information. The website should be an HTML file with embedded javascript and CSS.", temperature: 0.7, max_tokens: 64, top_p: 1},
    {system: "Memo writer",example:`Draft a company memo to be distributed to all employees. The memo should cover the following specific points without deviating from the topics mentioned and not writing any fact which is not present here:

    Introduction: Remind employees about the upcoming quarterly review scheduled for the last week of April.
    
    Performance Metrics: Clearly state the three key performance indicators (KPIs) that will be assessed during the review: sales targets, customer satisfaction (measured by net promoter score), and process efficiency (measured by average project completion time).
    
    Project Updates: Provide a brief update on the status of the three ongoing company projects:
    
    a. Project Alpha: 75% complete, expected completion by May 30th.
    b. Project Beta: 50% complete, expected completion by June 15th.
    c. Project Gamma: 30% complete, expected completion by July 31st.
    
    Team Recognition: Announce that the Sales Team was the top-performing team of the past quarter and congratulate them for achieving 120% of their target.
    
    Training Opportunities: Inform employees about the upcoming training workshops that will be held in May, including "Advanced Customer Service" on May 10th and "Project Management Essentials" on May 25th.` ,desc:"Generate a company memo based on provided points.", content: "Draft a company memo to be distributed to all employees. The memo should cover the following specific points without deviating from the topics mentioned and not writing any fact which is not present here:\n    \n    Introduction: Remind employees about the upcoming quarterly review scheduled for the last week of April.\n    \n    Performance Metrics: Clearly state the three key performance indicators (KPIs) that will be assessed during the review: sales targets, customer satisfaction (measured by net promoter score), and process efficiency (measured by average project completion time).\n    \n    Project Updates: Provide a brief update on the status of the three ongoing company projects:\n    \n    a. Project Alpha: 75% complete, expected completion by May 30th.\n    b. Project Beta: 50% complete, expected completion by June 15th.\n    c. Project Gamma: 30% complete, expected completion by July 31st.\n    \n    Team Recognition: Announce that the Sales Team was the top-performing team of the past quarter and congratulate them for achieving 120% of their target.\n    \n    Training Opportunities: Inform employees about the upcoming training workshops that will be held in May, including \"Advanced Customer Service\" on May 10th and \"Project Management Essentials\" on May 25th.", temperature: 0.7, max_tokens: 64, top_p: 1},
    {system: "Translation",example:"My name is Jane. What is yours?", desc:"Extract airport codes from text.", content: "You will be provided with a sentence in English, and your task is to translate it into French.", temperature: 0.7, max_tokens: 64, top_p: 1},
    {system: "Review classifier", example:`
    I recently purchased the Inflatotron 2000 airbed for a camping trip and wanted to share my experience with others. Overall, I found the airbed to be a mixed bag with some positives and negatives.
        
        Starting with the positives, the Inflatotron 2000 is incredibly easy to set up and inflate. It comes with a built-in electric pump that quickly inflates the bed within a few minutes, which is a huge plus for anyone who wants to avoid the hassle of manually pumping up their airbed. The bed is also quite comfortable to sleep on and offers decent support for your back, which is a major plus if you have any issues with back pain.
        
        On the other hand, I did experience some negatives with the Inflatotron 2000. Firstly, I found that the airbed is not very durable and punctures easily. During my camping trip, the bed got punctured by a stray twig that had fallen on it, which was quite frustrating. Secondly, I noticed that the airbed tends to lose air overnight, which meant that I had to constantly re-inflate it every morning. This was a bit annoying as it disrupted my sleep and made me feel less rested in the morning.
        
        Another negative point is that the Inflatotron 2000 is quite heavy and bulky, which makes it difficult to transport and store. If you're planning on using this airbed for camping or other outdoor activities, you'll need to have a large enough vehicle to transport it and a decent amount of storage space to store it when not in use.`, desc:"Classify user reviews based on a set of tags.", content: "You will be presented with user reviews and your job is to provide a set of tags from the following list. Provide your answer in bullet point form. Choose ONLY from the list of tags provided here (choose either the positive or the negative tag but NOT both):", temperature: 0.7, max_tokens: 64, top_p: 1},
    {system: "Lesson plan writer" ,example:"Write a lesson plan for an introductory algebra class. The lesson plan should cover the distributive law, in particular how it works in simple cases involving mixes of positive and negative numbers. Come up with some examples that show common student errors." ,desc:"Generate a lesson plan for a specific topic.", content: "Write a lesson plan for an introductory algebra class. The lesson plan should cover the distributive law, in particular how it works in simple cases involving mixes of positive and negative numbers. Come up with some examples that show common student errors.", temperature: 0.7, max_tokens: 64, top_p: 1},
    {system: "Natural language to SQL",example:"Write a SQL query which computes the average total order value for all orders on 2023-04-01.", desc: "Convert natural language into SQL queries.", content: `Given the following SQL tables, your job is to write queries given a user’s request.

    CREATE TABLE Orders (
      OrderID int,
      CustomerID int,
      OrderDate datetime,
      OrderTime varchar(8),
      PRIMARY KEY (OrderID)
    );
    
    CREATE TABLE OrderDetails (
      OrderDetailID int,
      OrderID int,
      ProductID int,
      Quantity int,
      PRIMARY KEY (OrderDetailID)
    );
    
    CREATE TABLE Products (
      ProductID int,
      ProductName varchar(50),
      Category varchar(50),
      UnitPrice decimal(10, 2),
      Stock int,
      PRIMARY KEY (ProductID)
    );
    
    CREATE TABLE Customers (
      CustomerID int,
      FirstName varchar(50),
      LastName varchar(50),
      Email varchar(100),
      Phone varchar(20),
      PRIMARY KEY (CustomerID)
    );
USER
Write a SQL query which computes the average total order value for all orders on 2023-04-01.`, temperature: 0.7, max_tokens: 64, top_p: 1},
];