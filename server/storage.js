import { randomUUID } from "crypto";

import { insertUserSchema } from "../shared/schema.js";


export class MemStorage {
  constructor() {
    this.users = new Map();
    this.categories = new Map();
    this.products = new Map();
    this.initializeData();
  }

  initializeData() {
    // Initialize categories
    const categories = [
      { id: randomUUID(), name: "Mobile App", description: "Mobile applications and solutions", slug: "mobile-app" },
      { id: randomUUID(), name: "VR/3D", description: "Virtual reality and 3D applications", slug: "vr-3d" },
      { id: randomUUID(), name: "Utilities", description: "Productivity and utility applications", slug: "utilities" }
    ];

    categories.forEach(cat => this.categories.set(cat.id, cat));

    // Initialize products
    const vrCat = categories.find(c => c.slug === "vr-3d");
    const mobileCat = categories.find(c => c.slug === "mobile-app");
    const utilitiesCat = categories.find(c => c.slug === "utilities");

    const products = [      
      {
        id: randomUUID(),
        title: "GetMe",
        slug: "getme",
        shortDescription: "A cross-platform school bus tracking solution for mobile and desktop. Tracks student attendance in real time, parents can track the bus live via GPS, Connect Me feature links user's current location with bus route for accurate pick-up, admin can view attendance records, manage buses, routes, and staff, emergency broadcast messaging to instantly notify parents in urgent situations.",
        longDescription: "GetMe is a cross-platform school bus tracking solution for modern educational institutions. It offers real-time student attendance, live GPS bus tracking for parents, smart route optimization, and powerful admin tools to manage transportation. With emergency alerts, it ensures safety and peace of mind for both parents and schools.",
        categoryId: mobileCat.id,
        tags: ["School Bus", "GPS Tracking", "Attendance", "Safety", "Mobile"],
        techStack: ["React Native", "Flutter", "Node.js", "PostgreSQL", "Google Maps API"],
        images: ["https://res.cloudinary.com/dudgm1amc/image/upload/v1754903672/Screenshot_2025-08-11-14-36-51-74_ef1814c5d9bfe76995a87854210dd856_fgcrxb.jpg","https://res.cloudinary.com/dudgm1amc/image/upload/v1754903672/Screenshot_2025-08-11-14-37-13-53_ef1814c5d9bfe76995a87854210dd856_cyhb9n.jpg","https://res.cloudinary.com/dudgm1amc/image/upload/v1754903672/Screenshot_2025-08-11-14-38-05-53_ef1814c5d9bfe76995a87854210dd856_a6fhg2.jpg","https://res.cloudinary.com/dudgm1amc/image/upload/v1754903671/Screenshot_2025-08-11-14-38-14-64_ef1814c5d9bfe76995a87854210dd856_zn1tsa.jpg"],
        // demoUrl: "https://demo.getme.com",
        repoUrl: "",
        downloadUrl: "",
        status: "published",
        featured: true,
        rating: 5,
        downloads: 3200,
        users: 2100,
        publishDate: new Date("2024-01-05"),
        createdAt: new Date("2024-01-05"),
        updatedAt: new Date("2024-01-05")
      },
      {
        id: randomUUID(),
        title: "Pro-Verse",
        slug: "pro-verse",
        shortDescription: "A Flutter-based application exclusively for real estate brokers. Allows brokers to check lands and properties for client presentations, location-based property search with match percentage to help clients find relevant options quickly.",
        longDescription: "Pro-Verse is a Flutter-based platform for real estate brokers to quickly search, evaluate, and present properties or lands to clients. Using advanced location-based search and intelligent match scoring, it helps brokers find the most relevant options, speeding up selection and boosting client satisfaction.",
        categoryId: mobileCat.id,
        tags: ["Real Estate", "Flutter", "Property Search", "Location-based", "Broker Tools"],
        techStack: ["Flutter", "Dart", "Firebase", "Google Maps API", "Cloud Firestore"],
        images: ["https://res.cloudinary.com/dudgm1amc/image/upload/v1754895639/Screenshot_2025-08-11-11-09-22-30_7c868f4a099208f628b4717871188303_mwte39.jpg","https://res.cloudinary.com/dudgm1amc/image/upload/v1754895639/Screenshot_2025-08-11-11-14-16-51_7c868f4a099208f628b4717871188303_jovt45.jpg","https://res.cloudinary.com/dudgm1amc/image/upload/v1754895639/Screenshot_2025-08-11-11-14-33-01_7c868f4a099208f628b4717871188303_hls8qu.jpg","https://res.cloudinary.com/dudgm1amc/image/upload/v1754895639/Screenshot_2025-08-11-11-14-10-54_7c868f4a099208f628b4717871188303_j1kdiq.jpg"],
        // demoUrl: "https://demo.brokerapp.com",
        repoUrl: "",
        downloadUrl: "",
        status: "published",
        featured: false,
        rating: 4,
        downloads: 1800,
        users: 950,
        publishDate: new Date("2024-01-15"),
        createdAt: new Date("2024-01-15"),
        updatedAt: new Date("2024-01-15")
      },
      {
        id: randomUUID(),
        title: "CafeAura",
        slug: "cafeaura",
        shortDescription: "A food ordering application for both mobile and desktop. Admin can add menu items and manage stock levels, QR code scanning to verify order ID for payment confirmation.",
        longDescription: "CafeAura is a cross-platform food ordering app with an intuitive admin panel for menu management and real-time stock monitoring. Integrated QR code scanning lets customers securely verify order IDs for safe payments, delivering a smooth and reliable ordering experience.",
        categoryId: mobileCat.id,
        tags: ["Food Ordering", "QR Code", "Menu Management", "Stock Tracking", "Mobile"],
        techStack: ["React Native", "React", "Node.js", "PostgreSQL", "QR Scanner"],
        images: ["https://res.cloudinary.com/dudgm1amc/image/upload/v1754908006/Screenshot_2025-08-11-15-31-18-94_00a199e6c53436ac8e4b66a388f1ed9b_aifuis.jpg","https://res.cloudinary.com/dudgm1amc/image/upload/v1754908006/Screenshot_2025-08-11-15-31-30-22_00a199e6c53436ac8e4b66a388f1ed9b_jue8po.jpg","https://res.cloudinary.com/dudgm1amc/image/upload/v1754908005/IMG-20250811-WA0027_f5z54r.jpg"],
        // demoUrl: "https://demo.cafeaura.com",
        repoUrl: "",
        downloadUrl: "",
        status: "published",
        featured: false,
        rating: 4,
        downloads: 2100,
        users: 1450,
        publishDate: new Date("2024-01-10"),
        createdAt: new Date("2024-01-10"),
        updatedAt: new Date("2024-01-10")
      },
      {
        id: randomUUID(),
        title: "Viruzverse Billing",
        slug: "viruzverse-billing",
        shortDescription: "A lightweight billing application designed solely for shops. Generates and prints bills instantly for quick customer checkout.",
        longDescription: "Viruzverse Billing is a lightweight billing app for retail shops and small businesses, built for speed and simplicity. It lets shop owners instantly generate and print professional bills, ensuring fast checkouts and smooth operations with minimal setup.",
        categoryId: utilitiesCat.id,
        tags: ["Billing", "Retail", "Quick Checkout", "Printing", "Lightweight"],
        techStack: ["Vue.js", "Electron", "Node.js", "SQLite", "Thermal Printer API"],
        images: ["https://res.cloudinary.com/dudgm1amc/image/upload/v1754896452/Screenshot_2025-08-11-12-41-26-47_5fccfd66cc012c0f519a6eeed9c5381d_jhkeur.jpg","https://res.cloudinary.com/dudgm1amc/image/upload/v1754896467/Screenshot_2025-08-11-12-41-47-27_5fccfd66cc012c0f519a6eeed9c5381d_zqe5gs.jpg","https://res.cloudinary.com/dudgm1amc/image/upload/v1754896479/Screenshot_2025-08-11-12-41-57-36_5fccfd66cc012c0f519a6eeed9c5381d_tpn0tu.jpg"],
        // demoUrl: "https://demo.viruzverse Billing.com",
        repoUrl: "",
        downloadUrl: "",
        status: "published",
        featured: false,
        rating: 5,
        downloads: 1800,
        users: 1200,
        publishDate: new Date("2024-01-25"),
        createdAt: new Date("2024-01-25"),
        updatedAt: new Date("2024-01-25")
      },
      {
        id: randomUUID(),
        title: "Invoicify",
        slug: "invoicify",
        shortDescription: "A billing and inventory management software. Tracks sales and purchase history, monitors stock inventory, provides analytics for business insights.",
        longDescription: "Invoicify is an all-in-one billing and inventory management solution for growing businesses. It offers complete sales and purchase tracking, real-time stock monitoring, and powerful analytics for actionable insights. With automated workflows and detailed reports, it streamlines operations and supports data-driven decisions.",
        categoryId: utilitiesCat.id,
        tags: ["Billing", "Inventory", "Analytics", "Sales Tracking", "Business Intelligence"],
        techStack: ["React", "Laravel", "MySQL", "Chart.js", "Redis"],
        images: ["https://res.cloudinary.com/dudgm1amc/image/upload/v1754977354/in_mooyyq.jpg","https://res.cloudinary.com/dudgm1amc/image/upload/v1754977353/in4_gcbfq8.jpg","https://res.cloudinary.com/dudgm1amc/image/upload/v1754977353/in3_xitp4r.jpg","https://res.cloudinary.com/dudgm1amc/image/upload/v1754977354/in2_q9vwi5.jpg"],
        // demoUrl: "https://demo.invoicify.com",
        repoUrl: "",
        downloadUrl: "",
        status: "published",
        featured: true,
        rating: 5,
        downloads: 1500,
        users: 980,
        publishDate: new Date("2024-01-20"),
        createdAt: new Date("2024-01-20"),
        updatedAt: new Date("2024-01-20")
      },
      {
        id: randomUUID(),
        title: "VR Interior & Exterior Designs",
        slug: "vr-interior-exterior-designs",
        shortDescription: "Immersive architectural visualizations with high-quality textures and realistic 3D models for interior and exterior design projects.",
        longDescription: "Transform your architectural projects with our immersive VR interior and exterior design visualizations. Featuring high-quality textures, realistic 3D models, and interactive walkthroughs, this solution enables architects, designers, and clients to experience spaces before they're built. Perfect for design presentations, client approvals, and construction planning.",
        categoryId: vrCat.id,
        tags: ["VR", "Architecture", "3D Modeling", "Interior Design", "Exterior Design"],
        techStack: ["Unity", "Blender", "C#", "Oculus SDK", "WebXR"],
        images: ["https://res.cloudinary.com/dudgm1amc/image/upload/v1754932263/IMG-20250811-WA0044_l2ckz5.jpg","https://res.cloudinary.com/dudgm1amc/image/upload/v1754932263/IMG-20250811-WA0035_hl7awn.jpg","https://res.cloudinary.com/dudgm1amc/image/upload/v1754932263/IMG-20250811-WA0038_oqxwy8.jpg","https://res.cloudinary.com/dudgm1amc/image/upload/v1754932263/IMG-20250811-WA0036_cbajve.jpg"],
        // demoUrl: "https://demo.vr-designs.com",
        repoUrl: "",
        downloadUrl: "",
        status: "published",
        featured: true,
        rating: 5,
        downloads: 950,
        users: 420,
        publishDate: new Date("2024-01-30"),
        createdAt: new Date("2024-01-30"),
        updatedAt: new Date("2024-01-30")
      },
      {
        id: randomUUID(),
        title: "3D Elevation",
        slug: "3d-elevation",
        shortDescription: "Detailed, accurate 3D elevation renderings for showcasing building exteriors and design concepts with photorealistic quality.",
        longDescription: "Create stunning, photorealistic 3D elevation renderings that bring your architectural designs to life. Our specialized 3D elevation service provides detailed, accurate representations of building exteriors and design concepts, perfect for client presentations, marketing materials, and construction documentation. With advanced lighting and material systems, every detail is captured with exceptional clarity.",
        categoryId: vrCat.id,
        tags: ["3D Rendering", "Architecture", "Elevation", "Photorealistic", "Design"],
        techStack: ["3ds Max", "V-Ray", "Corona Renderer", "Photoshop", "AutoCAD"],
        images: ["https://res.cloudinary.com/dudgm1amc/image/upload/v1754974323/3d_tdejok.jpg","https://res.cloudinary.com/dudgm1amc/image/upload/v1754974406/3d2_gdmdbh.jpg"],
        // demoUrl: "https://demo.3delevation.com",
        repoUrl: "",
        downloadUrl: "",
        status: "published",
        featured: false,
        rating: 4,
        downloads: 750,
        users: 320,
        publishDate: new Date("2024-02-05"),
        createdAt: new Date("2024-02-05"),
        updatedAt: new Date("2024-02-05")
      },
      {
        id: randomUUID(),
        title: "FPS Shooting Game",
        slug: "fps-shooting-game",
        shortDescription: "FPS Shooting Game is a high-intensity VR experience with realistic environments, precise controls, and adrenaline-filled combat. Dive into solo missions or multiplayer battles for nonstop action.",
        longDescription: "FPS Shooting Game delivers an adrenaline-charged virtual reality experience, combining lifelike environments, ultra-responsive controls, and intense combat scenarios. Designed for maximum immersion, it puts players directly in the heart of high-stakes action, offering both solo missions and multiplayer battles for endless replayability.",
        categoryId: vrCat.id,
        tags: ["3D Rendering", "Architecture", "Elevation", "Photorealistic", "Design"],
        techStack: ["3ds Max", "V-Ray", "Corona Renderer", "Photoshop", "AutoCAD"],
        images: ["https://res.cloudinary.com/dudgm1amc/image/upload/v1754974161/fps_xl2say.jpg"],
        // demoUrl: "https://demo.3delevation.com",
        repoUrl: "",
        downloadUrl: "",
        status: "published",
        featured: false,
        rating: 4,
        downloads: 750,
        users: 320,
        publishDate: new Date("2024-02-05"),
        createdAt: new Date("2024-02-05"),
        updatedAt: new Date("2024-02-05")
      }
    ];

    products.forEach(product => this.products.set(product.id, product));

    // Initialize admin user
    const adminUser = {
      id: randomUUID(),
      username: "admin",
      email: "admin@viruzverse.com",
      password: "hashed_admin_password",
      role: "admin",
      createdAt: new Date(),
    };
    this.users.set(adminUser.id, adminUser);
  }

  // User methods
  async getUser(id) {
    return this.users.get(id);
  }

  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async getUserByEmail(email) {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(insertUser) {
    const id = randomUUID();
    const user = { 
      ...insertUser, 
      id, 
      createdAt: new Date() 
    };
    this.users.set(id, user);
    return user;
  }

  async updateUser(id, updateData) {
    const user = this.users.get(id);
    if (!user) return undefined;
    
    const updatedUser = { ...user, ...updateData };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  async deleteUser(id) {
    return this.users.delete(id);
  }

  // Category methods
  async getCategory(id) {
    return this.categories.get(id);
  }

  async getCategoryBySlug(slug) {
    return Array.from(this.categories.values()).find(cat => cat.slug === slug);
  }

  async getAllCategories() {
    return Array.from(this.categories.values());
  }

  async createCategory(insertCategory) {
    const id = randomUUID();
    const category = { ...insertCategory, id };
    this.categories.set(id, category);
    return category;
  }

  async updateCategory(id, updateData) {
    const category = this.categories.get(id);
    if (!category) return undefined;
    
    const updatedCategory = { ...category, ...updateData };
    this.categories.set(id, updatedCategory);
    return updatedCategory;
  }

  async deleteCategory(id) {
    return this.categories.delete(id);
  }

  // Product methods
  async getProduct(id) {
    return this.products.get(id);
  }

  async getProductBySlug(slug) {
    return Array.from(this.products.values()).find(product => product.slug === slug);
  }

  async getAllProducts(filters) {
    let products = Array.from(this.products.values());

    if (filters) {
      if (filters.category) {
        products = products.filter(p => p.categoryId === filters.category);
      }
      if (filters.status) {
        products = products.filter(p => p.status === filters.status);
      }
      if (filters.featured !== undefined) {
        products = products.filter(p => p.featured === filters.featured);
      }
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        products = products.filter(p => 
          p.title.toLowerCase().includes(searchLower) ||
          p.shortDescription.toLowerCase().includes(searchLower) ||
          p.longDescription.toLowerCase().includes(searchLower)
        );
      }
      if (filters.tags && filters.tags.length > 0) {
        products = products.filter(p => 
          filters.tags.some(tag => p.tags.includes(tag))
        );
      }
    }

    return products;
  }

  async createProduct(insertProduct) {
    const id = randomUUID();
    const product = {
      ...insertProduct,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.products.set(id, product);
    return product;
  }

  async updateProduct(id, updateData) {
    const product = this.products.get(id);
    if (!product) return undefined;
    
    const updatedProduct = { 
      ...product, 
      ...updateData,
      updatedAt: new Date()
    };
    this.products.set(id, updatedProduct);
    return updatedProduct;
  }

  async deleteProduct(id) {
    return this.products.delete(id);
  }
}

export const storage = new MemStorage();