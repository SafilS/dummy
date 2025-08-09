import { type User, type InsertUser, type Category, type InsertCategory, type Product, type InsertProduct } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: string, user: Partial<InsertUser>): Promise<User | undefined>;
  deleteUser(id: string): Promise<boolean>;

  // Categories
  getCategory(id: string): Promise<Category | undefined>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;
  getAllCategories(): Promise<Category[]>;
  createCategory(category: InsertCategory): Promise<Category>;
  updateCategory(id: string, category: Partial<InsertCategory>): Promise<Category | undefined>;
  deleteCategory(id: string): Promise<boolean>;

  // Products
  getProduct(id: string): Promise<Product | undefined>;
  getProductBySlug(slug: string): Promise<Product | undefined>;
  getAllProducts(filters?: {
    category?: string;
    status?: string;
    featured?: boolean;
    search?: string;
    tags?: string[];
  }): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  updateProduct(id: string, product: Partial<InsertProduct>): Promise<Product | undefined>;
  deleteProduct(id: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private categories: Map<string, Category>;
  private products: Map<string, Product>;

  constructor() {
    this.users = new Map();
    this.categories = new Map();
    this.products = new Map();
    this.initializeData();
  }

  private initializeData() {
    // Initialize categories
    const categories = [
      { id: randomUUID(), name: "Cybersecurity", description: "Advanced security solutions and threat detection", slug: "cybersecurity" },
      { id: randomUUID(), name: "VR/3D", description: "Virtual reality and 3D applications", slug: "vr-3d" },
      { id: randomUUID(), name: "Mobile App", description: "Mobile applications and solutions", slug: "mobile-app" },
      { id: randomUUID(), name: "Utilities", description: "Productivity and utility applications", slug: "utilities" },
      { id: randomUUID(), name: "FinTech", description: "Financial technology solutions", slug: "fintech" }
    ];

    categories.forEach(cat => this.categories.set(cat.id, cat));

    // Initialize products
    const cybersecurityCat = categories.find(c => c.slug === "cybersecurity")!;
    const vrCat = categories.find(c => c.slug === "vr-3d")!;
    const mobileCat = categories.find(c => c.slug === "mobile-app")!;
    const utilitiesCat = categories.find(c => c.slug === "utilities")!;
    const fintechCat = categories.find(c => c.slug === "fintech")!;

    const products = [
      {
        id: randomUUID(),
        title: "Sentinel AI",
        slug: "sentinel-ai",
        shortDescription: "Advanced AI-powered cybersecurity platform that provides real-time threat detection and automated response capabilities for enterprise environments.",
        longDescription: "Sentinel AI revolutionizes cybersecurity with advanced machine learning algorithms that detect and respond to threats in real-time. Built for enterprise environments, it provides comprehensive protection across networks, endpoints, and cloud infrastructure with 99.9% accuracy and automated incident response.",
        categoryId: cybersecurityCat.id,
        tags: ["AI", "Security", "Enterprise", "Real-time"],
        techStack: ["Python", "TensorFlow", "Docker", "Kubernetes"],
        images: ["https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"],
        demoUrl: "https://demo.sentinel-ai.com",
        repoUrl: "",
        downloadUrl: "",
        status: "published",
        featured: true,
        rating: 5,
        downloads: 1250,
        users: 850,
        publishDate: new Date("2024-01-15"),
        createdAt: new Date("2024-01-15"),
        updatedAt: new Date("2024-01-15")
      },
      {
        id: randomUUID(),
        title: "VR Training Suite",
        slug: "vr-training-suite",
        shortDescription: "Immersive virtual reality training platform for corporate education, safety protocols, and skill development with realistic simulations.",
        longDescription: "Transform your training programs with our immersive VR platform. Designed for corporate education, safety training, and skill development, it offers realistic simulations that improve learning retention and engagement while reducing training costs.",
        categoryId: vrCat.id,
        tags: ["VR", "Training", "Education", "Simulation"],
        techStack: ["Unity", "C#", "Oculus SDK", "WebXR"],
        images: ["https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"],
        demoUrl: "https://demo.vr-training.com",
        repoUrl: "",
        downloadUrl: "",
        status: "published",
        featured: true,
        rating: 4,
        downloads: 750,
        users: 320,
        publishDate: new Date("2024-01-20"),
        createdAt: new Date("2024-01-20"),
        updatedAt: new Date("2024-01-20")
      },
      {
        id: randomUUID(),
        title: "CafeAura",
        slug: "cafeaura",
        shortDescription: "Complete cafe management solution with POS integration, inventory tracking, customer analytics, and mobile ordering capabilities.",
        longDescription: "Streamline your cafe operations with our comprehensive management platform. Features include POS integration, real-time inventory tracking, customer analytics, mobile ordering, and staff management tools designed specifically for coffee shops and small restaurants.",
        categoryId: mobileCat.id,
        tags: ["POS", "Restaurant", "Mobile", "Analytics"],
        techStack: ["React Native", "Node.js", "PostgreSQL", "Stripe"],
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
        shortDescription: "Smart billing and invoice management platform with automated payment processing, recurring billing, and comprehensive financial analytics.",
        longDescription: "Simplify your billing process with our intelligent invoice management system. Features automated payment processing, recurring billing, comprehensive financial analytics, multi-currency support, and integration with popular accounting software.",
        categoryId: utilitiesCat.id,
        tags: ["Billing", "Invoices", "Payments", "Analytics"],
        techStack: ["Vue.js", "Laravel", "MySQL", "PayPal API"],
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
        title: "GetMe",
        slug: "getme",
        shortDescription: "On-demand delivery platform connecting customers with local services, featuring real-time tracking, route optimization, and multi-service marketplace.",
        longDescription: "Connect customers with local services through our comprehensive delivery platform. Features real-time tracking, intelligent route optimization, multi-service marketplace, vendor management, and seamless payment processing for the modern on-demand economy.",
        categoryId: mobileCat.id,
        tags: ["Delivery", "Marketplace", "Tracking", "Mobile"],
        techStack: ["Flutter", "Firebase", "Google Maps", "WebSockets"],
        images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"],
        demoUrl: "https://demo.getme.com",
        repoUrl: "",
        downloadUrl: "",
        status: "published",
        featured: true,
        rating: 4,
        downloads: 3200,
        users: 2100,
        publishDate: new Date("2024-01-05"),
        createdAt: new Date("2024-01-05"),
        updatedAt: new Date("2024-01-05")
      },
      {
        id: randomUUID(),
        title: "Broker Pro",
        slug: "broker-pro",
        shortDescription: "Professional trading platform with advanced charting, real-time market data, algorithmic trading capabilities, and portfolio management tools.",
        longDescription: "Advanced trading platform designed for professional traders and financial institutions. Features real-time market data, sophisticated charting tools, algorithmic trading capabilities, risk management, and comprehensive portfolio analytics.",
        categoryId: fintechCat.id,
        tags: ["Trading", "Finance", "Analytics", "Real-time"],
        techStack: ["React", "Python", "Redis", "WebSockets"],
        images: ["https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"],
        demoUrl: "https://demo.brokerpro.com",
        repoUrl: "",
        downloadUrl: "",
        status: "published",
        featured: false,
        rating: 5,
        downloads: 950,
        users: 680,
        publishDate: new Date("2024-01-30"),
        createdAt: new Date("2024-01-30"),
        updatedAt: new Date("2024-01-30")
      }
    ];

    products.forEach(product => this.products.set(product.id, product));

    // Initialize admin user
    const adminUser: User = {
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
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser, 
      id, 
      createdAt: new Date() 
    };
    this.users.set(id, user);
    return user;
  }

  async updateUser(id: string, updateData: Partial<InsertUser>): Promise<User | undefined> {
    const user = this.users.get(id);
    if (!user) return undefined;
    
    const updatedUser = { ...user, ...updateData };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  async deleteUser(id: string): Promise<boolean> {
    return this.users.delete(id);
  }

  // Category methods
  async getCategory(id: string): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    return Array.from(this.categories.values()).find(cat => cat.slug === slug);
  }

  async getAllCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const id = randomUUID();
    const category: Category = { ...insertCategory, id };
    this.categories.set(id, category);
    return category;
  }

  async updateCategory(id: string, updateData: Partial<InsertCategory>): Promise<Category | undefined> {
    const category = this.categories.get(id);
    if (!category) return undefined;
    
    const updatedCategory = { ...category, ...updateData };
    this.categories.set(id, updatedCategory);
    return updatedCategory;
  }

  async deleteCategory(id: string): Promise<boolean> {
    return this.categories.delete(id);
  }

  // Product methods
  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    return Array.from(this.products.values()).find(product => product.slug === slug);
  }

  async getAllProducts(filters?: {
    category?: string;
    status?: string;
    featured?: boolean;
    search?: string;
    tags?: string[];
  }): Promise<Product[]> {
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
          filters.tags!.some(tag => p.tags.includes(tag))
        );
      }
    }

    return products;
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = {
      ...insertProduct,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.products.set(id, product);
    return product;
  }

  async updateProduct(id: string, updateData: Partial<InsertProduct>): Promise<Product | undefined> {
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

  async deleteProduct(id: string): Promise<boolean> {
    return this.products.delete(id);
  }
}

export const storage = new MemStorage();
