export default {
    uni: {
        period: {
            start: new Date(2015, 9),
            end: new Date(2019, 9),
        },
        title: [<span>Beginning of Bachelor's Study</span>],
        intro: [
            <div>
                I began my bachelor's in Electrical Engineering field and
                pursued semiconductor devices, green energy harvesting
                technologies, piezoelectrics and photonics.
            </div>,
        ],
        text: [],
    },
    cc: {
        period: {
            start: new Date(2016, 6),
            end: new Date(2017, 4, 20),
        },
        section: [<span>CoolCup Company</span>],
        title: [<span>Internship As a Junior Web Developer</span>],
        overview: [
            <div>
                Development of a web app that functioned as a portfolio and as a
                supply chain for its different branches through out the country.
            </div>,
        ],
        background: (
            <div>
                The project consisted of two functionalities.
                <ol>
                    <li>
                        A portfolio which was responsible for introducing the
                        new food product (called cool cups (hence the name for
                        the company)) and introduce the different branches
                        through out the country. It also had a blog compartment
                        that posted daily health facts and health related
                        protocols that were met by the company's regulations.
                        <ul style={{ listStyle: "none" }}>
                            <li>DB: MongoDB</li>
                            <li>Backend: PHP (+ Laravel)</li>
                            <li>Frontend: JS (ReactJs), HTML5, Bootstrap</li>
                            <li>Tools Used: Adobe Photoshop, PHP Unit</li>
                        </ul>
                    </li>
                    <li>
                        A supply chain system to keep track of the expiration
                        date and amount of the available goods and other
                        necessary plastic components in each branch. This was
                        conducted using an application by cashiers which
                        reported the sales to the main server. (The cashier app
                        itself was outsourced)
                        <ul style={{ listStyle: "none" }}>
                            <li>DB: PostgreSQL</li>
                            <li>Backend: Golang</li>
                        </ul>
                    </li>
                </ol>
            </div>
        ),

        responsibilities: (
            <ol>
                <li>
                    Getting familiar with the used stacks as an intern in the
                    beginning.
                </li>
                <li>
                    Designed the GUI and picked the replaced color pallet for a
                    better user experience in the Portfolio.
                </li>
                <li>
                    Designed, developed and tested the front, backend and the
                    necessary database CRUD operations for the "blog" of the
                    Portfolio.
                </li>
                <li>
                    Studied, optimized and wrote tests for the old APIs handling
                    the supply chain system using Golang.
                </li>
                <li>
                    Developed and tested the automated expiration date checking
                    for each branch and designed a timetable that was
                    accountable to show the date of the next delivery to each
                    branch. This was connected to the cashier app and the
                    estimated date would then update itself (and its average
                    date based on previous data) by comparing the goods in
                    storage of each branch to a critical limit which was based
                    on the sale of that particular branch.
                </li>
                <li>
                    Designed and developed a chart system to show the sale of
                    each branch, monthly and annually and provide a trendline
                    for each of their sale data (in Javascript).
                </li>
                <li>
                    The sale data of branches and the whole company and profit
                    calculations (formulas provided by the financial department)
                    were done and the data export was provided in (XLS, XLSX,
                    XML and PDF)
                </li>
                <li>Write design documents and test cases.</li>
            </ol>
        ),
        isFinished: true,
        type: "company",
        jobType: "Semi - Remote (Flexible Full Time)",
        role: "Junior Web Developer and Web Designer",
        company: "Cool Cup",
        links: ["https://coolcup.ir/"],
    },
    kn2cR: {
        period: {
            start: new Date(2017, 1, 14),
            end: new Date(2017, 10, 1),
        },
        title: [<span>Robotics Software Developer</span>],
        overview: [
            <div>
                Solo programmer of a UGV ResQ robot platform of a robotics
                laboratory. Handled image processing, fetch and process multiple
                sensor data and more.
            </div>,
        ],
        background: (
            <div>
                The project was a multiplatform (Windows and Linux) application
                that was written mostly in C++ and a bit of Python.
                <br />A lot of Multithreading policies was implemented to handle
                different data fetching and sending to and from the robot and
                especially for autonomy.
                <ul style={{ listStyle: "none" }}>
                    <li>Frontend & Backend: C++</li>
                    <li>Tools Used: Qt, OpenCV, CUDA</li>
                    <li>
                        Sensors:
                        <ul style={{ listStyle: "none" }}>
                            <li>Hokuyo URG-04LX</li>
                            <li>RPLidar A2 360◦</li>
                            <li>Flir Lepton Thermal Camera</li>
                        </ul>
                    </li>
                </ul>
                The UGV ResQ robot was expected to:
                <ol>
                    <li>
                        Have multiple cameras installed on different parts of
                        the platform to allow the operator to control the robot
                        from afar.
                    </li>
                    <li>
                        Have a thermal sensor, detect and report unusual or
                        critical temperatures of a desired object.
                    </li>
                    <li>
                        Draw a 2D map of the surroundings as the robot explores
                        an unknown environemnt.
                    </li>
                    <li>
                        Recognize some Hazmats (defined by standards of RoboCup)
                        and signal the operator
                    </li>
                    <li>
                        Have a Manipulator (a shaft with a robotic wrist) that
                        can be handled to perform certain tasks. The tasks
                        required rotation, extention or exertion of force (push
                        & pull).
                    </li>
                    <li>
                        Optional: Autonomous mapping (in a previously unexplored
                        environment)
                    </li>
                </ol>
            </div>
        ),

        responsibilities: (
            <div>
                <span>
                    <b>Note: </b>By <i>Operator</i> in the following text, I
                    mean the person in charge of controlling the robot.
                </span>
                <ol>
                    <li>
                        Connect a PS4 controller through bluetooth to the
                        operator's laptop, and read the button and dualshock
                        data.
                    </li>
                    <li>
                        Use{" "}
                        <a href="https://opencv.org/">
                            <i>OpenCV</i>
                        </a>{" "}
                        to handle image processing for pattern recognition. The
                        following usages were implemented but some were deleted
                        or replaced in the final build:
                        <ul style={{ listStyle: "none" }}>
                            <li>SIFT</li>
                            <li>SURF</li>
                            <li>Color Channel Filteration</li>
                            <li>Hit or Miss Algorithm</li>
                        </ul>
                    </li>
                    <li>
                        Simple implementation of{" "}
                        <a href="https://www.google.com/search?q=k-Nearest+Neighbors">
                            <i>K-Nearest Neighour (KNN)</i>
                        </a>{" "}
                        algorithm for a smoother and faster pattern recognition.
                    </li>
                    <li>
                        Connect 2{" "}
                        <a href="https://www.ui.com/airmax/bulletm/">
                            <i>Ubiquiti BULLETs</i>
                        </a>{" "}
                        using bridge connection to establish the necessary
                        communication channel between the operator's station
                        (computer) and the robot.
                    </li>
                    <li>
                        Connect to a{" "}
                        <a href="https://www.raspberrypi.com/products/raspberry-pi-2-model-b/">
                            <i>Raspberry Pi2</i>
                        </a>{" "}
                        using ssh protocol over the established WiFi.
                    </li>
                    <li>
                        Read data from{" "}
                        <a href="https://www.flir.eu/products/lepton/">
                            <i>Lepton Flir</i>
                        </a>{" "}
                        (a thermal sensor) using the <i>Raspberry Pi2</i> and C
                        language. Then, sending the data over the same Wifi
                        connection.
                    </li>
                    <li>
                        Connect to a{" "}
                        <a href="https://up-board.org/">
                            <i>UP-board</i>
                        </a>{" "}
                        using TCP protocol over the established WiFi connection.
                    </li>
                    <li>
                        Use the <i>UP-board</i> to read data from 4 cameras
                        (connected using USB 2.0) and transfer their data over
                        the established Wifi connection.
                    </li>
                    <li>
                        Use the <i>UP-board</i> to read data from a{" "}
                        <a href="https://www.google.com/search?q=xbox+kinect+sensor">
                            <i>Xbox Kinect Sensors</i>
                        </a>{" "}
                        in order to calculate the distance to the front of the
                        robot and report it to the Operator.
                    </li>
                    <li>
                        Use the <i>UP-board</i> to read data from 2{" "}
                        <a href="https://www.google.com/search?q=2D+Laser+Scanner+Sensor">
                            <i>2D Laser Scanner Sensors</i>
                        </a>{" "}
                        (a{" "}
                        <a href="https://www.hokuyo-aut.co.jp/search/single.php?serial=17">
                            <i>Hokuyo URG-04LX</i>
                        </a>{" "}
                        and a{" "}
                        <a href="https://www.google.com/search?q=RPLidar+A2+360%E2%97%A6">
                            <i>RPLidar A2 360◦</i>
                        </a>
                        ) and send their data over the WiFi connection to the
                        Operator's station.
                    </li>
                    <li>
                        Use the <i>2D Laser Scanner Sensors</i>' data to perform{" "}
                        <a href="http://wiki.ros.org/hector_slam">
                            <i>Hector Slam</i>
                        </a>{" "}
                        in{" "}
                        <a href="https://www.ros.org/">
                            <i>ROS</i>
                        </a>{" "}
                        environment. This allowed for a 2D mapping of the
                        surroundings.
                    </li>
                    <li>
                        Implementation of a simple autonomy protocol using
                        Right-Hand logic by feedbacking from the realtime data
                        of laser scanner(s).
                    </li>
                </ol>
                Also, the following tasks were experimentally achieved but
                decided not to go forward with them to the tournaments:
                <ol>
                    <li>
                        Realization of a 3D model of the robot using the 3D
                        models from the Mechanics department of the laboratory
                        in order to simulate a real-time model of the robot and
                        its angular real-time position on the ground. This was
                        done in <i>ROS</i> environment and using 3D Models of{" "}
                        <a href="https://en.wikipedia.org/wiki/AutoCAD">
                            <i>AutoCAD</i>
                        </a>
                    </li>
                </ol>
            </div>
        ),
        isFinished: true,
        isProject: true,
        type: "research",
        jobType: "Flexible Part Time",
        role: "Software Developer",
        company: "KN2C Robotics Laboratory",
    },
    free1: {
        period: {
            start: new Date(2017, 4, 28),
            end: new Date(2017, 9, 20),
        },
        section: [<span>Freelancing</span>],
        title: [<span>Sadra Mail System</span>],
        overview: [
            <div>
                Development of a web app that functioned as a custom chat/mail
                system for employees inside the company.
            </div>,
        ],
        background: (
            <div>
                This was a web app for an SPA website. The employees inside the
                company could login to their personal panel and use this mailing
                system to contact one another. There was also a hierarchical
                chain of command available in the system were the high ranking
                employees could supervise the junior ones and distribute tasks
                and their deadlines. The mailbox updating mechanism was deployed
                using Node.js for near real-time experience in communication.
                <ul style={{ listStyle: "none" }}>
                    <li>Frontend: Vue.js</li>
                    <li>Backend: Express.js, Node.js</li>
                    <li>DB: MySQL</li>
                </ul>
            </div>
        ),

        responsibilities: (
            <div>
                <ol>
                    <li>
                        Designed, developed and tested the whole mailing system
                        as a modular addition to the SPA website.
                    </li>
                    <li>
                        Designed a hierarchical chain of commands in the mailing
                        system that replicated the same hierarchy of authority
                        that is set in the company. For this purpose, each use
                        was granted an access level and an access group and the
                        higher access levels were granted supervision over the
                        ones below.
                    </li>
                    <li>
                        The mails were designed in a way to be more of a task
                        that each user could assign it to someone who is in the
                        access group or refer it to the higher supervisor. The
                        tasks (mails) supported attachments as well as surveys
                        or questionnaires.
                    </li>
                </ol>
            </div>
        ),
        isFinished: true,
        isProject: true,
        type: "freelance",
        jobType: "Freelance Contract",
        role: "Full Stack Web Developer",
        company: "Sadraa Co.",
    },
    kn2cW: {
        period: {
            start: new Date(2017, 10, 1),
            end: new Date(2017, 10, 15),
        },
        title: [<span>Web Developer</span>],
        overview: [
            <div>Development of the KN2C Robotics Laboratory Website.</div>,
        ],
        background: (
            <ul style={{ listStyle: "none" }}>
                <li>Frontend & Backend: PHP (Wordpress)</li>
            </ul>
        ),

        responsibilities:
            "Creation of a Portfolio like website for the whole KN2C laboratory",
        isFinished: true,
        isProject: true,
        type: "research",
        jobType: "Flexible Part Time",
        role: "Web Developer",
        company: "KN2C Robotics Laboratory",
        links: ["http://kn2c.aras.kntu.ac.ir/"],
    },
    hoi: [
        {
            section: [<span>Honar Omran Iranian</span>],
            title: [<span>About the Company</span>],
            content: [
                <div>
                    This company was an IT consultant company that provided the
                    required IT manpower and strategies to realize other
                    companies' IT projects. The participated projects are as
                    follows:
                </div>,
            ],
            period: {
                start: new Date(2017, 10, 21),
                end: new Date(2019, 5, 30),
            },
        },
        {
            period: {
                start: new Date(2017, 10, 21),
                end: new Date(2018, 5, 1),
            },
            title: [<div>Melk Online</div>],
            overview: [
                <div>
                    Development and design of a web app along with IOS and
                    Android Applications that were going to actualize an online
                    real estate agency as well as an apartment management
                    system.
                </div>,
            ],
            background: (
                <div>
                    The project was about an online real estate application that
                    supported multiple platforms. The clients could create
                    accounts, register a property and sell / rent it online to
                    other clients. There were also a chat system, a 3d modeling
                    of the property, 2d map of each property, financial
                    calculations and informations of each property (weekly and
                    annually) and etc.
                    <ul style={{ listStyle: "none" }}>
                        <li>Platforms: Desktop (PC), Android, IOS</li>
                        <li>Backend: Golang and Node.js (in some parts)</li>
                        <li>Frontend: ReactJs, Bootstrap</li>
                        <li>Mobile Application: Gomobile</li>
                    </ul>
                </div>
            ),

            responsibilities: (
                <div>
                    <ol>
                        <li>
                            Convert client’s ideas and requests into
                            programmable segments and code based logic, thinking
                            about the possible solutions and select the suitable
                            technologies for each segment of the project.
                        </li>
                        <li>
                            Properly estimate a chronological state diagram to
                            chunk down the project into different phases by
                            applying agile methodologies and casually updating
                            the deadlines until finding a steady progress speed
                            estimation.
                        </li>
                        <li>
                            Node.js was used for the chat system that was
                            requested by the client. The chat system operated on
                            a different port and was used to give real- time
                            update on the chats. The chat system was a means of
                            communication between people that resided in the
                            same multi-story property. The chat system required
                            different functionalities. These were File
                            Attachment, Video/Image Attachment, Questionnaires,
                            Monthly/Annual Meeting Scheduling (for people that
                            were in the same property).
                        </li>
                        <li>
                            Neighbors were connected together and added to the
                            same group chat of the apartment after either:
                            <ol>
                                <li>
                                    Being added as a tenant by the Property
                                    Owner.
                                </li>
                                <li>
                                    Being suggested to be added by another
                                    tenant in the same apartment.
                                </li>
                                <li>
                                    Joining personally and manually by scanning
                                    a QR Code or clicking on an invite link.
                                </li>
                            </ol>
                        </li>
                    </ol>
                    A lot of other management tools (financial calculators, past
                    tenant archive, required maintenance tasks of the building,
                    requests of the board of the building, etc.) specifically
                    devoted to help the Property Owner and lots of other
                    functionalities were theoritized, contemplated on and
                    partially developed but since the project was never
                    launched, technical details are not going to be provided
                    further to keep the privacy oath of the contract that was
                    once signed.
                </div>
            ),
            note: (
                <span>
                    The project was never finished due to a lack of funding by
                    client, hence voiding the contract.
                </span>
            ),
            isFinished: false,
            isProject: true,
            type: "company",
            jobType: "Semi - Remote (Flexible Full Time)",
            role: "Full Stack Web Developer",
            company: "MelkOnline",
        },
        {
            period: {
                start: new Date(2018, 5, 1),
                end: new Date(2019, 5, 30),
            },
            title: [<span>Madavi</span>],
            overview: [
                <div>
                    Development and design of an E-commerce website that
                    provided online purchase of products by connecting the
                    clients to online bank services. This company is the Iranian
                    branch of{" "}
                    <a href="https://www.hilti.com/">
                        <i>Hilti</i>
                    </a>
                </div>,
            ],
            background: (
                <div>
                    E-commerce website was developed on Laravel framework in
                    PHP. Clients could register and sign in their accounts, add
                    desired products to their virtual shopping cart and
                    checkout, add a shipping address and recepient detail record
                    (that was saved for future purchases) and proceed to pay
                    through official bank web services. Another database on
                    another server which connected the branch to the original
                    databases of Hilti company was written in C# and development
                    and testing for the required API for this communication was.
                    <ul style={{ listStyle: "none" }}>
                        <li>Frontend: SASS/SCSS, HTML5</li>
                        <li>Backend: PHP (+ Laravel)</li>
                        <li>DB: MySQL</li>
                        <li>
                            Team Size: 6 (2 Backends, 3 Frontends and 1 Full
                            Stack)
                        </li>
                    </ul>
                </div>
            ),

            responsibilities: (
                <div>
                    <ol>
                        <li>
                            Designed, developed and tested the E-commerce
                            website/web app of Madavi and the required database.
                        </li>
                        <li>
                            The Database was expected to store the followings:
                            <ol>
                                <li>Client (Users) Informations </li>
                                <li>Recepient informations saved by a user </li>
                                <li>Addresses saved by a user </li>
                                <li>Current shopping carts of each user </li>
                                <li>
                                    Categories and subcategories of products
                                </li>
                                <li>Products </li>
                                <li>Orders of each user</li>
                                <li>
                                    Transactions done (storing info like: total
                                    amount, products, shopping_user,
                                    recepient_id, address_id, date, status,
                                    bank, etc. )
                                </li>
                                <li>Branch List (in Iran) </li>
                                <li>General Config </li>
                                <li>Sessions </li>
                                <li>
                                    Date, status and description of the updates
                                    done to the system due to any change by the
                                    central.
                                </li>
                                <li>Etc.</li>
                            </ol>
                        </li>
                        <li>
                            Design was going to be compatible with the latest
                            update of Hilti’s main website at the time. It was
                            designed to be totally responsive for all general
                            screen sizes.
                        </li>
                        <li>
                            Backend was designed on an MVC architecture based on
                            the Laravel framework.
                        </li>
                        <li>
                            Session check, store (on login/logout) for each page
                            was handled gracefully.
                        </li>
                        <li>
                            Errors in the system were caught and the users were
                            shown a webpage or error message popup (handled
                            server crashed and errors in many cases.
                        </li>
                        <li>
                            Another database on another server which connected
                            the branch to the original databases of Hilti
                            company was written in C#. Development and testing
                            of an automated procedure of the RESTful API that
                            was used to establish this connection between PHP
                            and C# was done by me.
                        </li>
                        <li>
                            Providing a timetable for the project by breaking it
                            down to specific milestones.
                        </li>
                        <li>
                            Also, by using scrum and agile methodologies,
                            distributed the tasks between 5 other junior web
                            developers and supervised them.
                        </li>
                        <li>
                            Design and development of an Admin panel that had
                            access to Products, Categories, Clients and many
                            other features and data entries of the web app.
                        </li>
                        <li>
                            All tasks, procedures in the desgined admin panel
                            and logic of all directories, files and classes were
                            documented and the necessary technical support for
                            the future IT specialists were provided.
                        </li>
                    </ol>
                </div>
            ),
            isFinished: true,
            isProject: true,
            type: "company",
            jobType: "Semi - Remote (Flexible Full Time)",
            role: "Lead Full Stack Web Developer",
            company: "Madavi",
            links: ["https://madavi.ir/", "https://www.hilti.com/"],
        },
        {
            period: {
                start: new Date(2019, 5, 30),
                end: new Date(2019, 9, 27),
            },
            title: [<span>Aesthetic Clinic Portfolio</span>],
            overview: [
                <div>
                    Development and design of a web based portfolio that
                    provided online consult and aesthetic surgery facts.
                </div>,
            ],
            background: (
                <div>
                    This portfolio website also had a weblog and through the
                    admin panel, new articles about online consultations, date
                    reservation information and other aesthetic facts, could be
                    posted.
                    <ul style={{ listStyle: "none" }}>
                        <li>Frontend: Vue.js, Bootstrap</li>
                        <li>Backend: Python (+Django)</li>
                        <li>DB: MongoDB</li>
                    </ul>
                </div>
            ),

            responsibilities: (
                <div>
                    <ol>
                        <li>
                            Designed, developed and tested the whole website.
                        </li>
                        <li>
                            Admin Panel design and blogging extentions were
                            coded from scratch.
                        </li>
                        <li>
                            Proper documentation and guiding materials were
                            created and online supports were provided in order
                            to help the appropriate personel work and get
                            familiar with the website’s mechanics.
                        </li>
                    </ol>
                </div>
            ),
            isFinished: true,
            isProject: true,
            type: "company",
            jobType: "Semi - Remote (Flexible Full Time)",
            role: "Full Stack Web Developer",
            company: "Dr. Nabavi's Aesthetic Clinic",
        },
    ],
    free2: {
        period: {
            start: new Date(2019, 10, 12),
            end: new Date(2019, 12, 20),
        },
        section: [<span>Freelancing</span>],
        title: [<span>Pyschology Clinic</span>],
        overview: [
            <div>
                Design and development of a web app that functioned as an
                archive of clients and doctors and allowed clients to schedule
                their own appointments through the system.
            </div>,
        ],
        background: (
            <div>
                <ul style={{ listStyle: "none" }}>
                    <li>Frontend: Bootstrap, HTML5</li>
                    <li>Backend: PHP (+ Laravel)</li>
                    <li>DB: MySQL</li>
                </ul>
            </div>
        ),

        responsibilities: (
            <div>
                <ol>
                    <li>
                        An Admin Panel was developed and designed to ease the
                        CRUD operations for the required data tables of the web
                        project.
                    </li>
                    <li>
                        Each doctor had a work schedule and they all were summed
                        up and shown in a monthly calendar provided in the
                        website so the clients could make their own appointments
                        through their user panel after or before logging in and
                        pick their own date, time and doctor.
                    </li>
                    <li>
                        The appointments and off-days of the doctors updated the
                        calendar and people were always up to day about the
                        shifts of the doctors and their availability.
                    </li>
                    <li>
                        Through the admin panel, holidays, off-days, future
                        appointments and client registeration were managable.
                    </li>
                </ol>
            </div>
        ),
        isFinished: true,
        isProject: true,
        type: "freelance",
        jobType: "Freelance Contract",
        role: "Full Stack Web Developer",
        company: "Salaamat Psychology Clinic",
    },
    pw: {
        period: {
            start: new Date(2019, 10, 12),
            end: new Date(2020, 3, 21),
        },
        section: [<span>Personal Business</span>],
        title: [<span>Parkwash</span>],
        overview: [
            <div>
                Details cannot be given here due to the privacy policy of the
                unfinished project, for the sake of all the original thinkers.
            </div>,
        ],
        background: (
            <div>
                Many computations were needed for the difficult optimization
                protocols for solving the traveling salesman problem across
                different geological locations inside a city.
                <ul style={{ listStyle: "none" }}>
                    <li>Frontend: ReactJs</li>
                    <li>Backend: Golang</li>
                    <li>DB: MySQL</li>
                    <li>Tools: Docker</li>
                </ul>
            </div>
        ),

        responsibilities: (
            <div>
                <ol>
                    <li>
                        Necessary technology selection, timechart estimation and
                        task distribution.
                    </li>
                    <li>
                        Different Traveling Salesman Problem solutions were
                        examined and implemented in the backend to find the most
                        efficient one.
                    </li>
                    <li>
                        Geological data acquisition through google maps APIs
                        were studied and some were applied.
                    </li>
                </ol>
            </div>
        ),
        note: (
            <span>
                The project was never finished due to lack of financial support
                and the involved developers not reaching a cosensus on the legal
                terms due to inconvergent ideas about the future career path of
                each individual.
            </span>
        ),
        isFinished: false,
        isProject: true,
        type: "personal",
        jobType: "Permanent / Entrepreneurship / Startup",
        role: "Senior Full Stack Web Developer, CEO",
        company: "Parkwash",
    },
    free3: {
        period: {
            start: new Date(2020, 3, 22),
            end: new Date(2020, 5, 30),
        },
        section: [<span>Freelancing</span>],
        title: [<span>Smart Tools</span>],
        overview: [
            <div>
                Provide technical consult on how to add extentions to an app,
                handle some troubleshootings and design a microservice
                architecture for the project (for future development).
            </div>,
        ],
        background: (
            <div>
                <ul style={{ listStyle: "none" }}>
                    <li>Frontend & Backend: React (in Typescript)</li>
                    <li>DB: Postgres + GraphQL</li>
                    <li>Tools: Docker, Redux, Apollo Client, GraphQL</li>
                </ul>
            </div>
        ),

        responsibilities: (
            <div>
                <ol>
                    <li>Troubleshoot some errors.</li>
                    <li>Apply redux to the React application.</li>
                    <li>
                        Redesign a microservice architecture for the project
                        described in sequence diagrams and a requirements
                        document.
                    </li>
                </ol>
            </div>
        ),
        isFinished: true,
        isProject: true,
        type: "freelance",
        jobType: "Freelance Contract",
        role: "Consultant Senior Developer",
        company: "Smart Tools",
    },
    uzt: {
        period: {
            start: new Date(2020, 8, 15),
            end: new Date(2021, 9, 25),
        },
        section: [<span>Uoozet Multimedia Corporation</span>],
        title: [<span>Technical Lead Senior Developer</span>],
        overview: [
            <div>
                The project is a kongregation of multiple online media sharing
                platforms for people as well as providing a simple chat system.
                Also, the company producing and promoting its original content
                (media) through this app as well.
            </div>,
        ],
        background: (
            <div>
                Two Servers were used: one for the main application and the
                other for data storage.
                <br />
                Content suggestion algorithm was requried which was developed
                personally by myself.
                <ul style={{ listStyle: "none" }}>
                    <li>Frontend: JQuery, SASS/SCSS</li>
                    <li>Main Server Backend: PHP (+ CakePHP)</li>
                    <li>File Storage Server Backend: Golang</li>
                    <li>DB: PostgreSQL</li>
                    <li>Android & IOS App: Xamarin</li>
                    <li>Tools: Docker</li>
                    <li>
                        Management Team Size: 3 (1 Android/IOS, 2 Full Stack)
                    </li>
                    <li>Management Strategy: Agile, Scrum</li>
                </ul>
            </div>
        ),

        responsibilities: (
            <ol>
                <li>
                    Necessary technology selection, timechart estimation and
                    task distribution between the IT development team.
                </li>
                <li>
                    The Database was expected to store the followings:
                    <ol>
                        <li>Users Accounts</li>
                        <li>
                            General Information of a medium (storing info like:
                            category, subcategory, likes, dislikes, views,
                            shared_count, favorited_count, medium_type,
                            owner_id, timestamps, etc.) Then in 5 other tables
                            (1 for each medium_type), a foreign_key was set and
                            more specific details were stored about that same
                            media; for example: if the medium was an episode of
                            a series/show, then in the corresponding table,
                            info_id of the series, the episode_number and
                            season_number and some other information were
                            stored.
                        </li>
                        <li>
                            Information table stored the title and description
                            of every entry in any part of the project and other
                            tables would get their info using info_id as a
                            foreign key; this was set so the title and
                            description of a medium or that of a user account,
                            wouldn’t be returned in a query call (hence
                            increasing the speed of queries using appropriate
                            search indexes) for a medium info especially when
                            some of the searching/sorting algorithms were not
                            looking for a string clause.
                        </li>
                        <li>
                            Online channels (approved content creators)
                            information
                        </li>
                        <li>General Config</li>
                        <li>Supporting languages</li>
                        <li>Media categories and subcategories</li>
                        <li>
                            Different watch lists of each user (Watch later and
                            custom mades as well)
                        </li>
                        <li>
                            Suggestable content for each user based on their
                            past actions (watched/liked/shared/favorited/saved
                            media and their selected categories, etc.)
                        </li>
                        <li>etc.</li>
                    </ol>
                </li>
                <li>
                    Switchable themes and color pallettes were designed. Some of
                    them were only togglable by the admin and some of these
                    themes (like light and dark for day/night mode) were
                    selectable by each user for themselves.
                </li>
                <li>
                    Developed and tested a suggestable media finder algorithm
                    for each user; it basically assigned a weight to a medium
                    that the user had watched/liked/shared/favorited/saved after
                    taking into consideration the user’s liked & blacklisted
                    categories. Then sorted the weighted list and stored the
                    suggestable content for later procedures in the database.
                </li>
                <li>
                    Search system across all these mediums with all these
                    categories and specific search parameters for each medium
                    type was totally developed and designed by me. This was a
                    complicated task and I decided to replicate the logic of SQL
                    queries but with a more graphical interactive interface for
                    the general user. The code was based in Javascript/JQuery.
                </li>
                <li>
                    Since the web app was to handle so many huge files, it was
                    unnecessary to store these media resources on the server of
                    the application itself; therefore, another server
                    specifically dedicated to store and retrieval of the files
                    was secured and the backend was written in Golang. These two
                    servers communicated with each other through APIs.
                </li>
                <li>Write design documents and test cases.</li>
                <li>Etc.</li>
            </ol>
        ),
        isFinished: true,
        type: "company",
        jobType: "Permanent (Flexible Full Time)",
        role: "CTO, Senior Full Stack Web Developer",
        company: "UoozET",
        links: ["https://www.uoozet.com/"],
    },
};
