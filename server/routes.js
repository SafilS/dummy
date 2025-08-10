import { createServer } from "http";
import { storage } from "./storage.js";
import { insertProductSchema, insertCategorySchema, insertUserSchema } from "../shared/schema.js";

export async function registerRoutes(app) {
  // Categories endpoints
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getAllCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch categories", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });

  app.get("/api/categories/:id", async (req, res) => {
    try {
      const category = await storage.getCategory(req.params.id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch category", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });

  app.post("/api/categories", async (req, res) => {
    try {
      const validatedData = insertCategorySchema.parse(req.body);
      const category = await storage.createCategory(validatedData);
      res.status(201).json(category);
    } catch (error) {
      res.status(400).json({ message: "Invalid category data", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });

  // Products endpoints
  app.get("/api/products", async (req, res) => {
    try {
      const { category, status, featured, search, tags } = req.query;
      const filters = {};
      
      if (category) filters.category = category;
      if (status) filters.status = status;
      if (featured !== undefined) filters.featured = featured === 'true';
      if (search) filters.search = search;
      if (tags) filters.tags = tags.split(',');

      const products = await storage.getAllProducts(filters);
      
      // Populate category information
      const productsWithCategories = await Promise.all(
        products.map(async (product) => {
          const category = await storage.getCategory(product.categoryId);
          return {
            ...product,
            category: category || null
          };
        })
      );

      res.json(productsWithCategories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });

  app.get("/api/products/:id", async (req, res) => {
    try {
      const product = await storage.getProduct(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      
      const category = await storage.getCategory(product.categoryId);
      res.json({
        ...product,
        category: category || null
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch product", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });

  app.get("/api/products/slug/:slug", async (req, res) => {
    try {
      const product = await storage.getProductBySlug(req.params.slug);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      
      const category = await storage.getCategory(product.categoryId);
      res.json({
        ...product,
        category: category || null
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch product", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });

  app.post("/api/products", async (req, res) => {
    try {
      const validatedData = insertProductSchema.parse(req.body);
      const product = await storage.createProduct(validatedData);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ message: "Invalid product data", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });

  app.put("/api/products/:id", async (req, res) => {
    try {
      const validatedData = insertProductSchema.partial().parse(req.body);
      const product = await storage.updateProduct(req.params.id, validatedData);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(400).json({ message: "Invalid product data", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });

  app.delete("/api/products/:id", async (req, res) => {
    try {
      const success = await storage.deleteProduct(req.params.id);
      if (!success) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete product", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });

  // Users endpoints
  app.post("/api/auth/register", async (req, res) => {
    try {
      const validatedData = insertUserSchema.parse(req.body);
      
      // Check if user already exists
      const existingUser = await storage.getUserByEmail(validatedData.email);
      if (existingUser) {
        return res.status(400).json({ message: "User already exists with this email" });
      }

      const user = await storage.createUser(validatedData);
      // Remove password from response
      const { password, ...userResponse } = user;
      res.status(201).json(userResponse);
    } catch (error) {
      res.status(400).json({ message: "Invalid user data", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }

      const user = await storage.getUserByEmail(email);
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Remove password from response
      const { password: _, ...userResponse } = user;
      res.json(userResponse);
    } catch (error) {
      res.status(500).json({ message: "Login failed", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });

  // Contact/Request access endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, company, message, productId } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ message: "Name, email, and message are required" });
      }

      // In a real application, this would send an email or store the request
      console.log("Contact request received:", { name, email, company, message, productId });
      
      res.json({ 
        success: true, 
        message: "Request submitted successfully. We will contact you soon." 
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to submit request", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}