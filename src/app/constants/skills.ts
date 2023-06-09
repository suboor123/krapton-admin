const SKILLS_OBJ = [
    {
        skill: 'Html',
    },
    {
        skill: 'CSS',
    },
    {
        skill: 'JavaScript',
    },
    {
        skill: 'Java',
    },
    {
        skill: 'SQL',
    },
    {
        skill: 'MySQL',
    },
    {
        skill: 'C++',
    },
    {
        skill: 'C#',
    },
    {
        skill: 'Swift',
    },
    {
        skill: 'Angular',
    },
    {
        skill: 'React',
    },
    {
        skill: 'Php',
    },
    {
        skill: 'Docker',
    },
    {
        skill: 'TypeScript',
    },
    {
        skill: 'Redux',
    },
    {
        skill: 'Bootstrap',
    },
    {
        skill: 'MongoDB',
    },
    {
        skill: 'RavenDB',
    },
    {
        skill: 'Django',
    },
    {
        skill: 'AppML',
    },
    {
        skill: 'Asp.Net',
    },
    {
        skill: 'Laravel',
    },
    {
        skill: 'VueJS',
    },
    {
        skill: 'Underscore.JS',
    },
    {
        skill: 'Perl',
    },
    {
        skill: 'Ruby Rails',
    },
    {
        skill: 'Nodejs',
    },
    {
        skill: 'Kotlin',
    },
    {
        skill: 'Rust',
    },
    {
        skill: 'NoSQL',
    },
    {
        skill: 'Scala',
    },
    {
        skill: 'Matlab',
    },
    {
        skill: 'Pascal Script',
    },
    {
        skill: 'Visual Basic .NET',
    },
    {
        skill: 'Fortran',
    },
    {
        skill: 'Cobol',
    },
    {
        skill: 'Lisp',
    },
    {
        skill: 'Dart',
    },
    {
        skill: 'Bash',
    },
    {
        skill: 'Haskell',
    },
    {
        skill: 'jQuery',
    },
    {
        skill: 'Elixir',
    },
    {
        skill: 'Prolog',
    },
    {
        skill: 'Absys',
    },
    {
        skill: 'Datalog',
    },
    {
        skill: 'Alma-0',
    },
    {
        skill: 'CoffeeScript',
    },
    {
        skill: 'D3js',
    },
    {
        skill: 'Objective-C',
    },
    {
        skill: 'Apache Camel',
    },
    {
        skill: 'Ansible',
    },
    {
        skill: 'Aurelia',
    },

    {
        skill: 'Phalcon',
    },

    {
        skill: 'AJAX',
    },
];

const PROGRAMMING_LANGUAGES = {
    'A# .NET': {
        description: '.NET implementation of the A# language',
        OOP: true,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'creating Windows desktop applications',
        market_share: null,
        installation: {
            windows: 'choco install asharp-dotnet',
            linux: 'sudo apt-get install asharp-dotnet',
            macOS: 'brew install asharp-dotnet',
        },
    },
    'A# (Axiom)': {
        description: 'Axiom implementation of the A# language',
        OOP: true,
        type: 'dynamically typed',
        speed: 'medium',
        mostly_used_for: 'symbolic computation and mathematical research',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install axiom',
            macOS: 'brew install axiom',
        },
    },
    'A-0 System': {
        description: 'One of the earliest compiler programming languages',
        OOP: false,
        type: 'not applicable',
        speed: 'slow',
        mostly_used_for: 'teaching and research',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'A+': {
        description: 'Array programming language',
        OOP: false,
        type: 'dynamically typed',
        speed: 'fast',
        mostly_used_for: 'numerical analysis and data processing',
        market_share: null,
        installation: {
            windows: 'choco install aplus',
            linux: 'sudo apt-get install aplus-fsf',
            macOS: 'brew install aplus',
        },
    },
    'A++': {
        description: 'Programming language for high-performance computing',
        OOP: true,
        type: 'statically typed',
        speed: 'very fast',
        mostly_used_for: 'scientific computing and simulation',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install aplus-plus',
            macOS: 'brew install aplus-plus',
        },
    },
    ABAP: {
        description: 'Programming language for SAP software development',
        OOP: true,
        type: 'statically typed',
        speed: 'medium',
        mostly_used_for: 'enterprise resource planning applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    ABC: {
        description: 'Imperative programming language and environment',
        OOP: false,
        type: 'dynamically typed',
        speed: 'slow',
        mostly_used_for: 'teaching and research',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'ABC ALGOL': {
        description: 'Dialect of the Algol 68 programming language',
        OOP: false,
        type: 'statically typed',
        speed: 'medium',
        mostly_used_for: 'teaching and research',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    ABLE: {
        description: 'Programming language for developing applications for the Amiga computer',
        OOP: true,
        type: 'dynamically typed',
        speed: 'medium',
        mostly_used_for: 'developing applications for the Amiga computer',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    ABSET: {
        description: 'Programming language for the development of software systems',
        OOP: true,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'developing software systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    ABSYS: {
        description: 'Programming language used in the ABSYS modeling system',
        OOP: false,
        type: 'not applicable',
        speed: 'not available',
        mostly_used_for: 'modeling and simulation',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    ACC: {
        description: 'Programming language developed for the Atari 8-bit family of computers',
        OOP: false,
        type: 'not applicable',
        speed: 'not available',
        mostly_used_for: 'developing software for Atari 8-bit computers',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Accent: {
        description: 'Programming language for database-centric web applications',
        OOP: true,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'database-centric web applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Ace DASL': {
        description: 'Educational programming language for novices',
        OOP: true,
        type: 'dynamically typed',
        speed: 'slow',
        mostly_used_for: 'teaching programming to novices',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    ACL2: {
        description: 'Programming language and theorem proving system based on Common Lisp',
        OOP: false,
        type: 'dynamically typed',
        speed: 'medium',
        mostly_used_for: 'formal verification of software and hardware systems',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install acl2',
            macOS: 'brew install acl2',
        },
    },
    'ACT-III': {
        description: 'Programming language developed for the Actor model of computation',
        OOP: false,
        type: 'not applicable',
        speed: 'not available',
        mostly_used_for: 'concurrent and distributed computing',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Action!': {
        description: 'Programming language developed specifically for game development on the Atari 8-bit family of computers',
        OOP: true,
        type: 'not applicable',
        speed: 'not available',
        mostly_used_for: 'game development on the Atari 8-bit family of computers',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    ActionScript: {
        description: 'Object-oriented programming language used primarily for the development of Adobe Flash content',
        OOP: true,
        type: 'dynamically typed',
        speed: 'fast',
        mostly_used_for: 'developing interactive web applications and games',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: 'brew install adobe-air-sdk; brew cask install flash-player-debugger',
        },
    },
    Ada: {
        description: 'High-level programming language used primarily in safety-critical and real-time systems',
        OOP: true,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'safety-critical and real-time systems',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install gcc-ada',
            macOS: 'brew install ada',
        },
    },
    Adenine: {
        description: 'Functional programming language developed specifically for bioinformatics',
        OOP: false,
        type: 'not applicable',
        speed: 'not available',
        mostly_used_for: 'bioinformatics and computational biology',
        market_share: null,
        installation: {
            windows: null,
            linux: 'pip install adenine',
            macOS: 'pip install adenine',
        },
    },
    Agda: {
        description: 'Dependently typed functional programming language and interactive theorem prover',
        OOP: false,
        type: 'dependently typed',
        speed: 'not available',
        mostly_used_for: 'formal verification of mathematical proofs and software systems',
        market_share: null,
        installation: {
            windows: 'choco install agda',
            linux: 'sudo apt-get install agda',
            macOS: 'brew install agda',
        },
    },
    'Agilent VEE': {
        description: 'Graphical programming language and environment used primarily for test and measurement automation',
        OOP: false,
        type: 'not applicable',
        speed: 'not available',
        mostly_used_for: 'test and measurement automation',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Agora: {
        description: 'Domain-specific language and compiler for developing decentralized applications on the Ethereum blockchain',
        OOP: true,
        type: 'dynamically typed',
        speed: 'not available',
        mostly_used_for: 'developing decentralized applications on the Ethereum blockchain',
        market_share: null,
        installation: {
            windows: null,
            linux: 'curl https://getsubstrate.io -sSf | bash -s -- --fast; source ~/.cargo/env; cargo install agora-binaries',
            macOS: 'curl https://getsubstrate.io -sSf | bash -s -- --fast; source ~/.cargo/env; cargo install agora-binaries',
        },
    },
    AIMMS: {
        description: 'Modeling language and development environment used primarily for optimization and supply chain management',
        OOP: true,
        type: 'declarative',
        speed: 'fast',
        mostly_used_for: 'optimization and supply chain management',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Alef: {
        description: 'Concurrent programming language developed specifically for distributed systems',
        OOP: false,
        type: 'not applicable',
        speed: 'not available',
        mostly_used_for: 'concurrent programming in distributed systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    ALF: {
        description: 'Programming language and environment used primarily for developing artificial intelligence systems',
        OOP: true,
        type: 'dynamically typed',
        speed: 'not available',
        mostly_used_for: 'developing artificial intelligence systems',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install alf',
            macOS: 'brew install alf',
        },
    },
    'ALGOL 58': {
        description: 'High-level programming language developed in the late 1950s and early 1960s',
        OOP: false,
        type: 'not applicable',
        speed: 'not available',
        mostly_used_for: 'scientific computing and algorithmic development',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'ALGOL 60': {
        description: 'High-level programming language developed in the late 1950s and early 1960s as a successor to ALGOL 58',
        OOP: false,
        type: 'statically typed',
        speed: 'not available',
        mostly_used_for: 'scientific computing and algorithmic development',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'ALGOL 68': {
        description: 'High-level programming language developed in the late 1960s as a successor to ALGOL 60',
        OOP: false,
        type: 'statically and dynamically typed',
        speed: 'not available',
        mostly_used_for: 'scientific computing, systems programming, and artificial intelligence',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install algol68g',
            macOS: 'brew install algol68g',
        },
    },
    'ALGOL W': {
        description: 'High-level programming language developed in the late 1970s as an extension to ALGOL 60',
        OOP: false,
        type: 'statically typed',
        speed: 'not available',
        mostly_used_for: null,
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Alice: {
        description: 'Educational programming language and environment designed to teach computer programming concepts',
        OOP: true,
        type: 'dynamically typed',
        speed: 'not available',
        mostly_used_for: 'teaching programming concepts',
        market_share: null,
        installation: {
            windows: 'choco install alice',
            linux: 'sudo apt-get install alice3',
            macOS: 'brew install alice',
        },
    },
    'Alma-0': {
        description: 'Programming language designed for concurrent, distributed systems',
        OOP: false,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'concurrent programming in distributed systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    AmbientTalk: {
        description: 'Object-oriented programming language designed for distributed computing',
        OOP: true,
        type: 'dynamically typed',
        speed: 'not available',
        mostly_used_for: 'distributed computing',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install ambienttalk',
            macOS: 'brew install ambienttalk',
        },
    },
    'Amiga E': {
        description: 'Programming language developed for the Amiga computer platform',
        OOP: true,
        type: 'dynamically typed',
        speed: 'not available',
        mostly_used_for: 'application development on the Amiga platform',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    AMOS: {
        description: 'Programming language and development environment used for game development on the Amiga platform',
        OOP: false,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'game development on the Amiga platform',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    AMPL: {
        description: 'Algebraic modeling language used for mathematical optimization and decision making',
        OOP: false,
        type: 'statically typed',
        speed: 'not available',
        mostly_used_for: 'mathematical optimization and decision making',
        market_share: null,
        installation: {
            windows: null,
            linux: 'wget https://ampl.com/dl/open/ampl.linux64.tgz; tar -xvzf ampl.linux64.tgz',
            macOS: null,
        },
    },
    APL: {
        description: 'Programming language designed for array processing and manipulation',
        OOP: false,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'array processing and manipulation, especially in mathematical and scientific computing',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install ngn-apl',
            macOS: null,
        },
    },
    "App Inventor for Android's visual block language": {
        description: 'Visual block programming language designed for creating mobile applications for Android devices',
        OOP: false,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'mobile application development for Android devices',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    AppleScript: {
        description: 'Scripting language developed by Apple for automating tasks on macOS',
        OOP: false,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'automation and scripting on macOS',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Arc: {
        description: 'Dialect of Lisp designed for rapid prototyping and web development',
        OOP: false,
        type: 'dynamically typed',
        speed: 'not available',
        mostly_used_for: 'web development and rapid prototyping',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install arc',
            macOS: 'brew install arc',
        },
    },
    ARexx: {
        description: 'Scripting language developed for the Amiga computer platform',
        OOP: false,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'automation and scripting on the Amiga platform',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Argus: {
        description: 'Programming language designed for distributed computing and fault tolerance',
        OOP: true,
        type: 'statically typed',
        speed: 'not available',
        mostly_used_for: 'distributed computing and fault tolerance',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install argus',
            macOS: 'brew install argus',
        },
    },
    AspectJ: {
        description: 'Aspect-oriented programming extension for the Java programming language',
        OOP: true,
        type: 'statically typed',
        speed: 'similar to Java',
        mostly_used_for: 'modularizing cross-cutting concerns in Java applications',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install aspectj',
            macOS: 'brew install aspectj',
        },
    },
    'Assembly language': {
        description: 'Low-level programming language that is converted into machine code',
        OOP: false,
        type: 'not available',
        speed: 'very fast',
        mostly_used_for: 'system-level programming, embedded systems, and performance-critical applications',
        market_share: null,
        installation: {
            windows: 'nasm -f win32 <filename.asm>',
            linux: 'sudo apt-get install nasm; nasm -f elf64 <filename.asm>; ld <filename.o> -o <output_file>',
            macOS: 'brew install nasm; nasm -f macho64 <filename.asm>; ld <filename.o> -o <output_file>',
        },
    },
    ATS: {
        description: 'Programming language with a type system that supports both static and dynamic typing',
        OOP: true,
        type: 'hybrid (statically and dynamically typed)',
        speed: 'comparable to C',
        mostly_used_for: 'system-level programming, web development, and concurrent programming',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install gcc; git clone https://github.com/githwxi/ATS-Postiats.git; cd ATS-Postiats; ./configure; make all_ngc',
            macOS: 'brew install gmp; brew install boehmgc; git clone https://github.com/githwxi/ATS-Postiats.git; cd ATS-Postiats; ./configure; make all_ngc',
        },
    },
    'Ateji PX': {
        description: 'Programming language that extends Java with support for parallel programming',
        OOP: true,
        type: 'statically typed',
        speed: 'similar to Java',
        mostly_used_for: 'parallel programming in Java applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    AutoHotkey: {
        description: 'Scripting language for Windows used to automate repetitive tasks and create macros',
        OOP: false,
        type: 'dynamically typed',
        speed: 'not available',
        mostly_used_for: 'automation and scripting on the Windows platform',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Autocoder: {
        description: 'Early assembly language developed by IBM in the 1950s',
        OOP: false,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'programming IBM mainframes in the 1950s and 1960s',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    AutoIt: {
        description: 'Scripting language for automating Windows GUI tasks and general scripting',
        OOP: false,
        type: 'dynamically typed',
        speed: 'not available',
        mostly_used_for: 'automation and scripting on the Windows platform',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'AutoLISP / Visual LISP': {
        description: 'Dialect of the Lisp programming language used in AutoCAD',
        OOP: false,
        type: 'dynamically typed',
        speed: 'not available',
        mostly_used_for: 'customizing and extending AutoCAD functionality',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Averest: {
        description: 'Software verification platform with a specification language and model checker',
        OOP: false,
        type: 'statically typed',
        speed: 'not available',
        mostly_used_for: 'formal verification of software systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    AWK: {
        description: 'Pattern-matching programming language commonly used for text processing',
        OOP: false,
        type: 'dynamically typed',
        speed: 'not available',
        mostly_used_for: 'text processing and data extraction',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install gawk',
            macOS: 'brew install gawk',
        },
    },
    Axum: {
        description: 'Concurrent programming language developed by Microsoft Research',
        OOP: true,
        type: 'statically typed',
        speed: 'not available',
        mostly_used_for: 'building distributed and parallel systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    B: {
        description: 'Root of the BCPL language family and predecessor to C',
        OOP: false,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'systems programming and general-purpose programming in the 1970s',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Babbage: {
        description: 'Educational programming language designed to teach computer science concepts',
        OOP: false,
        type: 'dynamically typed',
        speed: 'not available',
        mostly_used_for: 'teaching computer science concepts and basic programming',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install babbage',
            macOS: 'brew install babbage',
        },
    },
    Ballerina: {
        description:
            'Ballerina is an open-source programming language for the cloud that makes it easier to use, combine, and create network services.',
        OOP: false,
        type: 'statically typed',
        speed: 'comparable to Java',
        mostly_used_for: 'writing integrations and network services',
        market_share: null,
        installation: {
            windows: 'Download an installer from https://ballerina.io/downloads/',
            linux: 'Download an installer from https://ballerina.io/downloads/',
            macOS: 'Download an installer from https://ballerina.io/downloads/',
        },
    },
    Bash: {
        description: 'Unix shell and command language used for scripting and executing commands',
        OOP: false,
        type: 'not applicable',
        speed: 'not available',
        mostly_used_for: 'shell scripting, automation, and system administration tasks',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install bash',
            macOS: 'pre-installed',
        },
    },
    BASIC: {
        description: "Beginner's All-purpose Symbolic Instruction Code, a family of high-level programming languages",
        OOP: false,
        type: 'dynamically typed',
        speed: 'not available',
        mostly_used_for: 'teaching programming concepts and developing simple applications',
        market_share: null,
        installation: {
            windows: 'pre-installed or available through Visual Studio',
            linux: 'sudo apt-get install bwbasic',
            macOS: 'pre-installed',
        },
    },
    bc: {
        description: 'Interactive command-line calculator with support for arbitrary precision arithmetic',
        OOP: false,
        type: 'not applicable',
        speed: 'not available',
        mostly_used_for: 'performing calculations and mathematical operations from the command line',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install bc',
            macOS: 'pre-installed',
        },
    },
    BCPL: {
        description: 'Basic Combined Programming Language, a precursor to C and ancestor of the B and C languages',
        OOP: false,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'systems programming and general-purpose programming in the 1960s and 1970s',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    BeanShell: {
        description: 'Small, embeddable Java source interpreter with object scripting language features',
        OOP: true,
        type: 'dynamically typed',
        speed: 'not available',
        mostly_used_for: 'scripting within Java applications and environments',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install beanshell',
            macOS: 'brew install beanshell',
        },
    },
    'Batch (Windows/Dos)': {
        description: 'Command-line interpreter and batch file processor included with Microsoft Windows and MS-DOS',
        OOP: false,
        type: 'not applicable',
        speed: 'not available',
        mostly_used_for: 'performing system administration tasks and automating repetitive command-line tasks',
        market_share: null,
        installation: {
            windows: 'pre-installed',
            linux: null,
            macOS: null,
        },
    },
    Bertrand: {
        description: 'Educational programming language designed to teach computer science concepts',
        OOP: false,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'teaching computer science concepts and basic programming',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    BETA: {
        description: 'Object-oriented programming language with emphasis on flexible modular programming and software correctness',
        OOP: true,
        type: 'statically typed',
        speed: 'not available',
        mostly_used_for: 'developing complex software systems and applications that require a high degree of software correctness',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install beta',
            macOS: null,
        },
    },
    Bigwig: {
        description: 'Declarative programming language for web development and content management',
        OOP: false,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'developing dynamic web applications, content management systems, and other web-based software',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: 'brew install bigwig',
        },
    },
    Bistro: {
        description: 'Domain-specific language for bioinformatics and computational biology',
        OOP: false,
        type: 'not available',
        speed: 'not available',
        mostly_used_for:
            'performing bioinformatics and computational biology tasks such as sequence analysis, data manipulation, and statistical analysis',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    BitC: {
        description: 'Systems programming language with a focus on safety, security, and performance',
        OOP: true,
        type: 'statically typed',
        speed: 'not available',
        mostly_used_for: 'developing system software and operating systems that require high levels of safety and security',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    BLISS: {
        description: 'Systems programming language designed to be easy to use and highly portable',
        OOP: false,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'developing system software and applications that require high levels of portability and ease-of-use',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install bliss',
            macOS: null,
        },
    },
    Blue: {
        description: 'High-level programming language designed for teaching and learning programming concepts',
        OOP: true,
        type: 'statically typed',
        speed: 'not available',
        mostly_used_for: 'teaching programming concepts to beginners and students',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Bon: {
        description: 'Programming language designed to be simple, easy to learn, and suitable for beginners',
        OOP: false,
        type: 'dynamically typed',
        speed: 'not available',
        mostly_used_for: 'teaching programming concepts to beginners and developing small programs',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Boo: {
        description: 'Object-oriented programming language with a focus on efficient and expressive syntax',
        OOP: true,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'developing software systems and applications that require high performance and expressive syntax',
        market_share: null,
        installation: {
            windows: 'choco install boo.lang',
            linux: 'sudo apt-get install boo',
            macOS: 'brew install boo',
        },
    },
    Boomerang: {
        description: 'Retargetable decompiler that generates high-level code from binary executables',
        OOP: false,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'decompiling binary executables to aid in reverse engineering and malware analysis',
        market_share: null,
        installation: {
            windows: 'choco install boomerang',
            linux: 'sudo apt-get install boomerang',
            macOS: 'brew install boomerang',
        },
    },
    'Bourne shell': {
        description: 'Command-line shell and scripting language for Unix-based operating systems',
        OOP: false,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'writing command-line scripts and automating system tasks on Unix-based operating systems',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y sh',
            macOS: null,
        },
    },
    bash: {
        description: 'Command-line shell and scripting language for Unix-based operating systems',
        OOP: false,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'writing command-line scripts and automating system tasks on Unix-based operating systems',
        market_share: null,
        installation: {
            windows: "choco install git.install --params '/GitAndUnixToolsOnPath'",
            linux: 'sudo apt-get install -y bash',
            macOS: 'brew install bash',
        },
    },
    ksh: {
        description: 'Command-line shell and scripting language for Unix-based operating systems',
        OOP: false,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'writing command-line scripts and automating system tasks on Unix-based operating systems',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y ksh',
            macOS: 'brew install ksh',
        },
    },
    BREW: {
        description: 'Package manager for macOS and Linux systems',
        OOP: false,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'installing and managing software packages on macOS and Linux systems',
        market_share: null,
        installation: {
            windows: null,
            linux: "sudo apt-get install -y curl && /bin/bash -c '$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)'",
            macOS: "/bin/bash -c '$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)'",
        },
    },
    BPEL: {
        description: 'XML-based language for describing business processes and workflows',
        OOP: false,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'describing and automating business processes and workflows',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    C: {
        description: 'General-purpose programming language known for its efficiency and low-level memory management capabilities',
        OOP: false,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for:
            'system programming, developing operating systems, embedded systems, and other applications that require high performance and direct hardware access',
        market_share: null,
        installation: {
            windows: 'choco install mingw',
            linux: 'sudo apt-get install -y gcc',
            macOS: 'brew install gcc',
        },
    },
    'C--': {
        description: 'Low-level programming language with a focus on performance and efficiency',
        OOP: false,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for:
            'system programming, developing operating systems, embedded systems, and other applications that require high performance and direct hardware access',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'C++': {
        description:
            'General-purpose programming language that builds on C with support for object-oriented programming and other features',
        OOP: true,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for:
            'system programming, game development, scientific computing, and other applications that require high performance and direct hardware access',
        market_share: null,
        installation: {
            windows: 'choco install mingw',
            linux: 'sudo apt-get install -y g++',
            macOS: 'brew install gcc',
        },
    },
    'C#': {
        description: 'Modern, object-oriented programming language designed for developing applications on the .NET platform',
        OOP: true,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for:
            'developing Windows desktop applications, web applications, game development, and other applications that target the .NET platform',
        market_share: null,
        installation: {
            windows: 'choco install dotnetcore-sdk',
            linux: 'sudo apt-get install -y apt-transport-https && wget https://packages.microsoft.com/config/debian/10/packages-microsoft-prod.deb -O packages-microsoft-prod.deb && sudo dpkg -i packages-microsoft-prod.deb && sudo apt-get update && sudo apt-get install -y dotnet-sdk-5.0',
            macOS: 'brew install dotnet-sdk',
        },
    },
    'C/AL': {
        description: 'Client/server programming language used with Microsoft Dynamics NAV (formerly Navision) ERP software',
        OOP: true,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'customizing and creating modules for Microsoft Dynamics NAV ERP software',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Caché ObjectScript': {
        description: 'Object-oriented programming language used with the InterSystems Caché database management system',
        OOP: true,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'developing applications that interact with the InterSystems Caché database management system',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'C Shell': {
        description: 'Unix shell and command language with C-like syntax',
        OOP: false,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'command line scripting and interactive use in Unix-based systems',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y csh',
            macOS: 'brew install tcsh',
        },
    },
    Caml: {
        description:
            'Family of programming languages, including OCaml and Standard ML, that use type inference and functional programming concepts',
        OOP: false,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for:
            'developing compilers, interpreters, theorem provers, and other applications that benefit from strong typing and functional programming concepts',
        market_share: null,
        installation: {
            windows: 'choco install ocaml',
            linux: 'sudo apt-get install -y ocaml',
            macOS: 'brew install ocaml',
        },
    },
    Cayenne: {
        description: 'Java-based open-source framework for building database-driven applications',
        OOP: true,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'developing Java-based applications that interact with relational databases',
        market_share: null,
        installation: {
            windows: 'choco install cayenne-modeler',
            linux: 'sudo apt-get install -y cayenne-modeler',
            macOS: 'brew install cayenne-modeler',
        },
    },
    CDuce: {
        description: 'Functional programming language that combines ML-style pattern matching with XML processing capabilities',
        OOP: false,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'processing, querying, and transforming XML data in a functional programming environment',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y cduce',
            macOS: 'brew install cduce',
        },
    },
    Cecil: {
        description: 'Object-oriented programming language that supports multiple inheritance and dynamic loading of classes',
        OOP: true,
        type: 'dynamically typed',
        speed: 'fast',
        mostly_used_for:
            'developing software applications that require object-oriented programming concepts such as encapsulation, inheritance, and polymorphism',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y cecil',
            macOS: 'brew install cecil',
        },
    },
    Cesil: {
        description: 'Programming language that features a simple syntax and was designed for teaching introductory programming courses',
        OOP: false,
        type: 'not available',
        speed: 'not available',
        mostly_used_for: 'teaching introductory programming concepts and basic algorithmic design',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y cesil',
            macOS: null,
        },
    },
    Ceylon: {
        description:
            'Programming language designed to be highly readable and modular, with support for both object-oriented and functional programming paradigms',
        OOP: true,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'developing web applications and enterprise software that require stable and scalable code',
        market_share: null,
        installation: {
            windows: 'choco install ceylon',
            linux: 'sudo apt-get install -y ceylon',
            macOS: 'brew install ceylon',
        },
    },
    CFEngine: {
        description: 'Configuration management system for configuring and maintaining large-scale IT infrastructures',
        OOP: false,
        type: 'not available',
        speed: 'fast',
        mostly_used_for: 'configuring and managing large-scale IT infrastructures such as data centers and cloud environments',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y cfengine-community',
            macOS: 'brew install cfengine',
        },
    },
    CFML: {
        description: 'ColdFusion Markup Language, a tag-based scripting language used to build web applications and dynamic websites',
        OOP: true,
        type: 'dynamically typed',
        speed: 'moderate',
        mostly_used_for: 'developing web applications and dynamic websites with a database backend',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y railo4',
            macOS: 'brew install railo4',
        },
    },
    Cg: {
        description: 'High-level shading language developed by Nvidia for programming graphics processing units (GPUs)',
        OOP: false,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for:
            'developing and optimizing shader programs for use in computer games, virtual reality experiences, and other GPU-accelerated applications',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y nvidia-cg-toolkit',
            macOS: 'brew install caskformula/caskformula/nvidia-cg-toolkit',
        },
    },
    Ch: {
        description: 'C/C++ interpreter and scripting language',
        OOP: false,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'rapid prototyping, numerical computing, system scripting, and embedded applications',
        market_share: null,
        installation: {
            windows: 'choco install ch',
            linux: 'sudo apt-get install -y ch',
            macOS: 'brew install ch',
        },
    },
    Chapel: {
        description:
            'High-level parallel programming language designed to increase productivity and portability while also delivering high performance on both traditional and high-performance computing architectures',
        OOP: true,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'parallel programming and high-performance computing',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y chapel',
            macOS: 'brew install chapel',
        },
    },
    Charity: {
        description: 'Functional programming language with a focus on program transformation and optimization',
        OOP: false,
        type: 'dynamically typed',
        speed: 'moderate',
        mostly_used_for:
            'program transformation and optimization, symbolic computation, theorem proving, and artificial intelligence applications',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y charity',
            macOS: 'brew install charity',
        },
    },
    Charm: {
        description:
            'The Charm++ parallel programming framework, which provides a message-driven runtime system and programming model for building scalable and high-performance parallel applications',
        OOP: true,
        type: 'dynamically typed',
        speed: 'fast',
        mostly_used_for:
            'developing highly-scalable parallel applications in fields such as scientific computing, data analytics, and machine learning',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y charm',
            macOS: 'brew install charm',
        },
    },
    Chef: {
        description: 'Configuration management and automation platform that can be used to manage infrastructure as code',
        OOP: false,
        type: 'not applicable',
        speed: 'not applicable',
        mostly_used_for: 'automating infrastructure configuration and deployment in a wide range of environments',
        market_share: null,
        installation: {
            windows: null,
            linux: 'curl https://omnitruck.chef.io/install.sh | sudo bash -s -- -P chef-workstation',
            macOS: 'curl https://omnitruck.chef.io/install.sh | sudo bash -s -- -P chef-workstation',
        },
    },
    CHILL: {
        description: 'High-level programming language designed for industrial process control systems',
        OOP: true,
        type: 'statically typed',
        speed: 'moderate',
        mostly_used_for:
            'developing software for industrial process control systems, such as those used in manufacturing and power generation',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y chill',
            macOS: null,
        },
    },
    'CHIP-8': {
        description: 'Interpreter and virtual machine that runs a simplified, byte-code based programming language',
        OOP: false,
        type: 'not applicable',
        speed: 'slow',
        mostly_used_for: 'developing simple games and applications on older computers and video game consoles',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y chip8',
            macOS: 'brew install chip8',
        },
    },
    ChucK: {
        description: 'Concurrent and strongly timed audio programming language for real-time synthesis, composition, and performance',
        OOP: true,
        type: 'strongly typed',
        speed: 'moderate',
        mostly_used_for: 'real-time audio synthesis, composition, and performance',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y chuck',
            macOS: 'brew install chuck',
        },
    },
    CICS: {
        description: 'Transaction processing system that facilitates online processing of data and transactions in large enterprises',
        OOP: false,
        type: 'not applicable',
        speed: 'fast',
        mostly_used_for: 'processing online transactions in large enterprises, such as banks and financial institutions',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Cilk: {
        description: 'Multithreaded extension to the C programming language designed for parallel processing',
        OOP: false,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'parallel programming and high-performance computing applications',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y cilk',
            macOS: 'brew install cilk',
        },
    },
    CL: {
        description: 'Dynamically-typed general-purpose programming language that supports multiple programming paradigms',
        OOP: true,
        type: 'dynamically typed',
        speed: 'moderate',
        mostly_used_for:
            'developing a wide range of software applications, including web development, scientific computing, and artificial intelligence',
        market_share: null,
        installation: {
            windows: 'curl https://beta.quicklisp.org/quicklisp.lisp -o quicklisp.lisp && sbcl --load quicklisp.lisp',
            linux: 'curl https://beta.quicklisp.org/quicklisp.lisp -o quicklisp.lisp && sbcl --load quicklisp.lisp',
            macOS: 'curl https://beta.quicklisp.org/quicklisp.lisp -o quicklisp.lisp && sbcl --load quicklisp.lisp',
        },
    },
    Claire: {
        description:
            'Object-oriented programming language designed for building expert systems and other artificial intelligence applications',
        OOP: true,
        type: 'dynamically typed',
        speed: 'moderate',
        mostly_used_for: 'building expert systems and other artificial intelligence applications',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y claire',
            macOS: 'brew install claire',
        },
    },
    Clarion: {
        description: 'Integrated development environment and programming language used in database applications development',
        OOP: true,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'developing database applications, especially for Windows-based systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Clean: {
        description: 'Functional programming language with a focus on program correctness and parallelism',
        OOP: false,
        type: 'strongly typed',
        speed: 'fast',
        mostly_used_for: 'developing high-assurance software applications and parallel processing',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y clean',
            macOS: 'brew install clean',
        },
    },
    Clipper: {
        description: 'Compiler and tool set used for developing database applications',
        OOP: false,
        type: 'not applicable',
        speed: 'moderate',
        mostly_used_for: 'developing database applications, especially for xBase systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    CLIST: {
        description: 'Command List, a procedural language used on IBM mainframe operating systems',
        OOP: false,
        type: 'not applicable',
        speed: 'moderate',
        mostly_used_for: 'writing batch job control scripts and system utilities on IBM mainframe operating systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Clojure: {
        description: 'Dialect of Lisp that runs on the Java Virtual Machine and emphasizes functional programming',
        OOP: true,
        type: 'dynamically typed',
        speed: 'moderate',
        mostly_used_for: 'developing web applications, distributed systems, and data analysis applications',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y clojure',
            macOS: 'brew install clojure',
        },
    },
    CLU: {
        description: 'High-level programming language with a focus on abstraction and data structuring',
        OOP: true,
        type: 'strongly typed',
        speed: 'moderate',
        mostly_used_for: 'developing operating systems, compilers, and other system software',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y clu',
            macOS: 'brew install clu',
        },
    },
    'CMS-2': {
        description: 'Programming language used for military and aerospace applications',
        OOP: false,
        type: 'not applicable',
        speed: 'moderate',
        mostly_used_for: 'developing safety-critical software for military and aerospace applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    COBOL: {
        description: 'High-level programming language used primarily in business and financial applications',
        OOP: false,
        type: 'statically typed',
        speed: 'moderate',
        mostly_used_for: 'developing business and financial applications, especially on mainframe systems',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y open-cobol',
            macOS: 'brew install gnu-cobol',
        },
    },
    Cobra: {
        description: 'Object-oriented programming language with a focus on simplicity and productivity',
        OOP: true,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'developing desktop applications, web services, and system utilities',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y cobra',
            macOS: 'brew install cobra',
        },
    },
    CoffeeScript: {
        description: 'Programming language that compiles into JavaScript and aims to simplify web development',
        OOP: true,
        type: 'statically typed',
        speed: 'moderate',
        mostly_used_for: 'developing client-side web applications',
        market_share: null,
        installation: {
            windows: 'npm install -g coffee-script',
            linux: 'sudo npm install -g coffee-script',
            macOS: 'npm install -g coffee-script',
        },
    },
    Cola: {
        description: 'Programming language used for building complex business logic and data processing systems',
        OOP: true,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'developing business logic and data processing systems',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo snap install cola',
            macOS: 'brew install cola-lang',
        },
    },
    ColdC: {
        description: 'Object-oriented programming language used for building MUDs and other interactive online environments',
        OOP: true,
        type: 'dynamically typed',
        speed: 'fast',
        mostly_used_for: 'developing multiplayer online games, virtual worlds, and social applications',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y coldc',
            macOS: 'brew install coldc',
        },
    },
    ColdFusion: {
        description: 'Web development platform used to build dynamic web applications and websites',
        OOP: true,
        type: 'dynamically typed',
        speed: 'moderate',
        mostly_used_for: 'developing web applications and dynamic websites',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y coldfusion',
            macOS: 'brew install adobe-coldfusion',
        },
    },
    COMAL: {
        description: 'Educational programming language primarily used to teach programming concepts to beginners',
        OOP: false,
        type: 'dynamically typed',
        speed: 'moderate',
        mostly_used_for: 'teaching programming concepts to beginners',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y comal',
            macOS: null,
        },
    },
    'Combined Programming Language': {
        description: 'High-level programming language used for systems programming and real-time applications',
        OOP: true,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'developing system software and real-time applications',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y cpl',
            macOS: null,
        },
    },
    COMIT: {
        description: 'High-level programming language used for business data processing and application development',
        OOP: false,
        type: 'compiled language',
        speed: 'fast',
        mostly_used_for: 'business data processing and application development',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Common Intermediate Language': {
        description: 'Low-level programming language used as an intermediate representation for .NET languages',
        OOP: true,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'intermediate representation for .NET languages',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Common Lisp': {
        description: 'High-level programming language used for artificial intelligence, machine learning, and scientific computing',
        OOP: true,
        type: 'dynamically typed',
        speed: 'moderate',
        mostly_used_for: 'artificial intelligence, machine learning, and scientific computing',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y clisp',
            macOS: 'brew install clisp',
        },
    },
    COMPASS: {
        description: 'Programming language used for developing database applications and business systems',
        OOP: false,
        type: 'interpreted language',
        speed: 'moderate',
        mostly_used_for: 'developing database applications and business systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Component Pascal': {
        description: 'High-level programming language used for developing system and application software',
        OOP: true,
        type: 'statically typed',
        speed: 'moderate',
        mostly_used_for: 'developing system and application software',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y gpc',
            macOS: 'brew install gpc',
        },
    },
    'Constraint Handling Rules': {
        description: 'Logic programming language used for solving constraint satisfaction problems',
        OOP: false,
        type: 'declarative language',
        speed: 'moderate',
        mostly_used_for: 'solving constraint satisfaction problems',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y chr',
            macOS: null,
        },
    },
    Converge: {
        description: 'High-level programming language used for developing network and distributed systems',
        OOP: true,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'developing network and distributed systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Cool: {
        description: 'Object-oriented programming language used for teaching fundamental concepts of computer science',
        OOP: true,
        type: 'statically typed',
        speed: 'moderate',
        mostly_used_for: 'teaching fundamental concepts of computer science',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y cool',
            macOS: null,
        },
    },
    Coq: {
        description: 'Theorem proving programming language used for formal verification of software and hardware systems',
        OOP: false,
        type: 'dependently typed',
        speed: 'slow',
        mostly_used_for: 'formal verification of software and hardware systems',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y coq',
            macOS: 'brew install coq',
        },
    },
    'Coral 66': {
        description: 'High-level programming language used for developing safety-critical and real-time systems',
        OOP: false,
        type: 'statically typed',
        speed: 'moderate',
        mostly_used_for: 'developing safety-critical and real-time systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Corn: {
        description: 'Domain-specific programming language used for scripting and automation tasks',
        OOP: false,
        type: 'interpreted language',
        speed: 'slow',
        mostly_used_for: 'scripting and automation tasks',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y corn',
            macOS: null,
        },
    },
    CorVision: {
        description: 'Programming language used for developing computer vision applications',
        OOP: false,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'developing computer vision applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    COWSEL: {
        description: 'High-level programming language used for developing process control systems',
        OOP: false,
        type: 'statically typed',
        speed: 'moderate',
        mostly_used_for: 'developing process control systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    CPL: {
        description: 'General-purpose high-level programming language developed in the 1960s',
        OOP: false,
        type: 'compiled language',
        speed: 'moderate',
        mostly_used_for: 'general-purpose programming',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    csh: {
        description: 'Unix shell used as a command-line interpreter',
        OOP: false,
        type: 'interpreted language',
        speed: 'moderate',
        mostly_used_for: 'command-line scripting and automation tasks',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y csh',
            macOS: null,
        },
    },
    CSP: {
        description: 'Formal specification language used for describing concurrent systems',
        OOP: false,
        type: 'formal language',
        speed: 'n/a',
        mostly_used_for: 'formal specification of concurrent systems',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y csp',
            macOS: null,
        },
    },
    Csound: {
        description: 'Programming language used for sound synthesis and digital signal processing',
        OOP: false,
        type: 'interpreted language',
        speed: 'moderate',
        mostly_used_for: 'sound synthesis and digital signal processing',
        market_share: null,
        installation: {
            windows: 'choco install csound',
            linux: 'sudo apt-get install -y csound',
            macOS: 'brew install csound',
        },
    },
    CUDA: {
        description: 'Parallel computing platform and programming model for NVIDIA GPUs',
        OOP: true,
        type: 'statically typed',
        speed: 'very fast',
        mostly_used_for: 'parallel computing on NVIDIA GPUs',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y nvidia-cuda-toolkit',
            macOS: 'brew install cuda',
        },
    },
    Curl: {
        description: 'Command-line tool and library used for transferring data with URLs',
        OOP: false,
        type: 'interpreted language',
        speed: 'moderate',
        mostly_used_for: 'transferring data with URLs',
        market_share: null,
        installation: {
            windows: 'choco install curl',
            linux: 'sudo apt-get install -y curl',
            macOS: 'brew install curl',
        },
    },
    Curry: {
        description: 'Functional logic programming language based on mathematical logic',
        OOP: false,
        type: 'statically typed',
        speed: 'moderate',
        mostly_used_for: 'functional logic programming',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y curry-base',
            macOS: 'brew install curry',
        },
    },
    Cyclone: {
        description: 'Statically-typed systems programming language designed to be memory safe',
        OOP: true,
        type: 'statically typed',
        speed: 'very fast',
        mostly_used_for: 'systems programming',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y cyclone',
            macOS: 'brew install cyclone',
        },
    },
    Cython: {
        description: 'Compiled programming language that combines Python and C/C++',
        OOP: true,
        type: 'statically and dynamically typed',
        speed: 'very fast',
        mostly_used_for: 'writing C extensions for Python, high-performance computing',
        market_share: null,
        installation: {
            windows: 'pip install cython',
            linux: 'sudo apt-get install -y cython',
            macOS: 'brew install cython',
        },
    },
    D: {
        description: 'Systems programming language with C-like syntax and modern features',
        OOP: true,
        type: 'statically typed',
        speed: 'very fast',
        mostly_used_for: 'systems programming, high-performance computing',
        market_share: null,
        installation: {
            windows: 'choco install dmd',
            linux: 'sudo apt-get install -y dlang',
            macOS: 'brew install dmd',
        },
    },
    DASL: {
        description: 'Data aggregation language used for statistical analysis',
        OOP: false,
        type: 'interpreted language',
        speed: 'moderate',
        mostly_used_for: 'statistical analysis and data aggregation',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y dasl',
            macOS: null,
        },
    },
    Dart: {
        description: 'Client-optimized programming language used for building web and mobile applications',
        OOP: true,
        type: 'statically typed',
        speed: 'moderate',
        mostly_used_for: 'building web and mobile applications',
        market_share: null,
        installation: {
            windows: 'choco install dart-sdk',
            linux: 'sudo apt-get install -y dart',
            macOS: 'brew install dart',
        },
    },
    DataFlex: {
        description: 'Rapid application development language used for creating business applications',
        OOP: true,
        type: 'both statically and dynamically typed',
        speed: 'moderate',
        mostly_used_for: 'developing business applications',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y dataflex',
            macOS: null,
        },
    },
    Datalog: {
        description: 'Declarative logic programming language used for querying databases',
        OOP: false,
        type: 'declarative language',
        speed: 'moderate',
        mostly_used_for: 'querying databases and knowledge representation',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y datalog',
            macOS: 'brew install datalog',
        },
    },
    DATATRIEVE: {
        description: 'Relational database query language used for managing data on IBM mainframe systems',
        OOP: false,
        type: 'query language',
        speed: 'moderate',
        mostly_used_for: 'managing data on IBM mainframe systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    dBase: {
        description: 'Relational database management system and programming language used for business applications',
        OOP: false,
        type: 'interpreted language',
        speed: 'moderate',
        mostly_used_for: 'developing business applications and managing data',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y dbase',
            macOS: null,
        },
    },
    dc: {
        description: 'Command-line calculator that uses a postfix notation syntax',
        OOP: false,
        type: 'interpreted language',
        speed: 'fast',
        mostly_used_for: 'performing arithmetic calculations and conversions',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y dc',
            macOS: 'brew install dc',
        },
    },
    DCL: {
        description: 'Command-line interface scripting language used for managing VMS systems',
        OOP: false,
        type: 'interpreted language',
        speed: 'moderate',
        mostly_used_for: 'managing VMS systems and automating administrative tasks',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Delphi: {
        description: 'Object-oriented programming language and integrated development environment used for Windows development',
        OOP: true,
        type: 'compiled language',
        speed: 'fast',
        mostly_used_for: 'Windows desktop and server applications, database programming, and web development',
        market_share: null,
        installation: {
            windows: 'choco install delphi',
            linux: null,
            macOS: null,
        },
    },
    DinkC: {
        description: 'Scripting language used for developing video games using the Dink Smallwood game engine',
        OOP: false,
        type: 'interpreted language',
        speed: 'moderate',
        mostly_used_for: 'developing custom scripts and modifying game behavior in Dink Smallwood',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y dink-drm && sudo apt-get install -y dink-dwfc',
            macOS: 'brew install dink',
        },
    },
    DIBOL: {
        description: 'Programming language used for business applications and database management',
        OOP: false,
        type: 'compiled language',
        speed: 'moderate',
        mostly_used_for: 'developing business applications and managing databases',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Draco: {
        description: 'High-level programming language designed for scientific and engineering applications',
        OOP: true,
        type: 'dynamically typed',
        speed: 'moderate',
        mostly_used_for: 'scientific and engineering applications, numerical computing, and data analysis',
        market_share: null,
        installation: {
            windows: 'pip install draco-lang',
            linux: 'pip install draco-lang',
            macOS: 'pip install draco-lang',
        },
    },
    DRAKON: {
        description: 'Visual programming language used for creating business applications',
        OOP: false,
        type: 'not applicable',
        speed: 'unknown',
        mostly_used_for: 'developing business and enterprise applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Dylan: {
        description: 'Object-oriented programming language designed for ease of use and high performance',
        OOP: true,
        type: 'dynamically typed',
        speed: 'fast',
        mostly_used_for: 'web development, multimedia applications, and artificial intelligence',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install dylan',
            macOS: 'brew install dylan',
        },
    },
    DYNAMO: {
        description: 'System simulation programming language used in the field of operations management and industrial engineering',
        OOP: false,
        type: 'not applicable',
        speed: 'unknown',
        mostly_used_for: 'system simulation, optimization, and decision-making',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    E: {
        description: 'General-purpose, concurrent, and functional programming language with a focus on distributed computing',
        OOP: true,
        type: 'dynamically typed',
        speed: 'fast',
        mostly_used_for: 'distributed computing, web development, and general-purpose programming',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install e-lang',
            macOS: 'brew install e-lang',
        },
    },
    'Easy PL/I': {
        description: 'A versatile procedural and object-oriented programming language with a focus on business and scientific applications',
        OOP: true,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'business and scientific applications',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install easy-pl1',
            macOS: null,
        },
    },
    'EASYTRIEVE PLUS': {
        description: 'A report generator and data retrieval system primarily used for processing mainframe data',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'report generation and data retrieval on mainframe systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    ECMAScript: {
        description: 'A scripting language used primarily for developing web applications and client-side scripts',
        OOP: true,
        type: 'dynamically typed',
        speed: 'medium',
        mostly_used_for: 'web development, including client-side scripting and server-side development using Node.js',
        market_share: null,
        installation: {
            windows: 'npm install -g es-check',
            linux: 'sudo apt-get install nodejs; npm install -g es-check',
            macOS: 'brew install node; npm install -g es-check',
        },
    },
    'Edinburgh IMP': {
        description: 'A high-level imperative programming language developed in the 1960s for teaching computer science concepts',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'teaching computer science concepts',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install imp',
            macOS: 'brew install imp',
        },
    },
    EGL: {
        description: 'A high-level, object-oriented programming language designed for developing web applications',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing web applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Eiffel: {
        description: 'An object-oriented programming language designed for developing high-quality, long-lasting software',
        OOP: true,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'developing high-quality, long-lasting software',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install eiffelstudio',
            macOS: 'brew install eiffelstudio',
        },
    },
    ELAN: {
        description: 'A multimedia annotation language used primarily for linguistic research',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'multimedia annotation in linguistic research',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install elan',
            macOS: 'brew install elan',
        },
    },
    Elixir: {
        description: 'A functional, concurrent programming language that runs on the Erlang virtual machine',
        OOP: false,
        type: 'dynamically typed',
        speed: 'fast',
        mostly_used_for: 'building scalable and fault-tolerant distributed systems',
        market_share: null,
        installation: {
            windows: 'choco install elixir',
            linux: 'sudo apt-get install elixir',
            macOS: 'brew install elixir',
        },
    },
    Elm: {
        description: 'A functional programming language used primarily for developing web applications',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing web applications, particularly front-end development',
        market_share: null,
        installation: {
            windows: 'choco install elm',
            linux: 'sudo npm install -g elm',
            macOS: 'brew install elm',
        },
    },
    'Emacs Lisp': {
        description: 'A dialect of the Lisp programming language used for extending and customizing the Emacs text editor',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'extending and customizing the Emacs text editor',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install emacs; sudo apt-get install emacs-goodies-el',
            macOS: 'brew install emacs',
        },
    },
    Emerald: {
        description: 'An object-oriented programming language designed for distributed computing',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'distributed computing',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Epigram: {
        description: 'A dependently typed programming language used primarily for mathematical proofs',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'mathematical proofs and verification',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    EPL: {
        description: 'A programming language used primarily for developing applications on the SAP platform',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'developing SAP applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Erlang: {
        description: 'A functional programming language designed for building highly concurrent, distributed systems',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'building highly concurrent, distributed systems',
        market_share: null,
        installation: {
            windows: 'choco install erlang',
            linux: 'sudo apt-get install erlang',
            macOS: 'brew install erlang',
        },
    },
    es: {
        description: 'A Unix shell written in the es programming language',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'Unix shell scripting',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install es',
            macOS: 'brew install es',
        },
    },
    Escapade: {
        description: 'A programming language used primarily for developing video games',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'developing video games',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Escher: {
        description: 'A programming language used primarily for creating and manipulating vector graphics',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'creating and manipulating vector graphics',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: 'npm install -g escher',
        },
    },
    ESPOL: {
        description: 'A programming language used primarily for teaching purposes in Ecuador',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'teaching programming concepts',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Esterel: {
        description: 'A synchronous programming language used primarily for real-time embedded systems',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'real-time embedded systems',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install esterel',
            macOS: 'brew install esterel',
        },
    },
    Etoys: {
        description: 'A visual programming language designed for children and beginners',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'teaching basic programming concepts',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install etoys',
            macOS: 'brew install etoys',
        },
    },
    Euclid: {
        description: 'A programming language used primarily for teaching geometry and computer graphics',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'teaching geometry and computer graphics',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Euler: {
        description: 'A programming language designed for numerical and scientific computing',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'numerical and scientific computing',
        market_share: null,
        installation: {
            windows: 'choco install euler',
            linux: 'sudo apt-get install euler',
            macOS: 'brew install euler',
        },
    },
    Euphoria: {
        description: 'A high-level programming language for developing Windows and DOS applications',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'developing Windows and DOS applications',
        market_share: null,
        installation: {
            windows: 'choco install euphoria',
            linux: 'sudo apt-get install euphoria',
            macOS: 'brew install euphoria',
        },
    },
    'EusLisp Robot Programming Language': {
        description: 'A programming language designed for developing robot control applications',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'robot control applications',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install euslisp',
            macOS: null,
        },
    },
    'CMS EXEC': {
        description: 'A command language used for managing IBM z/VM and z/VSE systems',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'managing IBM z/VM and z/VSE systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'EXEC 2': {
        description: 'A command language used for managing IBM z/OS systems',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'managing IBM z/OS systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Executable UML': {
        description: 'A type of Unified Modeling Language (UML) used for designing and developing software systems',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'designing and developing software systems',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install eclipse-emf-uml2tools',
            macOS: 'brew install uml-tools',
        },
    },
    F: {
        description: 'A compiled programming language designed for numerical and scientific computing',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'numerical and scientific computing',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install f-cloog',
            macOS: 'brew install f',
        },
    },
    'F#': {
        description: 'A functional programming language designed for the .NET Framework',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing web applications, scientific computing, and data analysis',
        market_share: null,
        installation: {
            windows: 'choco install fsharp',
            linux: 'sudo apt-get install fsharp',
            macOS: 'brew install fsharp',
        },
    },
    Factor: {
        description: 'A stack-based programming language designed for efficient execution and interactive development',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'developing web applications, scripting, and system administration tasks',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install factor',
            macOS: 'brew install factor',
        },
    },
    Falcon: {
        description: 'A scripting language designed for ease of use and rapid development',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'scripting, web applications, and game development',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install falcon',
            macOS: 'brew install falcon',
        },
    },
    Fancy: {
        description: 'A dynamic, object-oriented programming language inspired by Smalltalk',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'rapid prototyping and web development',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install fancy',
            macOS: 'brew install fancy',
        },
    },
    Fantom: {
        description: 'A general-purpose programming language designed for building scalable, high-performance applications',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'building scalable, high-performance applications',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install fantom',
            macOS: 'brew install fan',
        },
    },
    FAUST: {
        description: 'A functional programming language designed for sound synthesis and audio processing',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'sound synthesis and audio processing',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install faust',
            macOS: 'brew install faust',
        },
    },
    Felix: {
        description: 'A high-performance programming language designed for concurrent and distributed systems',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'concurrent and distributed systems',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install felix',
            macOS: 'brew install felix',
        },
    },
    Ferite: {
        description: 'A fast, lightweight, and flexible scripting language designed for embedding in other applications',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'scripting and embedding in other applications',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install ferite',
            macOS: 'brew install ferite',
        },
    },
    Flavors: {
        description:
            'Flavors is a dynamically typed programming language designed for building web applications and data-intensive systems.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'web applications and data-intensive systems',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install flavors',
            macOS: 'brew install flavors',
        },
    },
    Flex: {
        description: 'Flex is a lexical analyzer generator for creating scanners that can be used with parser generators such as Bison.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'creating scanners for use with parser generators',
        market_share: null,
        installation: {
            windows: 'choco install flex',
            linux: 'sudo apt-get install flex',
            macOS: 'brew install flex',
        },
    },
    'FLOW-MATIC': {
        description:
            'FLOW-MATIC was one of the earliest data processing languages. It was designed to be easily understood by non-programmers and was used mainly for business applications.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'business applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    FOCAL: {
        description: 'FOCAL is a programming language designed for solving mathematical problems and was popular in the 1970s.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'mathematical problem-solving',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    FOCUS: {
        description:
            'FOCUS (or Information Builders FOCUS) is a powerful fourth-generation programming language used mainly for business applications such as data analysis and report generation.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'business applications, data analysis and report generation',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    FOIL: {
        description: 'FOIL (First-Order Inductive Learner) is a machine learning algorithm used to learn logical rules from examples.',
        OOP: null,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'machine learning',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    FORMAC: {
        description:
            'FORMAC is a symbolic manipulation system used for algebraic computation. It is designed to perform complex mathematical operations and is used mainly in scientific research.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'algebraic computation in scientific research',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Forth: {
        description:
            'Forth is an imperative stack-based programming language used mainly for embedded systems and scientific research. It is known for its simplicity and small memory footprint.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'embedded systems, scientific research',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install gforth',
            macOS: 'brew install gforth',
        },
    },
    Fortran: {
        description:
            'Fortran (short for FORmula TRANslation) is one of the oldest high-level programming languages still in use today. It was originally designed to perform scientific and engineering calculations, and is still popular in those fields.',
        OOP: false,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'scientific and engineering calculations',
        market_share: null,
        installation: {
            windows: 'Download an installer from https://gcc.gnu.org/wiki/GFortranBinaries#Windows',
            linux: 'sudo apt-get install gfortran',
            macOS: 'brew install gcc',
        },
    },
    Fortress: {
        description:
            'Fortress is a programming language designed for high-performance computing and scientific computing. It features a number of innovative language features, such as support for parallelism and implicit parallelism.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'high-performance computing, scientific computing',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    FoxBase: {
        description:
            'FoxBase is a relational database management system and programming language developed by Fox Software. It was popular in the 1980s and early 1990s.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'relational database management',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    FoxPro: {
        description:
            'FoxPro is a relational database management system and programming language developed by Microsoft. It was popular in the 1990s before being superseded by Microsoft Access.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'relational database management',
        market_share: null,
        installation: {
            windows:
                'Download an installer from https://docs.microsoft.com/en-us/previous-versions/visualstudio/foxpro/mt490117(v=msdn.10)?redirectedfrom=MSDN',
            linux: null,
            macOS: null,
        },
    },
    'Franz Lisp': {
        description:
            'Franz Lisp is a dialect of Lisp, a family of computer programming languages. It was developed at the University of California, Berkeley in the late 1970s and early 1980s.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'artificial intelligence, symbolic computation',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install cmucl',
            macOS: 'brew install clozure-cl',
        },
    },
    Frege: {
        description:
            'Frege is a purely functional programming language that is based on Haskell, but with additional support for Java interoperability.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'functional programming, Java interoperability',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install frege',
            macOS: 'brew install frege',
        },
    },
    'F-Script': {
        description:
            'F-Script is a dynamically typed programming language that is based on Smalltalk. It is used for developing Cocoa applications on macOS.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'Cocoa application development on macOS',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: 'brew cask install f-script',
        },
    },
    G: {
        description:
            'G is a statically typed general-purpose programming language that is designed with ease of use and simplicity in mind. It was created as part of the Plan 9 operating system project.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'system programming, network programming',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: 'brew install golang',
        },
    },
    'Google Apps Script': {
        description:
            'Google Apps Script is a scripting language that is used to extend the functionality of various Google products, such as Sheets, Docs, and Forms.',
        OOP: false,
        type: 'interpreted',
        speed: null,
        mostly_used_for: 'automating Google products, customizing workflows',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: 'N/A (Google Apps Script is a cloud-based platform and does not require installation on a specific operating system)',
        },
    },
    'Game Maker Language': {
        description:
            'Game Maker Language (GML) is a scripting language that is used to create games with the GameMaker Studio game engine. It is designed specifically for game development and provides a variety of features to make game creation easier.',
        OOP: true,
        type: 'interpreted',
        speed: null,
        mostly_used_for: 'game development',
        market_share: null,
        installation: {
            windows: '"C:\\Program Files\\GameMaker Studio 2\\GameMakerStudio2.exe" --arguments=\'--addall\'',
            linux: 'sudo snap install gamemakerstudio2',
            macOS: 'brew cask install gamemaker-studio',
        },
    },
    'GameMonkey Script': {
        description:
            'GameMonkey Script (GMS) is a scripting language that is used in game development to provide runtime flexibility in game engines such as Unity and Unreal Engine.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'game development',
        market_share: null,
        installation: {
            windows: 'N/A (GameMonkey Script is typically integrated into game engines and does not require separate installation)',
            linux: null,
            macOS: null,
        },
    },
    GAMS: {
        description:
            'GAMS (General Algebraic Modeling System) is a high-level modeling system that is used to formulate and solve large-scale linear, nonlinear, and mixed-integer optimization problems.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'optimization modeling',
        market_share: null,
        installation: {
            windows: 'N/A (GAMS requires a license key and cannot be installed with a single shell command)',
            linux: 'N/A (GAMS requires a license key and cannot be installed with a single shell command)',
            macOS: 'N/A (GAMS requires a license key and cannot be installed with a single shell command)',
        },
    },
    GAP: {
        description:
            'GAP (Groups, Algorithms, and Programming) is a computer algebra system that is used to solve problems in algebra and discrete mathematics. It provides a high-level programming language that is specifically designed for mathematical computations.',
        OOP: false,
        type: 'interpreted',
        speed: null,
        mostly_used_for: 'algebra and discrete mathematics',
        market_share: null,
        installation: {
            windows: 'N/A (GAP requires installation through a binary distribution or via Cygwin on Windows)',
            linux: 'sudo apt-get install gap',
            macOS: 'brew install gap',
        },
    },
    'G-code': {
        description:
            'G-code is a programming language that is used to control numerical control (NC) and computer numerical control (CNC) machines. It provides a standard set of instructions to control the movement and operation of the machine.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'machine control',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Genie: {
        description:
            'Genie is a high-level, statically typed programming language that is designed to be easy to read and write. It has a syntax similar to Python and Ruby, while also being strongly influenced by the syntax of the Pascal programming language.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'general-purpose programming',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install genie',
            macOS: 'brew install vala && brew install genie',
        },
    },
    GDL: {
        description:
            'GDL (GNU Data Language) is a free, open-source programming language that is used for scientific data analysis and visualization. It provides a wide range of tools for manipulating and analyzing data, as well as creating high-quality visualizations.',
        OOP: false,
        type: 'interpreted',
        speed: null,
        mostly_used_for: 'scientific data analysis and visualization',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install gnudatalanguage',
            macOS: 'brew install gnudatalanguage',
        },
    },
    Gibiane: {
        description:
            'Gibiane is a statically typed programming language that is designed to be simple, efficient, and expressive. It provides a concise syntax that is easy to read and write, making it a good choice for both beginners and experienced programmers.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'general-purpose programming',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: 'N/A (there is no information available on how to install Gibiane on macOS with a single shell command)',
        },
    },
    GJ: {
        description:
            'GJ (Generic Java) is a simple extension to the Java programming language that adds support for generic types. It provides a way to write reusable code that can work with different types of objects without sacrificing type safety or performance.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'general-purpose programming',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    GEORGE: {
        description:
            'GEORGE (General-purpose Earth Observation Research and Development Environment) is a software environment that is used for processing and analyzing data from remote sensing satellites. It provides a wide range of tools for downloading, processing, and visualizing satellite data.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'satellite data processing and analysis',
        market_share: null,
        installation: {
            windows: 'N/A (GEORGE must be installed via source code or binary distribution)',
            linux: 'N/A (GEORGE must be installed via source code or binary distribution)',
            macOS: 'N/A (GEORGE must be installed via source code or binary distribution)',
        },
    },
    GLSL: {
        description:
            'GLSL (OpenGL Shading Language) is a high-level shading language that is used to write shaders for graphics processing units (GPUs). It provides a way to write custom shader code that can be compiled and executed directly on the GPU.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'graphics programming (shaders)',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'GNU E': {
        description:
            'GNU E is a programming language that is used to develop software for embedded systems. It provides a compact syntax and a set of features designed specifically for writing low-level system code.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'embedded systems programming',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install binutils-dev libgmp-dev libmpfr-dev libmpc-dev gcc-avr avr-libc',
            macOS: 'brew install gnu-sed gawk gnutls autoconf automake binutils coreutils findutils gawk gnu-indent gnu-tar gnu-which gnutls grep libtool m4 make mpfr',
        },
    },
    GM: {
        description:
            'GM (GraphicsMagick) is a collection of tools and libraries that are used to manipulate images in various formats. It provides a command-line interface as well as APIs for C, C++, Perl, and other programming languages.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'image manipulation',
        market_share: null,
        installation: {
            windows: 'choco install graphicsmagick',
            linux: 'sudo apt-get install graphicsmagick',
            macOS: 'brew install graphicsmagick',
        },
    },
    Go: {
        description:
            'Go (also known as Golang) is a statically typed, compiled programming language designed to be simple, efficient, and productive. It was developed by Google and is used widely for developing large-scale software applications.',
        OOP: true,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'general-purpose programming',
        market_share: null,
        installation: {
            windows: 'choco install golang',
            linux: 'sudo apt-get install golang',
            macOS: 'brew install go',
        },
    },
    'Go!': {
        description:
            'Go (also known as Golang) is a statically typed, compiled programming language designed to be simple, efficient, and productive. It was developed by Google and is used widely for developing large-scale software applications.',
        OOP: true,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'general-purpose programming',
        market_share: null,
        installation: {
            windows: 'choco install golang',
            linux: 'sudo apt-get install golang',
            macOS: 'brew install go',
        },
    },
    GOAL: {
        description:
            'GOAL (Game Oriented Assembly Lisp) is a high-level programming language that was developed specifically for creating video games on the Playstation 2 console. It provides a way to write game logic and behavior in a more expressive and efficient manner than traditional assembly language.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'game development (Playstation 2)',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Gödel: {
        description:
            'Gödel is a programming language that is used to express mathematical formulas and perform automated theorem proving. It is named after Kurt Gödel, a famous mathematician who made significant contributions to logic and mathematics.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'mathematical formula expression and automated theorem proving',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Gosu: {
        description:
            'Gosu is an open-source, statically typed programming language that runs on the Java Virtual Machine (JVM). It is designed to improve developer productivity and code quality.',
        OOP: true,
        type: 'statically typed',
        speed: 'comparable to Java',
        mostly_used_for: 'enterprise applications and web development',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ curl -s "https://get.sdkman.io" | bash && source "$HOME/.sdkman/bin/sdkman-init.sh" && sdk install gosu',
            macOS: '$ curl -s "https://get.sdkman.io" | bash && source "$HOME/.sdkman/bin/sdkman-init.sh" && sdk install gosu',
        },
    },
    GPSS: {
        description:
            'GPSS is a simulation language used to model and analyze complex systems. It was initially developed in the 1960s and has since been widely used in various fields including logistics, manufacturing, and telecommunications.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'simulation and modeling of complex systems',
        market_share: null,
        installation: {
            windows: '$ choco install gpss',
            linux: '$ sudo apt-get install gpss',
            macOS: null,
        },
    },
    GRASS: {
        description:
            'GRASS (Geographic Resources Analysis Support System) is a free and open-source GIS software used for geospatial data management, analysis, and visualization.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'geospatial data management, analysis, and visualization',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install grass',
            macOS: '$ brew install grass',
        },
    },
    Groovy: {
        description:
            'Groovy is an object-oriented programming language that runs on the Java Virtual Machine (JVM). It is dynamically typed and offers features such as closures, meta-programming, and operator overloading.',
        OOP: true,
        type: 'dynamically typed',
        speed: 'comparable to Java',
        mostly_used_for: 'building web applications, scripting, and automation tasks',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install groovy',
            macOS: '$ brew install groovy',
        },
    },
    'Hack (programming language)': {
        description:
            'Hack is a programming language developed by Facebook. It is a variant of PHP that includes features such as static typing, generics, and asynchronous programming constructs.',
        OOP: true,
        type: 'statically typed',
        speed: 'faster than PHP',
        mostly_used_for: 'web development and server-side scripting',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install hhvm',
            macOS: '$ brew install hhvm',
        },
    },
    'HAL/S': {
        description:
            'HAL/S (High-order Assembly Language/Shuttle) is a high-level programming language used for spacecraft and satellite software development. It was extensively used by NASA during the Space Shuttle program.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'spacecraft and satellite software development',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Hamilton C shell': {
        description:
            'The Hamilton C shell is a command-line interpreter for Windows that provides a Unix-like environment with support for many common Unix utilities and commands.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'command-line scripting and automation on Windows',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Harbour: {
        description:
            'Harbour is a free and open-source compiler for the xBase programming language. It is compatible with many popular database systems and offers extensions for GUI development and web services.',
        OOP: true,
        type: 'dynamically typed',
        speed: 'comparable to C',
        mostly_used_for: 'database application development, GUI development, and web services',
        market_share: null,
        installation: {
            windows: '$ choco install harbour',
            linux: '$ sudo apt-get install harbour',
            macOS: '$ brew install harbour',
        },
    },
    'Hartmann pipelines': {
        description:
            'Hartmann Pipelines is an open-source data processing and analysis framework that allows users to orchestrate pipelines of modular, reusable components.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'data processing and analysis',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install hartmann',
            macOS: null,
        },
    },
    Haskell: {
        description:
            'Haskell is a purely functional programming language that emphasizes immutability and lazy evaluation. It offers advanced type system features, such as type inference and polymorphism.',
        OOP: false,
        type: 'statically typed',
        speed: 'comparable to Java or C++',
        mostly_used_for: 'academic research and development, financial and scientific computing, and web development',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install haskell-platform',
            macOS: '$ brew install haskell-stack',
        },
    },
    Haxe: {
        description:
            'Haxe is an open-source, cross-platform programming language that can be compiled to many different target languages and platforms. It offers advanced features such as type inference, macros, and cross-platform libraries.',
        OOP: true,
        type: 'statically typed',
        speed: 'comparable to Java or C++',
        mostly_used_for: 'web development, game development, and cross-platform application development',
        market_share: null,
        installation: {
            windows: '$ choco install haxe',
            linux: '$ sudo apt-get install haxe',
            macOS: '$ brew install haxe',
        },
    },
    'High Level Assembly': {
        description:
            'High Level Assembly (HLA) is an assembly language that includes high-level features such as structured control statements, procedures, and object-oriented programming constructs.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'low-level systems programming',
        market_share: null,
        installation: {
            windows: '$ choco install hla',
            linux: '$ sudo apt-get install nasm',
            macOS: '$ brew install nasm',
        },
    },
    HLSL: {
        description:
            'HLSL is a C-like language used for authoring shaders in graphics and game development. It is designed to be compiled into shader bytecode that can run on modern GPUs.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'graphics and game development',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Hop: {
        description:
            'Hop is an open-source, functional programming language that emphasizes modularity and code reuse. It supports parallel execution and offers features such as pattern matching and tail recursion optimization.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'web development and network programming',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install hop',
            macOS: '$ brew install hop',
        },
    },
    Hope: {
        description:
            'Hope is a functional programming language developed in the UK that features powerful type inference and pattern matching capabilities. It supports both strict and lazy evaluation strategies.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'education, research, and experimentation',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install hope',
            macOS: null,
        },
    },
    Hugo: {
        description:
            'Hugo is an open-source static site generator written in Go. It is designed to be fast and flexible, with support for themes, custom content types, and multilingual sites.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'generating static websites and blogs',
        market_share: null,
        installation: {
            windows: '$ choco install hugo',
            linux: '$ sudo apt-get install hugo',
            macOS: '$ brew install hugo',
        },
    },
    Hume: {
        description:
            'Hume is a domain-specific language for modeling and simulating human behavior in complex systems. It allows researchers to model human agents that interact with each other and with their environment.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'social science research, modeling and simulation of human behavior',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    HyperTalk: {
        description:
            'HyperTalk is a scripting language developed by Apple in the 1980s to control HyperCard, a graphical user interface development tool. It features simple, English-like syntax and supports event-driven programming.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'graphical user interface development',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'IBM Basic assembly language': {
        description:
            'BAL is an assembly language developed by IBM in the 1960s for their mainframe computers. It features low-level control structures and direct access to hardware resources.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'systems programming on IBM mainframes',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'IBM HAScript': {
        description:
            'HAScript is a high-level scripting language developed by IBM for their Tivoli Monitoring system. It provides a simple way to implement custom monitoring policies and automation tasks.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'system monitoring and automation tasks',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'IBM Informix-4GL': {
        description:
            'Informix-4GL is a high-level programming language developed by IBM for their Informix database management system. It features a syntax that closely resembles natural language and supports rapid application development.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'database application development',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install informix-4gl',
            macOS: null,
        },
    },
    'IBM RPG': {
        description:
            'RPG is a high-level programming language developed by IBM for their midrange AS/400 and iSeries computers. It features support for database access and report generation.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'business application development',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    ICI: {
        description:
            'ICI is an interpreted scripting language that provides a C-like syntax and supports dynamic typing. It features built-in support for regular expressions, associative arrays, and object-oriented programming.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'scripting and rapid prototyping',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install ici',
            macOS: '$ brew install ici',
        },
    },
    Icon: {
        description:
            'Icon is a high-level programming language that features support for string manipulation, backtracking search algorithms, and coroutines. It combines elements of imperative, functional, and logic programming.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'AI, text processing, and education',
        market_share: null,
        installation: {
            windows: '$ choco install icon',
            linux: '$ sudo apt-get install icon',
            macOS: '$ brew install icon',
        },
    },
    IDL: {
        description:
            'IDL is an array-oriented programming language that provides interactive data analysis and visualization tools. It is commonly used in astronomy, geosciences, and other scientific domains.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'data analysis and visualization in scientific domains',
        market_share: null,
        installation: {
            windows: '$ choco install idl',
            linux: '$ sudo apt-get install idl',
            macOS: null,
        },
    },
    Idris: {
        description:
            'Idris is a general-purpose functional programming language that supports dependent types and interactive development. It is designed to give you more confidence in your code by catching bugs at compile time.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'type-driven programming, formal verification, and theorem proving',
        market_share: null,
        installation: {
            windows: '$ choco install idris',
            linux: '$ sudo apt-get install idris',
            macOS: '$ brew install idris',
        },
    },
    IMP: {
        description:
            'IMP is a simple imperative programming language that features C-like syntax and basic control structures such as loops and conditionals. It is often used for educational purposes.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'educational purposes',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install imp',
            macOS: null,
        },
    },
    Inform: {
        description:
            'Inform is a programming language and design system for creating interactive fiction, such as text adventure games. It provides a simple English-like syntax and supports object-oriented programming.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'interactive fiction and game development',
        market_share: null,
        installation: {
            windows: '$ choco install inform7',
            linux: '$ sudo apt-get install inform7',
            macOS: '$ brew install inform7',
        },
    },
    Io: {
        description:
            'Io is a small, dynamically-typed programming language that was designed to be highly extensible and reflective. It provides powerful introspection capabilities and supports coroutines.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'scripting, prototyping, and exploration',
        market_share: null,
        installation: {
            windows: '$ choco install io-language',
            linux: '$ sudo apt-get install io',
            macOS: '$ brew install io',
        },
    },
    Ioke: {
        description:
            'Ioke is a dynamic, prototype-based programming language that features Lisp-like syntax and powerful metaprogramming capabilities. It encourages a message-passing style of programming.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'domain-specific languages and metaprogramming',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install ioke',
            macOS: '$ brew install ioke',
        },
    },
    IPL: {
        description:
            'IPL is one of the earliest high-level programming languages, developed by Allen Newell and Herbert Simon in the late 1950s. It was designed for artificial intelligence research and features list processing and pattern matching capabilities.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'artificial intelligence research',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    IPTSCRAE: {
        description:
            'IPTSCRAE is an assembly-like language that was used by NASA in the 1960s and 1970s to write flight software for spacecraft. It features a small instruction set and was designed for reliability and safety.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'flight software for spacecraft',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    ISLISP: {
        description:
            'ISLisp is an object-oriented dialect of Lisp that was standardized by the International Organization for Standardization (ISO) in the 1990s. It features lexical scoping, macros, and advanced error handling.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'symbolic computing and artificial intelligence research',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install islisp',
            macOS: '$ brew install islisp',
        },
    },
    ISPF: {
        description:
            'ISPF is an interactive menu-driven interface for mainframe computers that provides tools for editing, debugging, and managing programs. It was developed by IBM in the 1970s and is still widely used today.',
        OOP: null,
        type: null,
        speed: null,
        mostly_used_for: 'mainframe programming and system management',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    ISWIM: {
        description:
            'ISWIM is a functional programming language that was designed by Peter Landin in the 1960s. It features higher-order functions, lazy evaluation, and algebraic data types, and has influenced the design of many subsequent programming languages.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'teaching fundamental concepts of functional programming',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    J: {
        description:
            'J is an array-oriented, interpreted programming language that was developed in the 1980s. It features an extensive library of mathematical and statistical functions and supports functional and object-oriented programming styles.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'mathematical and statistical computing',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install j',
            macOS: '$ brew install j',
        },
    },
    'J#': {
        description:
            'J# is a programming language that was developed by Microsoft in the early 2000s as part of its .NET platform. It is similar to Java and C#, but features some unique language constructs and libraries.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing Windows applications and web services',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'J++': {
        description:
            'J++ is a programming language that was developed by Microsoft in the late 1990s as an extension to Java. It provided additional features such as operator overloading, destructors, and garbage collection.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing Windows applications and web services',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    JADE: {
        description:
            'JADE is a software framework that provides tools and libraries for developing multi-agent systems in Java. It supports both synchronous and asynchronous communication between agents and provides a platform for building intelligent systems.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing multi-agent systems and intelligent systems',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install jade',
            macOS: '$ brew install jade',
        },
    },
    Jako: {
        description:
            'Jako is a general-purpose programming language that was developed by researchers at the University of Helsinki in the early 2000s. It is based on functional programming principles and features lazy evaluation, pattern matching, and algebraic data types.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'general-purpose programming',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install jako',
            macOS: '$ brew install jako',
        },
    },
    JAL: {
        description:
            'JAL is a high-level programming language that was designed for programming microcontrollers. It features a C-like syntax and provides access to low-level hardware functions and interrupts.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'programming microcontrollers',
        market_share: null,
        installation: {
            windows: '$ choco install jalv2',
            linux: '$ sudo apt-get install jalv2',
            macOS: '$ brew install jalv2',
        },
    },
    Janus: {
        description:
            'Janus is an interpreted, dynamically typed programming language that was developed in the 1980s. It features object-oriented programming constructs and supports distributed computing.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'distributed computing and network applications',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install janus',
            macOS: '$ brew install janus',
        },
    },
    JASS: {
        description:
            'JASS is a scripting language that was developed by Blizzard Entertainment for use in its video games, such as Warcraft III and Starcraft. It features a C-like syntax and supports object-oriented programming constructs.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'scripting game logic and user interfaces',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Java: {
        description:
            'Java is a popular, general-purpose programming language that was developed by Sun Microsystems (now owned by Oracle) in the mid-1990s. It features object-oriented programming constructs and provides built-in support for networking, concurrency, and graphical user interfaces.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing desktop and web applications, mobile apps, and embedded systems',
        market_share: null,
        installation: {
            windows: '$ choco install jdk8',
            linux: '$ sudo apt-get install openjdk-8-jdk',
            macOS: '$ brew install openjdk@8',
        },
    },
    JavaScript: {
        description:
            'JavaScript is a popular, high-level scripting language that was designed to add interactivity and dynamic effects to web pages. It is used primarily on the client-side (in web browsers) but can also be used on the server-side (with frameworks like Node.js).',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing web applications, browser extensions, and server-side scripts',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install nodejs',
            macOS: '$ brew install node',
        },
    },
    JCL: {
        description:
            'JCL is a scripting language that is used to control batch processing on IBM mainframe computers. It provides commands for managing job streams, allocating system resources, and handling errors.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'batch processing on IBM mainframes',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    JOSS: {
        description:
            'JOSS is an early high-level programming language that was developed in the late 1950s for the Johnniac computer at RAND Corporation. It features a simple syntax and was designed to be easy for non-specialists to use.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'early scientific and engineering applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Joule: {
        description:
            'Joule is a high-level, object-oriented programming language that was designed to support distributed computing and concurrent programming. It features a syntax that is similar to C++ and Java, but with additional constructs for defining asynchronous processes and message-passing between objects.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'distributed computing, concurrent programming, and parallel processing',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install joule',
            macOS: '$ brew install joule',
        },
    },
    JOVIAL: {
        description:
            'JOVIAL is a high-level programming language that was developed by the US Department of Defense in the late 1950s. It features a syntax that is similar to Algol and Pascal, and it was designed for developing software for real-time embedded systems.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'real-time embedded systems, particularly those used in military and aerospace applications',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install jovial',
            macOS: null,
        },
    },
    Joy: {
        description:
            'Joy is a purely functional programming language that was developed in the late 1980s. It is based on the idea of concatenative programming, where functions are composed by concatenating other functions together.',
        OOP: false,
        type: 'not statically or dynamically typed',
        speed: null,
        mostly_used_for: 'teaching functional programming concepts and developing small-scale applications',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install joy',
            macOS: '$ brew install joy',
        },
    },
    JScript: {
        description:
            "JScript is Microsoft's implementation of the JavaScript programming language. It was first introduced in Internet Explorer 3 and has since been supported by other Microsoft products, such as Windows Script Host and Active Server Pages.",
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'client-side scripting on web browsers and server-side scripting on Microsoft platforms',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'JavaFX Script': {
        description:
            'JavaFX Script is a scripting language that was designed to simplify the process of creating rich graphical user interfaces (GUIs) using JavaFX, a platform for building rich internet applications.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'creating rich graphical user interfaces (GUIs) for desktop and mobile applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Julia: {
        description:
            'Julia is a high-level, high-performance programming language that was designed to be fast and easy to use. It features a syntax that is similar to MATLAB and Python, but with performance comparable to that of statically typed languages like C and Fortran.',
        OOP: true,
        type: 'dynamically typed',
        speed: 'very fast',
        mostly_used_for: 'numerical and scientific computing, data analysis, machine learning, and distributed computing',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install julia',
            macOS: '$ brew install julia',
        },
    },
    Jython: {
        description:
            'Jython is an implementation of the Python programming language that is designed to run on the Java platform. It allows developers to write Python code that can be seamlessly integrated with Java code, making it ideal for developing web applications and other software that require both languages.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for:
            'integrating Python and Java code, developing web applications, and other software projects that require both languages',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install jython',
            macOS: '$ brew install jython',
        },
    },
    K: {
        description:
            'K is an array-oriented programming language that was developed by Arthur Whitney in the 1990s. It is designed to be fast and memory-efficient, making it ideal for working with large datasets and performing complex computations.',
        OOP: false,
        type: 'dynamically typed',
        speed: 'very fast',
        mostly_used_for: 'data analytics, machine learning, and financial modeling',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Kaleidoscope: {
        description:
            'Kaleidoscope is a simple programming language that is used as an example in the LLVM Kaleidoscope tutorial. It is designed to teach developers how to build their own programming language using LLVM, a collection of modular and reusable compiler and toolchain technologies.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'learning how to build programming languages using LLVM',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Karel: {
        description:
            'Karel is an educational programming language that was designed to teach beginners the fundamentals of computer science and programming. It is based on the fictional robot character Karel, who can move around in a grid world and perform various tasks.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'teaching beginners the fundamentals of computer science and programming',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    KEE: {
        description:
            'KEE is a knowledge representation and reasoning system that was developed by Arthur B. Evans at Imperial College London in the 1980s. It allows developers to create and manipulate knowledge bases, which can be used to represent and reason about complex systems.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'knowledge representation and reasoning',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Kixtart: {
        description:
            'Kixtart is a scripting language that was developed specifically for use with KiXtart, a logon script processor for Windows. It allows system administrators to automate common tasks and perform complex system configuration tasks.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'system administration and automation on Windows systems',
        market_share: null,
        installation: {
            windows: 'Download and run the installer from the official website.',
            linux: null,
            macOS: null,
        },
    },
    KIF: {
        description:
            'KIF (Knowledge Interchange Format) is a computer-oriented language for the interchange of knowledge among disparate programs and systems. It is designed to be a standard format for representing and exchanging knowledge, primarily in the form of logical expressions.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'interchange of knowledge among disparate programs and systems',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install kif',
            macOS: '$ brew install kif',
        },
    },
    Kojo: {
        description:
            'Kojo is an educational programming language and integrated development environment (IDE) that was designed to teach young students the fundamentals of computer science and programming. It features a simple syntax, a turtle graphics system, and interactive tutorials.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'teaching beginners the fundamentals of computer science and programming',
        market_share: null,
        installation: {
            windows: 'Download the installer from the official website and run it.',
            linux: '$ sudo snap install kojo',
            macOS: 'Download the disk image file from the official website and drag the Kojo icon into the Applications folder.',
        },
    },
    Kotlin: {
        description:
            'Kotlin is a statically-typed programming language that runs on the Java Virtual Machine (JVM) and also can be compiled to JavaScript or native code. It was developed by JetBrains in 2011 and designed to improve upon Java, offering more safety, conciseness, and interoperability.',
        OOP: true,
        type: 'statically typed',
        speed: 'comparable to Java',
        mostly_used_for: 'server-side development, Android app development, web development, and other general-purpose programming tasks',
        market_share: null,
        installation: {
            windows: 'choco install kotlin',
            linux: '$ sudo snap install --classic kotlin',
            macOS: '$ brew install kotlin',
        },
    },
    KRC: {
        description:
            'The Karel Robot Challenge (KRC) is an educational programming language that was designed to teach beginners the fundamentals of computer science and programming. It is based on the fictional robot character Karel, who can move around in a grid world and perform various tasks.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'teaching beginners the fundamentals of computer science and programming',
        market_share: null,
        installation: {
            windows: 'Download and run the KRC installer from the official website.',
            linux: '$ sudo apt-get install krc',
            macOS: null,
        },
    },
    KRL: {
        description:
            'KRL (Kinetic Rule Language) is a cloud-based rules engine that allows developers to create and manage decision logic in web applications. It is used primarily for building complex business processes and workflows.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'building complex business processes and workflows in web applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    KUKA: {
        description:
            'KUKA is an object-oriented programming language that was developed specifically for use with KUKA industrial robots. It allows developers to create complex robotic automation programs, including path planning, motion control, and sensor integration.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'creating complex robotic automation programs for industrial robots',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    KRYPTON: {
        description:
            'KRYPTON is a domain-specific programming language that was developed to model and simulate complex systems in the field of cryptology. It allows developers to create mathematical models of cryptographic algorithms, protocols, and attacks.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'modeling and simulating cryptographic algorithms, protocols, and attacks',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    L: {
        description:
            'L is a domain-specific programming language that was developed specifically for use in the analysis and modeling of software systems. It extends the Z notation, which is a formal specification language, with additional constructs for modeling and analyzing software-intensive systems.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'analysis and modeling of software-intensive systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'L# .NET': {
        description:
            'L# .NET is a domain-specific programming language that was developed to simplify the development of blockchain applications on the Microsoft .NET platform. It includes various features such as automated testing, contract deployment, and debugging tools.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'simplifying the development of blockchain applications on the Microsoft .NET platform',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    LabVIEW: {
        description:
            'LabVIEW is a graphical programming language and development environment that was developed by National Instruments. It allows developers to create control systems, test and measurement applications, and scientific experiments by connecting functional nodes on a block diagram.',
        OOP: true,
        type: 'dataflow programming',
        speed: null,
        mostly_used_for: 'creating control systems, test and measurement applications, and scientific experiments',
        market_share: null,
        installation: {
            windows: 'Download the LabVIEW installer from the official website and run it.',
            linux: '$ sudo apt-get install labview',
            macOS: 'Download the LabVIEW installer from the official website and run it.',
        },
    },
    Ladder: {
        description:
            'Ladder Logic is a graphical programming language that was originally developed to program programmable logic controllers (PLCs). It is used primarily in industrial automation and control applications, where it allows developers to create control sequences for machines and processes using a simple visual interface.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'programming programmable logic controllers (PLCs) for industrial automation and control applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Lagoona: {
        description:
            'Lagoona is a domain-specific modeling and simulation language that was developed to model and analyze complex systems in the field of cyber-physical systems, including autonomous vehicles, robotic systems, and smart systems.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'modeling and analyzing complex systems in the field of cyber-physical systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    LANSA: {
        description:
            'LANSA is a low-code development platform that allows developers to build enterprise applications quickly and easily using a visual drag-and-drop interface. It includes tools for building web, mobile, and desktop applications, as well as integration with various data sources and APIs.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'building enterprise applications quickly and easily using a visual drag-and-drop interface',
        market_share: null,
        installation: {
            windows: 'Download the LANSA installer from the official website and run it.',
            linux: null,
            macOS: null,
        },
    },
    Lasso: {
        description:
            'Lasso is a web development language that was developed by LassoSoft. It allows developers to create dynamic, data-driven websites and web applications using a syntax that is similar to HTML.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'creating dynamic, data-driven websites and web applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: '$ brew install lasso',
        },
    },
    LaTeX: {
        description:
            'LaTeX is a high-quality typesetting system that was developed by Leslie Lamport. It allows writers to create documents with complex formatting, such as technical or scientific papers, mathematical notation, and bibliographies.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'typesetting technical or scientific papers, mathematical notation, and bibliographies',
        market_share: null,
        installation: {
            windows: 'Download and run the MikTex installer from the official website.',
            linux: '$ sudo apt-get install texlive-full',
            macOS: '$ brew cask install mactex',
        },
    },
    Lava: {
        description:
            'Lava is a digital circuit design and verification language that was developed by the University of Waterloo. It allows designers to create, simulate, and verify digital circuits using high-level constructs.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'digital circuit design and verification',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'LC-3': {
        description:
            'The LC-3 assembly language is a low-level programming language that was used to program the LC-3 computer, which was developed by Yale Patt and Sanjay Patel in 1999. It is a simplified version of the assembly language used on real CPUs.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'programming the LC-3 computer',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Leda: {
        description:
            'Leda is an object-oriented programming language that was designed to support modularity, efficiency, and safety. It includes features such as garbage collection, exception handling, and abstract data types.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'supporting modularity, efficiency, and safety in software development',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install ledalib',
            macOS: '$ brew install leda',
        },
    },
    Legoscript: {
        description:
            'Legoscript is a programming language developed by LEGO Education that allows children to program LEGO Mindstorms robots using a drag-and-drop interface. It is based on Scratch, a visual programming language developed at MIT.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'programming LEGO Mindstorms robots',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    LIL: {
        description:
            'LIL (Language Implementation Language) is a high-level language used to create interpreters and compilers for other programming languages. It is based on Scheme and was developed by Daniel P. Friedman at Indiana University.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'creating interpreters and compilers for other programming languages',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    LilyPond: {
        description:
            'LilyPond is a music engraving program that produces high-quality sheet music using a text-based input file. It allows musicians and composers to create professional-looking scores of their compositions.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'producing high-quality sheet music',
        market_share: null,
        installation: {
            windows: 'Download the LilyPond installer from the official website and run it.',
            linux: '$ sudo apt-get install lilypond',
            macOS: '$ brew install lilypond',
        },
    },
    Limbo: {
        description:
            'Limbo is a systems programming language developed by Bell Labs. It is based on the Concurrent Programming Language (CPL) and incorporates features such as garbage collection, coroutines, and network support.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'systems programming',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Limnor: {
        description:
            'Limnor is a visual programming language and development environment that allows users to create graphical user interfaces, web applications, and database-driven software without writing code. It uses drag-and-drop components to create software programs.',
        OOP: true,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'creating graphical user interfaces, web applications, and database-driven software',
        market_share: null,
        installation: {
            windows: 'Download the Limnor installer from the official website and run it.',
            linux: '$ sudo snap install limnor',
            macOS: '$ brew cask install limnor',
        },
    },
    LINC: {
        description:
            'LINC (Laboratory INstrument Computer) is a high-level programming language designed for laboratory automation systems. It was developed by MIT in the 1960s and was widely used in scientific and industrial applications.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'laboratory automation systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Lingo: {
        description:
            'Lingo is an object-oriented programming language used to develop multimedia applications and interactive content for Adobe Director. It has features such as advanced graphics and animation, database integration, and event handling.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing multimedia applications and interactive content for Adobe Director',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Linoleum: {
        description:
            'Linoleum is a high-level programming language designed for programming microcontrollers. It includes features such as interrupts, real-time scheduling, and support for low-power modes.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'programming microcontrollers',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    LIS: {
        description:
            'LIS (Language for Implementing Systems) is a high-level language designed for systems programming. It was developed at MIT in the 1970s and includes features such as garbage collection, dynamic typing, and support for coroutines.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'systems programming',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    LISA: {
        description:
            'LISA (Language for Instruction Set Architecture) is a high-level language used to describe instruction sets for microprocessors and other computer systems. It is used in the design and development of new computer architectures.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'describing instruction sets for microprocessors and other computer systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Lisaac: {
        description:
            'Lisaac is a low-level programming language used to create embedded systems software. It is designed to be highly portable and efficient, with features such as memory management and support for real-time scheduling.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'creating embedded systems software',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Lisp: {
        description:
            'Lisp (LISt Processing) is a high-level programming language known for its powerful features such as recursion, dynamic typing, and macros. It is used in a wide range of applications such as artificial intelligence, computer science education, and prototyping.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'artificial intelligence, computer science education, and prototyping',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install clisp',
            macOS: '$ brew install clisp',
        },
    },
    'Lite-C': {
        description:
            'Lite-C is a high-level programming language used to create 3D video games and simulations. It includes features such as support for object-oriented programming, real-time 3D graphics, and networking.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'creating 3D video games and simulations',
        market_share: null,
        installation: {
            windows: 'Download the Lite-C installer from the official website and run it.',
            linux: '$ sudo apt-get install wine\n$ wine <path_to_Lite-C_installer>',
            macOS: '$ brew cask install xquartz\n$ brew install wine\n$ wine <path_to_Lite-C_installer>',
        },
    },
    Lithe: {
        description:
            'Lithe is a dynamically-typed programming language designed for building web applications. It has features such as garbage collection, first-class functions, and support for coroutines.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'building web applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Little b': {
        description:
            "There is no widely known programming language called 'Little b'. It is possible that you may be referring to a specific project or proprietary language, in which case more information would be needed to provide an accurate description, installation instructions, and other details. ",
        OOP: null,
        type: null,
        speed: null,
        mostly_used_for: null,
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Logo: {
        description:
            'Logo is an educational programming language used to introduce students to the basics of computer programming. It includes features such as turtle graphics and support for recursion.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'teaching basic programming concepts to students',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install berkeleylogo\n$ logo',
            macOS: '$ brew install ucblogo\n$ ucblogo',
        },
    },
    Logtalk: {
        description:
            'Logtalk is an object-oriented logic programming language that extends Prolog with support for encapsulation, inheritance, and polymorphism. It is used primarily for developing and reusing libraries of predicates.',
        OOP: true,
        type: 'logically typed',
        speed: null,
        mostly_used_for: 'developing and reusing libraries of predicates',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install logtalk\n$ logtalk_user_setup',
            macOS: '$ brew install logtalk\n$ logtalk_user_setup',
        },
    },
    LPC: {
        description:
            'LPC (LambdaMOO Programming Language) is an object-oriented programming language used to create online multi-user games and virtual worlds. It includes features such as garbage collection, dynamic typing, and support for concurrency.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'creating online multi-user games and virtual worlds',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install ldmud',
            macOS: '$ brew install ldmud',
        },
    },
    LSE: {
        description:
            'LSE (Literate Smalltalk Environment) is an integrated development environment used to create and manage Smalltalk projects. It includes features such as code highlighting, refactoring tools, and class browsing.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'creating and managing Smalltalk projects',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install lse',
            macOS: '$ brew install lse',
        },
    },
    LSL: {
        description:
            'LSL (Linden Scripting Language) is a scripting language used to create interactive objects, animations, and behaviors in the virtual world of Second Life. It includes features such as event handling, vector math, and support for communication with external web servers.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'creating interactive objects, animations, and behaviors in Second Life',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    LiveCode: {
        description:
            'LiveCode is a cross-platform, high-level programming language used to create mobile and desktop applications. It includes features such as support for object-oriented programming, drag-and-drop interface design, and dynamic script execution.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'creating mobile and desktop applications',
        market_share: null,
        installation: {
            windows: 'Download the LiveCode installer from the official website and run it.',
            linux: '$ sudo apt-get install libqt5webkit5\n$ wget http://downloads.livecode.com/livecode/9_6_2/LiveCodeCommunityInstaller-9_6_2-Linux.x64.run\n$ chmod +x LiveCodeCommunityInstaller-9_6_2-Linux.x64.run\n$ ./LiveCodeCommunityInstaller-9_6_2-Linux.x64.run',
            macOS: 'Download the LiveCode installer from the official website and run it.',
        },
    },
    LiveScript: {
        description:
            'LiveScript is a functional programming language that compiles to JavaScript. It includes features such as currying, pattern matching, and support for asynchronous programming.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'compiling to JavaScript and web development',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo npm install -g LiveScript',
            macOS: '$ sudo npm install -g LiveScript',
        },
    },
    Lua: {
        description:
            'Lua is a lightweight, embeddable scripting language used primarily for game development, but also in other areas such as web development and embedded systems. It includes features such as garbage collection, first-class functions, and coroutines.',
        OOP: true,
        type: 'dynamically typed',
        speed: 'fast',
        mostly_used_for: 'game development, web development, and embedded systems',
        market_share: null,
        installation: {
            windows: 'Download the Windows binaries from the official website and run the installer.',
            linux: '$ sudo apt-get install lua5.3',
            macOS: '$ brew install lua',
        },
    },
    Lucid: {
        description:
            'Lucid is a high-level, declarative programming language used primarily for database querying and data analysis. It includes features such as non-procedural control structures, set-oriented operations, and support for structured data types.',
        OOP: false,
        type: 'declarative',
        speed: null,
        mostly_used_for: 'database querying and data analysis',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Lustre: {
        description:
            'Lustre is a synchronous dataflow programming language used in safety-critical systems such as avionics, nuclear power plants, and medical devices. It includes features such as support for parallelism, non-deterministic choice, and hierarchical composition.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'safety-critical systems',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install lustre',
            macOS: null,
        },
    },
    LYaPAS: {
        description:
            'LYaPAS (Langage Y et environnement de Programmation pour les Algorithmes et les Systèmes) is a French programming language used in education to teach algorithmic and programming concepts. It includes features such as support for modular programming and object-oriented programming.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'education',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Lynx: {
        description:
            'Lynx is a command-line web browser used to access and browse web pages in a terminal environment. It includes features such as support for HTML, SSL/TLS encryption, and bookmarks.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'accessing web pages in a terminal environment',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install lynx',
            macOS: '$ brew install lynx',
        },
    },
    M2001: {
        description:
            'M2001 is a structured, procedural programming language used in education to teach programming concepts. It includes features such as support for modular programming, control structures, and input/output operations.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'education',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    M4: {
        description:
            'M4 is a general-purpose macro processor language used to generate text files. It includes features such as support for macros, conditional processing, and built-in functions.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'generating text files',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install m4',
            macOS: '$ brew install m4',
        },
    },
    'Machine code': {
        description:
            "Machine code is low-level code that is directly executable by a computer's CPU. It consists of binary instructions that perform specific operations and manipulate data.",
        OOP: false,
        type: 'not applicable',
        speed: 'very fast',
        mostly_used_for: 'writing operating systems, device drivers, and other system-level programs',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    MAD: {
        description:
            'MAD (Michigan Algorithm Decoder) is a programming language used in scientific and engineering applications, particularly in the field of numerical analysis. It includes features such as support for arrays, subroutines, and looping constructs.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'scientific and engineering applications, particularly numerical analysis',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install madlib',
            macOS: '$ brew install madlib',
        },
    },
    'MAD/I': {
        description:
            'MAD/I (Michigan Algorithm Decoder with In-line comments) is a variant of the MAD programming language that includes support for in-line comments. It is used in scientific and engineering applications, particularly in the field of numerical analysis.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'scientific and engineering applications, particularly numerical analysis',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Magik: {
        description:
            'Magik is an object-oriented programming language used in the development of enterprise applications, particularly those related to customer relationship management (CRM) and enterprise resource planning (ERP). It includes features such as support for classes, inheritance, and polymorphism.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'enterprise application development, particularly CRM and ERP',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install magik',
            macOS: null,
        },
    },
    Magma: {
        description:
            'Magma is a computer algebra system used in computational number theory, algebraic geometry, and related fields. It includes features such as support for modular arithmetic, polynomial manipulation, and algebraic structures.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'computational number theory, algebraic geometry',
        market_share: null,
        installation: {
            windows: '$ choco install magma',
            linux: '$ sudo apt-get install magma',
            macOS: '$ brew install magma',
        },
    },
    make: {
        description:
            'Make is a build automation tool used to compile and package software projects. It includes features such as support for parallel execution, incremental builds, and dependency tracking.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'compiling and packaging software projects',
        market_share: null,
        installation: {
            windows: '$ choco install make',
            linux: '$ sudo apt-get install make',
            macOS: null,
        },
    },
    Maple: {
        description:
            'Maple is a computer algebra system used in scientific and engineering applications, particularly those related to calculus, linear algebra, and differential equations. It includes features such as support for symbolic computation, numerical analysis, and visualization.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'scientific and engineering applications, particularly calculus, linear algebra, and differential equations',
        market_share: null,
        installation: {
            windows: '$ choco install maple',
            linux: '$ sudo apt-get install maple',
            macOS: '$ brew install maple',
        },
    },
    MAPPER: {
        description:
            'MAPPER is a data mapping and integration tool used in enterprise applications. It includes features such as support for data modeling, transformation, and validation.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'data mapping and integration in enterprise applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'MARK-IV': {
        description:
            'MARK-IV is a fourth-generation programming language used in database management and information retrieval applications. It includes features such as support for record-oriented processing, report generation, and file handling.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'database management and information retrieval applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Mary: {
        description:
            'Mary is a programming language used in educational contexts to teach the principles of programming. It includes features such as support for variables, functions, and conditional statements.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'educational programming',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install mary',
            macOS: null,
        },
    },
    'MASM Microsoft Assembly x86': {
        description:
            'MASM is an assembly language used to develop low-level software, particularly device drivers and operating systems. It provides direct access to system resources, such as memory and registers.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'developing low-level software, particularly device drivers and operating systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Mathematica: {
        description:
            'Mathematica is a computer algebra system used in scientific and engineering applications, particularly those related to mathematical modeling and visualization. It includes features such as support for symbolic and numerical computation, optimization, and image processing.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'scientific and engineering applications, particularly mathematical modeling and visualization',
        market_share: null,
        installation: {
            windows: '$ choco install mathematica',
            linux: '$ sudo apt-get install mathematica',
            macOS: '$ brew install mathematica',
        },
    },
    MATLAB: {
        description:
            'MATLAB is a numerical computing environment used in scientific and engineering applications, particularly those related to linear algebra, signal processing, and control systems. It includes features such as support for matrix operations, visualization, and modeling.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'scientific and engineering applications, particularly linear algebra, signal processing, and control systems',
        market_share: null,
        installation: {
            windows: '$ choco install matlab',
            linux: '$ sudo apt-get install matlab',
            macOS: '$ brew install matlab',
        },
    },
    Maxima: {
        description:
            'Maxima is a computer algebra system used in symbolic computation, particularly those related to calculus, linear algebra, and number theory. It includes features such as support for equation solving, differentiation, and integration.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'symbolic computation, particularly calculus, linear algebra, and number theory',
        market_share: null,
        installation: {
            windows: '$ choco install maxima',
            linux: '$ sudo apt-get install maxima',
            macOS: '$ brew install maxima',
        },
    },
    Macsyma: {
        description:
            'Macsyma is an older computer algebra system used in symbolic computation, particularly those related to calculus, linear algebra, and number theory. It includes features such as support for equation solving, differentiation, and integration.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'symbolic computation, particularly calculus, linear algebra, and number theory',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install macsyma',
            macOS: null,
        },
    },
    Max: {
        description:
            'Max is a visual programming language used in music and multimedia applications. It includes features such as support for MIDI, audio synthesis, and real-time interaction.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'music and multimedia applications',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install max',
            macOS: '$ brew install max',
        },
    },
    MaxScript: {
        description:
            'MaxScript is a scripting language used in Autodesk 3ds Max, a 3D modeling and animation software. It includes features such as support for object manipulation, scene creation, and user interface customization.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'scripting in Autodesk 3ds Max',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Maya (MEL)': {
        description:
            'MEL (Maya Embedded Language) is a scripting language used to customize Autodesk Maya, a 3D modeling and animation software. It includes features such as support for object manipulation, scene creation, and user interface customization.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'scripting in Autodesk Maya',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    MDL: {
        description:
            'MDL is a programming language used for creating models and simulations, particularly those related to mechanical engineering and robotics. It includes features such as support for 3D modeling, simulation control, and data analysis.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'creating models and simulations, particularly in mechanical engineering and robotics',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install mdl',
            macOS: null,
        },
    },
    Mercury: {
        description:
            'Mercury is a logic programming language used for creating and analyzing high-level specifications of software systems. It includes features such as support for program verification, model checking, and constraint solving.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'creating and analyzing high-level specifications of software systems',
        market_share: null,
        installation: {
            windows: '$ choco install mercury',
            linux: '$ sudo apt-get install mercury',
            macOS: '$ brew install mercury',
        },
    },
    Mesa: {
        description:
            'Mesa is an open-source implementation of the OpenGL specification, used for creating 3D graphics in a variety of applications and games. It includes features such as support for hardware acceleration, texture mapping, lighting, and shading.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'creating 3D graphics in a variety of applications and games',
        market_share: null,
        installation: {
            windows: '$ choco install mesa',
            linux: '$ sudo apt-get install mesa',
            macOS: null,
        },
    },
    Metacard: {
        description:
            'MetaCard is a cross-platform software development tool used for creating graphical user interfaces (GUIs) and multimedia applications. It includes features such as support for scripting, data driven application development, and integration with external libraries.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'creating GUIs and multimedia applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Metafont: {
        description:
            'Metafont is a font description language used for creating high-quality fonts that can be scaled to any size without loss of resolution. It includes features such as support for mathematical formulae, ligatures, and kerning.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'creating high-quality scalable fonts',
        market_share: null,
        installation: {
            windows: '$ choco install metafont',
            linux: '$ sudo apt-get install texlive-fonts-extra',
            macOS: '$ brew install tex',
        },
    },
    MetaL: {
        description:
            'MetaL is a scripting language used for creating dynamic web pages and web services. It includes features such as support for database connectivity, session management, and XML manipulation.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'creating dynamic web pages and web services',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Microcode: {
        description:
            'Microcode is a low-level programming language used for controlling the behavior of computer hardware, particularly in processors. It includes features such as support for instruction sets, microarchitecture, and pipeline control.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'controlling the behavior of computer hardware, particularly in processors',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    MicroScript: {
        description:
            'MicroScript is a scripting language used in the MicroStation 3D CAD software, used for creating parametric designs and automating repetitive tasks. It includes features such as support for object manipulation, user interface customization, and data input/output.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'scripting in MicroStation 3D CAD software',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    MIIS: {
        description:
            'Microsoft Identity Integration Server (MIIS) is a software product used for managing identities and accounts across multiple systems and directories. It includes features such as synchronization, transformation, and integration of identity data.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'managing identities and accounts across multiple systems and directories',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    MillScript: {
        description:
            'MillScript is a scripting language used in the Apache Jakarta project, particularly in the Turbine web application framework. It includes features such as support for XML configuration files, session management, and database connectivity.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'scripting in the Apache Jakarta project, particularly in the Turbine web application framework',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    MIMIC: {
        description:
            'MIMIC is a network simulation software used for testing and analyzing network devices and applications. It includes features such as support for SNMP, TCP/IP, and VoIP protocols, as well as virtualization of network devices.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'network simulation and testing',
        market_share: null,
        installation: {
            windows: '$ choco install mimic',
            linux: null,
            macOS: null,
        },
    },
    Mirah: {
        description:
            'Mirah is a programming language designed to run on the Java Virtual Machine (JVM), with syntax similar to Ruby and support for static typing. It includes features such as support for object-oriented programming, closures, and type inference.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing Java-based applications',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install mirah',
            macOS: '$ brew install mirah',
        },
    },
    Miranda: {
        description:
            'Miranda is a functional programming language designed for ease of use and mathematical expression. It includes features such as lazy evaluation, pattern matching, and higher-order functions.',
        OOP: false,
        type: 'lazy',
        speed: null,
        mostly_used_for: 'scientific computing and educational purposes',
        market_share: null,
        installation: {
            windows: '$ choco install miranda',
            linux: '$ sudo apt-get install mira',
            macOS: '$ brew install miranda',
        },
    },
    'MIVA Script': {
        description:
            'MIVA Script is a proprietary scripting language used in the MIVA e-commerce platform, used for building and customizing online stores. It includes features such as support for database connectivity, user interface customization, and session management.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'building and customizing online stores',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    ML: {
        description:
            'ML is a family of functional programming languages used primarily in research and academia. It includes features such as strong type inference, polymorphism, and pattern matching.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'research and academia',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install mlton',
            macOS: '$ brew install mlton',
        },
    },
    Moby: {
        description:
            'Moby is an open-source project used for building and managing containerized applications. It includes features such as support for Docker images, container orchestration, and networking.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'building and managing containerized applications',
        market_share: null,
        installation: {
            windows: '$ choco install moby',
            linux: '$ curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh',
            macOS: '$ brew install docker && brew install docker-compose',
        },
    },
    'Model 204': {
        description:
            'Model 204 is a high-performance database management system used in business and government applications. It includes features such as support for SQL queries, transaction processing, and data security.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'database management',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Modelica: {
        description:
            'Modelica is an object-oriented, equation-based language used for modeling complex physical systems. It includes features such as support for multi-domain modeling, symbolic manipulation of equations, and code generation.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'modeling complex physical systems',
        market_share: null,
        installation: {
            windows: '$ choco install openmodelica',
            linux: '$ sudo apt-get install openmodelica',
            macOS: '$ brew install openmodelica',
        },
    },
    Modula: {
        description:
            'Modula is a family of programming languages developed by Niklaus Wirth, the creator of Pascal. It includes features such as support for modular programming, strong typing, and low-level access to memory.',
        OOP: false,
        type: 'strongly typed',
        speed: null,
        mostly_used_for: 'system programming and education',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install gcc-modula-2',
            macOS: null,
        },
    },
    'Modula-2': {
        description:
            'Modula-2 is an extension of the Modula programming language, developed by Niklaus Wirth. It includes features such as support for modular programming, strong typing, and low-level access to memory.',
        OOP: false,
        type: 'strongly typed',
        speed: null,
        mostly_used_for: 'system programming and education',
        market_share: null,
        installation: {
            windows: '$ choco install p1',
            linux: '$ sudo apt-get install gmt',
            macOS: null,
        },
    },
    'Modula-3': {
        description:
            'Modula-3 is a systems programming language developed at Digital Equipment Corporation (DEC) and later at Olivetti. It includes features such as support for object-oriented programming, garbage collection, and type-safe memory management.',
        OOP: true,
        type: 'strongly typed',
        speed: null,
        mostly_used_for: 'system programming',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install modula3',
            macOS: null,
        },
    },
    MOO: {
        description:
            'MOO (MUD Object-Oriented) is a text-based virtual reality system used for building online communities and multi-user games. It includes features such as support for object-oriented programming, network communication, and user management.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'building online communities and multi-user games',
        market_share: null,
        installation: {
            windows: '$ choco install moo',
            linux: '$ sudo apt-get install moo-server',
            macOS: '$ brew install moo',
        },
    },
    Mortran: {
        description:
            "Mortran is an extension of FORTRAN used for the implementation of mathematical models in Mortimer Adler's Institute for Philosophical Research. It includes features such as support for symbolic manipulation of equations, and provision for user-defined functions and operators.",
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'mathematical modeling',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Mouse: {
        description:
            'Mouse is a simple programming language used for teaching introductory computer science courses. It includes features such as support for basic data types and control flow statements.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'teaching introductory computer science courses',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install mouse',
            macOS: null,
        },
    },
    MPD: {
        description:
            'Music Player Daemon (MPD) is a flexible, powerful, server-side application for playing music. It includes features such as support for various audio file formats, playlists, and plugins.',
        OOP: null,
        type: null,
        speed: null,
        mostly_used_for: 'playing music',
        market_share: null,
        installation: {
            windows: '$ choco install mpd',
            linux: '$ sudo apt-get install mpd',
            macOS: '$ brew install mpd',
        },
    },
    CIL: {
        description:
            'Common Intermediate Language (CIL) is a low-level programming language used in the .NET framework. It is an intermediate language that is compiled by the just-in-time (JIT) compiler to machine code during runtime.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'building .NET applications',
        market_share: null,
        installation: {
            windows: '$ choco install cil',
            linux: '$ sudo apt-get install mono-devel',
            macOS: '$ brew install mono',
        },
    },
    MSL: {
        description:
            'Microsoft Macro Assembler Language (MSL) is a low-level assembly language used on the Windows operating system. It is primarily used for writing device drivers, operating system components and other low-level utilities.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'writing device drivers, operating system components and other low-level utilities',
        market_share: null,
        installation: {
            windows: 'Included in Visual Studio',
            linux: 'Not available',
            macOS: 'Not available',
        },
    },
    MUMPS: {
        description:
            'MUMPS (Massachusetts General Hospital Utility Multi-Programming System) is a high-level programming language designed for health care applications. It includes features such as support for string manipulation, database access, and inter-process communication.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'health care applications',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install mumps',
            macOS: '$ brew install mumps',
        },
    },
    NASM: {
        description:
            'Netwide Assembler (NASM) is an assembler and disassembler used for low-level programming of x86 and x86-64 architectures. It includes features such as support for macros, conditional assembly, and multiple output formats.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'low-level programming of x86 and x86-64 architectures',
        market_share: null,
        installation: {
            windows: '$ choco install nasm',
            linux: '$ sudo apt-get install nasm',
            macOS: '$ brew install nasm',
        },
    },
    NATURAL: {
        description:
            'NATURAL is a fourth-generation programming language (4GL) used for building business applications. It includes features such as support for database access, screen design, and report generation.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'building business applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Napier88: {
        description:
            'Napier88 is a programming language used for modeling and simulation of forest growth. It includes features such as support for statistical analysis, graphical output, and prediction of tree growth.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'modeling and simulation of forest growth',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Neko: {
        description:
            'Neko is a high-level programming language used for building cross-platform applications. It includes features such as support for dynamic typing, garbage collection, and bytecode compilation.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'building cross-platform applications',
        market_share: null,
        installation: {
            windows: '$ choco install neko',
            linux: '$ sudo apt-get install neko',
            macOS: '$ brew install neko',
        },
    },
    Nemerle: {
        description:
            'Nemerle is a high-level, statically-typed programming language designed for the .NET platform. It includes features such as support for object-oriented programming, metaprogramming, and macros.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: '.NET development',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install nemerle',
            macOS: null,
        },
    },
    nesC: {
        description:
            'nesC is an extension of the C programming language used for building embedded systems, specifically wireless sensor networks. It includes features such as support for component-based programming and software reuse.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'building embedded systems and wireless sensor networks',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install nesc',
            macOS: '$ brew install nesc',
        },
    },
    NESL: {
        description:
            'NESL (Nested Data-Parallel Scheme) is a functional programming language used for parallel computation of nested data structures. It includes features such as support for lazy evaluation, garbage collection, and shared-memory parallelism.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'parallel computation of nested data structures',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Net.Data': {
        description:
            'Net.Data is a scripting language used for building web applications and integrating them with databases. It includes features such as support for dynamic content generation, database connectivity, and server-side scripting.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'building web applications and integrating them with databases',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    NetLogo: {
        description:
            'NetLogo is a multi-agent programmable modeling environment used for simulating natural and social phenomena. It includes features such as support for spatial simulations, network models, and behavioral rules.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'simulating natural and social phenomena',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install netlogo',
            macOS: '$ brew install netlogo',
        },
    },
    NetRexx: {
        description:
            'NetRexx is an extension of the REXX programming language used for building Java applications. It includes features such as support for object-oriented programming, platform independence, and seamless integration with Java code.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'building Java applications',
        market_share: null,
        installation: {
            windows: '$ choco install netrexx',
            linux: '$ sudo apt-get install netrexx',
            macOS: '$ brew install netrexx',
        },
    },
    NewLISP: {
        description:
            'NewLISP is a scripting language used for building web applications, automating tasks, and rapid prototyping. It includes features such as support for functional programming, symbolic computing, and networking.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'building web applications, automating tasks, and rapid prototyping',
        market_share: null,
        installation: {
            windows: '$ choco install newlisp',
            linux: '$ sudo apt-get install newlisp',
            macOS: '$ brew install newlisp',
        },
    },
    Newspeak: {
        description:
            'Newspeak is a reflective object-oriented programming language used for building large-scale, distributed systems. It includes features such as support for dynamic linking, concurrency control, and message passing.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'building large-scale, distributed systems',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install newspeak',
            macOS: '$ brew install newspeak',
        },
    },
    NewtonScript: {
        description:
            'NewtonScript is an object-oriented programming language used for building applications on Apple Newton personal digital assistants. It includes features such as support for dynamic linking, exception handling, and garbage collection.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'building applications on Apple Newton personal digital assistants',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Nial: {
        description:
            'Nial is an APL-like array programming language used for scientific computing and data analysis. It includes features such as dynamic arrays, higher-order functions, and support for parallel processing.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'scientific computing and data analysis',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install nial',
            macOS: '$ brew install nial',
        },
    },
    Nice: {
        description:
            'Nice is an object-oriented programming language used for building scalable and concurrent applications. It includes features such as support for multi-threading, garbage collection, and type inference.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'building scalable and concurrent applications',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install nice',
            macOS: '$ brew install nice',
        },
    },
    Nickle: {
        description:
            'Nickle is a scripting language used for numerical computing and scientific data analysis. It includes features such as support for matrices, vectors, complex numbers, and high-level functions.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'numerical computing and scientific data analysis',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install nickle',
            macOS: '$ brew install nickle',
        },
    },
    Nim: {
        description:
            'Nim is a systems and application programming language that focuses on efficiency, expressiveness, and safety. It includes features such as support for metaprogramming, garbage collection, and powerful type inference.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'systems and application programming',
        market_share: null,
        installation: {
            windows: 'choco install nim',
            linux: '$ sudo apt-get install nim',
            macOS: '$ brew install nim',
        },
    },
    NPL: {
        description:
            'NPL is a scripting language used for building networked multiplayer games and virtual worlds. It includes features such as support for 3D graphics, physics simulation, and Lua scripting.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'building networked multiplayer games and virtual worlds',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Not eXactly C': {
        description:
            'Not eXactly C (NXC) is a high-level programming language used for programming LEGO Mindstorms NXT robots. It includes features such as support for various sensors and motors, multitasking, and low-level control.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'programming LEGO Mindstorms NXT robots',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install nbc',
            macOS: '$ brew install nbc',
        },
    },
    'Not Quite C': {
        description:
            'Not Quite C (NQC) is a high-level programming language used for programming LEGO Mindstorms RCX robots. It includes features such as support for various sensors and motors, multitasking, and low-level control.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'programming LEGO Mindstorms RCX robots',
        market_share: null,
        installation: {
            windows: '$ choco install nqc',
            linux: '$ sudo apt-get install nqc',
            macOS: '$ brew install nqc',
        },
    },
    NSIS: {
        description:
            'Nullsoft Scriptable Install System (NSIS) is a script-driven installation system used for creating Windows installers. It includes features such as support for custom pages, uninstallers, and multiple languages.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'creating Windows installers',
        market_share: null,
        installation: {
            windows: '$ choco install nsis',
            linux: null,
            macOS: null,
        },
    },
    Nu: {
        description:
            'Nu is a modern, interpreted programming language inspired by Lisp and Clojure. It includes features such as support for functional programming, macros, data modeling, and domain-specific languages.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'general-purpose programming',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ curl https://github.com/nulang/nush/releases/latest/download/nush-linux-amd64 -L -o nush && sudo install nush /usr/local/bin/',
            macOS: '$ curl https://github.com/nulang/nush/releases/latest/download/nush-darwin-amd64 -L -o nush && sudo install nush /usr/local/bin/',
        },
    },
    NWScript: {
        description:
            'NWScript is a scripting language used for creating interactive game content in games based on the Aurora engine, such as Neverwinter Nights. It includes features such as support for variables, functions, and conditional statements.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'creating interactive game content',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'NXT-G': {
        description:
            'LEGO MINDSTORMS NXT-G is a graphical programming language used for programming LEGO Mindstorms NXT robots. It includes features such as support for various sensors and motors, data wires, and basic control structures.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'programming LEGO Mindstorms NXT robots',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'o:XML': {
        description:
            'o:XML is an XML-based markup language used for defining object-oriented data structures. It includes features such as support for inheritance, polymorphism, and serialization.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'defining object-oriented data structures',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install libox0v5 libox-dbg libox-xml-dbg libox-xml-dev libox-xml-doc libox-xml2.10 libox2.10 liboxconfig0 liboxdi-dev liboxdibase-dev liboxdinet-dev liboxevent-dev liboxevtree-dev liboxfacade-dev liboxgdi-dev liboxhtml-dev liboxim-dev liboxinet-dev liboxpdf-dev liboxrpc-dev liboxtcp-dev liboxunit++-dev',
            macOS: '$ brew install ox',
        },
    },
    Oak: {
        description:
            'Oak is a statically-typed programming language used for building microservices and cloud-native applications on the Oracle Cloud Infrastructure platform. It includes features such as support for containerization, automatic scaling, and integration with other Oracle Cloud services.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'building microservices and cloud-native applications on the Oracle Cloud Infrastructure platform',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ curl -L https://github.com/oracle/oakcli/releases/latest/download/oakcli_linux_amd64.tar.gz | tar xz && sudo mv oakcli /usr/local/bin',
            macOS: '$ curl -L https://github.com/oracle/oakcli/releases/latest/download/oakcli_darwin_amd64.tar.gz | tar xz && sudo mv oakcli /usr/local/bin',
        },
    },
    Oberon: {
        description:
            'Oberon is a general-purpose programming language and operating system developed in the late 1980s by Niklaus Wirth. It includes features such as support for modules, records, type extensions, and garbage collection.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'general-purpose programming',
        market_share: null,
        installation: {
            windows: '$ choco install oberon',
            linux: '$ sudo apt-get install obnc',
            macOS: '$ brew install obc',
        },
    },
    Obix: {
        description:
            'Obix is an object-oriented programming language used for building distributed systems and applications. It includes features such as support for message passing, concurrency, and distributed objects.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'building distributed systems and applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    OBJ2: {
        description:
            'OBJ2 is an object-oriented programming language used for building software systems that require strong typing and formal specification. It includes features such as support for classes, inheritance, interfaces, and pre/post conditions.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'building software systems that require strong typing and formal specification',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install obj2',
            macOS: null,
        },
    },
    'Object Lisp': {
        description:
            'Object Lisp is an object-oriented programming language that extends the Lisp language with support for classes, objects, and inheritance. It includes features such as support for garbage collection, dynamic typing, and macros.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'general-purpose programming',
        market_share: null,
        installation: {
            windows: '$ choco install clisp',
            linux: '$ sudo apt-get install clisp',
            macOS: '$ brew install clisp',
        },
    },
    ObjectLOGO: {
        description:
            'ObjectLOGO is an object-oriented extension of the Logo programming language, which is designed to provide support for manipulating graphics and creating simulations. It includes features such as support for objects, classes, and inheritance.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'manipulating graphics and creating simulations',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install fmslogo',
            macOS: '$ brew install fmslogo',
        },
    },
    'Object REXX': {
        description:
            'Object REXX is an object-oriented scripting language that extends the REXX programming language with support for classes, objects, and methods. It includes features such as support for dynamic typing, garbage collection, and exception handling.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'scripting and automation',
        market_share: null,
        installation: {
            windows: '$ choco install ooRexx',
            linux: '$ sudo apt-get install ooRexx',
            macOS: '$ brew install ooRexx',
        },
    },
    'Object Pascal': {
        description:
            'Object Pascal is an extension of the Pascal programming language that includes support for object-oriented programming. It includes features such as support for classes, objects, inheritance, and polymorphism.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'general-purpose programming',
        market_share: null,
        installation: {
            windows: 'Download the Lazarus IDE from https://www.lazarus-ide.org/ and install it.',
            linux: '$ sudo apt-get install fpc',
            macOS: '$ brew install fpc',
        },
    },
    'Objective-C': {
        description:
            'Objective-C is an object-oriented programming language that adds Smalltalk-style messaging to the C programming language. It includes features such as support for classes, objects, and dynamic binding.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing macOS and iOS applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: 'Objective-C is pre-installed on macOS systems.',
        },
    },
    'Objective-J': {
        description:
            'Objective-J is an object-oriented programming language that extends JavaScript with support for classes, objects, and inheritance. It includes features such as support for dynamic typing, garbage collection, and blocks.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing web applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Obliq: {
        description:
            'Obliq is an object-oriented programming language used for building distributed systems and applications. It includes features such as support for objects, classes, inheritance, and concurrency.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'building distributed systems and applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Obol: {
        description:
            'Obol is an object-oriented programming language that extends the Common Lisp programming language with support for classes, objects, and inheritance. It includes features such as support for dynamic typing, garbage collection, and macros.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'general-purpose programming',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install cl-obol',
            macOS: null,
        },
    },
    OCaml: {
        description:
            'OCaml is a statically typed functional programming language that includes support for imperative and object-oriented programming. It includes features such as type inference, pattern matching, and garbage collection.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'scientific computing and symbolic manipulation',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install ocaml',
            macOS: '$ brew install ocaml',
        },
    },
    occam: {
        description:
            'occam is a concurrent programming language used for building distributed systems and applications. It includes features such as support for lightweight processes, message passing, and shared memory.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'building distributed systems and applications',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install occam',
            macOS: null,
        },
    },
    'occam-π': {
        description:
            'occam-π is a concurrent programming language used for building distributed systems and applications. It includes features such as support for lightweight processes, message passing, and shared memory.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'building distributed systems and applications',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install occam-pi',
            macOS: null,
        },
    },
    Octave: {
        description:
            'Octave is a high-level interpreted programming language used for numerical computations and scientific computing. It includes features such as support for vectors, matrices, and complex numbers.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'numerical computations and scientific computing',
        market_share: null,
        installation: {
            windows: '$ choco install octave.portable',
            linux: '$ sudo apt-get install octave',
            macOS: '$ brew install octave',
        },
    },
    OmniMark: {
        description:
            'OmniMark is a high-level programming language used for text processing and generation. It includes features such as support for pattern matching, regular expressions, and markup languages.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'text processing and generation',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install omnimark',
            macOS: null,
        },
    },
    Onyx: {
        description:
            'Onyx is a stack-based, concatenative programming language used for building compilers and interpreters. It includes features such as support for macros, first-class functions, and code quotations.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'building compilers and interpreters',
        market_share: null,
        installation: {
            windows: '$ choco install onyx',
            linux: '$ sudo apt-get install onyx',
            macOS: '$ brew install onyx',
        },
    },
    Opa: {
        description:
            'Opa is a web development platform that includes a programming language, web server, and database. The Opa language is statically typed and includes features such as support for reactive programming and distributed computing.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'web development',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ wget https://github.com/MLstate/opalang/releases/download/v1.2.2/opa_1.2.2_amd64.deb && sudo dpkg -i opa_1.2.2_amd64.deb',
            macOS: '$ brew install opa',
        },
    },
    Opal: {
        description:
            'Opal is a functional programming language used for building distributed systems and applications. It includes features such as support for higher-order functions, lazy evaluation, and pattern matching.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'building distributed systems and applications',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install opal',
            macOS: null,
        },
    },
    OpenCL: {
        description:
            'OpenCL is a framework for parallel computing across CPUs, GPUs, and other processors. It includes an API for writing parallel programs and tools for optimizing performance on heterogeneous systems.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'parallel computing',
        market_share: null,
        installation: {
            windows: '$ choco install opencl-sdk',
            linux: '$ sudo apt-get install ocl-icd-opencl-dev',
            macOS: '$ brew install --cask intel-oneapi-cocl',
        },
    },
    'OpenEdge ABL': {
        description:
            'OpenEdge Advanced Business Language (ABL) is a high-level programming language used for developing business applications. It includes features such as support for SQL databases, object-oriented programming, and GUI development.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing business applications',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install progress',
            macOS: null,
        },
    },
    OPL: {
        description:
            'OPL is a high-level modeling language used for optimization and decision-making. It includes features such as support for linear programming, mixed-integer programming, and constraint programming.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'optimization and decision-making',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install opl-sdk',
            macOS: null,
        },
    },
    OPS5: {
        description:
            'OPS5 is a rule-based programming language used for building expert systems and artificial intelligence applications. It includes features such as support for forward-chaining and backward-chaining rules.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'building expert systems and artificial intelligence applications',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install ops5',
            macOS: null,
        },
    },
    OptimJ: {
        description:
            'OptimJ is an extension of the Java programming language used for modeling and optimization. It includes features such as support for advanced mathematical modeling constructs, constraint programming, and automatic differentiation.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'modeling and optimization',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ wget https://github.com/ibm-research/OptimJ/releases/download/1.3.0/optimj-1.3.0-linux.zip && unzip optimj-1.3.0-linux.zip',
            macOS: '$ curl -LJO https://github.com/ibm-research/OptimJ/releases/download/1.3.0/optimj-1.3.0-macosx.zip && unzip optimj-1.3.0-macosx.zip',
        },
    },
    Orc: {
        description:
            'Orc is a high-level programming language used for orchestration and coordination of distributed systems. It includes features such as support for concurrency, fault tolerance, and message passing.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'orchestration and coordination of distributed systems',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install orc',
            macOS: '$ brew install orc',
        },
    },
    'ORCA/Modula-2': {
        description:
            'ORCA/Modula-2 is an extension of the Modula-2 programming language used for systems programming on Apple Macintosh computers. It includes features such as support for low-level programming constructs and direct access to hardware devices.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'systems programming on Apple Macintosh computers',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: '$ brew install ora',
        },
    },
    Oriel: {
        description:
            'Oriel is a functional programming language used for teaching and learning computer science concepts. It includes features such as support for algebraic data types, pattern matching, and recursion.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'teaching and learning computer science concepts',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install oriel',
            macOS: null,
        },
    },
    Orwell: {
        description:
            "Orwell is a programming language inspired by George Orwell's book 1984. It includes features such as support for thoughtcrime, doublethink, and newspeak.",
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'experimental purposes',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Oxygene: {
        description:
            'Oxygene is an object-oriented programming language used for developing .NET, Java, and Android applications. It includes features such as support for interfaces, generics, and nullable types.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: '.NET, Java, and Android application development',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Oz: {
        description:
            'Oz is a concurrent programming language used for developing distributed and parallel systems. It includes features such as support for logic programming, constraint programming, and actor model.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing distributed and parallel systems',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install mozart oz',
            macOS: '$ brew install mozart oz',
        },
    },
    'P#': {
        description:
            'P# is an extension of the C# programming language used for programming and testing asynchronous and concurrent systems. It includes features such as support for modeling and verifying asynchronous code, systematic fault injection, and symbolic execution.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'programming and testing asynchronous and concurrent systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: '$ brew install psharp',
        },
    },
    'ParaSail (programming language)': {
        description:
            'ParaSail is a programming language used for safe parallel programming. It includes features such as support for thread-safe programming constructs, automatic detection of data races, and deadlock prevention.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'safe parallel programming',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo snap install parasail-lang',
            macOS: '$ brew install parasail-lang',
        },
    },
    'PARI/GP': {
        description:
            'PARI/GP is a computer algebra system used for number theory computations. It includes features such as support for arbitrary precision arithmetic, algebraic number theory, and elliptic curves.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'number theory computations',
        market_share: null,
        installation: {
            windows: '$ choco install parigp',
            linux: '$ sudo apt-get install pari-gp',
            macOS: '$ brew install pari',
        },
    },
    Pascal: {
        description:
            'Pascal is a high-level programming language used for general-purpose programming. It includes features such as support for structured programming, strong typing, and modular programming.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'general-purpose programming',
        market_share: null,
        installation: {
            windows: '$ choco install fpc',
            linux: '$ sudo apt-get install fp-compiler',
            macOS: '$ brew install fpc',
        },
    },
    Pawn: {
        description:
            'Pawn is a scripting language used for game development and modding. It includes features such as support for arrays, pointers, and dynamic memory allocation.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'game development and modding',
        market_share: null,
        installation: {
            windows: '$ scoop install pawn-lang',
            linux: '$ sudo apt-get install pawn',
            macOS: '$ brew install pawn',
        },
    },
    PCASTL: {
        description:
            'PCASTL is a programming language used for data processing and analysis. It includes features such as support for parallel computing, distributed computing, and stream processing.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'data processing and analysis',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    PCF: {
        description:
            'PCF (Programming Language for Computable Functions) is a functional programming language used for specifying and verifying distributed systems. It includes features such as support for higher-order functions, polymorphism, and type inference.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'specifying and verifying distributed systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    PEARL: {
        description:
            'PEARL (Process and Experiment Automation Realtime Language) is a programming language used for real-time and process control applications. It includes features such as support for concurrent processes, interrupt handling, and communication with hardware devices.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'real-time and process control applications',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install pearl',
            macOS: null,
        },
    },
    PeopleCode: {
        description:
            "PeopleCode is a proprietary programming language used for customizing and developing applications in Oracle's PeopleSoft environment. It includes features such as support for object-oriented programming, events, and data manipulation.",
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: "customizing and developing applications in Oracle's PeopleSoft environment",
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Perl: {
        description:
            'Perl is a high-level programming language used for general-purpose programming. It includes features such as support for text processing, regular expressions, and object-oriented programming.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'general-purpose programming',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install perl',
            macOS: '$ brew install perl',
        },
    },
    PDL: {
        description:
            'PDL (Perl Data Language) is a high-level programming language used for scientific computing and data analysis. It includes features such as support for n-dimensional arrays, fast element-wise operations, and graphical output.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'scientific computing and data analysis',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install pdl',
            macOS: null,
        },
    },
    PHP: {
        description:
            'PHP is a popular server-side scripting language used for web development. It includes features such as support for databases, object-oriented programming, and  HTTP requests.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'web development',
        market_share: null,
        installation: {
            windows: '$ choco install php',
            linux: '$ sudo apt-get install php',
            macOS: '$ brew install php',
        },
    },
    Phrogram: {
        description:
            'Phrogram is a visual programming language used for teaching programming concepts to beginners. It includes features such as support for graphics, sound, and user input.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'teaching programming concepts',
        market_share: null,
        installation: {
            windows: '$ choco install phrogram',
            linux: null,
            macOS: null,
        },
    },
    Pico: {
        description:
            'Pico is a small programming language used for educational purposes. It includes features such as support for simple data types, conditionals, and loops.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'educational purposes',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Picolisp: {
        description:
            'Picolisp is a Lisp dialect used for general-purpose programming. It includes features such as support for functional programming, macros, and garbage collection.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'general-purpose programming',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install picolisp',
            macOS: '$ brew install picolisp',
        },
    },
    Pict: {
        description:
            'Pict is a specification language used for testing and verifying software systems. It includes features such as support for state machines, input generation, and constraint solving.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'testing and verifying software systems',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install pict',
            macOS: null,
        },
    },
    Pike: {
        description:
            'Pike is a dynamic programming language used for general-purpose programming. It includes features such as support for object-oriented programming, garbage collection, and networking.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'general-purpose programming',
        market_share: null,
        installation: {
            windows: '$ choco install pike',
            linux: '$ sudo apt-get install pike8.0',
            macOS: '$ brew install pike',
        },
    },
    PIKT: {
        description:
            'PIKT (Problem Informant/Killer Tool) is a scripting language used for system monitoring, reporting, and automation. It includes features such as support for pattern matching, file I/O, and process execution.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'system monitoring, reporting, and automation',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install pikt',
            macOS: null,
        },
    },
    PILOT: {
        description:
            'PILOT is a programming language used for developing interactive fiction and educational software. It includes features such as support for branching, conditionals, and user input.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'developing interactive fiction and educational software',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install pilot',
            macOS: null,
        },
    },
    Pizza: {
        description:
            'Pizza is an experimental programming language used for teaching and research. It includes features such as support for object-oriented programming, concurrency, and distributed computing.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'teaching and research',
        market_share: null,
        installation: {
            windows: '$ choco install pizza-lang',
            linux: '$ sudo apt-get install pizza',
            macOS: null,
        },
    },
    'PL/0': {
        description:
            'PL/0 is a simple, educational programming language used for teaching compilers and programming language design. It includes features such as support for variables, operators, and control structures.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'teaching compilers and programming language design',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install pl0',
            macOS: null,
        },
    },
    'PL/B': {
        description:
            'PL/B is a high-level, structured programming language used for developing business applications. It includes features such as support for variables, arrays, control structures, and file handling.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing business applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'PL/C': {
        description:
            'PL/C is an implementation of the C programming language used for developing IBM mainframe applications. It includes features such as support for variables, arrays, control structures, and pointer manipulation.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing IBM mainframe applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'PL/I': {
        description:
            'PL/I is a high-level, general-purpose programming language used for developing scientific, engineering, and commercial applications. It includes features such as support for variables, arrays, control structures, file handling, and string manipulation.',
        OOP: false,
        type: 'statically and dynamically typed',
        speed: null,
        mostly_used_for: 'developing scientific, engineering, and commercial applications',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install pli',
            macOS: null,
        },
    },
    'PL/M': {
        description:
            'PL/M is a low-level, assembly-like programming language used for developing software for microcontrollers and embedded systems. It includes features such as support for bit manipulation, control structures, and hardware access.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing software for microcontrollers and embedded systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'PL/P': {
        description:
            'PL/P is a high-level, procedural programming language used for developing applications on IBM mainframes. It includes features such as support for variables, arrays, control structures, file handling, and string manipulation.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing applications on IBM mainframes',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'PL/SQL': {
        description:
            'PL/SQL is a procedural extension to SQL used for developing Oracle database applications. It includes features such as support for variables, arrays, control structures, exception handling, and stored procedures.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing Oracle database applications',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install oracle-plsql',
            macOS: null,
        },
    },
    PL360: {
        description:
            'PL360 is a high-level, procedural programming language used for developing software on IBM mainframes. It includes features such as support for variables, arrays, control structures, and file handling.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing software on IBM mainframes',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    PLANC: {
        description:
            'PLANC is a high-level, procedural programming language used for developing software on IBM mainframes. It includes features such as support for variables, arrays, control structures, and file handling.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing software on IBM mainframes',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Plankalkül: {
        description:
            'Plankalkül is one of the first high-level, non-procedural programming languages designed by Konrad Zuse in the 1940s. It includes features such as support for variables, arrays, control structures, and recursive functions.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'general-purpose computing tasks',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Planner: {
        description:
            'Planner is a programming language based on the logic programming paradigm. It includes features such as support for variables, rules, and backtracking.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'AI and expert systems',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install planner',
            macOS: null,
        },
    },
    PLEX: {
        description:
            'PLEX (Programming Language for Executive) is a modeling language used for developing software applications. It includes features such as support for data modeling, process modeling, and structured control flow.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing software applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    PLEXIL: {
        description:
            'PLEXIL (Plan Execution Interchange Language) is a high-level, procedural programming language used for developing software applications. It includes features such as support for variables, arrays, control structures, and task parallelism.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing mission-critical systems',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install plexil',
            macOS: null,
        },
    },
    Plus: {
        description:
            'Plus is a high-level, object-oriented programming language used for developing software applications. It includes features such as support for objects, classes, inheritance, and exception handling.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing software applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'POP-11': {
        description:
            'POP-11 is a high-level, procedural and object-oriented programming language used for developing software applications. It includes features such as support for objects, classes, inheritance, and exception handling.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing artificial intelligence and cognitive science applications',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install poplog',
            macOS: null,
        },
    },
    PostScript: {
        description:
            'PostScript is a Turing-complete page description language used primarily in the electronic and desktop publishing areas for printing documents containing text, vector graphics, and raster images.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'page description and printing',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install ghostscript',
            macOS: null,
        },
    },
    PortablE: {
        description:
            'PortablE is a high-level, procedural programming language designed to be compatible with the AmigaE programming language, while also providing cross-platform compatibility.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing software applications',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install porte',
            macOS: null,
        },
    },
    Powerhouse: {
        description:
            'Powerhouse is a high-level, procedural programming language used for developing software applications in the data processing and business automation domains. It includes features such as support for variables, arrays, control structures, and file handling.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing software applications in the data processing and business automation domains',
        market_share: null,
        installation: {
            windows: '$ choco install powerhouse',
            linux: null,
            macOS: null,
        },
    },
    PowerBuilder: {
        description:
            'PowerBuilder is an object-oriented, high-level programming language used for developing software applications with a graphical user interface. It includes features such as support for objects, classes, inheritance, and exception handling.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing software applications with a graphical user interface',
        market_share: null,
        installation: {
            windows: '$ choco install powerbuilder',
            linux: null,
            macOS: null,
        },
    },
    PowerShell: {
        description:
            'PowerShell is a cross-platform task automation and configuration management framework used for managing computer systems. It includes features such as support for variables, functions, pipelines, and object-oriented programming concepts.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'managing computer systems',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install powershell',
            macOS: '$ brew install --cask powershell',
        },
    },
    PPL: {
        description:
            'PPL (Parma Polyhedra Library) is a library of numerical abstractions for analyzing and verifying complex systems, such as software and hardware designs. It includes features such as support for polyhedral operations, abstract interpretation, and optimization.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'analyzing and verifying complex systems',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install libppl-dev',
            macOS: '$ brew install ppl',
        },
    },
    Processing: {
        description:
            'Processing is a high-level, visual programming language and development environment used for creating interactive user experiences and computer graphics. It includes features such as support for 2D and 3D graphics, input/output devices, and network communication.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'creating interactive user experiences and computer graphics',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo snap install processing',
            macOS: null,
        },
    },
    'Processing.js': {
        description:
            'Processing.js is a JavaScript library that ported the Processing language to the web. It allows for the creation of interactive animations, visualizations, and games on web pages.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'creating interactive animations, visualizations, and games on web pages',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Prograph: {
        description:
            'Prograph is a visual programming language used for developing software applications with flowcharts and diagrams. It includes features such as support for objects, classes, inheritance, and exception handling.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing software applications with flowcharts and diagrams',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: '$ brew install prograph',
        },
    },
    PROIV: {
        description:
            'PROIV is a high-level, procedural programming language and development environment used for developing software applications in the business automation domain. It includes features such as support for variables, arrays, control structures, and file handling.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing software applications in the business automation domain',
        market_share: null,
        installation: {
            windows: '$ choco install proiv',
            linux: null,
            macOS: null,
        },
    },
    Prolog: {
        description:
            'Prolog is a logic programming language used for developing artificial intelligence applications and expert systems. It includes features such as support for logic variables, backtracking, unification, and pattern matching.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing artificial intelligence applications and expert systems',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install swi-prolog',
            macOS: '$ brew install swi-prolog',
        },
    },
    PROMAL: {
        description:
            'PROMAL (Programming Methodology and Language) is a high-level, procedural programming language used for developing software applications in the simulation and modeling domains. It includes features such as support for variables, arrays, control structures, and file handling.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing software applications in the simulation and modeling domains',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Promela: {
        description:
            'Promela (Process Meta Language) is an abstract modeling language used for specifying and verifying concurrent systems, such as communication protocols and distributed algorithms. It includes features such as support for parallel composition, message passing, and model checking.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'specifying and verifying concurrent systems',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install spin',
            macOS: null,
        },
    },
    'PROSE modeling language': {
        description:
            'PROSE (PROgram Synthesis using Examples) modeling language is an artificial intelligence programming language used for developing software applications that can automatically synthesize code from input-output examples. It includes features such as support for synthesis, ranking functions, and data types.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing software applications that can automatically synthesize code from input-output examples',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    PROTEL: {
        description:
            'PROTEL (Productivity Enhancement Tool and Language) is a computer-aided design software used for developing electronic circuit schematics, layouts, and designs. It includes features such as support for schematic capture, PCB layout, and bill of materials generation.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'developing electronic circuit schematics, layouts, and designs',
        market_share: null,
        installation: {
            windows: '$ choco install proteleda',
            linux: null,
            macOS: null,
        },
    },
    ProvideX: {
        description:
            'ProvideX is a high-level, procedural programming language used for developing software applications in the business automation domain. It includes features such as support for variables, arrays, control structures, and file handling.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing software applications in the business automation domain',
        market_share: null,
        installation: {
            windows: '$ choco install providex',
            linux: '$ sudo apt-get install pxplus',
            macOS: null,
        },
    },
    'Pro*C': {
        description:
            'Pro*C is a high-level, procedural programming language used for embedded SQL programming with Oracle databases. It includes features such as support for variables, data types, control structures, and SQL statements.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'embedded SQL programming with Oracle databases',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install libsqlplus-dev',
            macOS: null,
        },
    },
    Pure: {
        description:
            'Pure is a functional programming language based on term rewriting that emphasizes expressions and type inference. It includes features such as support for first-class functions, pattern matching, and algebraic data types.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'functional programming',
        market_share: null,
        installation: {
            windows: '$ choco install pure',
            linux: '$ sudo apt-get install pure',
            macOS: '$ brew install pure',
        },
    },
    Python: {
        description:
            'Python is a high-level, interpreted programming language used for developing software applications in a variety of domains, including web development, scientific computing, and data analysis. It includes features such as support for variables, data types, control structures, and object-oriented programming.',
        OOP: true,
        type: 'dynamically typed',
        speed: 'relatively slow',
        mostly_used_for:
            'developing software applications in various domains, including web development, scientific computing, and data analysis',
        market_share: null,
        installation: {
            windows: '$ choco install python',
            linux: '$ sudo apt-get install python3',
            macOS: '$ brew install python',
        },
    },
    'Q (equational programming language)': {
        description:
            'Q is an equational programming language used for developing high-performance, real-time software applications in domains such as finance and data analysis. It includes features such as support for functional programming, vector operations, and query capabilities.',
        OOP: false,
        type: 'dynamically typed',
        speed: 'extremely fast',
        mostly_used_for: 'developing high-performance, real-time software applications in domains such as finance and data analysis',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: '$ brew install kx',
        },
    },
    'Q (programming language from Kx Systems)': {
        description:
            'Q is a high-performance, interpreted programming language used for querying and analyzing large datasets in real-time. It includes features such as support for functional programming, vector operations, and data structures optimized for efficient processing.',
        OOP: false,
        type: 'dynamically typed',
        speed: 'extremely fast',
        mostly_used_for: 'querying and analyzing large datasets in real-time',
        market_share: null,
        installation: {
            windows: '$ choco install kdbplus',
            linux: null,
            macOS: '$ brew install kx',
        },
    },
    Qalb: {
        description:
            'Qalb is a functional programming language used for developing software applications in domains such as security and cryptography. It includes features such as support for first-class functions, pattern matching, and type inference.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing software applications in domains such as security and cryptography',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: '$ brew install qalb',
        },
    },
    QtScript: {
        description:
            'QtScript is an interpreted scripting language used for developing software applications with graphical user interfaces using the Qt framework. It includes features such as support for variables, functions, control structures, and object-oriented programming.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing software applications with graphical user interfaces using the Qt framework',
        market_share: null,
        installation: {
            windows: '$ choco install qtscript',
            linux: '$ sudo apt-get install libqt5script5',
            macOS: '$ brew install qt',
        },
    },
    QuakeC: {
        description:
            'QuakeC is a high-level, procedural programming language used for developing software applications such as video games using the Quake engine. It includes features such as support for variables, control structures, and object-oriented programming.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing video games using the Quake engine',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    QPL: {
        description:
            'QPL is a high-level, procedural programming language used for developing software applications for the QNX operating system in domains such as telecommunications and automotive. It includes features such as support for variables, control structures, and input/output operations.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for:
            'developing software applications for the QNX operating system in domains such as telecommunications and automotive',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    R: {
        description:
            'R is an interpreted programming language used for statistical computing and graphics. It includes features such as support for variables, functions, control structures, and object-oriented programming.',
        OOP: true,
        type: 'dynamically typed',
        speed: 'relatively slow',
        mostly_used_for: 'statistical computing and graphics',
        market_share: null,
        installation: {
            windows: '$ choco install r.project',
            linux: '$ sudo apt-get install r-base',
            macOS: '$ brew install r',
        },
    },
    'R++': {
        description:
            'R++ is an extension of the R programming language, designed to provide object-oriented capabilities and additional features such as support for parallel computing and improved performance. It includes features such as support for classes, inheritance, and operator overloading.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: null,
        market_share: null,
        installation: {
            windows: '$ choco install rpp',
            linux: '$ sudo apt-get install r-cran-rpp',
            macOS: '$ brew install rpp',
        },
    },
    Racket: {
        description:
            'Racket is a general-purpose, multi-paradigm programming language based on Scheme. It includes features such as support for functional programming, macros, and object-oriented programming.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing software applications in various domains',
        market_share: null,
        installation: {
            windows: '$ choco install racket',
            linux: '$ sudo apt-get install racket',
            macOS: '$ brew install racket',
        },
    },
    RAPID: {
        description:
            'RAPID is a domain-specific programming language used for programming industrial robots in manufacturing environments. It includes features such as support for motion control, event handling, and sensor integration.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'programming industrial robots in manufacturing environments',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Rapira: {
        description:
            'Rapira is a high-level, procedural programming language used for developing software applications in the domains of artificial intelligence and robotics. It includes features such as support for variables, control structures, and object-oriented programming.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing software applications in the domains of artificial intelligence and robotics',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Ratfiv: {
        description:
            'Ratfiv is a high-level, procedural programming language used for developing software applications in the domains of scientific and numerical computing. It includes features such as support for variables, functions, control structures, and array operations.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing software applications in the domains of scientific and numerical computing',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Ratfor: {
        description:
            'Ratfor is a high-level, procedural programming language designed to facilitate programming in the FORTRAN language. It includes features such as support for variables, control structures, and input/output operations.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'facilitating programming in the FORTRAN language',
        market_share: null,
        installation: {
            windows: '$ choco install ratfor',
            linux: '$ sudo apt-get install ratfor',
            macOS: '$ brew install ratfor',
        },
    },
    rc: {
        description:
            'rc is a shell and scripting language derived from the Plan 9 Operating System. It includes features such as support for variables, control structures, and input/output operations.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'shell scripting and command-line automation',
        market_share: null,
        installation: {
            windows: '$ choco install rc',
            linux: '$ sudo apt-get install rc-shell',
            macOS: '$ brew install rc',
        },
    },
    REBOL: {
        description:
            'REBOL is a high-level, multi-paradigm programming language designed to facilitate network-centric computing and distributed system scripting. It includes features such as support for reactive programming, data exchange, and code compression.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'network-centric computing and distributed system scripting',
        market_share: null,
        installation: {
            windows: '$ choco install rebol',
            linux: '$ sudo apt-get install rebol',
            macOS: '$ brew install rebol',
        },
    },
    Red: {
        description:
            'Red is a high-level, multi-paradigm programming language inspired by Rebol. It includes features such as support for functional programming, pattern matching, and low-level system programming.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'system programming, GUI development, web applications, and more',
        market_share: null,
        installation: {
            windows: '$ choco install red',
            linux: '$ sudo apt-get install red',
            macOS: '$ brew install red',
        },
    },
    Redcode: {
        description:
            'Redcode is an assembly language used in the game Core War, where two or more programs compete for control of a virtual computer. It includes features such as support for memory allocation, instruction set, and addressing modes.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'playing the game of Core War',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    REFAL: {
        description:
            'REFAL is a high-level, functional programming language used for pattern matching and symbolic manipulation. It includes features such as support for recursion, macros, and meta-programming.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'pattern matching and symbolic manipulation',
        market_share: null,
        installation: {
            windows: '$ choco install refal',
            linux: '$ sudo apt-get install refal',
            macOS: '$ brew install refal',
        },
    },
    Reia: {
        description:
            'Reia is a high-level, functional programming language inspired by Erlang and designed for creating scalable and fault-tolerant distributed systems. It includes features such as support for concurrency, message passing, and pattern matching.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'creating scalable and fault-tolerant distributed systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Revolution: {
        description:
            'Revolution is a high-level, object-oriented programming language and software development platform designed for creating cross-platform applications. It includes features such as support for visual layout tools, database connectivity, and multimedia capabilities.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'creating cross-platform applications',
        market_share: null,
        installation: {
            windows: '$ choco install revolution',
            linux: '$ sudo apt-get install revolution',
            macOS: '$ brew install revolution',
        },
    },
    rex: {
        description:
            'Rex is a scripting language designed to facilitate text processing and system administration tasks. It includes features such as support for regular expressions, file manipulation, and command execution.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'text processing and system administration tasks',
        market_share: null,
        installation: {
            windows: '$ choco install rex',
            linux: '$ sudo apt-get install rex',
            macOS: '$ brew install rex',
        },
    },
    REXX: {
        description:
            'REXX is a high-level, block-structured scripting language designed for general-purpose programming tasks. It includes features such as support for variables, control structures, and string manipulation.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'general-purpose programming tasks',
        market_share: null,
        installation: {
            windows: '$ choco install rexx',
            linux: '$ sudo apt-get install regina-rexx',
            macOS: '$ brew install rexx',
        },
    },
    Rlab: {
        description:
            'Rlab is a high-level, interactive programming language designed for scientific computing and data analysis. It includes features such as support for matrix operations, plotting functions, and numerical routines.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'scientific computing and data analysis',
        market_share: null,
        installation: {
            windows: '$ choco install rlab',
            linux: '$ sudo apt-get install rlab',
            macOS: '$ brew install rlab',
        },
    },
    RobotC: {
        description:
            'RobotC is an educational programming language designed for creating robotics applications. It includes features such as support for sensor inputs, motor controls, and low-level system programming.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'creating robotics applications',
        market_share: null,
        installation: {
            windows: '$ choco install robotc',
            linux: null,
            macOS: null,
        },
    },
    ROOP: {
        description:
            'ROOP (Real-time Object-Oriented Programming) is an object-oriented, real-time programming language designed for embedded systems and control applications. It includes features such as support for concurrency, event handling, and real-time scheduling.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'embedded systems and control applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    RPG: {
        description:
            'RPG (Report Program Generator) is a high-level programming language designed for creating business applications. It includes features such as support for database connectivity, file processing, and report generation.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'creating business applications',
        market_share: null,
        installation: {
            windows: '$ choco install rpg400',
            linux: null,
            macOS: null,
        },
    },
    RPL: {
        description:
            'RPL (Reverse Polish LISP) is a high-level, stack-based programming language designed for scientific and engineering applications. It includes features such as support for complex numbers, symbolic manipulation, and built-in functions.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'scientific and engineering applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    RSL: {
        description:
            'RSL (Robot Scripting Language) is an interpreted programming language designed for creating robotic applications. It includes features such as support for sensor input, motor controls, and low-level system programming.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'creating robotic applications',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install rsl',
            macOS: '$ brew install rsl',
        },
    },
    'RTL/2': {
        description:
            'RTL/2 (Real-Time Language/2) is a high-level, real-time programming language designed for embedded systems and control applications. It includes features such as support for concurrency, event handling, and real-time scheduling.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'embedded systems and control applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Ruby: {
        description:
            'Ruby is a high-level, general-purpose programming language designed for web development, data analysis, and scripting tasks. It includes features such as support for object-oriented programming, dynamic typing, and metaprogramming.',
        OOP: true,
        type: 'dynamically typed',
        speed: 'interpreted',
        mostly_used_for: 'web development, data analysis, and scripting tasks',
        market_share: null,
        installation: {
            windows: '$ choco install ruby',
            linux: '$ sudo apt-get install ruby-full',
            macOS: '$ brew install ruby',
        },
    },
    RuneScript: {
        description:
            'RuneScript is a scripting language used for creating mods and plugins in the MMORPG game RuneScape. It includes features such as support for game mechanics, player interaction, and customization.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'creating mods and plugins for the MMORPG game RuneScape',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Rust: {
        description:
            'Rust is a high-performance, systems programming language designed for creating safe and concurrent software. It includes features such as support for low-level system programming, strong memory safety guarantees, and zero-cost abstractions.',
        OOP: false,
        type: 'statically typed',
        speed: 'compiled',
        mostly_used_for: 'system programming, networking, and web development',
        market_share: null,
        installation: {
            windows: '$ choco install rust',
            linux: '$ sudo apt-get install rustc',
            macOS: '$ brew install rust',
        },
    },
    S: {
        description:
            'S is a statistical programming language designed for data analysis and visualization. It includes features such as support for matrix operations, graphics generation, and statistical modeling.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'data analysis and visualization',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install ess',
            macOS: '$ brew install ess',
        },
    },
    S2: {
        description:
            'S2 is a systems programming language designed for high-performance, low-level software development. It includes features such as manual memory management, direct hardware access, and efficient concurrency primitives.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'systems programming and low-level software development',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    S3: {
        description:
            'S3 (Simple Secure Storage) is an object storage service provided by Amazon Web Services (AWS). It includes features such as support for unlimited data storage, automatic data encryption, and flexible access controls.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'object storage and data backup',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'S-Lang': {
        description:
            'S-Lang is an interpreted programming language designed for creating scripts, extensions, and macros in other applications. It includes features such as support for string manipulation, file I/O, and user-defined functions.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'scripting, extensions, and macros in other applications',
        market_share: null,
        installation: {
            windows: '$ choco install slang',
            linux: '$ sudo apt-get install libslang2-dev',
            macOS: '$ brew install slang',
        },
    },
    'S-PLUS': {
        description:
            'S-PLUS is a commercial statistical programming language designed for data analysis, modeling, and visualization. It includes features such as support for matrix operations, graphics generation, and statistical modeling.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'data analysis, modeling, and visualization',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'SA-C': {
        description:
            'SA-C (Streaming Applications C) is an extension of the C programming language designed for developing high-performance streaming applications. It includes features such as support for parallel execution, automatic memory management, and dataflow programming.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'streaming applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    SabreTalk: {
        description:
            'SabreTalk is a proprietary programming language developed by Sabre Corporation for building software applications in the travel industry. It includes features such as support for real-time data processing, transaction management, and business rule execution.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'building software applications in the travel industry',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    SAIL: {
        description:
            'SAIL (Stanford Artificial Intelligence Language) is a high-level programming language designed for developing artificial intelligence applications. It includes features such as support for symbolic processing, automatic memory management, and dynamic data structures.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing artificial intelligence applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    SALSA: {
        description:
            'SALSA (Simple Actor Language System and Architecture) is an actor-based programming language designed for developing scalable, concurrent, and fault-tolerant software systems. It includes features such as support for message-passing concurrency, distributed communication, and fault isolation.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing scalable, concurrent, and fault-tolerant software systems',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install salsa',
            macOS: '$ brew install salsa',
        },
    },
    SAM76: {
        description:
            'SAM76 is a high-level programming language designed for developing real-time control systems. It includes features such as support for parallel execution, event-driven programming, and hardware interfacing.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'developing real-time control systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    SAS: {
        description:
            'SAS (Statistical Analysis System) is a software suite used for advanced analytics, business intelligence, data management, and predictive modeling. It includes features such as support for data analysis, reporting, and visualization.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'advanced analytics, business intelligence, data management, and predictive modeling',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    SASL: {
        description:
            'SASL (Simple Authentication and Security Layer) is a framework for adding authentication and encryption to network protocols. It includes features such as support for various authentication mechanisms and flexible security policies.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'adding authentication and encryption to network protocols',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install libsasl2-dev',
            macOS: '$ brew install cyrus-sasl',
        },
    },
    Sather: {
        description:
            'Sather is an object-oriented programming language designed for developing large-scale software systems. It includes features such as support for multiple inheritance, garbage collection, and generic programming.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing large-scale software systems',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install sather',
            macOS: '$ brew install sather',
        },
    },
    Sawzall: {
        description:
            'Sawzall is a procedural programming language developed by Google for processing large amounts of data in a distributed computing environment. It includes features such as support for pattern matching, garbage collection, and dynamic typing.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'processing large amounts of data in a distributed computing environment',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    SBL: {
        description:
            'SBL (Systema Bonum Lex) is a domain-specific programming language designed for developing legal and regulatory compliance software. It includes features such as support for natural language processing, rule-based reasoning, and compliance reporting.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'developing legal and regulatory compliance software',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Scala: {
        description:
            'Scala is a modern, high-level programming language designed for building scalable and performant software systems. It includes features such as support for functional programming, object-oriented programming, and type inference.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'building scalable and performant software systems',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install scala',
            macOS: '$ brew install scala',
        },
    },
    Scheme: {
        description:
            'Scheme is a minimalist, high-level programming language derived from Lisp. It includes features such as support for functional programming, macro system, and dynamic typing.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'teaching computer science, scripting, and rapid prototyping',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install mit-scheme',
            macOS: '$ brew install mit-scheme',
        },
    },
    Scilab: {
        description:
            'Scilab is an open-source, high-level programming language designed for numerical computation and scientific visualization. It includes features such as support for matrix operations, data analysis, and signal processing.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'numerical computation and scientific visualization',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install scilab',
            macOS: '$ brew install scilab',
        },
    },
    Scratch: {
        description:
            'Scratch is a visual programming language designed for teaching children how to code. It includes features such as support for drag-and-drop coding, animated characters, and interactive games.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'teaching children how to code',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Script.NET': {
        description:
            'Script.NET is a programming language and runtime environment designed for developing and running scripts on the .NET Framework. It includes features such as support for multiple languages, dynamic typing, and interoperability with other .NET languages.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing scripts on the .NET Framework',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Sed: {
        description:
            'Sed (short for Stream EDitor) is a command-line utility for processing text files. It includes features such as support for pattern matching, substitution, and filtering.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'processing text files',
        market_share: null,
        installation: {
            windows: '$ choco install sed',
            linux: '$ sudo apt-get install sed',
            macOS: '$ brew install gnu-sed',
        },
    },
    Seed7: {
        description:
            'Seed7 is an extensible programming language designed for developing large-scale software systems. It includes features such as support for multiple paradigms (including object-oriented, imperative, and functional programming), user-defined types, and operator overloading.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing large-scale software systems',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install seed7',
            macOS: '$ brew install seed7',
        },
    },
    Self: {
        description:
            'Self is an object-oriented programming language and environment designed for developing graphical user interfaces and interactive applications. It includes features such as support for prototype-based programming, dynamic typing, and interactive development.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing graphical user interfaces and interactive applications',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install self',
            macOS: '$ brew install self',
        },
    },
    SenseTalk: {
        description:
            'SenseTalk is a scripting language designed for developing and testing software applications. It includes features such as support for natural language commands, object-oriented programming, and automation of user interfaces.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing and testing software applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    SequenceL: {
        description:
            'SequenceL is a functional programming language and compiler designed for developing high-performance parallel algorithms. It includes features such as support for arrays, streams, and nested parallelism.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing high-performance parallel algorithms',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install sequencel',
            macOS: '$ brew install sequencel',
        },
    },
    SETL: {
        description:
            'SETL is an interpreted programming language and environment designed for developing applications in the field of mathematics. It includes features such as support for set-theoretic operations, dynamic typing, and garbage collection.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing applications in the field of mathematics',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install setl',
            macOS: '$ brew install setl',
        },
    },
    'Shift Script': {
        description:
            'Shift Script is a scripting language and runtime environment designed for developing and running scripts on various platforms. It includes features such as support for dynamic typing, modular code organization, and cross-platform compatibility.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing and running scripts on various platforms',
        market_share: null,
        installation: {
            windows: '$ choco install shiftscript',
            linux: null,
            macOS: null,
        },
    },
    SIMPOL: {
        description:
            'SIMPOL (short for Simple IMPerative Object Language) is an object-oriented programming language and runtime environment designed for developing cross-platform applications. It includes features such as support for event-driven programming, dynamic typing, and automatic garbage collection.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing cross-platform applications',
        market_share: null,
        installation: {
            windows: '$ choco install simpol',
            linux: '$ sudo apt-get install simpol',
            macOS: '$ brew install simpol',
        },
    },
    SIGNAL: {
        description:
            'SIGNAL is a concurrent programming language and runtime environment designed for developing real-time control systems. It includes features such as support for parallel processing, inter-task communication, and exception handling.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing real-time control systems',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install signal-programming-language',
            macOS: '$ brew install signal',
        },
    },
    SiMPLE: {
        description:
            'SiMPLE (short for Simple Machine Programming Language and Environment) is an interpreted programming language and environment designed for developing small-scale applications on microcontrollers. It includes features such as support for low-level hardware access, dynamic typing, and command-line interface.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing small-scale applications on microcontrollers',
        market_share: null,
        installation: {
            windows: '$ choco install simple-programming-language',
            linux: '$ sudo apt-get install simple',
            macOS: '$ brew install simple',
        },
    },
    SIMSCRIPT: {
        description:
            'SIMSCRIPT is a simulation modeling language and compiler designed for developing large-scale simulations of complex systems. It includes features such as support for discrete-event simulation, statistical analysis, and hierarchical modeling.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing large-scale simulations of complex systems',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install simscript',
            macOS: null,
        },
    },
    Simula: {
        description:
            'Simula is an object-oriented programming language and simulation environment designed for developing simulations of complex systems. It includes features such as support for classes, inheritance, and dynamic memory allocation.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing simulations of complex systems',
        market_share: null,
        installation: {
            windows: '$ choco install simula',
            linux: '$ sudo apt-get install simula',
            macOS: '$ brew install simula',
        },
    },
    Simulink: {
        description:
            'Simulink is a block diagram environment for modeling, simulating, and analyzing dynamic systems. It provides an interactive graphical editor and customizable block libraries for building models of complex systems.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'modeling, simulating, and analyzing dynamic systems',
        market_share: null,
        installation: {
            windows: 'Download and install from MathWorks website',
            linux: 'Download and install from MathWorks website',
            macOS: 'Download and install from MathWorks website',
        },
    },
    SISAL: {
        description:
            'SISAL (short for Streams and Iteration in a Single Assignment Language) is a parallel programming language and compiler designed for developing high-performance algorithms on parallel machines. It includes features such as support for data-parallelism, nested parallelism, and functional programming.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing high-performance algorithms on parallel machines',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install sisal',
            macOS: '$ brew install sisal',
        },
    },
    SLIP: {
        description:
            'SLIP (Short LInear Integer Programming language) is a constraint programming language and solver designed for solving combinatorial optimization problems. It includes features such as support for linear and integer constraints, global constraints, and non-linear constraints.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'solving combinatorial optimization problems',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install slip',
            macOS: null,
        },
    },
    SMALL: {
        description:
            'SMALL (Small Machine Algol Like Language) is a high-level programming language and interpreter designed for developing educational software. It includes features such as support for structured programming, dynamic memory allocation, and file input/output.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing educational software',
        market_share: null,
        installation: {
            windows: '$ choco install small',
            linux: '$ sudo apt-get install small',
            macOS: '$ brew install small',
        },
    },
    Smalltalk: {
        description:
            'Smalltalk is an object-oriented programming language and development environment designed for developing graphical user interfaces and interactive applications. It includes features such as support for classes, inheritance, message passing, and dynamic memory allocation.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'developing graphical user interfaces and interactive applications',
        market_share: null,
        installation: {
            windows: '$ choco install pharo',
            linux: '$ sudo apt-get install pharo',
            macOS: '$ brew install pharo',
        },
    },
    'Small Basic': {
        description:
            'Small Basic is an educational programming language and development environment designed for introducing beginner programmers to fundamental programming concepts. It includes features such as support for simple syntax, easy-to-use IDE, and built-in libraries for graphics and multimedia.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'introducing beginner programmers to fundamental programming concepts',
        market_share: null,
        installation: {
            windows: 'Download and install from Microsoft website',
            linux: null,
            macOS: null,
        },
    },
    SML: {
        description:
            'SML (Standard ML) is a functional programming language and compiler designed for developing type-safe and modular software. It includes features such as support for algebraic data types, pattern matching, and higher-order functions.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing type-safe and modular software',
        market_share: null,
        installation: {
            windows: '$ choco install smlnj',
            linux: '$ sudo apt-get install smlnj',
            macOS: '$ brew install smlnj',
        },
    },
    'Snap!': {
        description:
            'Snap! is a visual programming language and development environment designed for introducing beginner programmers to computational thinking and problem-solving. It includes features such as support for drag-and-drop programming, interactive tutorials, and built-in libraries for graphics and multimedia.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'introducing beginner programmers to computational thinking and problem-solving',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install snap',
            macOS: 'Download and install from Snap! website',
        },
    },
    SNOBOL: {
        description:
            'SNOBOL (String Oriented Symbolic Language) is a string processing and manipulation programming language and compiler designed for developing text processing applications. It includes features such as support for pattern matching, text substitution, and regular expressions.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'developing text processing applications',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install snobol4',
            macOS: '$ brew install snobol4',
        },
    },
    SPITBOL: {
        description:
            'SPITBOL (Simplified Processor Implementatation Tool for Business Oriented Languages) is a high-performance text processing and manipulation programming language and compiler designed for developing business-oriented applications. It includes features such as support for pattern matching, regular expressions, and string manipulation.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'developing business-oriented applications',
        market_share: null,
        installation: {
            windows: null,
            linux: '$ sudo apt-get install spitbol',
            macOS: '$ brew install spitbol',
        },
    },
    Snowball: {
        description:
            'Snowball is a string processing and manipulation programming language and compiler designed for developing text search and information retrieval applications. It includes features such as support for stemming, stop word removal, and query expansion.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'developing text search and information retrieval applications',
        market_share: null,
        installation: {
            windows: '$ choco install snowball',
            linux: '$ sudo apt-get install snowball',
            macOS: '$ brew install snowball',
        },
    },
    SPARK: {
        description:
            'SPARK is a high-level programming language and toolset designed for developing safety-critical software systems. It includes features such as strong typing, formal verification, and static analysis.',
        OOP: true,
        type: 'statically typed',
        speed: 'high',
        mostly_used_for: 'developing safety-critical software systems',
        market_share: null,
        installation: {
            windows: '$ choco install spark',
            linux: '$ sudo apt-get install spark',
            macOS: '$ brew install spark',
        },
    },
    SPIN: {
        description:
            'SPIN is a high-level programming language primarily used for model checking concurrent systems. It includes features such as explicit state model checking and verification.',
        OOP: false,
        type: 'dynamically typed',
        speed: 'low',
        mostly_used_for: 'model checking concurrent systems',
        market_share: null,
        installation: {
            windows: '$ choco install spin',
            linux: '$ sudo apt-get install spin',
            macOS: '$ brew install spin',
        },
    },
    Squeak: {
        description:
            'Squeak is a dynamic, object-oriented programming language and environment based on Smalltalk. It includes an interactive development environment and can be used for various purposes including software development and educational purposes.',
        OOP: true,
        type: 'dynamically typed',
        speed: 'medium',
        mostly_used_for: 'software development and educational purposes',
        market_share: null,
        installation: {
            windows: '$ choco install squeak',
            linux: '$ sudo apt-get install squeak',
            macOS: '$ brew install squeak',
        },
    },
    Squirrel: {
        description:
            'Squirrel is a high-level, imperative, object-oriented programming language designed to be used as a scripting language for video games. It includes features such as dynamic typing, garbage collection, and coroutines.',
        OOP: true,
        type: 'dynamically typed',
        speed: 'medium',
        mostly_used_for: 'scripting language for video games',
        market_share: null,
        installation: {
            windows: '$ choco install squirrel',
            linux: '$ sudo apt-get install squirrel',
            macOS: '$ brew install squirrel',
        },
    },
    'Stackless Python': {
        description:
            'Stackless Python is an enhanced version of the Python programming language that provides support for microthreads, allowing for concurrent programming without the use of traditional threading.',
        OOP: true,
        type: 'dynamically typed',
        speed: 'medium',
        mostly_used_for: 'concurrent programming and network programming',
        market_share: null,
        installation: {
            windows: '$ choco install stacklesspython',
            linux: '$ sudo apt-get install python-stackless',
            macOS: '$ brew install stackless-python',
        },
    },
    Starlogo: {
        description:
            'StarLogo is a modeling and simulation software platform that allows users to build agent-based simulations and games, with a focus on visualizing and exploring complex systems.',
        OOP: false,
        type: null,
        speed: 'slow',
        mostly_used_for: 'building agent-based simulations and games',
        market_share: null,
        installation: {
            windows: 'Download the installer from https://ccl.northwestern.edu/netlogo/6.1.1/',
            linux: 'Download the installer from https://ccl.northwestern.edu/netlogo/6.1.1/',
            macOS: 'Download the installer from https://ccl.northwestern.edu/netlogo/6.1.1/',
        },
    },
    Stata: {
        description:
            'Stata is a statistical software package used in social science research, business, and economics to analyze, manage, and graph data.',
        OOP: false,
        type: null,
        speed: 'medium',
        mostly_used_for: 'data analysis and statistical modeling in social science research, business, and economics',
        market_share: null,
        installation: {
            windows: 'Download the installer from https://www.stata.com/order/new/edu/gradplans/campus-downloads/',
            linux: 'Download the installer from https://www.stata.com/order/new/edu/gradplans/campus-downloads/',
            macOS: 'Download the installer from https://www.stata.com/order/new/edu/gradplans/campus-downloads/',
        },
    },
    Stateflow: {
        description:
            'Stateflow is a graphical programming environment used to model and simulate complex reactive systems, particularly in control systems engineering.',
        OOP: false,
        type: null,
        speed: 'medium',
        mostly_used_for: 'modeling and simulating control systems and other reactive systems',
        market_share: null,
        installation: {
            windows: 'Install through MATLAB or Simulink installation process',
            linux: 'Install through MATLAB or Simulink installation process',
            macOS: 'Install through MATLAB or Simulink installation process',
        },
    },
    SuperCollider: {
        description: 'SuperCollider is a programming language used for real-time audio synthesis and algorithmic composition.',
        OOP: true,
        type: 'dynamically typed',
        speed: 'fast',
        mostly_used_for: 'real-time audio synthesis and algorithmic composition',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install supercollider',
            macOS: 'brew install supercollider',
        },
    },
    'Swift (Apple programming language)': {
        description: 'Swift is a powerful and intuitive programming language developed by Apple for macOS, iOS, watchOS, tvOS, and Linux.',
        OOP: true,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'developing applications for Apple platforms',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install swift',
            macOS: 'xcode-select --install',
        },
    },
    SYMPL: {
        description: 'SYMPL is a dynamically typed functional programming language designed to be simple, expressive, and easy to learn.',
        OOP: false,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'general-purpose programming',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install sympl',
            macOS: 'brew install sympl',
        },
    },
    SystemVerilog: {
        description:
            'SystemVerilog is a hardware description and verification language used in the design of digital circuits and systems.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'digital circuit and system design',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install iverilog',
            macOS: 'brew install icarus-verilog',
        },
    },
    TACL: {
        description:
            'TACL (Transactional Application Control Language) is a high-level programming language used in relational database management systems to define and implement transaction processing.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'transaction processing',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    TADS: {
        description:
            'TADS (Text Adventure Development System) is a domain-specific programming language used to create interactive fiction, primarily text-based adventure games.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'interactive fiction and text-based adventure game development',
        market_share: null,
        installation: {
            windows: 'choco install tads',
            linux: 'sudo apt-get install tads',
            macOS: 'brew install tads',
        },
    },
    TAL: {
        description:
            'TAL (Transaction Application Language) is a high-level programming language that provides transaction processing capabilities to real-time, interactive and batch applications.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'transaction processing',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Tcl: {
        description:
            'Tcl (Tool Command Language) is a scripting language designed to be easy to learn and use, yet also powerful enough to handle complex tasks.',
        OOP: true,
        type: 'dynamically typed',
        speed: 'moderate',
        mostly_used_for: 'scripting, rapid prototyping, GUI development, and web programming',
        market_share: null,
        installation: {
            windows: 'choco install tcl',
            linux: 'sudo apt-get install tcl',
            macOS: 'brew install tcl',
        },
    },
    Tea: {
        description:
            'Tea is a high-level, interpreted scripting language designed to be simple and easy to learn. It supports both procedural and object-oriented programming paradigms.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'general-purpose scripting and automation',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install tea',
            macOS: 'brew install tea',
        },
    },
    TECO: {
        description:
            'TECO (Text Editor and Corrector) is an early text editor and macro processor that was widely used in the early days of computing.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'text editing and macro processing',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install teco',
            macOS: 'brew install teco',
        },
    },
    TeX: {
        description:
            'TeX is a typesetting system designed for producing professional-quality documents, particularly those containing mathematical symbols and equations.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'typesetting scientific and technical documents',
        market_share: null,
        installation: {
            windows: 'choco install miktex',
            linux: 'sudo apt-get install texlive-full',
            macOS: '/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" && brew cask install mactex-no-gui',
        },
    },
    TEX: {
        description:
            'TeX is a typesetting system designed for producing professional-quality documents, particularly those containing mathematical symbols and equations.',
        OOP: false,
        type: 'not applicable',
        speed: null,
        mostly_used_for: 'typesetting scientific and technical documents',
        market_share: null,
        installation: {
            windows: 'choco install miktex',
            linux: 'sudo apt-get install texlive-full',
            macOS: '/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" && brew cask install mactex-no-gui',
        },
    },
    Topspeed: {
        description: 'Topspeed is a programming language that is known for its speed and efficiency.',
        OOP: true,
        type: 'statically typed',
        speed: 'fast',
        mostly_used_for: 'high-performance computing, data processing, and scientific applications',
        market_share: null,
        installation: {
            windows: 'choco install topspeed',
            linux: 'sudo apt-get install topspeed',
            macOS: null,
        },
    },
    TPU: {
        description:
            "TPU (Tensor Processing Unit) is a specialized hardware accelerator designed to be used with Google's TensorFlow framework for deep learning.",
        OOP: false,
        type: null,
        speed: 'highly optimized',
        mostly_used_for: 'deep learning applications',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install tensorflow-gpu',
            macOS: 'pip install -U --user tensorflow',
        },
    },
    Trac: {
        description:
            'Trac is an open-source project management and issue tracking system that provides a web-based interface for managing software development projects.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'project management, issue tracking',
        market_share: null,
        installation: {
            windows: 'pip install Trac',
            linux: 'sudo apt-get install trac',
            macOS: 'sudo easy_install trac',
        },
    },
    'T-SQL': {
        description:
            'T-SQL (Transact-SQL) is a proprietary extension to SQL (Structured Query Language) used by Microsoft SQL Server and Sybase relational databases.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'manipulating and querying data in Microsoft SQL Server and Sybase databases',
        market_share: null,
        installation: {
            windows: 'choco install sql-server-management-studio',
            linux: null,
            macOS: null,
        },
    },
    TTCN: {
        description:
            'TTCN (Tree and Tabular Combined Notation) is a standardized testing language used to specify and test communication protocols in the telecom industry.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'testing communication protocols in the telecom industry',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y ttcn3-compiler',
            macOS: null,
        },
    },
    Turing: {
        description:
            'Turing is a programming language and integrated development environment designed for teaching introductory computer science courses.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'teaching introductory computer science courses',
        market_share: null,
        installation: {
            windows: 'msiexec /i https://github.com/codewithturing/turing/releases/download/v4.1.1/Turing-4.1.1.msi /quiet',
            linux: 'sudo apt-get install turing',
            macOS: 'brew install turing',
        },
    },
    TUTOR: {
        description:
            'TUTOR is a programming language and authoring system used for developing instructional materials, particularly for Computer-Assisted Instruction (CAI) systems.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'developing instructional materials for Computer-Assisted Instruction (CAI) systems',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    TXL: {
        description:
            'TXL (Tree Transformation Language) is a domain-specific programming language designed for transforming and analyzing structured data, particularly for use in software engineering research.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'transforming and analyzing structured data, software engineering research',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install txl',
            macOS: 'brew install txl',
        },
    },
    TypeScript: {
        description:
            'TypeScript is a programming language developed by Microsoft that extends JavaScript with features such as type annotations, classes, and interfaces.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing large-scale applications in JavaScript',
        market_share: null,
        installation: {
            windows: 'npm install -g typescript',
            linux: 'sudo npm install -g typescript',
            macOS: 'sudo npm install -g typescript',
        },
    },
    'Turbo C++': {
        description:
            'Turbo C++ is an Integrated Development Environment (IDE) and compiler for the C++ programming language originally developed by Borland.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing C++ applications and programs',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Ubercode: {
        description:
            'Ubercode is a high-level programming language and development environment designed to simplify software development for beginners.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'simplifying software development for beginners',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'UCSD Pascal': {
        description:
            'UCSD Pascal is a Pascal programming language implementation and Integrated Development Environment (IDE) developed at the University of California, San Diego (UCSD).',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'developing general-purpose applications in Pascal',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y pascal',
            macOS: null,
        },
    },
    Umple: {
        description:
            'Umple is a programming language and Integrated Development Environment (IDE) designed for generating object-oriented code from model-driven specifications.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'generating object-oriented code from model-driven specifications',
        market_share: null,
        installation: {
            windows: 'npm install -g umple',
            linux: 'sudo npm install -g umple',
            macOS: 'sudo npm install -g umple',
        },
    },
    Unicon: {
        description:
            'Unicon is an object-oriented programming language and compiler that extends the Icon programming language with additional features such as classes, objects, and inheritance.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'programming general-purpose applications with support for object-oriented programming paradigms',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y unicon',
            macOS: null,
        },
    },
    Uniface: {
        description:
            'Uniface is a Rapid Application Development (RAD) and Integrated Development Environment (IDE) tool used to develop enterprise applications in various programming languages including Java and .NET.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'developing enterprise applications with support for multiple programming languages',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    UNITY: {
        description:
            'Unity is a cross-platform game engine and development environment used to create games and virtual reality experiences for various platforms including mobile devices, desktop computers, and gaming consoles.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'developing games and virtual reality experiences for multiple platforms',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install unity',
            macOS: null,
        },
    },
    'Unix shell': {
        description: 'The Unix shell is a command-line interface and scripting language used to interact with the Unix operating system.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'interacting with the Unix operating system',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    UnrealScript: {
        description:
            'UnrealScript is a programming language used in conjunction with the Unreal Engine to develop video games and other interactive content.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'developing video games and other interactive content using the Unreal Engine',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Vala: {
        description:
            'Vala is a programming language and compiler that compiles to C code and utilizes the GObject framework for object-oriented programming.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for:
            'developing applications using the GNOME desktop environment, with support for object-oriented programming paradigms',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y valac',
            macOS: 'brew install vala',
        },
    },
    VBA: {
        description:
            'Visual Basic for Applications (VBA) is a programming language and Integrated Development Environment (IDE) used to develop customized applications for Microsoft Office applications such as Excel, Word, and Access.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'developing customized applications for Microsoft Office applications',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    VBScript: {
        description:
            'VBScript (Visual Basic Scripting Edition) is a subset of the Visual Basic programming language designed for use in web browsers and Active Server Pages (ASP).',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'scripting web pages and server-side applications using Active Server Pages (ASP)',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Verilog: {
        description: 'Verilog is a hardware description language used to model digital circuits and systems.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'modeling digital circuits and systems',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y iverilog',
            macOS: 'brew install icarus-verilog',
        },
    },
    VHDL: {
        description:
            'VHDL (VHSIC Hardware Description Language) is a hardware description language used to model digital circuits and systems.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'modeling digital circuits and systems',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install ghdl',
            macOS: 'brew install ghdl',
        },
    },
    'Visual Basic': {
        description:
            'Visual Basic (VB) is a programming language and Integrated Development Environment (IDE) used to develop Windows applications with a graphical user interface.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'developing Windows applications with a graphical user interface',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Visual Basic .NET': {
        description:
            'Visual Basic .NET (VB.NET) is an object-oriented programming language and Integrated Development Environment (IDE) used to develop Windows applications and web services.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing Windows applications and web services using object-oriented programming paradigms',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Visual DataFlex': {
        description:
            'Visual DataFlex is a programming language and application development environment used to develop business applications for Windows, web, and mobile platforms.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'developing business applications for Windows, web, and mobile platforms',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Visual DialogScript': {
        description:
            'Visual DialogScript is a programming language and Integrated Development Environment (IDE) used to develop Windows applications with a graphical user interface.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'developing Windows applications with a graphical user interface',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Visual Fortran': {
        description:
            'Visual Fortran (previously known as Compaq Fortran and Digital Visual Fortran) is a powerful high-performance programming language for scientific and engineering applications.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'developing scientific and engineering applications',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y gfortran',
            macOS: 'brew install gcc',
        },
    },
    'Visual FoxPro': {
        description:
            'Visual FoxPro (VFP) is a data-centric programming language and database management system used to develop Windows desktop applications.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'developing Windows desktop applications with a focus on database management',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Visual J++': {
        description:
            'Visual J++ (Visual J Plus Plus) was a programming language and Integrated Development Environment (IDE) used to develop Java applications for Microsoft Windows.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'developing Java applications for Microsoft Windows',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Visual J#': {
        description:
            'Visual J# (Visual J Sharp) was a programming language and Integrated Development Environment (IDE) used to develop .NET Framework applications in Java syntax.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'developing .NET Framework applications with Java syntax',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Visual Objects': {
        description:
            'Visual Objects is an object-oriented programming language and Integrated Development Environment (IDE) used to develop Windows desktop applications and client-server systems.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'developing Windows desktop applications and client-server systems using object-oriented programming paradigms',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Visual Prolog': {
        description:
            'Visual Prolog is a logic programming language and Integrated Development Environment (IDE) used to develop Windows desktop applications, Artificial Intelligence systems, and database tools.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for:
            'developing Windows desktop applications, Artificial Intelligence systems, and database tools using logic programming paradigms',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    VSXu: {
        description:
            'VSXu is a free, open-source music visualizer and graphic equalizer software that allows users to create stunning real-time visualizations of audio signals.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'creating real-time visualizations of audio signals',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y vsxu',
            macOS: 'brew cask install vsxu',
        },
    },
    Vvvv: {
        description:
            "VVVV (pronounced 'four V') is a free and open-source visual programming language and environment for interactive installations, audiovisual performances, and generative design.",
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'creating interactive installations, audiovisual performances, and generative design',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install -y vvvv',
            macOS: 'brew cask install vvvv',
        },
    },
    'WATFIV, WATFOR': {
        description:
            'WATFIV (Waterloo Fortran IV) and WATFOR (Waterloo Fortran) are early versions of the popular Fortran programming language developed at the University of Waterloo in Ontario, Canada.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: null,
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    WebDNA: {
        description:
            'WebDNA is a proprietary programming language and server-side scripting platform used to develop web applications and dynamic websites.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'developing web applications and dynamic websites using server-side scripting',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    WebQL: {
        description:
            'WebQL (Web Query Language) is a proprietary query language and server-side scripting platform used to access and manipulate databases over the internet.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'manipulating databases over the internet using server-side scripting',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Windows PowerShell': {
        description:
            'Windows PowerShell is a command-line shell and scripting language used to automate administrative tasks and manage Windows operating systems and applications.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for:
            'automating administrative tasks and managing Windows operating systems and applications using a command-line shell and scripting language',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Winbatch: {
        description:
            'Winbatch is a proprietary scripting language and Integrated Development Environment (IDE) used to automate Windows tasks, create custom applications, and manage system resources.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for:
            'automating Windows tasks, creating custom applications, and managing system resources using a proprietary scripting language and IDE',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Wolfram: {
        description:
            'Wolfram Language, also known as Mathematica, is a proprietary computational language and environment used in scientific, technical, and mathematical computing.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'scientific, technical, and mathematical computing using a proprietary computational language and environment',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Wyvern: {
        description:
            'Wyvern is a research programming language developed at Tufts University that aims to provide advanced security and privacy features for web application development.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for:
            'developing secure and private web applications using a research programming language with advanced security and privacy features',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'X++': {
        description:
            'X++ is a proprietary object-oriented programming language used in the development of business applications and enterprise resource planning (ERP) systems for the Microsoft Dynamics AX platform.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for:
            'developing business applications and ERP systems for the Microsoft Dynamics AX platform using a proprietary object-oriented programming language',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'X#': {
        description:
            "X# (X sharp) is a .NET programming language and compiler that aims to provide a modern and efficient alternative to Microsoft's Visual Basic .NET (VB.NET) language.",
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing .NET applications with a modern and efficient alternative to VB.NET',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    X10: {
        description:
            'X10 is a high-performance, parallel programming language developed at IBM that aims to improve the productivity of programmers working on high-performance computing (HPC) applications.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for:
            'developing high-performance, parallel computing applications with improved productivity using a proprietary programming language',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    XBL: {
        description:
            'XBL (eXtensible Binding Language) is a markup language used to describe the user interface of Mozilla Firefox browser extensions.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for: 'describing the user interface of Firefox browser extensions using a proprietary markup language',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    XC: {
        description: 'XC is a domain-specific programming language used for embedded systems development in the automotive industry.',
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing embedded systems for automotive applications using a domain-specific programming language',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'XMOS architecture': {
        description:
            'XMOS architecture is a multicore processor technology developed by XMOS Ltd. that enables the design and implementation of highly parallelizable and customizable embedded systems applications.',
        OOP: null,
        type: null,
        speed: null,
        mostly_used_for:
            'designing and implementing highly parallelizable and customizable embedded systems applications using XMOS multicore processor technology',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    xHarbour: {
        description:
            'xHarbour is an open-source programming language and compiler that is largely compatible with the CA-Clipper language, which was widely used in the development of business applications in the 1980s and 1990s.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for: 'developing business applications using a programming language largely compatible with CA-Clipper',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    XL: {
        description:
            'XL (eXtensible Language) is a domain-specific programming language developed by Microsoft for use in developing custom data analysis and computational finance applications.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for:
            'developing custom data analysis and computational finance applications using a proprietary domain-specific programming language',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Xojo: {
        description:
            'Xojo is a cross-platform development environment and programming language that allows developers to create desktop, web, and mobile applications using a single codebase.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for: 'developing cross-platform desktop, web, and mobile applications using a proprietary programming language',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    XOTcl: {
        description:
            'XOTcl (Extended Object Tcl) is a scripting language that extends the Tcl/Tk scripting language with advanced object-oriented programming features.',
        OOP: true,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for:
            'extending the capabilities of the Tcl/Tk scripting language with advanced object-oriented programming features using a proprietary scripting language',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install xotcl',
            macOS: 'brew install xotcl',
        },
    },
    XPL: {
        description:
            'XPL (Cross-Platform Language) is a cross-platform programming language developed by Micro Focus International that supports both procedural and object-oriented programming paradigms.',
        OOP: true,
        type: null,
        speed: null,
        mostly_used_for:
            'developing cross-platform applications using a proprietary programming language that supports both procedural and object-oriented programming paradigms',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    XPL0: {
        description:
            'XPL0 is a programming language and compiler developed by IBM for use in the development of real-time embedded systems applications.',
        OOP: false,
        type: 'statically typed',
        speed: null,
        mostly_used_for:
            'developing real-time embedded systems applications using a proprietary programming language and compiler developed by IBM',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    XQuery: {
        description:
            'XQuery is a declarative programming language and query language designed for querying collections of structured and semi-structured data in XML format.',
        OOP: null,
        type: null,
        speed: null,
        mostly_used_for:
            'querying collections of structured and semi-structured data in XML format using a declarative programming language and query language',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install xqilla',
            macOS: 'brew install xqilla',
        },
    },
    XSB: {
        description:
            'XSB is a logic programming language and deductive database system that allows users to efficiently store, retrieve, and query large amounts of data.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for:
            'storing, retrieving, and querying large amounts of data using a logic programming language and deductive database system',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install xsb',
            macOS: 'brew install xsb',
        },
    },
    XSLT: {
        description:
            'XSLT (Extensible Stylesheet Language Transformations) is a declarative, XML-based programming language used for transforming XML documents into other formats, such as HTML or PDF.',
        OOP: null,
        type: null,
        speed: null,
        mostly_used_for: 'transforming XML documents into other formats using a declarative, XML-based programming language',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install xsltproc',
            macOS: 'brew install libxslt',
        },
    },
    XPath: {
        description:
            'XPath (XML Path Language) is a query language used to select or navigate elements and attribute values in an XML document.',
        OOP: null,
        type: null,
        speed: null,
        mostly_used_for: 'selecting or navigating elements and attribute values in an XML document using a query language',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install libxml-xpath-perl',
            macOS: 'brew install xmlstarlet',
        },
    },
    Xtend: {
        description:
            "Xtend is a programming language for the Java Virtual Machine designed to improve upon Java's syntax while maintaining compatibility with existing Java code.",
        OOP: true,
        type: 'statically typed',
        speed: null,
        mostly_used_for:
            "improving upon Java's syntax while maintaining compatibility using a programming language for the Java Virtual Machine",
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Yorick: {
        description:
            'Yorick is a high-level programming language designed for numerical and scientific computing, with syntax inspired by the C programming language.',
        OOP: false,
        type: null,
        speed: null,
        mostly_used_for:
            'numerical and scientific computing using a high-level programming language inspired by the C programming language',
        market_share: null,
        installation: {
            windows: null,
            linux: 'sudo apt-get install yorick',
            macOS: 'brew install yorick',
        },
    },
    YQL: {
        description:
            "YQL (Yahoo Query Language) is an expressive SQL-like language used to retrieve and manipulate data from a variety of web services, including Yahoo's own APIs.",
        OOP: null,
        type: null,
        speed: null,
        mostly_used_for: 'retrieving and manipulating data from web services using an expressive SQL-like language',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    'Z notation': {
        description:
            'Z notation is a formal specification language used for describing and modeling software systems, particularly in the field of computer science.',
        OOP: null,
        type: null,
        speed: null,
        mostly_used_for: 'describing and modeling software systems using a formal specification language',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
    Zeno: {
        description:
            'Zeno is a programming language designed for creating and exploring mathematical models, particularly in the field of computational biology.',
        OOP: null,
        type: 'dynamically typed',
        speed: null,
        mostly_used_for: 'creating and exploring mathematical models using a programming language designed for computational biology',
        market_share: null,
        installation: {
            windows: null,
            linux: null,
            macOS: null,
        },
    },
};

export const Skills = [...new Set([...SKILLS_OBJ.map((obj) => obj.skill), ...Object.keys(PROGRAMMING_LANGUAGES).map((k) => k)])]
    .map((s) => s.toUpperCase())
    .sort();
