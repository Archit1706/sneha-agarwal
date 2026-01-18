import { CircleDollarSign, Activity, Files, LayoutDashboard, University, Users, Sprout } from "lucide-react";

export const personalInfo = {
    name: "Sneha Agarwal",
    tagline: "MBA & Master of Science in Finance | CA & CFE | Driving FP&A excellence through data-driven insights",
    title: "Financial Analytics Professional | Certified Fraud Examiner",
    email: "sagar39@uic.edu",
    phone: "312-399-8494",
    location: "Chicago, IL",

    socials: {
        linkedin: "https://linkedin.com/in/agarwal-sneha08",
        instagram: "https://www.instagram.com/sneha_agarwal8",
        email: "mailto:sagar39@uic.edu",
        phone: "tel:312-399-8494"
    },

    bio: "MBA & MS Finance candidate (UIC) with CA and CFE credentials, bringing 3+ years of expertise in FP&A, reconciliations, and audit-ready controls across healthcare and manufacturing. Delivered +8% EBITDA growth, reduced month-end close cycles from 5 to 3 days, and managed $4M+ multi-grant budgets to NIH/GAAP standards. Google Data Analytics certified with strong SQL, R, and Excel capabilities to translate complex data into clear, defensible business decisions.",

    about: {
        description: "Finance professional and Certified Fraud Examiner with 3+ years of experience at the intersection of financial analysis, data analytics, and strategic decision-making. I specialize in transforming complex datasets into actionable insights—whether building financial models, detecting fraud patterns, forecasting budgets, or optimizing operational efficiency.",
        background: "My background spans healthcare research finance, manufacturing FP&A, and audit assurance, where I've delivered measurable results: 8% EBITDA growth, 40% reduction in close cycles, and management of $4M+ multi-grant budgets to regulatory standards. Currently pursuing dual master's degrees at UIC, I leverage advanced analytics (SQL, Power Query, R) and visualization tools to solve business problems across FP&A, compliance, fraud detection, and strategic finance. I'm passionate about using data to strengthen financial controls, drive growth, and empower data-informed decision-making in complex organizations.",

        interests: [
            "Predictive Analytics & Financial Forecasting",
            "AI/ML Applications in Finance",
            "Data Visualization & Storytelling",
            "Process Automation & Digital Transformation",
            "Cross-Functional Business Partnering",
            "Risk Management & Internal Controls",
            "ESG & Sustainable Finance Metrics"
        ],

        hobbies: [
            "Community Service & Leadership",
            "Financial Literacy Advocacy",
            "Event Planning & Fundraising",
            "Environmental Sustainability Initiatives",
            "Women in Finance Mentorship",
            "Healthcare & Animal Welfare Volunteering"
        ]
    }
};

export const education = [
    {
        degree: "MBA in Management and Masters of Science in Finance",
        institution: "University of Illinois Chicago",
        location: "Chicago, IL",
        period: "Aug 2024 - May 2026",
        gpa: "",
        achievements: [
            "Dual Master's program combining management strategy and advanced finance",
            "Completed Google Data Analytics Specialization Certificate (SQL, R, EDA)",
            "Focus on financial modeling, DCF/WACC valuation, FP&A, and data-driven decision making",
            "Active leadership in Student Business Ambassador program and Women in Finance chapter"
        ]
    },
    {
        degree: "Chartered Accountant",
        institution: "Institute of Chartered Accountants of India",
        location: "Gujarat, India",
        period: "2018 - Dec 2021",
        gpa: "",
        achievements: [
            "Completed rigorous 3-year professional accounting program with practical training",
            "Specialized in statutory auditing, taxation, financial management, and Ind-AS/IFRS",
            "Executed 35+ statutory audits for banking, NBFC, and corporate clients",
            "Strong foundation in internal controls, risk assessment, and compliance"
        ]
    },
    {
        degree: "Bachelor of Commerce in Accounting and Finance",
        institution: "Ahmedabad University",
        location: "Gujarat, India",
        period: "2015 - Dec 2018",
        gpa: "",
        achievements: [
            "Strong foundation in accounting principles, finance theory, and business management",
            "Academic excellence in financial accounting, corporate law, and cost accounting",
            "Active participation in business clubs and finance-focused extracurricular activities"
        ]
    }
];

export const experiences = [
    {
        title: "Research & Finance Analyst",
        company: "UIC College of Applied Health Sciences",
        location: "Chicago, Illinois",
        period: "March 2025 - Present",
        type: "Part-time",
        description: "Managing financial reconciliations and analysis for $4M+ multi-grant research budgets with NIH/GAAP compliance",
        responsibilities: [
            "Reconcile $4M+ in multi-grant budgets monthly to NIH/GAAP standards; built Power Query + SQL checks reducing audit-prep time by 30%",
            "Investigate variances across 12 cost centers; synthesize decision memos for quarterly planning and scenario reviews",
            "Coordinate with HR/Procurement and 8 PIs to process budget amendments within ≤3 days (vs 10-day SLA)",
            "Deliver audit-ready documentation and controls ensuring zero compliance exceptions"
        ],
        technologies: ["Power Query", "SQL", "Excel", "NIH Grant Systems", "GAAP Compliance"]
    },
    {
        title: "Research & Finance Associate",
        company: "Office of Population Health Sciences, UI Health",
        location: "Chicago, Illinois",
        period: "October 2024 - February 2025",
        type: "Part-time",
        description: "Managed invoicing, forecasting, and allocation for $1.5M+ research grants with zero compliance exceptions",
        responsibilities: [
            "Managed invoicing and allocation for $1.5M+ research grants with zero compliance exceptions; shortened approval cycles by 25%",
            "Built driver-based Excel + SQL forecasting template adopted by 7 units, improving forecast accuracy by 20%",
            "Produced ad-hoc visualizations using Power BI/Tableau and conducted variance analyses; integrated REDCap to Excel workflows saving 10 hours/week",
            "Created real-time dashboards with variance analysis, reducing budget deviation by 15% through data-driven insights"
        ],
        technologies: ["Oracle", "SQL", "Excel", "Power BI", "Tableau", "REDCap", "Grant Management"]
    },
    {
        title: "Business Finance Manager",
        company: "Almora Coating World",
        location: "Gujarat, India",
        period: "April 2022 - July 2024",
        type: "Full-time",
        description: "Led comprehensive financial operations, cost optimization, and fraud detection across manufacturing operations",
        responsibilities: [
            "Delivered +8% EBITDA growth through supplier repricing, procurement redesign, and working capital optimization initiatives",
            "Implemented forensic-style controls that identified and plugged INR 6M in leakages; strengthened audit readiness and compliance efficiency",
            "Automated month-end close using Advanced Excel/Power Query, reducing cycle time from 5 to 3 days; built pricing and CapEx ROI/NPV models supporting an INR 12M expansion",
            "Led cross-functional team of 11 members to reduce inventory days by 11% and establish consistent reporting cadence",
            "Revamped reporting systems and enhanced forecast accuracy, strengthening cash flow visibility across business units"
        ],
        technologies: ["SAP FICO", "Tally", "Advanced Excel", "Power Query", "Financial Modeling"]
    },
    // {
    //     title: "Accounting and Auditing Intern",
    //     company: "Vipul M Vora and Associates",
    //     location: "Kutch, India",
    //     period: "March 2019 - March 2020",
    //     type: "Internship",
    //     description: "Optimized financial audit procedures and compliance processes for SME clients",
    //     responsibilities: [
    //         "Optimized financial audit procedures for 15+ SMEs, reducing compliance risk by 20%",
    //         "Executed cost control strategies, cutting client operational expenses by 15% via audit-led process improvements",
    //         "Identified control gaps reducing tax exposure by INR 3M through detailed statutory audits",
    //         "Prepared comprehensive audit reports and financial statements ensuring regulatory compliance"
    //     ],
    //     technologies: ["Tally", "Excel", "Audit Software", "Tax Tools"]
    // },
    {
        title: "Professional Apprentice",
        company: "R.S. Patel and Company",
        location: "Ahmedabad, India",
        period: "February 2017 - March 2020",
        type: "Apprenticeship",
        description: "Completed professional training executing statutory audits for banking, NBFC, and corporate clients",
        responsibilities: [
            "Executed 35 statutory audits (Ind-AS/IFRS) for banking and NBFC clients; managed audits for 15+ clients, boosting retention by 40%",
            "Standardized audit processes and workpapers, improving accuracy by 15% and coached 8 junior team members",
            "Developed strong client relationships through accurate, timely service delivery and proactive communication",
            "Assisted in preparation of financial statements, tax returns, and regulatory compliance reports"
        ],
        technologies: ["Tally", "Finacle", "Excel", "Audit Tools", "Tax Software"]
    }
];

export const skills = {
    technical: [
        { name: "FP&A", logo: "TrendingUp" },
        { name: "Financial Modeling", logo: "BarChart3" },
        { name: "DCF Valuation", logo: "DollarSign" },
        { name: "Variance Analysis", logo: "LineChart" },
        { name: "Budget Management", logo: "Wallet" },
        { name: "Scenario Planning", logo: "GitBranch" }
    ],

    languages: [
        { name: "GAAP", logo: "FileText" },
        { name: "IFRS", logo: "Globe" },
        { name: "Ind-AS", logo: "BookOpen" },
        { name: "NIH Compliance", logo: "Shield" },
        { name: "SOX Controls", logo: "FileCheck" }
    ],

    frameworks: [
        { name: "CAPM & WACC", logo: "Activity" },
        { name: "ROI/NPV Analysis", logo: "Calculator" },
        { name: "Driver-based Forecasting", logo: "TrendingUp" },
        { name: "Internal Controls", logo: "Lock" },
        { name: "Forensic Auditing", logo: "Search" }
    ],

    tools: [
        { name: "SQL", logo: "Database" },
        { name: "Power BI", logo: "BarChart4" },
        { name: "Tableau", logo: "PieChart" },
        { name: "Advanced Excel", logo: "Sheet" },
        { name: "R (tidyverse)", logo: "Code" }
    ],

    software: [
        { name: "Oracle Cloud", logo: "Cloud" },
        { name: "SAP FICO", logo: "Boxes" },
        { name: "Bloomberg Terminal", logo: "Monitor" },
        { name: "REDCap", logo: "FileSpreadsheet" },
        { name: "Power Query", logo: "Workflow" },
        { name: "Tally", logo: "Calculator" }
    ],

    specialized: [
        { name: "Grant Accounting", logo: "ClipboardList" },
        { name: "Fraud Detection", logo: "AlertTriangle" },
        { name: "EDA & Data Cleaning", logo: "Filter" },
        { name: "KPI Dashboards", logo: "LayoutDashboard" },
        { name: "Control Matrix Design", logo: "Grid3x3" },
        { name: "Audit Procedures", logo: "ClipboardCheck" }
    ],

    certifications: [
        {
            name: "Google Data Analytics Specialization",
            issuer: "Google",
            date: "September 2025",
            focus: "SQL, R, Exploratory Data Analysis, Data Visualization, Data Cleaning"
        },
        {
            name: "Certified Fraud Examiner (CFE)",
            issuer: "Association of Certified Fraud Examiners (ACFE)",
            date: "March 2023",
            focus: "Financial Frauds and Detection, Forensic Auditing, Criminal Investigations"
        },
        {
            name: "Chartered Accountant",
            issuer: "Institute of Chartered Accountants of India",
            date: "December 2021",
            focus: "Auditing, Taxation, Financial Management, Corporate Law, Ind-AS/IFRS"
        },
        {
            name: "Data for Business Analysts Using Excel",
            issuer: "Microsoft",
            date: "July 2025",
            focus: "Advanced Excel, Data Analysis, Business Intelligence"
        },
        {
            name: "Business Analysis Fundamentals",
            issuer: "Microsoft",
            date: "June 2025",
            focus: "Requirements Gathering, Process Improvement, Stakeholder Management"
        }
    ]
};

export const projects = [
    {
        title: "Marketing Strategy Deep Dive - Magna Tiles",
        icon: CircleDollarSign,
        description: "Led 14-week primary/secondary research sprint analyzing customer segments, competitor promos, and price elasticity with GIS geo-maps, SWOT/STP, and unit-economics modeling",
        image: "/projects/marketing-strategy.jpg",
        technologies: ["Market Research", "GIS Mapping", "Financial Modeling", "Excel", "Survey Analysis"],
        impact: "ROI modeling for 3 pricing scenarios + new product concept with 90-day GTM roadmap",
        achievements: [
            "Built comprehensive cost structure & break-even analysis",
            "Modeled revenue/ROI for multiple pricing and promotion scenarios",
            "Prioritized roadmap via RICE framework with risk mitigation strategies",
            "Delivered executive deck with KPIs, pilot plan, and implementation roadmap"
        ]
    },
    {
        title: "Equity Valuation and Portfolio Optimization",
        icon: Activity,
        description: "Built and monitored equity portfolio over 4 months using Bloomberg Terminal with ratio analysis, DCF valuation with sensitivity analysis, and systematic stock screening",
        image: "/projects/equity-valuation.jpg",
        technologies: ["Bloomberg Terminal", "DCF Modeling", "CAPM", "Excel", "Portfolio Analysis"],
        impact: "25% Sharpe ratio improvement vs S&P 500",
        achievements: [
            "Conducted comprehensive ratio analysis and DCF valuations",
            "Applied CAPM and P/E analysis for systematic screening",
            "Delivered final stock recommendations with sensitivity scenarios",
            "Achieved superior risk-adjusted returns through optimization"
        ]
    },
    {
        title: "Driver-Based Forecasting Model",
        icon: "",
        description: "Developed comprehensive Excel + SQL forecasting template adopted by 7 research units, integrating automated data pulls and variance tracking",
        image: "/projects/forecasting.jpg",
        technologies: ["Excel", "SQL", "Financial Modeling", "Variance Analysis", "Automation"],
        impact: "20% improvement in forecast accuracy",
        achievements: [
            "Built dynamic driver-based forecasting framework",
            "Integrated automated data pulls from multiple systems",
            "Streamlined monthly financial planning processes",
            "Enabled real-time variance tracking and analysis"
        ]
    },
    {
        title: "Cost Efficiency Audit and Recommendation",
        icon: Files,
        description: "Analyzed variance and production inefficiencies using SAP and regression modeling techniques, delivering automation improvement recommendations",
        image: "/projects/cost-efficiency.jpg",
        technologies: ["SAP", "Regression Analysis", "Process Improvement", "Excel"],
        impact: "15% operating cost savings",
        achievements: [
            "Identified key cost drivers through statistical analysis",
            "Mapped process inefficiencies and bottlenecks",
            "Recommended targeted automation improvements",
            "Delivered measurable operational cost reductions"
        ]
    },
    {
        title: "Risk Analytics Dashboard",
        icon: LayoutDashboard,
        description: "Created comprehensive Power BI dashboard with real-time feeds, asset correlation heatmaps, and drawdown trackers for enhanced risk visualization",
        image: "/projects/risk-analytics.jpg",
        technologies: ["Power BI", "Financial Analytics", "Data Visualization", "Risk Modeling"],
        impact: "12% increase in client retention through enhanced data visualization",
        achievements: [
            "Developed real-time risk monitoring capabilities",
            "Built interactive correlation and drawdown analysis tools",
            "Enhanced investment risk profile transparency",
            "Improved advisor-client communication through visual insights"
        ]
    }
];

export const communityEngagement = [
    {
        title: "Student Business Ambassador, UIC",
        icon: University,
        period: "January 2025 - Present",
        description: "Guided 50+ new students on career planning and networking, coordinated on-campus and virtual events driving 300+ student interactions",
        impact: "Improved event attendance by 25% and strengthened UIC's business community engagement"
    },
    {
        title: "Management Team, Women in Finance @ UIC",
        icon: Users,
        period: "October 2024 - Present",
        description: "Organized speaker events and industry panels to promote gender equity and career mentorship for 100+ women in finance. Built partnerships with alumni and partner firms",
        impact: "Facilitated internship and networking opportunities while growing chapter visibility across UIC's finance community"
    },
    {
        title: "Fundraising & Sponsorship, TEDxUofIChicago",
        icon: CircleDollarSign,
        period: "2024 - 2025",
        description: "Secured $8,000+ in sponsorships by pitching partnerships to local businesses and corporate donors, managed sponsor relationships and deliverables",
        impact: "Ensured event visibility and supported TEDx event execution through creative fundraising strategies"
    },
    {
        title: "Sustainability Initiatives",
        icon: Sprout,
        period: "2023 - 2024",
        description: "Led 5+ Clean India drives, raised funding for 300+ animals, and planted 200+ trees through cross-community collaboration",
        impact: "Contributing to environmental sustainability and demonstrating commitment to social responsibility"
    }
];