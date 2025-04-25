# Website Management Instructions

## How to Add New Blog Posts

1. **Access Your Website Files**
   - Connect to your website hosting using FTP or your hosting provider's file manager
   - Navigate to the `/blog` directory

2. **Create a New Blog Post File**
   - Create a new HTML file following the naming pattern: `blog-post-title.html`
   - Copy the structure from an existing blog post (like `punjabi_culture_blog.html`)

3. **Edit the Blog Post Content**
   - Update the following elements:
     - Title tag in the `<head>` section
     - Hero image (replace the placeholder URL)
     - Post title in the `<h1>` tag
     - Post meta information (date, category, author)
     - Main content in the `<div class="post-content">` section
     - "Shop This Look" section with relevant products
     - Sidebar content if needed

4. **Add Images**
   - Upload your blog post images to the `/images/blog` directory
   - Replace placeholder image URLs with your actual image paths
   - Recommended image sizes:
     - Hero image: 1200x600px
     - In-content images: 800x500px
     - Product images: 400x400px

5. **Update the Blog Index Page**
   - Open the main blog page (`/blog/index.html`)
   - Add your new blog post to the grid by copying an existing post card
   - Update the title, excerpt, image, and link to point to your new blog post
   - If it's a featured post, also update the carousel section

## How to Add Real Inventory to the Shop

1. **Access Your Website Files**
   - Connect to your website hosting using FTP or your hosting provider's file manager
   - Navigate to the `/shop` directory

2. **Prepare Your Product Images**
   - Photograph your Punjabi ladies outfits against a clean background
   - Edit images to maintain consistent dimensions and style
   - Recommended image sizes:
     - Product listing images: 600x800px
     - Category images: 600x400px
     - Featured carousel images: 1200x400px

3. **Upload Product Images**
   - Create organized folders in the `/images/shop` directory:
     - `/images/shop/punjabi-suits`
     - `/images/shop/lehenga-choli`
     - `/images/shop/gharara-sets`
     - `/images/shop/accessories`
   - Upload your product images to the appropriate folders

4. **Update Product Listings**
   - Open the shop page (`/shop/index.html`)
   - For each product card in the products grid:
     - Replace the placeholder image URL with your actual product image path
     - Update the product title, price, and any badges (New, Bestseller, etc.)
     - Ensure the "Quick View" and "Add to Cart" functionality is working

5. **Update Category Images**
   - Replace the placeholder category images with actual category images
   - Ensure the category links point to the correct sections of your shop

6. **Update Featured Products Carousel**
   - Replace the placeholder carousel image with a high-quality feature image
   - Update the carousel caption text to match your current offerings

## Managing Your Website Content

### File Structure Overview
```
/
├── index.html                  # Homepage
├── blog/
│   ├── index.html              # Blog main page
│   ├── punjabi-culture.html    # Individual blog post
│   └── ...                     # Other blog posts
├── shop/
│   ├── index.html              # Shop main page
│   ├── product-detail.html     # Product detail page template
│   └── ...                     # Other shop pages
├── images/
│   ├── blog/                   # Blog images
│   └── shop/                   # Shop product images
├── css/
│   ├── style.css               # Main stylesheet
│   └── ...                     # Other CSS files
└── js/
    └── script.js               # JavaScript functionality
```

### Best Practices for Content Management

1. **Consistent Image Sizes**
   - Maintain consistent dimensions for similar types of images
   - Compress images to optimize loading speed

2. **Regular Content Updates**
   - Add new blog posts at least twice a month to keep content fresh
   - Update featured products on the shop page regularly

3. **Cross-Linking**
   - Always include links to relevant products in your blog posts
   - Reference blog content from product descriptions when appropriate

4. **SEO Optimization**
   - Include relevant keywords in page titles, headings, and content
   - Add descriptive alt text to all images
   - Create descriptive, SEO-friendly URLs for all pages

5. **Backup Regularly**
   - Create backups of your website files before making significant changes
   - Store backups in a secure location

## Technical Support

If you need assistance with your website management:
- Email: support@chopracourier.com
- Phone: +91 7009624562

For more advanced customizations or additional features, please contact our web development team for a consultation.
