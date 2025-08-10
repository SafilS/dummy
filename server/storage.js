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
        title: "Sentinel AI",
        slug: "sentinel-ai",
        shortDescription: "Advanced AI-powered cybersecurity platform providing real-time threat detection, automated incident response, and comprehensive security analytics for enterprise protection.",
        longDescription: "Sentinel AI is a cutting-edge cybersecurity platform that leverages artificial intelligence to provide comprehensive protection against modern cyber threats. The system offers real-time threat detection with 99.9% accuracy, automated incident response and mitigation, advanced behavioral analysis for anomaly detection, and cloud-native architecture for global scalability. With enterprise-grade security and compliance features, Sentinel AI ensures your organization stays protected against evolving cyber risks.",
        categoryId: utilitiesCat.id,
        tags: ["Cybersecurity", "AI", "Threat Detection", "Incident Response", "Enterprise"],
        techStack: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL", "Redis"],
        images: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"],
        demoUrl: "https://demo.sentinelai.com",
        repoUrl: "",
        downloadUrl: "",
        status: "published",
        featured: true,
        rating: 5,
        downloads: 2800,
        users: 1800,
        publishDate: new Date("2024-01-01"),
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01")
      },
      {
        id: randomUUID(),
        title: "VR Training Suite",
        slug: "vr-training-suite",
        shortDescription: "Comprehensive VR training platform for immersive learning experiences across industries including healthcare, manufacturing, and corporate training.",
        longDescription: "VR Training Suite is a comprehensive virtual reality training platform designed to revolutionize learning across multiple industries. The platform provides immersive training experiences for healthcare professionals, manufacturing workers, and corporate teams. With realistic physics simulation, multi-user support, progress tracking, and customizable training scenarios, VR Training Suite delivers engaging and effective learning outcomes while reducing training costs and improving retention rates.",
        categoryId: vrCat.id,
        tags: ["VR Training", "Immersive Learning", "Healthcare", "Manufacturing", "Corporate"],
        techStack: ["Unity", "C#", "Oculus SDK", "SteamVR", "WebXR", "Node.js"],
        images: ["https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"],
        demoUrl: "https://demo.vrtrainingsuite.com",
        repoUrl: "",
        downloadUrl: "",
        status: "published",
        featured: true,
        rating: 5,
        downloads: 1200,
        users: 800,
        publishDate: new Date("2024-01-08"),
        createdAt: new Date("2024-01-08"),
        updatedAt: new Date("2024-01-08")
      },
      {
        id: randomUUID(),
        title: "GetMe",
        slug: "getme",
        shortDescription: "A cross-platform school bus tracking solution for mobile and desktop. Tracks student attendance in real time, parents can track the bus live via GPS, Connect Me feature links user's current location with bus route for accurate pick-up, admin can view attendance records, manage buses, routes, and staff, emergency broadcast messaging to instantly notify parents in urgent situations.",
        longDescription: "GetMe is a comprehensive cross-platform school bus tracking solution designed for modern educational institutions. The platform provides real-time student attendance tracking, live GPS bus monitoring for parents, intelligent route optimization, and comprehensive administrative tools for managing transportation operations. With emergency broadcast capabilities, GetMe ensures student safety and provides peace of mind for parents and school administrators.",
        categoryId: mobileCat.id,
        tags: ["School Bus", "GPS Tracking", "Attendance", "Safety", "Mobile"],
        techStack: ["React Native", "Flutter", "Node.js", "PostgreSQL", "Google Maps API"],
        images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"],
        demoUrl: "https://demo.getme.com",
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
        title: "Broker App",
        slug: "broker-app",
        shortDescription: "A Flutter-based application exclusively for real estate brokers. Allows brokers to check lands and properties for client presentations, location-based property search with match percentage to help clients find relevant options quickly.",
        longDescription: "Broker App is a specialized Flutter-based application designed exclusively for real estate brokers. The platform enables brokers to efficiently search and evaluate properties and lands for client presentations. With advanced location-based search algorithms and intelligent match percentage calculations, brokers can quickly identify the most relevant property options for their clients, streamlining the property selection process and improving client satisfaction.",
        categoryId: mobileCat.id,
        tags: ["Real Estate", "Flutter", "Property Search", "Location-based", "Broker Tools"],
        techStack: ["Flutter", "Dart", "Firebase", "Google Maps API", "Cloud Firestore"],
        images: ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"],
        demoUrl: "https://demo.brokerapp.com",
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
        longDescription: "CafeAura is a comprehensive food ordering application designed for both mobile and desktop platforms. The system features an intuitive admin interface for managing menu items and monitoring stock levels in real-time. With integrated QR code scanning technology, customers can easily verify their order IDs for secure payment confirmation, ensuring a seamless and trustworthy ordering experience.",
        categoryId: mobileCat.id,
        tags: ["Food Ordering", "QR Code", "Menu Management", "Stock Tracking", "Mobile"],
        techStack: ["React Native", "React", "Node.js", "PostgreSQL", "QR Scanner"],
        images: ["https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"],
        demoUrl: "https://demo.cafeaura.com",
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
        title: "BillBro",
        slug: "billbro",
        shortDescription: "A lightweight billing application designed solely for shops. Generates and prints bills instantly for quick customer checkout.",
        longDescription: "BillBro is a streamlined, lightweight billing application specifically designed for retail shops and small businesses. The application focuses on speed and simplicity, enabling shop owners to generate and print professional bills instantly for quick customer checkout. With an intuitive interface and minimal setup requirements, BillBro helps businesses maintain efficient operations without unnecessary complexity.",
        categoryId: utilitiesCat.id,
        tags: ["Billing", "Retail", "Quick Checkout", "Printing", "Lightweight"],
        techStack: ["Vue.js", "Electron", "Node.js", "SQLite", "Thermal Printer API"],
        images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"],
        demoUrl: "https://demo.billbro.com",
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
        longDescription: "Invoicify is a comprehensive billing and inventory management software solution designed for growing businesses. The platform provides complete visibility into sales and purchase history, real-time stock inventory monitoring, and powerful analytics tools that deliver actionable business insights. With automated workflows and detailed reporting, Invoicify helps businesses optimize their operations and make data-driven decisions.",
        categoryId: utilitiesCat.id,
        tags: ["Billing", "Inventory", "Analytics", "Sales Tracking", "Business Intelligence"],
        techStack: ["React", "Laravel", "MySQL", "Chart.js", "Redis"],
        images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"],
        demoUrl: "https://demo.invoicify.com",
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
        images: ["https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"],
        demoUrl: "https://demo.vr-designs.com",
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
        images: ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"],
        demoUrl: "https://demo.3delevation.com",
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