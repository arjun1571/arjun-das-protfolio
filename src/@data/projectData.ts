export type ProjectScreenshot = {
  title: string;
  route: string;
  description: string;
  image: string;
  section?: string;
};

export type ProjectDetail = {
  id: string;
  slug: string;
  title: string;
  image: string;
  liveUrl: string;
  description: string;
  overview: string;
  techStack: string[];
  credentials?: {
    email: string;
    password: string;
    adminUrl?: string;
  };
  features: string[];
  screenshots: ProjectScreenshot[];
};

export const projectData: ProjectDetail[] = [
  {
    id: "00",
    slug: "cashflow",
    title: "CashFlow",
    image: "/projects/cashflow/login.png",
    liveUrl: "https://cashflow.nfdev.me/",
    description:
      "CashFlow — multi-company financial management platform for tracking deposits, expenses, balance and real-time reports.",
    overview:
      "CashFlow (cashflow.nfdev.me) হলো একটি modern financial management dashboard যেখানে multiple company-র deposit, expense, balance, supplier payment ও বিভিন্ন report এক জায়গায় manage করা যায়। Real-time Reports, Multi-Company support এবং Smart Analytics — business owner ও finance team-দের জন্য complete cash flow solution।",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    credentials: {
      email: "arjundasback515@gmail.com",
      password: "123456",
    },
    features: [
      "Multi-company deposit & expense tracking",
      "Real-time balance overview dashboard",
      "Deposit approval workflow (Pending/Approved/Rejected)",
      "Expense categories & supplier payments",
      "Account statement & financial reports",
      "Marketing, welfare & reserve expense modules",
      "User roles & permission management",
      "Budget planning & company setup",
    ],
    screenshots: [
      {
        title: "Login Page",
        route: "/",
        description:
          "Split-screen login page। Left side-এ branding, features (Real-time Reports, Multi-Company, Smart Analytics) showcase। Right side-এ Email/Phone ও Password দিয়ে Sign In। Clean, modern financial app UI।",
        image: "/projects/cashflow/login.png",
      },
      {
        title: "Dashboard Overview",
        route: "/dashboard",
        description:
          "Login-এর পর main dashboard। User info (email, phone, role, permission), Quick Actions (Deposit, Expenses, Balance) এবং Get Started setup banner। Financial command center হিসেবে daily overview।",
        image: "/projects/cashflow/dashboard.png",
      },
      {
        title: "Deposits",
        route: "/dashboard/deposits",
        description:
          "Deposit record management। Reference, Company, Account, Amount, Date, Status (Pending/Approved/Rejected) table format-এ। Record Deposit button, search, filter tabs এবং pagination support।",
        image: "/projects/cashflow/dashboard-deposits.png",
      },
      {
        title: "Expenses",
        route: "/dashboard/expenses",
        description:
          "Expense tracking page। Business expense record, category-wise filtering, approval status management। Company-wise expense monitor করে cash outflow track করা যায়।",
        image: "/projects/cashflow/dashboard-expenses.png",
      },
      {
        title: "Balance",
        route: "/dashboard/balance",
        description:
          "Account balance overview। Multiple company ও account-এর current balance এক glance-এ দেখা যায়। Financial health check করার জন্য essential page।",
        image: "/projects/cashflow/dashboard-balance.png",
      },
      {
        title: "Companies",
        route: "/dashboard/companies",
        description:
          "Multi-company management। Naviforce, Timeverse সহ multiple business entity add/edit করা যায়। CashFlow-এর core feature — এক dashboard থেকে সব company manage।",
        image: "/projects/cashflow/dashboard-companies.png",
      },
      {
        title: "Accounts",
        route: "/dashboard/accounts",
        description:
          "Bank account management। City Bank, DBBL সহ payment account setup ও manage। Deposit/expense transaction-এর জন্য account linking।",
        image: "/projects/cashflow/dashboard-accounts.png",
      },
      {
        title: "Account Statement Report",
        route: "/dashboard/reports/account-statement",
        description:
          "Complete account statement report। Date range filter, company/account wise transaction history। Financial audit ও reconciliation-এর জন্য detailed report।",
        image: "/projects/cashflow/dashboard-reports-account-statement.png",
      },
      {
        title: "Deposit Report",
        route: "/dashboard/reports/deposits",
        description:
          "Deposit summary report। Period-wise total deposit, company breakdown, approval status analysis। Management decision-এর জন্য deposit trend tracking।",
        image: "/projects/cashflow/dashboard-reports-deposits.png",
      },
      {
        title: "Expense Report",
        route: "/dashboard/reports/expenses",
        description:
          "Expense analysis report। Category-wise, company-wise expense breakdown। Cost control ও budget planning-এ help করে।",
        image: "/projects/cashflow/dashboard-reports-expenses.png",
      },
      {
        title: "Budgets",
        route: "/dashboard/budgets",
        description:
          "Budget planning module। Company-wise budget set, track actual vs planned spending। Financial planning ও cost management tool।",
        image: "/projects/cashflow/dashboard-budgets.png",
      },
      {
        title: "Users & Permissions",
        route: "/dashboard/users",
        description:
          "Team member ও role management। User add/edit, permission assign, Company Admin role control। Multi-user financial system access management।",
        image: "/projects/cashflow/dashboard-users.png",
      },
      {
        title: "Suppliers",
        route: "/dashboard/suppliers",
        description:
          "Supplier database management। Vendor info, payment tracking, supplier-wise expense link। Supplier Payments module-এর সাথে integrated।",
        image: "/projects/cashflow/dashboard-suppliers.png",
      },
    ],
  },
  {
    id: "01",
    slug: "eprint-bd",
    title: "EPrint BD",
    image: "/projects/eprint/home.png",
    liveUrl: "https://eprint.nfdev.me/",
    description:
      "EPrint BD — Bangladesh-এর online printing service platform। Business card, flyer, banner, mug, ID card সহ 25+ print product order করা যায়।",
    overview:
      "EPrint BD (eprint.nfdev.me) হলো একটি complete online printing platform — customer-facing website + admin panel দুটোই আছে। Customer site-এ product browse, order, quote request করা যায়। Admin panel (/admin) থেকে order management, content edit, report issue, product, team — সব business operation control করা যায়।",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    credentials: {
      email: "arjundasback515@gmail.com",
      password: "123456",
      adminUrl: "https://eprint.nfdev.me/admin",
    },
    features: [
      "Customer website with 25+ print product categories",
      "Admin dashboard with order status tracking (14+ stages)",
      "Create Order with customer, product & payment flow",
      "Content management for page titles & descriptions",
      "Report Issue module with supplier workflow",
      "Product, purchase, account & team management",
      "Custom quote request for bulk orders",
      "Blog, portfolio & settings modules",
    ],
    screenshots: [
      {
        title: "Home Page",
        route: "/",
        section: "Customer Website",
        description:
          "Main landing page। Hero section-এ 'What Do You Want to Print Today?' search bar, product category chips (Business Card, Flyer, Banner, Mug ইত্যাদি), Why Choose ePrint features, Popular Products grid, How It Works process, Client Reviews — সব এক page-এ।",
        image: "/projects/eprint/home.png",
      },
      {
        title: "All Products",
        route: "/products",
        section: "Customer Website",
        description:
          "সব print product-এর catalog page। Business cards, calendars, mugs, banners, stickers — category wise product list with image, name ও starting price। Search filter দিয়ে specific product খুঁজে বের করা যায়।",
        image: "/projects/eprint/products.png",
      },
      {
        title: "Product Detail",
        route: "/products/glossy-business-card-in-bd",
        section: "Customer Website",
        description:
          "Individual product page। Product image, description, pricing options, quantity select, customization options এবং Add to Cart button। Customer directly এখান থেকে order place করতে পারে।",
        image: "/projects/eprint/product-detail.png",
      },
      {
        title: "Services",
        route: "/services",
        section: "Customer Website",
        description:
          "Printing services overview page। Premium Quality, Fast Delivery, Affordable Price, Free Design Support, 100% Satisfaction — ePrint-এর core service offerings explain করা।",
        image: "/projects/eprint/services.png",
      },
      {
        title: "How It Works (Process)",
        route: "/process",
        section: "Customer Website",
        description:
          "5-step printing process page। 01 Quotation → 02 Verification → 03 Printing → 04 Packaging → 05 Delivery। Customer-দের জন্য transparent workflow showcase করে business trust build করে।",
        image: "/projects/eprint/process.png",
      },
      {
        title: "Client Reviews",
        route: "/reviews",
        section: "Customer Website",
        description:
          "Customer review ও rating page। Verified client feedback, reviewer name, reviewed product name — social proof হিসেবে কাজ করে। View All Reviews option-ও available।",
        image: "/projects/eprint/reviews.png",
      },
      {
        title: "About Us",
        route: "/about-us",
        section: "Customer Website",
        description:
          "Company information page। ePrint BD-র story, mission, team এবং printing service সম্পর্কে details। Customer-দের brand trust build করার জন্য about section।",
        image: "/projects/eprint/about.png",
      },
      {
        title: "Contact Us",
        route: "/contact-us",
        section: "Customer Website",
        description:
          "Contact page with office address (Motijheel, Dhaka), phone number, email, WhatsApp link। Get A Quote button ও contact form — customer support ও inquiry-র জন্য।",
        image: "/projects/eprint/contact.png",
      },
      {
        title: "Get A Quote",
        route: "/custom-quote",
        section: "Customer Website",
        description:
          "Custom quotation request page। Bulk order বা special print requirement-এর জন্য customer quote request submit করতে পারে। B2B client ও wholesale order-এর জন্য dedicated flow।",
        image: "/projects/eprint/custom-quote.png",
      },
      {
        title: "Equipment",
        route: "/equipment",
        section: "Customer Website",
        description:
          "Printing equipment showcase page। Modern printing machines ও production capability display করে quality assurance দেখায়। Professional printing infrastructure highlight করা।",
        image: "/projects/eprint/equipment.png",
      },
      {
        title: "Login / Register",
        route: "/login",
        section: "Customer Website",
        description:
          "Customer account authentication page। Login ও Register option — order history track, saved addresses, repeat order — registered customer-দের জন্য account management।",
        image: "/projects/eprint/login.png",
      },
      {
        title: "Admin Login",
        route: "/admin",
        section: "Admin Panel",
        description:
          "Admin panel login page। Split-screen design — left side branding 'Manage your store from one place', right side Email/Password form। Store owner/admin business dashboard access করার entry point।",
        image: "/projects/eprint/admin/login.png",
      },
      {
        title: "Admin Dashboard",
        route: "/admin/dashboard",
        section: "Admin Panel",
        description:
          "Admin main dashboard। Order status cards — Total Sales (৳778,577), Pending, Waiting Payment, Design Processing, Printing, Quality Checking, Shipped, Delivered (101 orders) সহ 14+ status track। Date range filter (This Month) দিয়ে period-wise analytics।",
        image: "/projects/eprint/admin/dashboard.png",
      },
      {
        title: "Create Order",
        route: "/admin/order/create",
        section: "Admin Panel",
        description:
          "Manual order create page। Customer details (name, email, phone, address), product search & add, order summary, payment method select — admin directly phone/showroom order entry করতে পারে। Full order creation workflow এক form-এ।",
        image: "/projects/eprint/admin/order-create.png",
      },
      {
        title: "Content Management",
        route: "/admin/content",
        section: "Admin Panel",
        description:
          "Website content manage করার page। Page titles, subtitles, descriptions edit/add করা যায়। Search, drag reorder, Copy Text option — frontend content admin panel থেকে update without code change।",
        image: "/projects/eprint/admin/content.png",
      },
      {
        title: "Report Issue",
        route: "/admin/report-issue",
        section: "Admin Panel",
        description:
          "Customer issue tracking module। Order-wise issue report, status workflow (Pending → Sent To Supplier → From Supplier → Ready For Box → Delivery → Closed)। Customer complaint ও product return/refund manage করার system।",
        image: "/projects/eprint/admin/report-issue.png",
      },
    ],
  },
  {
    id: "02",
    slug: "bikretabm",
    title: "BikretaBm",
    image: "/projects/bikretabm/dashboard-summary.png",
    liveUrl: "https://nfdev.me/",
    description:
      "BikretaBm (EcomIntelligence) — multi-store e-commerce management platform for products, orders, customers, marketing, and team operations.",
    overview:
      "BikretaBm হলো EcomIntelligence নামের একটি full-featured e-commerce admin panel। এখানে এক জায়গা থেকে multiple website (Naviforce, TimeVerse, Olevs, Bikreta ইত্যাদি) manage করা যায় — order tracking, product inventory, customer database, marketing report, account/expense, team management সব কিছু এক dashboard-এ available।",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    credentials: {
      email: "arjundasback515@gmail.com",
      password: "123456",
    },
    features: [
      "Multi-website e-commerce management from one panel",
      "Real-time order tracking with 15+ status types",
      "Product catalog with SKU, stock & category management",
      "Customer database with order history",
      "Marketing campaign & daily cost tracking",
      "Team, leave, salary & duty plan management",
      "Account, expense & payment reporting",
      "Website settings for multiple storefronts",
    ],
    screenshots: [
      {
        title: "Login Page",
        route: "/",
        description:
          "User authentication entry point. Email/phone এবং password দিয়ে login করা যায়। Remember me, Forgot Password এবং Sign Up link-ও এখানে available। Login successful হলে admin dashboard-এ redirect হয়।",
        image: "/projects/bikretabm/login.png",
      },
      {
        title: "Sign Up Page",
        route: "/signup",
        description:
          "নতুন user registration page। Full Name, Phone Number, Email, Password fill up করে account create করা যায়। Privacy Policy agree করতে হয়। Already have account থাকলে Login page-এ যাওয়া যায়।",
        image: "/projects/bikretabm/signup.png",
      },
      {
        title: "Holiday & Shift (Duty Plan)",
        route: "/holiday-shift",
        description:
          "Login করার পর default landing page। Employee-দের shift schedule, leave balance, weekly off, upcoming holidays এবং recent leave history এখানে দেখা যায়। Notice ও Company Policy manage করার option-ও আছে।",
        image: "/projects/bikretabm/holiday-shift.png",
      },
      {
        title: "Dashboard Summary",
        route: "/dashboard/summary",
        description:
          "Business-এর complete overview। Total Sales, Pending Orders, Waiting Payment, Approved, Printed, In Transit, Delivery, Cancelled, Return, Refunded — সব status-এর count ও amount একসাথে card format-এ দেখায়। Real-time sales analytics ও order pipeline tracking-এর জন্য main dashboard।",
        image: "/projects/bikretabm/dashboard-summary.png",
      },
      {
        title: "Dashboard — Bikreta",
        route: "/dashboard/bikreta",
        description:
          "Bikreta brand/website-এর dedicated sales dashboard। Specific website-এর order volume, revenue, এবং performance metrics আলাদা করে track করা যায়। Multi-brand e-commerce business-দের জন্য brand-wise reporting।",
        image: "/projects/bikretabm/dashboard-bikreta.png",
      },
      {
        title: "All Products",
        route: "/product/products",
        description:
          "Product catalog management page। Product image, name, category, SKU, sale price, stock quantity table format-এ list করা। Add Product button দিয়ে নতুন product add, search/filter দিয়ে খুঁজে বের করা, এবং প্রতিটি product-এর Report ও View option available।",
        image: "/projects/bikretabm/products.png",
      },
      {
        title: "All Orders",
        route: "/orders/all-order",
        description:
          "সব website-এর order এক জায়গায় manage করা যায়। Status tabs (Pending, Approved, Printed, Transit, Delivery, Cancel, Return) দিয়ে filter, customer info, product thumbnail, payment method, total amount দেখা যায়। Create Order ও Showroom Order button-ও top bar-এ available।",
        image: "/projects/bikretabm/orders.png",
      },
      {
        title: "All Customers",
        route: "/customer/all",
        description:
          "Customer database management। Customer name, phone, type (general/wholesale), active status, total orders ও delivery total table-এ দেখায়। Repeat customer ও Monthly customer report-ও sidebar থেকে access করা যায়।",
        image: "/projects/bikretabm/customers.png",
      },
      {
        title: "Product Stock Summary",
        route: "/product-stock/summary",
        description:
          "Inventory ও stock management module। Warehouse-wise stock level, brand/category report, stock transfer, stock sync — সব inventory-related কাজ এখান থেকে করা যায়। Product stock monitor করে out-of-stock alert manage করা সহজ।",
        image: "/projects/bikretabm/product-stock.png",
      },
      {
        title: "Marketing Daily Report",
        route: "/marketing/daily",
        description:
          "Marketing campaign tracking ও daily cost report। Facebook UTM campaign, Google Ads, zone campaign, monthly cost — marketing spend ও ROI track করার জন্য dedicated module। Campaign source, search order, webhook integration-ও available।",
        image: "/projects/bikretabm/marketing.png",
      },
      {
        title: "Website Settings",
        route: "/setting/website",
        description:
          "Multiple e-commerce website manage করার settings page। Naviforce, TimeVerse, Olevs, Navora — প্রতিটি website-এর name, URL, active status toggle, এবং add/edit option এখানে। Multi-store business-দের জন্য central website management।",
        image: "/projects/bikretabm/website-settings.png",
      },
      {
        title: "Account Expense",
        route: "/account/expense",
        description:
          "Business expense tracking module। Daily/monthly expense record, expense category, deposit report, balance sheet — financial accounting features। Business owner-রা income vs expense track করে profit margin বুঝতে পারে।",
        image: "/projects/bikretabm/account-expense.png",
      },
      {
        title: "Team Members",
        route: "/team/member",
        description:
          "Employee ও team management page। Team member add/edit, permission assign, salary, leave application, advance salary, holiday payment — HR-related সব feature এক module-এ। Role-based access control-ও support করে।",
        image: "/projects/bikretabm/team-member.png",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projectData.find(
    (project) => project.slug.toLowerCase() === slug.toLowerCase()
  );
}
